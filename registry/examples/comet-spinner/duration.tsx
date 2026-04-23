import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export function CometSpinnerDuration() {
  return (
    <div className="flex items-center gap-16 *:size-12">
      <CometSpinner duration="1.1s" />
      <CometSpinner duration="1.7s" />
      <CometSpinner duration="2.5s" />
    </div>
  );
}
