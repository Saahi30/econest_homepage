import { cn } from "@/utils/cn";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  align = "center",
  className,
  light = false,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {subtitle && (
        <span
          className={cn(
            "text-caption mb-6 block",
            light ? "text-sage" : "text-sage"
          )}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={cn(
          "font-display leading-tight",
          light ? "text-cream" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-6 text-editorial max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-cream/75" : "text-stone"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
