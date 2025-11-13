"use client";

import Link from "next/link";
import { ThemeToggle } from "./ui/theme-toggle";
import { Button } from "./ui/button";

const navItems = [
  { name: "Overview", href: "#overview" },
  { name: "Journey", href: "#journey" },
  { name: "Insights", href: "#insights" },
  { name: "Resources", href: "#resources" },
  { name: "FAQ", href: "#faq" },
];

export const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container flex flex-wrap items-center justify-between gap-4 py-5 lg:flex-nowrap">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-secondary text-sm font-bold text-primary-foreground shadow-lg">
            AX
          </span>
          Aurora Experience
        </Link>

        <nav className="order-3 flex w-full justify-center lg:order-2 lg:w-auto">
          <ul className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-muted-foreground">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="rounded-full px-4 py-2 transition hover:bg-muted/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-2 flex items-center gap-3 lg:order-3">
          <ThemeToggle />
          <Button variant="outline" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm">Start Trial</Button>
        </div>
      </div>
    </header>
  );
};
