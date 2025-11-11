import type { Metadata } from "next";
import { CodeBlock } from "@/components/sections/code-block";

export const metadata: Metadata = {
  title: "MCP Setup",
  description: "Configure the shadcn MCP server to use the ZeroH UI registry in Codex, Cursor, or VS Code.",
};

const componentsJson = `{
  "registries": {
    "@your-org": "https://raw.githubusercontent.com/your-org/zeroh-ui-reg/main/registry/{name}.json"
  }
}`;

const cursorConfig = `{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}`;

const codexConfig = `[mcp_servers.shadcn]
command = "npx"
args = ["shadcn@latest", "mcp"]`;

export default function MCPPage() {
  return (
    <div className="space-y-12">
      <header className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight">Model Context Protocol</h1>
        <p className="text-lg text-muted-foreground">
          Install ZeroH UI components with natural language via the shadcn MCP server. Configure your client, add our registry,
          then ask your assistant to browse or install components by name.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">1. Add the registry</h2>
        <p className="text-sm text-muted-foreground">
          Include the <code>@your-org</code> namespace in your project&apos;s <code>components.json</code>.
        </p>
        <CodeBlock code={componentsJson} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">2. Configure your MCP client</h2>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="space-y-3 rounded-xl border bg-card p-6">
            <h3 className="text-xl font-semibold">Cursor / VS Code</h3>
            <p className="text-sm text-muted-foreground">
              Place this in <code>.cursor/mcp.json</code> or <code>.vscode/mcp.json</code>.
            </p>
            <CodeBlock code={cursorConfig} />
          </div>
          <div className="space-y-3 rounded-xl border bg-card p-6">
            <h3 className="text-xl font-semibold">Codex</h3>
            <p className="text-sm text-muted-foreground">
              Append to <code>~/.codex/config.toml</code>, then restart Codex to activate the server.
            </p>
              <CodeBlock code={codexConfig} />
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">3. Try these prompts</h2>
        <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
          <li>“List all components in the @your-org registry.”</li>
          <li>“Install the button and card components from @your-org.”</li>
          <li>“Generate a settings page using @your-org/card and @your-org/input.”</li>
        </ul>
      </section>
    </div>
  );
}

