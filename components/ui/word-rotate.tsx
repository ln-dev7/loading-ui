"use client";

import { AnimatePresence, motion, type HTMLMotionProps } from "motion/react";
import { type ComponentProps, useEffect, useState } from "react";

import { cn } from "@/lib/utils";

interface WordRotateProps extends ComponentProps<"span"> {
  words: string[];
  index?: number;
  duration?: number;
  animationDuration?: number;
  motionProps?: HTMLMotionProps<"span">;
}

export function WordRotate({
  words,
  index,
  duration = 2500,
  animationDuration = 250,
  motionProps,
  className,
  ...props
}: WordRotateProps) {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = index ?? internalIndex;
  const currentWord = words[activeIndex] ?? words[0] ?? "";

  useEffect(() => {
    if (index !== undefined || words.length <= 1) {
      return undefined;
    }

    const interval = setInterval(() => {
      setInternalIndex((current) => (current + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, index, words.length]);

  return (
    <span
      className={cn("relative inline-grid overflow-hidden", className)}
      {...props}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={currentWord}
          className="inline-block whitespace-nowrap"
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: "0%" }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{
            duration: animationDuration / 1000,
            ease: "easeOut",
          }}
          {...motionProps}
        >
          {currentWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
