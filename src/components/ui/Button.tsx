import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  isLoading?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F28C38] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#F28C38] text-white hover:bg-[#FF6B5A] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#F28C38]/30",
  secondary:
    "bg-[#0A2540] text-white hover:bg-[#1B6FA8] hover:-translate-y-0.5 hover:shadow-lg",
  ghost:
    "bg-transparent text-[#0A2540] hover:bg-[#F5E6D0]",
  outline:
    "border-2 border-[#1B6FA8] text-[#1B6FA8] hover:bg-[#1B6FA8] hover:text-white hover:-translate-y-0.5",
};

const sizes: Record<Size, string> = {
  sm: "text-sm px-5 py-2.5",
  md: "text-base px-7 py-3.5",
  lg: "text-lg px-9 py-4",
};

export default function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={twMerge(base, variants[variant], sizes[size], className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : null}
      {children}
    </button>
  );
}
