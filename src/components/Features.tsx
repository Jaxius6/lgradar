"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Search,
  Timer,
  FileText,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

const features = [
  {
    name: "Daily Email Alerts",
    description: "Get a summary of new gazettes and relevant changes in your inbox every morning.",
    icon: <Mail />,
  },
  {
    name: "Smart Keyword Matching",
    description: "Define keywords to instantly flag documents that matter to your council.",
    icon: <Search />,
  },
  {
    name: "Disallowance Countdown Timers",
    description: "Never miss a deadline with clear, automated countdowns for every piece of subsidiary legislation.",
    icon: <Timer />,
  },
  {
    name: "Audit & Action Logs",
    description: "Track which documents have been reviewed, assigned, and actioned by your team.",
    icon: <FileText />,
  },
  {
    name: "Shared Dashboard",
    description: "A single source of truth for your entire team to see what's new and what needs attention.",
    icon: <LayoutDashboard />,
  },
  {
    name: "AI Summaries & Risk Ratings",
    description: "Instantly understand the impact of a document with AI-powered summaries and risk assessments.",
    icon: <Sparkles />,
  },
];

const featureVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

export const Features = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          What LG Radar Delivers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={feature.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={featureVariants}
              className="p-6 border border-border rounded-lg"
            >
              <div className="text-primary mb-4 w-8 h-8">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.name}</h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;