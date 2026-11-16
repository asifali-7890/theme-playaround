
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigationItems = [
  { name: "Overview", href: "/" },
  { name: "Analytics", href: "/analytics" },
  { name: "Customers", href: "/customers" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <aside className="border-b border-border bg-card md:min-h-screen md:w-64 md:border-b-0 md:border-r">
      <div className="flex items-center justify-between p-5">
        <h2 className="text-xl font-bold text-foreground">
          Dashboard
        </h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-border px-3 py-2 text-sm text-foreground md:hidden"
        >
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>

      <nav className={`${isOpen ? "block" : "hidden"} p-4 pt-0 md:block`}>
        <ul className="space-y-2">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm transition-colors ${isActive
                      ? "bg-primary text-white"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
