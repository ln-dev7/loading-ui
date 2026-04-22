import { cn } from "@/lib/utils";

function DualArc({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-[5px] border-transparent border-y-current",
        className,
      )}
      {...props}
    />
  );
}

export { DualArc };
