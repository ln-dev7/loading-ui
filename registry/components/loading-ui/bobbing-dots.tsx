"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function BobbingDots({
  className,
  ...props
}: React.ComponentProps<"span">) {
  const transition = (index: number) => ({
    duration: 1,
    repeat: Infinity,
    repeatType: "loop" as const,
    delay: index * 0.2,
    ease: "easeInOut" as const,
  });

  return (
    <span
      role="status"
      className={cn("inline-flex items-center gap-[0.5em]", className)}
      {...props}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <motion.span
          key={index}
          aria-hidden="true"
          initial={{ y: 0 }}
          animate={{ y: [0, "0.625em", 0] }}
          transition={transition(index)}
          className="inline-block rounded-full border border-current bg-current/80 shadow-sm"
          style={{
            width: "1em",
            height: "1em",
          }}
        />
      ))}
      <span className="sr-only">Loading</span>
    </span>
  );
}

export { BobbingDots };
