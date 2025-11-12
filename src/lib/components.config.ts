export type ComponentCategory =
  | "Forms"
  | "Data Display"
  | "Navigation"
  | "Feedback"
  | "Layout"
  | "Overlays";

export type ComponentStatus = "Stable" | "Beta" | "Deprecated";

export interface ComponentMeta {
  name: string;
  displayName: string;
  description: string;
  category: ComponentCategory;
  tags: string[];
  status: ComponentStatus;
  docsPath: string;
  previewComponent: string;
  importPath: string;
  example: {
    usage: string;
    props?: string;
  };
  registry: {
    type: "component" | "hook" | "utility";
    files: string[];
    dependencies?: string[];
    tailwind?: boolean;
  };
}

export const componentsRegistry: ComponentMeta[] = [
  {
    name: "button",
    displayName: "Button",
    description:
      "A flexible button component with variant and size options for actions throughout the product.",
    category: "Forms",
    tags: ["action", "interactions", "primary"],
    status: "Stable",
    docsPath: "/components/button",
    previewComponent: "ButtonPreview",
    importPath: "@/components/ui/button",
    example: {
      usage: `<Button variant="default">Click me</Button>`,
    },
    registry: {
      type: "component",
      files: [
        "components/ui/button.tsx",
        "components/ui/badge.tsx",
        "lib/utils.ts",
        "lib/fonts.ts",
        "styles/zeroh-theme.css"
      ],
      tailwind: true,
    },
  },
  {
    name: "input",
    displayName: "Input",
    description:
      "A text input field with focus styles and size variants for forms and search interfaces.",
    category: "Forms",
    tags: ["form", "field", "text"],
    status: "Stable",
    docsPath: "/components/input",
    previewComponent: "InputPreview",
    importPath: "@/components/ui/input",
    example: {
      usage: `<Input placeholder="Email address" type="email" />`,
    },
    registry: {
      type: "component",
      files: ["components/ui/input.tsx", "lib/utils.ts", "lib/fonts.ts", "styles/zeroh-theme.css"],
      tailwind: true,
    },
  },
  {
    name: "card",
    displayName: "Card",
    description:
      "A composable card surface for grouping related content with flexible header and footer slots.",
    category: "Layout",
    tags: ["surface", "container", "layout"],
    status: "Stable",
    docsPath: "/components/card",
    previewComponent: "CardPreview",
    importPath: "@/components/ui/card",
    example: {
      usage: `<Card>
  <CardHeader>
    <CardTitle>Account summary</CardTitle>
    <CardDescription>Overview of performance metrics.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Use cards to group related interface elements.</p>
  </CardContent>
  <CardFooter>
    <Button variant="secondary">Manage</Button>
  </CardFooter>
</Card>`,
    },
    registry: {
      type: "component",
      files: [
        "components/ui/card.tsx",
        "components/ui/button.tsx",
        "components/ui/badge.tsx",
        "lib/utils.ts",
        "lib/fonts.ts",
        "styles/zeroh-theme.css"
      ],
      tailwind: true,
    },
  },
  {
    name: "textarea",
    displayName: "Textarea",
    description: "A multi-line text field with accessible focus states for longer user input.",
    category: "Forms",
    tags: ["form", "field", "text", "feedback"],
    status: "Stable",
    docsPath: "/components/textarea",
    previewComponent: "TextareaPreview",
    importPath: "@/components/ui/textarea",
    example: {
      usage: `<Textarea placeholder="Share your thoughts..." />`,
    },
    registry: {
      type: "component",
      files: ["components/ui/textarea.tsx", "lib/utils.ts", "lib/fonts.ts", "styles/zeroh-theme.css"],
      tailwind: true,
    },
  },
  {
    name: "switch",
    displayName: "Switch",
    description: "A compact toggle for enabling or disabling settings with clear on/off states.",
    category: "Forms",
    tags: ["toggle", "control", "interaction"],
    status: "Stable",
    docsPath: "/components/switch",
    previewComponent: "SwitchPreview",
    importPath: "@/components/ui/switch",
    example: {
      usage: `<Switch defaultChecked />`,
      props: `<ul>
  <li><strong>defaultChecked</strong> — set true to render the switch in an on state.</li>
  <li><strong>disabled</strong> — disables user interaction.</li>
  <li><strong>onCheckedChange</strong> — callback fired when the switch value changes.</li>
</ul>`,
    },
    registry: {
      type: "component",
      files: [
        "components/ui/switch.tsx",
        "components/ui/label.tsx",
        "lib/utils.ts",
        "lib/fonts.ts",
        "styles/zeroh-theme.css"
      ],
      dependencies: ["@radix-ui/react-switch"],
      tailwind: true,
    },
  },
];

export function getComponentByName(name: string) {
  return componentsRegistry.find((component) => component.name === name);
}

