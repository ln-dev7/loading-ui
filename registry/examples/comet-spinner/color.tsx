import { CometSpinner } from "@/registry/components/loading-ui/comet-spinner";

export function CometSpinnerColor() {
  return (
    <div className="flex items-center gap-6 *:size-12">
      <CometSpinner className="text-indigo-600 dark:text-indigo-400" />
      <CometSpinner className="text-pink-600 dark:text-pink-400" />
      <CometSpinner className="text-amber-600 dark:text-amber-400" />
    </div>
  );
}
