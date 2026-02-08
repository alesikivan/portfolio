"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Software Engineer",
    company: "ProfLegion SLR",
    period: "2023 – 2026",
    description: [
      "Supervised a team of 3 developers across all stages of web application development, from planning and architecture design to deployment and maintenance",
      "Designed and implemented scalable client-server architecture for a web-based system",
      "Configured and maintained relational databases, including schema design, query optimization, indexing, and data security",
      "Contributed to UI/UX design and frontend implementation, ensuring responsive layouts and seamless user experience",
      "Set up CI/CD pipelines to automate build, testing, and deployment processes",
      "Deployed, configured, and maintained application environments on production servers",
      "Deployed and integrated an IP telephony system with internal services",
    ],
  },
  {
    title: "Software Engineer & Research Student",
    company: "Masaryk University",
    period: "2022 - 2023",
    description: [
      "Contributed to the Urban Smart City research project at Masaryk University, collaborating with academic staff and students",
      "Developed interactive map-based applications for urban data visualization and analysis",
      "Worked with geospatial data, including map layers, markers, and real-time data rendering",
      "Built a web-based drawing application with custom tools and user interactions",
      "Developed a web browser extension integrating drawing and visualization features",
    ],
  },
  {
    title: "Software Engineer",
    company: "Altsoft",
    period: "2019 - 2022",
    description: [
      "Performed full-stack development of a web application using the MEAN stack (MongoDB, Express.js, Angular, Node.js)",
      "Designed and implemented backend APIs and frontend components for data-driven features",
      "Researched and evaluated clustering algorithms for data analysis and classification tasks",
      "Implemented and tested clustering approaches on real-world datasets",
      "Handled application deployment, server configuration, monitoring, and ongoing technical support",
    ]
  },
];

export default function Experience() {
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
          Work Experience
        </motion.h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-border/50 hover:border-border/80">
                <CardHeader>
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <CardTitle className="text-xl md:text-2xl">{exp.title}</CardTitle>
                      <CardDescription className="text-base md:text-lg mt-2">
                        {exp.company}
                      </CardDescription>
                    </div>
                    <span className="text-sm md:text-base text-muted-foreground/60 font-medium">
                      {exp.period}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground/80">
                    {exp.description.map((item, i) => (
                      <li key={i} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
