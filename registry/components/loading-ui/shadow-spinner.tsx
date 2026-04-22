import { cn } from "@/lib/utils";

function ShadowSpinner({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-shadow-spinner {
          0%,
          100% {
            box-shadow:
              0em -2.6em 0em 0em currentColor,
              1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -2.6em 0em 0 0em color-mix(in srgb, currentColor 50%, transparent),
              -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 70%, transparent);
          }

          12.5% {
            box-shadow:
              0em -2.6em 0em 0em color-mix(in srgb, currentColor 70%, transparent),
              1.8em -1.8em 0 0em currentColor,
              2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 50%, transparent);
          }

          25% {
            box-shadow:
              0em -2.6em 0em 0em color-mix(in srgb, currentColor 50%, transparent),
              1.8em -1.8em 0 0em color-mix(in srgb, currentColor 70%, transparent),
              2.5em 0em 0 0em currentColor,
              1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent);
          }

          37.5% {
            box-shadow:
              0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, transparent),
              1.8em -1.8em 0 0em color-mix(in srgb, currentColor 50%, transparent),
              2.5em 0em 0 0em color-mix(in srgb, currentColor 70%, transparent),
              1.75em 1.75em 0 0em currentColor,
              0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent);
          }

          50% {
            box-shadow:
              0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, transparent),
              1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              2.5em 0em 0 0em color-mix(in srgb, currentColor 50%, transparent),
              1.75em 1.75em 0 0em color-mix(in srgb, currentColor 70%, transparent),
              0em 2.5em 0 0em currentColor,
              -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent);
          }

          62.5% {
            box-shadow:
              0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, transparent),
              1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              1.75em 1.75em 0 0em color-mix(in srgb, currentColor 50%, transparent),
              0em 2.5em 0 0em color-mix(in srgb, currentColor 70%, transparent),
              -1.8em 1.8em 0 0em currentColor,
              -2.6em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent);
          }

          75% {
            box-shadow:
              0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, transparent),
              1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              0em 2.5em 0 0em color-mix(in srgb, currentColor 50%, transparent),
              -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 70%, transparent),
              -2.6em 0em 0 0em currentColor,
              -1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent);
          }

          87.5% {
            box-shadow:
              0em -2.6em 0em 0em color-mix(in srgb, currentColor 20%, transparent),
              1.8em -1.8em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              2.5em 0em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              1.75em 1.75em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              0em 2.5em 0 0em color-mix(in srgb, currentColor 20%, transparent),
              -1.8em 1.8em 0 0em color-mix(in srgb, currentColor 50%, transparent),
              -2.6em 0em 0 0em color-mix(in srgb, currentColor 70%, transparent),
              -1.8em -1.8em 0 0em currentColor;
          }
        }
      `}</style>
      <span
        role="status"
        className={cn("inline-block rounded-full", className)}
        style={{
          fontSize: "0.25em",
          width: "1em",
          height: "1em",
          animation: "loading-ui-shadow-spinner 1.1s infinite ease",
          transform: "translateZ(0)",
        }}
        {...props}
      >
        <span className="sr-only">Loading</span>
      </span>
    </>
  );
}

export { ShadowSpinner };
