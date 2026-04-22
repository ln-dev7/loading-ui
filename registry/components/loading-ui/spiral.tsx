"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const DOT_COUNT = 8;
const DOT_SIZE = "18.75%";
const RADIUS = 31.25;

function Spiral({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      role="status"
      className={cn("relative inline-block", className)}
      {...props}
    >
      {Array.from({ length: DOT_COUNT }, (_, index) => {
        const angle = (index / DOT_COUNT) * (2 * Math.PI);
        const x = `${50 + RADIUS * Math.cos(angle)}%`;
        const y = `${50 + RADIUS * Math.sin(angle)}%`;

        return (
          <motion.span
            key={index}
            aria-hidden="true"
            className="absolute inline-block rounded-full bg-current"
            style={{
              left: x,
              top: y,
              translate: "-50% -50%",
              width: DOT_SIZE,
              height: DOT_SIZE,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: (index / DOT_COUNT) * 1.5,
              ease: "easeInOut",
            }}
          />
        );
      })}
      <span className="sr-only">Loading</span>
    </span>
  );
}

export { Spiral };
