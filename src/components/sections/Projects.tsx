"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Asteraid",
    description:
      "A full-featured platform for building and managing telephony systems based on the Asterisk PBX.",
    tags: ["React/TS", "Node.js", "MongoDB", "Redis"],
    status: "Internally commercial project",
  },
  {
    title: "Transport Control System",
    description:
      "System for accounting and monitoring vehicles at the border",
    tags: ["React/TS", "Nest.js", "SQL Lite"],
    status: "Internally commercial project",
  },
  {
    title: "Braavo",
    description:
      "Interactive web-based learning platform designed to help users improve their programming skills",
    tags: ["React/TS", "Node.js", "AI Integration"],
    link: "https://braavo.cloud",
  },
  {
    title: "Coloring",
    description:
      "Online coloring platform where users can create and edit their own coloring projects",
    tags: ["React/TS", "Node.js", "Canvas API", "AI Integration", "PDF"],
    link: "https://coloring.bookmark.red",
  },
  {
    title: "Clipory",
    description:
      "Fast and secure Chrome extension that allows you to efficiently manage your bookmarks in your browser",
    tags: ["React/TS", "AI Recognition", "Web Extensions API"],
    link: "https://chromewebstore.google.com/detail/clipory/mkhnihomilbiofpbefhonoeebgilbjca",
  },
  {
    title: "bookmark.red",
    description:
      "System helps users store, organize, and share valuable resources they find on the web",
    tags: ["Angular", "Node.js", "MongoDB", "Redis", "Python", "AI Integration"],
    link: "https://bookmark.red",
  },
];

export default function Projects() {
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
          Latest Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="flex flex-col border-border/50 hover:border-border/80 group h-full">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                    {project.title}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                  </CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs hover:bg-accent transition-colors">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  {project.status && (
                    <p className="text-xs text-muted-foreground/60 italic font-medium">
                      {project.status}
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
