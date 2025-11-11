## ZeroH UI

ZeroH UI is a custom shadcn/ui design system packaged with:

- A themed component library under `src/components/ui`
- Registry metadata in `registry/*.json` consumable via shadcn MCP
- A Next.js docs site for browsing components, tokens, and MCP usage

Use this repository as the single source of truth for your design system, documentation, and registry distribution.

## Project structure

```
src/
  app/                # Docs site routes (home, components, foundations, mcp)
  components/
    ui/               # Themed shadcn primitives
    sections/         # Docs-specific UI
    previews/         # Component preview renderers
  lib/
    components.config.ts   # Metadata powering docs + registry generator
    registry-generator.ts  # Script to emit registry JSON
registry/             # Generated registry entries
components.json       # Registry URL mapping (for MCP clients)
.cursor/.vscode       # MCP client configuration files
```

## Available scripts

- `npm run dev` — start the docs site locally
- `npm run build` — create a production build
- `npm run lint` — lint the project
- `npm run generate:registry` — regenerate `registry/*.json` from `components.config.ts`

## Using the registry

1. Publish this repository (or ensure the default branch is accessible to consumers).
2. Provide teammates with the MCP configuration in `/mcp`.
3. In Cursor (or VS Code) keep the MCP server config in `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["shadcn@latest", "mcp"]
    }
  }
}
```

4. Consumers add the registry URL to their project `components.json`:

```json
{
  "registries": {
    "@zeroh": "https://raw.githubusercontent.com/4rt3miy/zeroh-ui-reg/main/registry/{name}.json"
  }
}
```

Now MCP-enabled editors (Cursor, VS Code, Codex) can browse and install ZeroH UI components by namespace, e.g. `@zeroh/button`.
