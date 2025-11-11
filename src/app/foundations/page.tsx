import type { Metadata } from "next";

const colorTokens = [
  { name: "Background", variable: "--background", previewClass: "bg-background text-foreground" },
  { name: "Foreground", variable: "--foreground", previewClass: "bg-foreground text-background" },
  { name: "Primary", variable: "--primary", previewClass: "bg-primary text-primary-foreground" },
  { name: "Secondary", variable: "--secondary", previewClass: "bg-secondary text-secondary-foreground" },
  { name: "Accent", variable: "--accent", previewClass: "bg-accent text-accent-foreground" },
  { name: "Muted", variable: "--muted", previewClass: "bg-muted text-muted-foreground" },
];

const typographyScale = [
  { token: "Display", className: "text-5xl font-semibold" },
  { token: "Headline", className: "text-3xl font-semibold" },
  { token: "Body", className: "text-base" },
  { token: "Small", className: "text-sm text-muted-foreground" },
];

const radii = [
  { name: "Small", token: "calc(var(--radius) - 4px)" },
  { name: "Medium", token: "calc(var(--radius) - 2px)" },
  { name: "Large", token: "var(--radius)" },
];

const spacing = [
  { scale: "XS", value: "0.5rem / 8px" },
  { scale: "SM", value: "0.75rem / 12px" },
  { scale: "MD", value: "1rem / 16px" },
  { scale: "LG", value: "1.5rem / 24px" },
  { scale: "XL", value: "2rem / 32px" },
];

export const metadata: Metadata = {
  title: "Foundations",
  description: "Design tokens – color, typography, and spacing – for ZeroH UI.",
};

export default function FoundationsPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <header className="space-y-3">
          <h1 className="text-4xl font-semibold tracking-tight">Foundations</h1>
          <p className="text-lg text-muted-foreground">
            Core design tokens that power every component in ZeroH UI. Customize these values to retheme your product.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {colorTokens.map((color) => (
            <div key={color.variable} className="space-y-3 rounded-xl border p-6">
              <div className={`flex h-20 items-center justify-center rounded-lg border text-sm font-medium ${color.previewClass}`}>
                {color.name}
              </div>
              <div className="space-y-1 text-sm">
                <p className="font-medium text-foreground">{color.name}</p>
                <p className="text-muted-foreground">{color.variable}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <header className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-tight">Typography</h2>
          <p className="text-muted-foreground">
            ZeroH UI ships with Quicksand for sans text and Geist Mono for code via <code>next/font</code>. Adjust sizes to fit your rhythm.
          </p>
        </header>
        <div className="grid gap-6 md:grid-cols-2">
          {typographyScale.map((item) => (
            <div key={item.token} className="rounded-xl border bg-card p-6">
              <p className="text-xs uppercase text-muted-foreground">{item.token}</p>
              <p className={`${item.className} mt-2`}>The quick brown fox jumps over the lazy dog</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-2">
        <div className="space-y-4 rounded-xl border bg-card p-6">
          <h3 className="text-2xl font-semibold tracking-tight">Radii</h3>
          <ul className="space-y-3 text-sm">
            {radii.map((radius) => (
              <li key={radius.name} className="flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3">
                <span className="font-medium">{radius.name}</span>
                <span className="text-muted-foreground">{radius.token}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4 rounded-xl border bg-card p-6">
          <h3 className="text-2xl font-semibold tracking-tight">Spacing</h3>
          <ul className="space-y-3 text-sm">
            {spacing.map((item) => (
              <li key={item.scale} className="flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3">
                <span className="font-medium">{item.scale}</span>
                <span className="text-muted-foreground">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

