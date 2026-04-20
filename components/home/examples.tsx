import { Link } from "@tanstack/react-router";
import { Section } from "@/components/website/common/section";
import { ArrowUpRight, Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/website/common/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExamplesIndex } from "@/registry/examples/__index__";

export const Examples = () => {
  return (
    <Section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border p-0!">
      {Object.entries(ExamplesIndex).map(([name, example]) => {
        const Component = example.component;
        return (
          <div key={name} className="relative group/component aspect-square">
            <div className="absolute inset-x-0 pointer-coarse:opacity-100 opacity-0 group-hover/component:opacity-100 transition-opacity p-4 top-0 flex items-center justify-end">
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
              to="/docs/$"
              params={{ _splat: "components" }}
              className="size-full flex items-center justify-center bg-background"
            >
              <Component />
              <div className="absolute inset-x-0 py-4 px-5 bottom-0 flex items-center justify-between">
                <span className="text-sm text-muted-foreground capitalize truncate group-hover/component:text-foreground transition-colors">
                  {example.name}
                </span>

                <ArrowUpRight className="size-4 pointer-coarse:opacity-100 opacity-0 group-hover/component:opacity-100 transition-opacity" />
              </div>
            </Link>
          </div>
        );
      })}
    </Section>
  );
};
