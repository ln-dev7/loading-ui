import { cn } from "@/lib/utils";

function Arc({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "animate-spin rounded-full border-[5px] border-current/10 border-t-current",
        className,
      )}
      {...props}
    />
  );
}

export { Arc };
