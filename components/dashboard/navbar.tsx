
"use client";

import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-background px-6">
      <h1 className="text-lg font-semibold text-foreground">
        Overview
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-muted-foreground">
          Welcome back!
        </span>

        <button
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="rounded-lg border border-border px-4 py-2 text-sm text-foreground hover:bg-accent"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
}
