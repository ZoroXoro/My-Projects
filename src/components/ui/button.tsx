"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "ghost-light" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-sans font-medium tracking-[0.1em] uppercase transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-ink text-white hover:bg-[#3A3430]": variant === "primary",
            "border border-ink text-ink hover:bg-ink hover:text-white":
              variant === "ghost",
            "border border-white/30 text-white/85 hover:bg-white/10 hover:border-white/60":
              variant === "ghost-light",
            "border border-dust text-ink hover:bg-ink hover:text-white hover:border-ink":
              variant === "outline",
          },
          {
            "text-[11px] px-5 py-2.5": size === "sm",
            "text-[12px] px-10 py-4": size === "md",
            "text-[13px] px-12 py-5": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
