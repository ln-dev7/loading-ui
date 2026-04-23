import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export function CometSpinnerGeometry() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <CometSpinner headScale={0.12} radiusScale={0.72} />
      <CometSpinner headScale={0.2} radiusScale={0.83} />
      <CometSpinner headScale={0.3} radiusScale={0.98} />
    </div>
  );
}
