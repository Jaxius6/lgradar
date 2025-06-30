import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              LG Radar
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Link
                href="#get-updates"
                className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800"
              >
                Get Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;