import { Badge } from "@/components/ui/badge";
import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export default function CometSpinnerBadge() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 [--radius:1.2rem]">
      <Badge>
        <CometSpinner className="size-2 mr-1" />
        Burn-in
      </Badge>
      <Badge variant="secondary">
        <CometSpinner className="size-2 mr-1" />
        Tail sync
      </Badge>
      <Badge variant="outline">
        <CometSpinner className="size-2 mr-1" />
        Warp job
      </Badge>
    </div>
  );
}
