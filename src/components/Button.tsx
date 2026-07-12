import { cn } from "@/utils/cn";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "minimal" | "text" | "editorial";
  size?: "sm" | "md" | "lg";
  to?: string;
  href?: string;
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className,
  onClick,
  external,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-body font-medium transition-all duration-500 tracking-wide relative overflow-hidden";

  const sizeClasses = {
    sm: "text-[11px] uppercase tracking-[0.2em] py-3 px-6",
    md: "text-xs uppercase tracking-[0.15em] py-4 px-8",
    lg: "text-xs uppercase tracking-[0.15em] py-5 px-10",
  };

  const variantClasses = {
    primary:
      "bg-navy text-cream border border-navy hover:bg-navy-soft",
    minimal:
      "bg-transparent text-navy border border-navy/20 hover:border-navy hover:bg-navy hover:text-cream",
    text:
      "bg-transparent text-navy hover:text-sage underline-offset-4 hover:underline p-0",
    editorial:
      "bg-ivory text-navy border border-taupe hover:border-sage hover:bg-warm hover:-translate-y-0.5",
  };

  const classes = cn(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (to && !external) {
    return (
      <Link to={to} className={classes}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  if (href || external) {
    return (
      <a
        href={href || to}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      <span className="relative z-10">{children}</span>
    </button>
  );
}
