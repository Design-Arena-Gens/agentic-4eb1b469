"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children?: ReactNode;
  footer?: ReactNode;
}

export const Modal = ({
  open,
  title,
  description,
  onClose,
  children,
  footer,
}: ModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!mounted || !open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby={description ? "modal-description" : undefined}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-6 py-12 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className={cn(
          "w-full max-w-xl rounded-3xl border border-border bg-background p-8 shadow-2xl",
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <header className="mb-5 space-y-2">
          <h2 id="modal-title" className="text-2xl font-semibold text-foreground">
            {title}
          </h2>
          {description ? (
            <p id="modal-description" className="text-sm text-muted-foreground">
              {description}
            </p>
          ) : null}
        </header>
        <div className="space-y-4 text-sm text-muted-foreground">{children}</div>
        {footer ? <footer className="mt-8 flex flex-wrap gap-3">{footer}</footer> : null}
      </div>
    </div>,
    document.body,
  );
};
