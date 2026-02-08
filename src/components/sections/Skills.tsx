"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "Angular", "jQuery", "HTML5", "CSS3", "Responsive Design", "UI/UX Basics"],
  },
  {
    title: "Backend Node.js",
    skills: ["Node.js", "Express.js", "NestJS"],
  },
  {
    title: "Backend Other",
    skills: ["Django", "Yii2"],
  },
  {
    title: "APIs",
    skills: ["REST API", "API Integrations", "Canvas API", "Web Extensions API"],
  },
  {
    title: "Databases",
    skills: ["SQL", "PostgreSQL", "SQLite", "MongoDB", "Redis", "Database Architecture", "Data Modeling"],
  },
  {
    title: "DevOps & Tools",
    skills: ["Docker", "Linux", "Git", "CI/CD", "Apps Deployment"],
  },
  {
    title: "Architecture & Patterns",
    skills: ["Front-end & Back-end Architecture", "Client–Server Architecture", "Async Programming", "Functional Programming"],
  },
  {
    title: "Computer Science",
    skills: ["Computer Network Architecture", "Web Basics", "Data Structures and Algorithms", "CS Fundamentals"],
  },
  {
    title: "Mathematics",
    skills: ["Mathematics", "Mathematical Analysis", "Statistics"],
  },
  {
    title: "AI & Advanced",
    skills: ["AI Integration", "AI-assisted UX", "Document/PDF AI Processing"],
  },
  {
    title: "Enterprise",
    skills: ["Active Directory", "HubSpot"],
  },
];

const languages = [
  { name: "English", level: "B1+" },
  { name: "German", level: "A2" },
];

export default function Skills() {
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
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <Card className="border-border/50 hover:border-border/80 h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg md:text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs hover:bg-secondary/80 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: skillCategories.length * 0.05 }}
          >
            <Card className="border-border/50 hover:border-border/80">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg md:text-xl">Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang, i) => (
                    <Badge key={i} variant="secondary" className="text-xs hover:bg-secondary/80 transition-colors">
                      {lang.name} {lang.level}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
