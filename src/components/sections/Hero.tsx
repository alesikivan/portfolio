"use client";

import { Code, Mail, Send, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-5xl w-full text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm">
            <Code className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">
              Full-stack Engineer
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent !mt-0">
            Ivan Alesik
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-muted-foreground/70 max-w-3xl mx-auto leading-relaxed font-light !mt-3"
        >
          5+ years building scalable, high-load systems and AI-integrated web applications
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="mailto:alesik.ivan.job@gmail.com"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Mail className="w-5 h-5" />
            <span className="font-medium hidden sm:block">Get in Touch</span>
          </a>

          <a
            href="https://t.me/alesikivan"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full glass-effect border border-border/50 hover:border-border transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Send className="w-5 h-5" />
            <span className="font-medium hidden sm:block">@alesikivan</span>
          </a>

          <a
            href="https://www.linkedin.com/in/alesikivan-cv"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full glass-effect border border-border/50 hover:border-border transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            <Linkedin className="w-5 h-5" />
            <span className="font-medium hidden sm:block">Linkedin</span>
          </a>
        </motion.div>

        <ScrollIndicator />
      </div>
    </section>
  );
}
