import { cn } from "@/lib/utils";

function GlossyOrb({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-glossy-orb-rotate {
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("relative inline-block rounded-full", className)}
        style={{
          background:
            "linear-gradient(165deg, color-mix(in srgb, currentColor 15%, white) 0%, color-mix(in srgb, currentColor 35%, white) 40%, color-mix(in srgb, currentColor 70%, black) 98%, color-mix(in srgb, currentColor 90%, black) 100%)",
        }}
        {...props}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full"
          style={{
            borderBottom: "0 solid transparent",
            boxShadow: `
              0 -10px 20px 20px color-mix(in srgb, currentColor 12%, white) inset,
              0 -5px 15px 10px color-mix(in srgb, currentColor 18%, white) inset,
              0 -2px 5px color-mix(in srgb, currentColor 35%, white) inset,
              0 -3px 2px color-mix(in srgb, currentColor 50%, white) inset,
              0 2px 0 color-mix(in srgb, currentColor 10%, white),
              0 2px 3px color-mix(in srgb, currentColor 14%, white),
              0 5px 5px color-mix(in srgb, currentColor 28%, white),
              0 10px 15px color-mix(in srgb, currentColor 20%, white),
              0 10px 20px 20px color-mix(in srgb, currentColor 12%, white)
            `,
            filter: "blur(3px)",
            animation: "loading-ui-glossy-orb-rotate 2s linear infinite",
          }}
        />
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { GlossyOrb };
