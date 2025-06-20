import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  alignment = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-left": alignment === "left",
          "text-center": alignment === "center",
          "text-right": alignment === "right",
        },
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn("h-1 w-20 bg-cyan-500 dark:bg-cyan-400 mt-4", {
          "ml-0 mr-auto": alignment === "left",
          "mx-auto": alignment === "center",
          "ml-auto mr-0": alignment === "right",
        })}
      />
    </div>
  );
}
