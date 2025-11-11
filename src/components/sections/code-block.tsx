"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  className?: string;
}

export function CodeBlock({ code, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy code", error);
    }
  }

  return (
    <div className={cn("relative overflow-hidden rounded-lg border bg-muted/40", className)}>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        className="absolute right-2 top-2"
        aria-label="Copy code snippet"
        onClick={handleCopy}
      >
        <Copy className="h-4 w-4" />
      </Button>
      {copied ? <span className="absolute right-12 top-2 text-xs text-muted-foreground">Copied</span> : null}
    </div>
  );
}

