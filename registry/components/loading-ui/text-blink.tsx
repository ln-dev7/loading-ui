import { cn } from "@/lib/utils";

type TextBlinkProps = {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
};

function TextBlink({
  children,
  as: Component = "p",
  className,
  duration = 2,
}: TextBlinkProps) {
  return (
    <>
      <style>{`
        @keyframes loading-ui-text-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.45;
          }
        }
      `}</style>
      <Component
        className={cn("inline-block font-medium", className)}
        style={{
          animation: `loading-ui-text-blink ${duration}s ease-in-out infinite`,
        }}
      >
        {children}
      </Component>
    </>
  );
}

export { TextBlink };
