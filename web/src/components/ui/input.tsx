"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const intents = {
  default:
    "border-border focus:border-primary focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  success:
    "border-emerald-400 text-emerald-700 focus:border-emerald-500 focus-visible:ring-emerald-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  error:
    "border-red-400 text-red-600 focus:border-red-500 focus-visible:ring-red-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
} as const;

export type InputIntent = keyof typeof intents;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  intent?: InputIntent;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", intent = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-xl border bg-card/90 px-4 text-base text-foreground shadow-sm transition focus-visible:outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-60",
          intents[intent],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";
