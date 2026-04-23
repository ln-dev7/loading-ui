import { SatelliteRing } from "@/registry/components/loading-ui/satellite-ring";

export function SatelliteRingDuration() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <SatelliteRing className="animation-duration-[800ms]" />
      <SatelliteRing className="animation-duration-[1.5s]" />
      <SatelliteRing className="animation-duration-[2.4s]" />
    </div>
  );
}
