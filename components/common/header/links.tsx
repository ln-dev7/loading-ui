import { Link } from "@tanstack/react-router";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { EMAIL } from "@/lib/constants";

type LinksProps = {
  className?: string;
};

export function Links({ className }: LinksProps) {
  const links = [
    {
      label: "Docs",
      to: "/docs/$" as const,
      params: { _splat: "" } as const,
    },
    {
      label: "Components",
      to: "/docs/$" as const,
      params: { _splat: "components" } as const,
    },
    {
      label: "Sponsor",
      to: `mailto:${EMAIL}` as const,
    },
  ] as const;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {links.map(link => (
        <Link
          key={link.label}
          to={link.to}
          params={"params" in link ? link.params : undefined}
          className={cn(
            navigationMenuTriggerStyle(),
            "h-auto bg-transparent px-3 py-1.5 shadow-none transition-all",
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
