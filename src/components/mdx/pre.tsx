"use client";

import { useState, type ComponentProps, type MouseEvent } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";

export function Pre({ children, ...props }: ComponentProps<"pre">) {
  const [copied, setCopied] = useState(false);

  async function handleCopy(e: MouseEvent<HTMLButtonElement>) {
    const pre = e.currentTarget.closest("figure")?.querySelector("pre");
    const text = pre?.textContent ?? "";
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <figure className="group not-prose relative my-6">
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy code"
        className="absolute right-2 top-2 z-10 rounded-md border border-border bg-background/80 p-1.5 text-muted-foreground opacity-0 backdrop-blur transition-opacity hover:text-foreground group-hover:opacity-100"
      >
        {copied ? (
          <CheckIcon className="size-3.5" />
        ) : (
          <CopyIcon className="size-3.5" />
        )}
      </button>
      <pre {...props}>{children}</pre>
    </figure>
  );
}
