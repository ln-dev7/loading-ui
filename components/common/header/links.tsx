import Link from "next/link";
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
      href: "/docs",
    },
    {
      label: "Components",
      href: "/docs/components",
    },
    {
      label: "Sponsor",
      href: `mailto:${EMAIL}`,
    },
  ] as const;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
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
