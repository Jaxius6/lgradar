import React from 'react';

const Hero = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Smarter Monitoring for</span>
            <span className="block text-navy-600">Local Government</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Stay ahead of WA legislation with automatic alerts and summaries.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <a
                href="#early-access"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 md:py-4 md:text-lg md:px-10"
              >
                Join Early Access
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;