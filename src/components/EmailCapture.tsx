import React from 'react';

const EmailCapture = () => {
  return (
    <section id="get-updates" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get Notified
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Sign up for updates and be the first to know when we launch.
          </p>
          <form className="mt-8 sm:flex">
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 placeholder-gray-500 focus:ring-gray-500 focus:border-gray-500 border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button
                type="submit"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                Notify Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;