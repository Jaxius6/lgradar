'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <h1 className="text-xl font-bold">LG Radar</h1>
        </Link>
        <nav className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" asChild>
            <Link href="/about">About Us</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#pricing">Pricing</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/privacy">Privacy</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <ThemeToggle />
          <Button asChild>
            <Link href="https://wa.lgradar.com.au">Sign In</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}