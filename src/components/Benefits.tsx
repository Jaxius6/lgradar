import React from 'react';

const benefits = [
  {
    name: 'Disallowance Countdown',
    description: 'Track critical deadlines for legislative review and action.',
    icon: '⏳',
  },
  {
    name: 'WA Gazette Integration',
    description: 'Direct integration with the Western Australian Government Gazette.',
    icon: '📰',
  },
  {
    name: 'Custom Alerts',
    description: 'Receive notifications tailored to specific topics or regions.',
    icon: '🔔',
  },
  {
    name: 'Exportable Summaries',
    description: 'Easily download and share summaries of legislative changes.',
    icon: '📄',
  },
];

const Benefits = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Everything you need to stay informed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.name}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-medium text-gray-900">
                {benefit.name}
              </h3>
              <p className="mt-2 text-base text-gray-500">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;