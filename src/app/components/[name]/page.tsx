import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CodeBlock } from "@/components/sections/code-block";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { previewRegistry } from "@/components/previews";
import { componentsRegistry, getComponentByName } from "@/lib/components.config";

export function generateStaticParams() {
  return componentsRegistry.map((component) => ({ name: component.name }));
}

export async function generateMetadata({ params }: { params: Promise<{ name: string }> }): Promise<Metadata> {
  const { name } = await params;
  const component = getComponentByName(name);
  if (!component) {
    return {
      title: "Component not found",
    };
  }

  return {
    title: `${component.displayName}`,
    description: component.description,
  } satisfies Metadata;
}

export default async function ComponentDetailPage({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  const component = getComponentByName(name);
  if (!component) notFound();

  const Preview = previewRegistry[component.previewComponent];
  if (!Preview) {
    notFound();
  }

  const codeSnippet = `import { ${component.displayName} } from "${component.importPath}";

${component.example.usage}`;

  return (
    <article className="space-y-12">
      <header className="space-y-6">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
          <Badge variant="outline">{component.category}</Badge>
          <span>•</span>
          <span>{component.status}</span>
        </div>
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">{component.displayName}</h1>
          <p className="text-lg text-muted-foreground">{component.description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {component.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Preview</h2>
          <Button variant="outline" size="sm" asChild>
            <a href={`https://raw.githubusercontent.com/your-org/zeroh-ui-reg/main/${component.registry.files[0]}`} target="_blank" rel="noreferrer">
              View source
            </a>
          </Button>
        </div>
        <div className="rounded-xl border bg-card p-6">
          <Preview />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock code={codeSnippet} />
        {component.example.props ? (
          <div className="prose prose-sm text-muted-foreground" dangerouslySetInnerHTML={{ __html: component.example.props }} />
        ) : null}
      </section>
    </article>
  );
}

