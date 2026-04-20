import Link from "next/link";
import { Section } from "@/components/common/section";
import { ArrowUpRight, Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/common/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExamplesIndex } from "@/registry/examples/__index__";

export const Examples = () => {
  return (
    <Section className="bg-border grid grid-cols-1 gap-px p-0! sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {Object.entries(ExamplesIndex).map(([name, example]) => {
        const Component = example.component;
        return (
          <div key={name} className="group/component relative aspect-square">
            <div className="absolute inset-x-0 top-0 flex items-center justify-end p-4 opacity-0 transition-opacity group-hover/component:opacity-100 pointer-coarse:opacity-100">
              <div className="flex items-center gap-1.5">
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="secondary" size="icon">
                        <Copy className="size-4" />
                      </Button>
                    }
                  />
                  <TooltipContent sideOffset={8}>Copy component</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="secondary" size="icon">
                        <Terminal className="size-4" />
                      </Button>
                    }
                  />
                  <TooltipContent sideOffset={8}>
                    Copy CLI command
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger
                    render={
                      <Button variant="secondary" size="icon">
                        <Icons.v0 className="size-4" />
                      </Button>
                    }
                  />
                  <TooltipContent sideOffset={8}>Open in v0</TooltipContent>
                </Tooltip>
              </div>
            </div>
            <Link
              href={`/docs/${example.name}`}
              className="bg-background flex size-full items-center justify-center"
            >
              <Component />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-5 py-4">
                <span className="text-muted-foreground group-hover/component:text-foreground truncate text-sm capitalize transition-colors">
                  {example.name}
                </span>

                <ArrowUpRight className="size-4 opacity-0 transition-opacity group-hover/component:opacity-100 pointer-coarse:opacity-100" />
              </div>
            </Link>
          </div>
        );
      })}
    </Section>
  );
};
