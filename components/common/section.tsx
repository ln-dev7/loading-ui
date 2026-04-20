import { cn } from "@/lib/utils";

export const Section = ({
  className,
  ...props
}: React.ComponentProps<"section">) => {
  return (
    <div className="w-full border-b">
      <section
        className={cn("container py-16 md:py-24 lg:py-32", className)}
        {...props}
      />
    </div>
  );
};
