import { type Registry } from "shadcn/schema";

export const ui = [
  {
    name: "ring",
    type: "registry:ui",
    files: [
      {
        path: "ui/ring.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "spokes",
    type: "registry:ui",
    files: [
      {
        path: "ui/spokes.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "classic",
    type: "registry:ui",
    files: [
      {
        path: "ui/classic.tsx",
        type: "registry:ui",
      },
    ],
  },
  {
    name: "analyzing-image",
    type: "registry:ui",
    files: [
      {
        path: "ui/analyzing-image.tsx",
        type: "registry:ui",
      },
    ],
    dependencies: ["motion"],
  },
] satisfies Registry["items"];
