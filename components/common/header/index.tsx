import { Links } from "@/components/website/common/header/links";
import { Logo } from "@/components/website/common/header/logo";
import { Link } from "@tanstack/react-router";

import { Search } from "@/components/website/common/header/search";
import { Turbostarter } from "@/components/website/common/header/turbostarter";
import { GitHub } from "@/components/website/common/header/github";
import { ThemeSwitcher } from "@/components/website/common/theme-switcher";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export const Header = () => {
  return (
    <div className="bg-fd-background/80 sticky inset-x-0 top-0 z-40 h-(--header-height) border-b backdrop-blur-sm transition-colors">
      <div className="mx-auto flex size-full container items-center justify-between px-4">
        <div className="flex items-center gap-3">
          {/* <MobileNav tree={tree} items={items} className="md:hidden" /> */}
          <Link
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-auto px-3 py-1.5",
            )}
            to="/"
          >
            <Logo />
          </Link>
          <Links className="hidden gap-1 md:flex" />
        </div>

        <div className="items-center md:gap-2 flex">
          <Search className="hidden md:flex" />
          <GitHub />
          <Turbostarter className="hidden md:flex" />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
