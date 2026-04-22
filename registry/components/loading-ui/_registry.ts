import { type Registry } from "shadcn/schema";

export const components = [
  {
    name: "ring",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/ring.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "spokes",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/spokes.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "classic",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/classic.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "swirling",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/swirling.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "arc",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/arc.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "dual-arc",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/dual-arc.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "pulse",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/pulse.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "pulse-dot",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/pulse-dot.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "dots",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/dots.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "bouncing-dots",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/bouncing-dots.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "typing",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/typing.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "wave",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/wave.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "bars",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/bars.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "analyzing-image",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/analyzing-image.tsx",
        type: "registry:component",
      },
    ],
    dependencies: ["motion"],
  },
  {
    name: "skeleton",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/skeleton.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "terminal",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/terminal.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "text-shimmer",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/text-shimmer.tsx",
        type: "registry:component",
      },
    ],
    dependencies: ["motion"],
  },
  {
    name: "text-blink",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/text-blink.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "text-dots",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/text-dots.tsx",
        type: "registry:component",
      },
    ],
  },
  {
    name: "text-shimmer-wave",
    type: "registry:component",
    files: [
      {
        path: "components/loading-ui/text-shimmer-wave.tsx",
        type: "registry:component",
      },
    ],
    dependencies: ["motion"],
  },
] satisfies Registry["items"];
