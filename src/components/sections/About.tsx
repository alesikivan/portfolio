"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Shield, Zap, Monitor, Server, Brain, Palette } from "lucide-react";

const expertiseAreas = [
  {
    icon: Monitor,
    title: "Front-end",
    description:
      "I specialize in building modern, responsive user interfaces with a focus on performance and user experience. Experienced in React, Angular, and modern CSS frameworks. I create accessible, pixel-perfect designs that work seamlessly across all devices, ensuring smooth interactions and optimal loading times.",
  },
  {
    icon: Server,
    title: "Backend",
    description:
      "I have extensive experience in designing and implementing scalable backend architectures. Proficient in Node.js, Python, and PHP ecosystems. I build robust APIs, optimize database queries, handle high-load scenarios, and ensure data integrity and security across distributed systems.",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "I integrate AI and machine learning capabilities into web applications, working with document processing, data analysis, and intelligent automation. Experienced in leveraging AI APIs and implementing smart features that enhance user experience and automate complex workflows.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "I have a strong understanding of UI/UX principles and contribute to the design process from wireframes to final implementation. I focus on creating intuitive interfaces, maintaining design systems, and ensuring visual consistency while balancing aesthetics with functionality.",
  },
  {
    icon: Shield,
    title: "DevSecOps",
    description:
      "I have practical experience in securing server and application infrastructure at all stages of development. I've worked on building and maintaining secure server architecture, configuring access control, isolating services using Docker, and ensuring secure deployment and operation of applications. I focus on stability, fault tolerance, and data protection in production environments.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "I have experience in automating technical and internal company processes: automating application deployment and updates, simplifying routine development and maintenance operations, and optimizing team workflows. This helped reduce manual errors, accelerate release cycles, and improve overall development efficiency.",
  },
];

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

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <Card className="border-border/50 hover:border-border/80 h-full">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground/80 leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
