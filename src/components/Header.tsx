import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="LG Radar Logo" width={40} height={40} />
          <span className="text-xl font-bold">LG Radar</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Button variant="ghost">Pain Points</Button>
          <Button variant="ghost">Features</Button>
          <Button variant="ghost">Pricing</Button>
          <Button variant="ghost">Testimonials</Button>
        </nav>
        <div className="flex gap-2">
          <Button>Start Free Trial</Button>
          <Button variant="outline">Book Demo</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;