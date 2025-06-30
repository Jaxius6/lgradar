"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative py-40 text-center">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Your Compliance Radar in a Sea of Red Tape
        </h1>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-neutral-400">
          Stay on top of WA Government Gazettes, disallowance windows, and
          policy changes — without lifting a finger.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Start Free Trial</Button>
          <Button size="lg" variant="outline">
            Book Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;