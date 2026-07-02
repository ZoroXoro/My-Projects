import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "text-[10px] font-medium tracking-[0.08em] uppercase px-2.5 py-1",
        {
          "bg-ink text-white": variant === "default",
          "bg-gold text-white": variant === "gold",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
