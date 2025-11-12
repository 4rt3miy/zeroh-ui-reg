import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function SwitchPreview() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between rounded-lg border bg-card p-4">
        <div className="space-y-1">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-sm text-muted-foreground">Stay in the loop with the latest feature announcements.</p>
        </div>
        <Switch id="marketing" defaultChecked />
      </div>
      <div className="flex items-center justify-between rounded-lg border bg-card p-4">
        <div className="space-y-1">
          <Label htmlFor="beta">Beta features</Label>
          <p className="text-sm text-muted-foreground">Enable experimental components and early access releases.</p>
        </div>
        <Switch id="beta" />
      </div>
    </div>
  );
}



