import { cn } from "@/lib/utils";

function BouncingDots({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-bouncing-dots {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.2);
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
              width: "0.5em",
              height: "0.5em",
              animation: "loading-ui-bouncing-dots 1.4s ease-in-out infinite",
              animationDelay: `${index * 160}ms`,
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { BouncingDots };
