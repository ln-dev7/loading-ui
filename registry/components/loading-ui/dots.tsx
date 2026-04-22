import { cn } from "@/lib/utils";

function Dots({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-dots-blink {
          0%,
          100% {
            opacity: 0.2;
          }

          20% {
            opacity: 1;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn(
          "inline-flex items-center justify-center gap-[15%]",
          className,
        )}
        {...props}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <span
            key={index}
            data-slot="dot"
            aria-hidden="true"
            style={{
              animation: "loading-ui-dots-blink 1.4s infinite both",
              animationDelay: `${index * 0.2}s`,
            }}
            className="rounded-full bg-current grow aspect-square"
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { Dots };
