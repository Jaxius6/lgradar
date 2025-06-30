import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Link href="/privacy" className="text-sm text-gray-500 hover:text-gray-900">
            Privacy
          </Link>
          <Link href="/terms" className="text-sm text-gray-500 hover:text-gray-900">
            Terms
          </Link>
          <Link href="/contact" className="text-sm text-gray-500 hover:text-gray-900">
            Contact
          </Link>
        </div>
        <p className="mt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} LG Radar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;