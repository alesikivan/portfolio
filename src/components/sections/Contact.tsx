"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Send, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-12 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-border/50 hover:border-border/80">
            <CardContent className="pt-8">
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:alesik.ivan.job@gmail.com"
                  className="inline-flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                >
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">alesik.ivan.job@gmail.com</span>
                </a>
                <a
                  href="https://t.me/alesikivan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                >
                  <Send className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">@alesikivan</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/alesikivan-cv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-lg hover:text-primary transition-colors group"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="pt-12 text-center">
            <h3 className="text-2xl font-semibold mb-6">References</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border/50 hover:border-border/80">
                <CardContent className="pt-8 space-y-3">
                  <p className="text-lg font-semibold">Stanislav Sobolevsky</p>
                  <p className="text-sm text-muted-foreground/80">Professor at New York University</p>
                  <p className="text-sm text-muted-foreground/80">Engineer at Meta</p>
                  <a
                    href="mailto:sobolevsky@math.muni.cz"
                    className="text-sm hover:text-primary transition-colors inline-block font-medium"
                  >
                    sobolevsky@math.muni.cz
                  </a>
                </CardContent>
              </Card>
              <Card className="border-border/50 hover:border-border/80">
                <CardContent className="pt-8 space-y-3">
                  <p className="text-lg font-semibold">Jan Slovak</p>
                  <p className="text-sm text-muted-foreground/80">Professor of Math at MUNI</p>
                  <p className="text-sm text-muted-foreground/80">Editor-In-Chief at Elsevier</p>
                  <a
                    href="mailto:slovak@muni.cz"
                    className="text-sm hover:text-primary transition-colors inline-block font-medium"
                  >
                    slovak@muni.cz
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
