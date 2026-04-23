import { PulseDot } from "@/registry/components/loading-ui/pulse-dot";

export function PulseDotDuration() {
  return (
    <div className="flex items-center gap-8 *:size-3">
      <PulseDot className="animation-duration-[800ms]" />
      <PulseDot className="animation-duration-[1.2s]" />
      <PulseDot className="animation-duration-[1.8s]" />
    </div>
  );
}
