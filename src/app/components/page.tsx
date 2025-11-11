import type { Metadata } from "next";
import { componentsRegistry } from "@/lib/components.config";
import { ComponentsSearchToolbar } from "@/components/sections/components-search-toolbar";
import { ComponentCard } from "@/components/sections/component-card";

export const metadata: Metadata = {
  title: "Components",
  description: "Browse every UI primitive and pattern in the ZeroH design system.",
};

interface ComponentsIndexPageProps {
  searchParams?: Promise<{
    q?: string | string[];
    category?: string | string[];
  }>;
}

export default async function ComponentsIndexPage({ searchParams }: ComponentsIndexPageProps) {
  const resolved = (await searchParams) ?? {};

  const rawQuery = Array.isArray(resolved.q) ? resolved.q[0] : resolved.q;
  const query = rawQuery?.toLowerCase().trim() ?? "";

  const rawCategory = Array.isArray(resolved.category) ? resolved.category[0] : resolved.category;
  const activeCategory = rawCategory ?? "All";

  const filtered = componentsRegistry.filter((component) => {
    const matchesCategory = activeCategory === "All" || component.category === activeCategory;
    const matchesQuery =
      query.length === 0 ||
      component.name.toLowerCase().includes(query) ||
      component.displayName.toLowerCase().includes(query) ||
      component.tags.some((tag) => tag.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-8">
      <ComponentsSearchToolbar total={componentsRegistry.length} />

      {filtered.length === 0 ? (
        <div className="rounded-xl border border-dashed p-10 text-center">
          <p className="text-sm text-muted-foreground">
            No components match your filters. Try a different search term or category.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((component) => (
            <ComponentCard key={component.name} component={component} />
          ))}
        </div>
      )}
    </div>
  );
}

