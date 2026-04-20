import { cn } from "@/lib/utils";
import { Icons } from "@/components/website/common/icons";

export const Turbostarter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    href="https://www.turbostarter.dev"
    target="_blank"
    className={cn(
      "border-border text-foreground hover:bg-accent flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm font-medium transition-colors",
      className,
    )}
    {...props}
  >
    <Icons.turbostarter className="size-4" />
    TurboStarter
  </a>
);
