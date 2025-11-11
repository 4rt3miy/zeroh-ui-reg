"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";

const categories = ["All", "Forms", "Data Display", "Navigation", "Feedback", "Layout", "Overlays"] as const;

export function ComponentsSearchToolbar({ total }: { total: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const initialQuery = searchParams.get("q") ?? "";
  const initialCategory = searchParams.get("category") ?? "All";

  const [query, setQuery] = useState(initialQuery);
  const [category, setCategory] = useState(initialCategory);

  const updateParams = useCallback(
    (nextQuery: string, nextCategory: string) => {
      const params = new URLSearchParams(searchParams);
      if (nextQuery) params.set("q", nextQuery);
      else params.delete("q");

      if (nextCategory && nextCategory !== "All") params.set("category", nextCategory);
      else params.delete("category");

      const search = params.toString();
      router.replace(`${pathname}${search ? `?${search}` : ""}`);
    },
    [pathname, router, searchParams],
  );

  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
    updateParams(value, category);
  }, [category, updateParams]);

  const handleCategoryChange = useCallback(
    (value: string) => {
      setCategory(value);
      updateParams(query, value);
    },
    [query, updateParams],
  );

  const categoryOptions = useMemo(
    () =>
      categories.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      )),
    [],
  );

  return (
    <section className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Components</h1>
        <p className="text-sm text-muted-foreground">{total} primitives and patterns</p>
      </div>

      <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row md:items-center">
        <Input
          placeholder="Search components"
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          className="md:w-64"
        />
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">Category</label>
          <select
            className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none transition hover:border-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            value={category}
            onChange={(event) => handleCategoryChange(event.target.value)}
          >
            {categoryOptions}
          </select>
        </div>
      </div>
    </section>
  );
}

