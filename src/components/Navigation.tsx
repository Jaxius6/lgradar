'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useState } from "react";
import Image from "next/image";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Image
            src="/lgradarlogo.svg"
            alt="LG Radar Logo"
            width={32}
            height={32}
            className="w-8 h-8"
          />
          <h1 className="text-xl font-bold">LG Radar</h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 items-center">
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
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

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Button variant="ghost" asChild className="justify-start">
              <Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link href="/#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link href="/privacy" onClick={() => setIsMenuOpen(false)}>Privacy</Link>
            </Button>
            <Button variant="ghost" asChild className="justify-start">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </Button>
            <Button asChild className="mt-2">
              <Link href="https://wa.lgradar.com.au">Sign In</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}