"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareWarning } from "lucide-react";

const painPoints = [
  {
    title: "We’re drowning in documents.",
    icon: <MessageSquareWarning className="h-8 w-8 text-primary" />,
  },
  {
    title: "We didn’t even see that disallowance notice…",
    icon: <MessageSquareWarning className="h-8 w-8 text-primary" />,
  },
  {
    title: "We rely on one person’s inbox or memory.",
    icon: <MessageSquareWarning className="h-8 w-8 text-primary" />,
  },
  {
    title: "We're not sure if we’ve done everything we need to.",
    icon: <MessageSquareWarning className="h-8 w-8 text-primary" />,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export const PainPoints = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Sound Familiar?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, i) => (
            <motion.div
              key={point.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
            >
              <Card>
                <CardHeader>{point.icon}</CardHeader>
                <CardContent>
                  <CardTitle>{point.title}</CardTitle>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;