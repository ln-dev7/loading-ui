"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

function PulsatingDots({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      role="status"
      className={cn("inline-flex items-center justify-center", className)}
      {...props}
    >
      <span aria-hidden="true" className="inline-flex gap-[0.5em]">
        {Array.from({ length: 3 }, (_, index) => (
          <motion.span
            key={index}
            className="inline-block rounded-full bg-current"
            style={{
              width: "0.75em",
              height: "0.75em",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              repeat: Infinity,
              delay: index * 0.3,
            }}
          />
        ))}
      </span>
      <span className="sr-only">Loading</span>
    </span>
  );
}

export { PulsatingDots };
