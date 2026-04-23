import { Ripple } from "@/registry/components/loading-ui/ripple";

export function RippleColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Ripple className="text-sky-500" />
      <Ripple className="text-violet-500" />
      <Ripple className="text-orange-500" />
    </div>
  );
}
