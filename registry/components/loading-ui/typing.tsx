import { cn } from "@/lib/utils";

function Typing({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-typing {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }

          50% {
            transform: translateY(-0.125em);
            opacity: 1;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-flex items-center gap-[0.25em]", className)}
        {...props}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block rounded-full bg-current"
            style={{
              width: "0.375em",
              height: "0.375em",
              animation: "loading-ui-typing 1s infinite",
              animationDelay: `${index * 250}ms`,
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { Typing };
