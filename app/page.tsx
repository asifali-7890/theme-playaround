"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="flex items-center justify-between border-b p-5">
        <h1 className="text-xl font-bold">
          Theme Playground
        </h1>

        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="rounded-lg bg-gray-900 px-4 py-2 text-white">
          {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </nav>

      <p className="mt-4">
        Current theme: {theme === "dark" ? "Dark" : "Light"}
      </p>

      <section className="mx-auto max-w-4xl p-8">
        <h2 className="text-3xl font-bold text-primary">
          Welcome to my project
        </h2>

        <p className="mt-3 text-gray-600">
          Learning React, Next.js and theme switching.
        </p>
      </section>
    </main >
  );
}

