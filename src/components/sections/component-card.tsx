import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { ComponentMeta } from "@/lib/components.config";

export function ComponentCard({ component }: { component: ComponentMeta }) {
  return (
    <Link
      href={component.docsPath}
      className="group flex h-full flex-col justify-between gap-4 rounded-xl border bg-card p-6 transition hover:border-primary hover:shadow-lg"
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold tracking-tight group-hover:text-primary">{component.displayName}</h2>
          <Badge variant={component.status === "Stable" ? "default" : "secondary"}>{component.status}</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{component.description}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <Badge variant="outline">{component.category}</Badge>
        {component.tags.slice(0, 3).map((tag) => (
          <Badge key={tag} variant="outline" className="bg-muted/40">
            {tag}
          </Badge>
        ))}
      </div>
    </Link>
  );
}

