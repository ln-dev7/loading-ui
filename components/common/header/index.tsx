import { Links } from "@/components/common/header/links";
import { Logo } from "@/components/common/header/logo";
import Link from "next/link";

import { Search } from "@/components/common/header/search";
import { Turbostarter } from "@/components/common/header/turbostarter";
import { GitHub } from "@/components/common/header/github";
import { ThemeSwitcher } from "@/components/common/theme-switcher";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="bg-fd-background/80 sticky inset-x-0 top-0 z-40 h-(--header-height) border-b backdrop-blur-sm transition-colors">
      <div className="container mx-auto flex size-full items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* <MobileNav tree={tree} items={items} className="md:hidden" /> */}
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-auto px-3 py-1.5",
            )}
            href="/"
          >
            <Logo />
          </Link>
          <Links className="hidden gap-1 md:flex" />
        </div>

        <div className="flex items-center md:gap-2">
          <Search className="hidden md:flex" />
          <GitHub />
          <Turbostarter className="hidden md:flex" />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
