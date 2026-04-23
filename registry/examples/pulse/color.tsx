import { Pulse } from "@/registry/components/loading-ui/pulse";

export function PulseColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <Pulse className="text-primary" />
      <Pulse className="text-muted-foreground" />
      <Pulse className="text-teal-600 dark:text-teal-400" />
    </div>
  );
}
