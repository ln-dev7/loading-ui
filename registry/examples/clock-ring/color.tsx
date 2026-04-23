import { ClockRing } from "@/registry/components/loading-ui/clock-ring";

export function ClockRingColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <ClockRing className="text-emerald-600 dark:text-emerald-400" />
      <ClockRing className="text-rose-600 dark:text-rose-400" />
      <ClockRing className="text-amber-600 dark:text-amber-400" />
    </div>
  );
}
