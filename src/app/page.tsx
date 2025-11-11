import Link from "next/link";
import { ArrowRight, Blocks, Paintbrush, ServerCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const quickLinks = [
  {
    title: "Component Library",
    description: "Browse themed shadcn primitives with previews, usage, and status badges.",
    href: "/components",
    icon: Blocks,
  },
  {
    title: "Design Foundations",
    description: "Review color tokens, typography scale, spacing, and radii in one place.",
    href: "/foundations",
    icon: Paintbrush,
  },
  {
    title: "MCP Integration",
    description: "Install components via the shadcn MCP server in Cursor, VS Code, or Codex.",
    href: "/mcp",
    icon: ServerCog,
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 pb-20 pt-16">
      <section className="space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          <span className="h-2 w-2 rounded-full bg-primary" />
          ZeroH UI · Custom shadcn Library
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Ship consistent interfaces with a registry-ready component system.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            ZeroH UI packages a themed shadcn/ui setup, custom registry metadata, and documentation in a single repo.
            Install primitives via MCP, remix tokens to match your brand, and build products faster.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <Link href="/components">
              Explore components
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="https://github.com/your-org/zeroh-ui-reg" target="_blank" rel="noreferrer">
              View GitHub repo
            </Link>
          </Button>
        </div>
      </section>

      <section className="space-y-8">
        <header className="space-y-3">
          <h2 className="text-3xl font-semibold tracking-tight">Your system at a glance</h2>
          <p className="text-muted-foreground">
            Quick entry points into the component catalog, design foundations, and MCP configuration docs.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          {quickLinks.map((link) => (
            <Card key={link.title} className="group relative overflow-hidden">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <link.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <CardTitle>{link.title}</CardTitle>
                  <CardDescription>{link.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="group-hover:translate-x-1" asChild>
                  <Link href={link.href}>
                    Open
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
