"use client";

import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { cn } from "@/lib/utils";
import { useSearchContext } from "fumadocs-ui/contexts/search";
import { SearchIcon } from "lucide-react";

export const Search = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) => {
  const { setOpenSearch } = useSearchContext();

  return (
    <Button
      className={cn("text-muted-foreground relative min-w-52", className)}
      onClick={() => setOpenSearch(true)}
      variant="secondary"
      {...props}
    >
      <SearchIcon className="size-4" />
      <p className="font-normal">Search...</p>
      <span className="ml-auto flex items-center gap-0.5">
        <Kbd className="bg-background border">⌘</Kbd>
        <Kbd className="bg-background border">K</Kbd>
      </span>
    </Button>
  );
};
