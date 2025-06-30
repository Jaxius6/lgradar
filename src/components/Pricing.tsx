"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Pricing = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Plans & Pricing
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Card className="border-primary border-2">
            <CardHeader>
              <CardTitle className="text-3xl text-center">
                All-Inclusive Plan
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-5xl font-bold mb-2">$197</p>
              <p className="text-neutral-400 mb-6">per month, per council</p>
              <p className="text-lg mb-6">
                or <span className="text-primary">$1,970/year</span> (2 months
                free)
              </p>
              <p className="mb-8">Includes all features.</p>
              <div className="flex flex-col gap-4">
                <Button size="lg">Start Free Trial</Button>
                <Button size="lg" variant="outline">
                  Request Quote PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;