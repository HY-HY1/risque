"use client";

import { motion } from "framer-motion";
import { ReactElement } from "react";

interface TimelineItemData {
  title: string;
  content: ReactElement;
}

interface TimelineProps {
  data: TimelineItemData[];
}

function Timeline({ data }: TimelineProps) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"></div>

        {/* Timeline items */}
        <div className="space-y-12">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  {item.content}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TimelineSection() {
  const data = [
    {
      title: "Discovery & Planning",
      content: (
        <div className="space-y-2">
          <p className="text-muted-foreground">
            We begin by understanding your vision, goals, and requirements through in-depth consultations.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Project scope definition</li>
            <li>Technical requirements gathering</li>
            <li>Timeline and milestone planning</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Design & Prototyping",
      content: (
        <div className="space-y-2">
          <p className="text-muted-foreground">
            Our designers create beautiful, user-friendly interfaces that align with your brand.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>UI/UX design</li>
            <li>Interactive prototypes</li>
            <li>Design system creation</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div className="space-y-2">
          <p className="text-muted-foreground">
            We build your solution using modern technologies and best practices.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Frontend development</li>
            <li>Backend implementation</li>
            <li>Database architecture</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Testing & QA",
      content: (
        <div className="space-y-2">
          <p className="text-muted-foreground">
            Rigorous testing ensures your solution works flawlessly across all devices.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Functionality testing</li>
            <li>Performance optimization</li>
            <li>Cross-browser compatibility</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Launch & Support",
      content: (
        <div className="space-y-2">
          <p className="text-muted-foreground">
            We ensure a smooth launch and provide ongoing support for your solution.
          </p>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Deployment assistance</li>
            <li>Performance monitoring</li>
            <li>Maintenance and updates</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen w-full">
      <div className="w-[70vw] m-auto h-full py-4 mb-10 border-b border-border">
        <h3>Your Website, Start to finish</h3>
        <p>Our rigorous process ensures top-quality results while seamlessly incorporating customer requests.</p>
      </div>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
