"use client";

import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-border/50 hover:border-border/80">
            <CardHeader>
              <div className="flex justify-between items-start flex-wrap gap-2">
                <div>
                  <CardTitle className="text-xl md:text-2xl">Applied Mathematics</CardTitle>
                  <CardDescription className="text-base md:text-lg mt-2">
                    Brest State University
                  </CardDescription>
                </div>
                <span className="text-sm md:text-base text-muted-foreground/60 font-medium">2019 - 2023</span>
              </div>
            </CardHeader>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
