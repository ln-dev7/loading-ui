import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Arc } from "@/registry/components/loading-ui/arc";

export default function ArcTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="reports">Reports</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="bg-card text-card-foreground rounded-xl border p-5 shadow-xs">
          <div className="flex items-start gap-3">
            <div className="rounded-full bg-primary/10 p-2 text-primary">
              <Arc className="size-5 border-[3px]" />
            </div>
            <div className="space-y-1">
              <div className="font-medium">Refreshing overview</div>
              <p className="text-muted-foreground text-sm">
                Pulling the latest analytics for this workspace.
              </p>
            </div>
          </div>
        </div>
      </TabsContent>
      <TabsContent value="reports">
        <div className="rounded-xl border border-dashed p-5 text-sm text-muted-foreground">
          Saved reports are available while the live overview reloads.
        </div>
      </TabsContent>
    </Tabs>
  );
}
