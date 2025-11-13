"use client";

import { cn } from "@/lib/utils";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const icons = {
  info: InformationCircleIcon,
  success: CheckCircleIcon,
  warning: ExclamationTriangleIcon,
  danger: ExclamationCircleIcon,
} as const;

const styles = {
  info: "bg-sky-100/70 text-sky-800 border-sky-200 dark:bg-sky-500/10 dark:text-sky-100 dark:border-sky-500/40",
  success:
    "bg-emerald-100/70 text-emerald-800 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-100 dark:border-emerald-500/40",
  warning:
    "bg-amber-100/80 text-amber-800 border-amber-200 dark:bg-amber-500/10 dark:text-amber-100 dark:border-amber-500/40",
  danger:
    "bg-rose-100/80 text-rose-800 border-rose-200 dark:bg-rose-500/10 dark:text-rose-100 dark:border-rose-500/40",
} as const;

export type AlertVariant = keyof typeof styles;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant;
  title: string;
  description?: string;
}

export const Alert = ({
  className,
  variant = "info",
  title,
  description,
  ...props
}: AlertProps) => {
  const Icon = icons[variant];

  return (
    <div
      role="alert"
      className={cn(
        "flex w-full items-start gap-3 rounded-2xl border px-5 py-4 text-sm shadow-sm",
        styles[variant],
        className,
      )}
      {...props}
    >
      <Icon className="mt-0.5 h-5 w-5" aria-hidden />
      <div>
        <h3 className="font-semibold">{title}</h3>
        {description ? (
          <p className="mt-1 text-sm leading-relaxed">{description}</p>
        ) : null}
      </div>
    </div>
  );
};
