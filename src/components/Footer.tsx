import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex gap-6">
          <Link href="/about" className="text-sm text-neutral-400 hover:text-white">
            About Us
          </Link>
          <Link href="/privacy" className="text-sm text-neutral-400 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/contact" className="text-sm text-neutral-400 hover:text-white">
            Contact
          </Link>
          <span className="text-sm text-neutral-400">ABN: 12 345 678 901</span>
        </div>
        <div className="text-sm text-neutral-400">
          Made in WA with ❤️
        </div>
      </div>
    </footer>
  );
};

export default Footer;