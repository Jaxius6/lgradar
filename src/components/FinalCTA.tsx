"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const FinalCTA = () => {
  return (
    <section className="py-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-bold mb-8">
          Be the council that’s always on the radar.
        </h2>
        <div className="flex justify-center gap-4">
          <Button size="lg">Start Free Trial</Button>
          <Button size="lg" variant="outline">
            Book Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;