import Link from "next/link";
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/sections/main-nav";
import { geistMono, quicksand } from "@/lib/fonts";

export const metadata: Metadata = {
  title: {
    default: "ZeroH UI",
    template: "%s | ZeroH UI",
  },
  description:
    "ZeroH UI is a themed shadcn component library with a custom registry and documentation site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased",
          quicksand.variable,
          geistMono.variable,
        )}
      >
        <div className="flex min-h-screen flex-col">
          <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
              <Link href="/" className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground hover:text-foreground">
                ZeroH UI
              </Link>
              <MainNav />
            </div>
          </header>
          <main className="flex-1">
            {children}
          </main>
          <footer className="border-t bg-background/80">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 text-xs text-muted-foreground">
              <span>© {new Date().getFullYear()} ZeroH Labs</span>
              <span>Crafted with shadcn/ui</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
