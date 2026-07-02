import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "w-full px-4 py-3.5 border border-dust bg-cream font-sans text-sm font-light text-ink placeholder:text-muted outline-none transition-colors duration-300 focus:border-gold resize-y min-h-[110px] leading-relaxed",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
