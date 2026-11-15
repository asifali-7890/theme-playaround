"use client";
import Image from "next/image";
import { useTheme } from "../components/theme-provider";



export default function Home() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <main
      className={`min-h-screen`}
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <nav className="flex items-center justify-between border-b p-5">
        <h1 className="text-xl font-bold">
          Theme Playground
        </h1>

        <button
          onClick={toggleTheme}
          className="rounded-lg bg-gray-900 px-4 py-2 text-white">
          {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </nav>

      <p className="mt-4">
        Current theme: {isDark ? "Dark" : "Light"}
      </p>

      <section className="mx-auto max-w-4xl p-8">
        <h2 className="text-3xl font-bold">
          Welcome to my project
        </h2>

        <p className="mt-3 text-gray-600">
          Learning React, Next.js and theme switching.
        </p>
      </section>
    </main >
  );
}

