"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function About() {
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
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-border/50 hover:border-border/80">
            <CardContent className="pt-8">
              <p className="text-lg md:text-xl leading-relaxed text-muted-foreground/80 font-light">
                Full-Stack Engineer with 5+ years of experience in building scalable,
                high-load systems and AI-integrated web applications. Strong
                background in applied mathematics and a proven track record of
                delivering full-cycle solutions — from backend architecture to
                modern front-end interfaces — across international teams.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
