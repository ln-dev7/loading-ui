import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import { GITHUB_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const GitHub = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      href={GITHUB_URL}
      target="_blank"
      rel="noreferrer noopener"
      className={cn(buttonVariants({ variant: "ghost" }), className)}
      {...props}
    >
      <Icons.gitHub className="size-4" />
    </a>
  );
};
