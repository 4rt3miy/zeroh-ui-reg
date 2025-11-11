import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { componentsRegistry } from "./components.config";

async function ensureDirectory(path: string) {
  await mkdir(path, { recursive: true });
}

async function generateRegistryFiles() {
  const currentDir = fileURLToPath(new URL(".", import.meta.url));
  const registryDir = resolve(currentDir, "../../registry");
  await ensureDirectory(registryDir);

  for (const component of componentsRegistry) {
    const payload = {
      name: component.name,
      type: component.registry.type,
      files: component.registry.files,
      dependencies: component.registry.dependencies,
      tailwind: component.registry.tailwind ?? false,
      meta: {
        displayName: component.displayName,
        description: component.description,
        category: component.category,
        tags: component.tags,
        status: component.status,
      },
    };

    const filepath = resolve(registryDir, `${component.name}.json`);
    await writeFile(filepath, `${JSON.stringify(payload, null, 2)}\n`);
    console.log(`Generated ${filepath}`);
  }
}

generateRegistryFiles().catch((error) => {
  console.error("Failed to generate registry files:", error);
  process.exit(1);
});

