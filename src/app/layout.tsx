import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "LG Radar - Smarter Monitoring for Local Government",
  description: "Stay ahead of WA legislation with automatic alerts and summaries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
