import { cn } from "@/lib/utils";

function Bars({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-wave-bars {
          0%,
          100% {
            transform: scaleY(1);
            opacity: 0.5;
          }

          50% {
            transform: scaleY(0.6);
            opacity: 1;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-flex h-[1em] items-stretch gap-[0.25em]", className)}
        {...props}
      >
        {Array.from({ length: 3 }, (_, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="inline-block h-full w-[0.25em] bg-current"
            style={{
              animation: "loading-ui-wave-bars 1.2s ease-in-out infinite",
              animationDelay: `${index * 0.2}s`,
            }}
          />
        ))}
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { Bars };
