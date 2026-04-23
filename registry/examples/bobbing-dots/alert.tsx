import { Button } from "@/components/ui/button";
import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertMedia,
  AlertTitle,
} from "@/components/ui/alert";
import { BobbingDots } from "@/registry/components/loading-ui/bobbing-dots";

export default function BobbingDotsAlert() {
  return (
    <Alert className="border-primary/20 bg-primary/5 w-full max-w-md border-2 border-dashed">
      <AlertMedia>
        <BobbingDots className="w-12" />
      </AlertMedia>
      <AlertTitle>Fun Friday build incoming</AlertTitle>
      <AlertDescription>
        Bobbing motion reads lighter than a strict spinner—nice when the wait is
        short and the brand allows a little personality.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="xs">
          Peek changelog
        </Button>
      </AlertAction>
    </Alert>
  );
}
