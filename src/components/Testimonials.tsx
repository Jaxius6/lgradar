"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const testimonials = [
  {
    quote:
      "LG Radar has been a game-changer for our administrative team. We're saving hours every week and have peace of mind knowing we're not missing anything.",
    author: "CEO, Shire of Coolgardie",
  },
  {
    quote:
      "As a smaller council, we don't have the resources for a dedicated compliance officer. LG Radar is our safety net. It's simple, effective, and built for WA.",
    author: "CEO, Shire of Peppermint Grove",
  },
  {
    quote:
      "The daily email alerts are brilliant. I can quickly scan for relevant gazettes without having to log in to multiple systems. It's the first thing I read every morning.",
    author: "Governance Coordinator, City of Wanneroo",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Councils Love LG Radar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
              className="p-6 border border-border rounded-lg"
            >
              <ShieldCheck className="text-primary mb-4" />
              <p className="text-lg mb-4">"{testimonial.quote}"</p>
              <p className="text-neutral-400 font-bold">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;