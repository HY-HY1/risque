"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const  Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(100);

  const data: TimelineEntry[] = [
    {
      title: "Discovery",
      content: (
        <div className="bg-white/10 backdrop-blur-xl border border-neutral-200/10 dark:border-neutral-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-blue-500/10 text-blue-500 dark:bg-blue-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
            </div>
            <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Understanding Your Vision</h4>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-lg leading-relaxed">
            We begin with in-depth consultations to understand your business goals, target audience, and unique value proposition. This phase includes:
          </p>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
              <span className="text-lg">Business goals analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
              <span className="text-lg">Target audience research</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
              <span className="text-lg">Competitor analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
              <span className="text-lg">Project scope definition</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Strategy",
      content: (
        <div className="bg-white/10 backdrop-blur-xl border border-neutral-200/10 dark:border-neutral-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 dark:bg-purple-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            </div>
            <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Planning Your Success</h4>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-lg leading-relaxed">
            We develop a comprehensive strategy that aligns with your business objectives and user needs. This includes:
          </p>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
              <span className="text-lg">Information architecture</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
              <span className="text-lg">User journey mapping</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
              <span className="text-lg">Content strategy</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500 flex-shrink-0"></span>
              <span className="text-lg">Technical requirements</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Design",
      content: (
        <div className="bg-white/10 backdrop-blur-xl border border-neutral-200/10 dark:border-neutral-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-pink-500/10 text-pink-500 dark:bg-pink-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>
            </div>
            <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Crafting Your Identity</h4>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-lg leading-relaxed">
            Our design phase brings your vision to life with attention to aesthetics and functionality:
          </p>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500 flex-shrink-0"></span>
              <span className="text-lg">Wireframing and prototyping</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500 flex-shrink-0"></span>
              <span className="text-lg">Visual design and branding</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500 flex-shrink-0"></span>
              <span className="text-lg">UI/UX design</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-pink-500 flex-shrink-0"></span>
              <span className="text-lg">Mobile-first approach</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div className="bg-white/10 backdrop-blur-xl border border-neutral-200/10 dark:border-neutral-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500 dark:bg-orange-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
            </div>
            <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Building Your Platform</h4>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-lg leading-relaxed">
            We transform designs into fully functional websites using modern technologies:
          </p>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
              <span className="text-lg">Clean, efficient coding</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
              <span className="text-lg">Responsive development</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
              <span className="text-lg">Performance optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
              <span className="text-lg">CMS integration</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Testing",
      content: (
        <div className="bg-white/10 backdrop-blur-xl border border-neutral-200/10 dark:border-neutral-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-green-500/10 text-green-500 dark:bg-green-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>
            </div>
            <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Ensuring Excellence</h4>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-lg leading-relaxed">
            Rigorous testing ensures your website performs flawlessly:
          </p>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
              <span className="text-lg">Cross-browser testing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
              <span className="text-lg">Performance testing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
              <span className="text-lg">Security testing</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0"></span>
              <span className="text-lg">User acceptance testing</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Launch",
      content: (
        <div className="bg-white/10 backdrop-blur-xl border border-neutral-200/10 dark:border-neutral-800/50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-red-500/10 text-red-500 dark:bg-red-500/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
            </div>
            <h4 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">Going Live</h4>
          </div>
          <p className="text-neutral-600 dark:text-neutral-300 mb-6 text-lg leading-relaxed">
            We ensure a smooth transition to your new website:
          </p>
          <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              <span className="text-lg">Deployment checklist</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              <span className="text-lg">SEO optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              <span className="text-lg">Analytics setup</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500 flex-shrink-0"></span>
              <span className="text-lg">Post-launch support</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10 border-t">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Your Website, Start To Finish
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl">
          We follow a comprehensive, six-stage process to ensure your web project is delivered to the highest standards. Each stage is carefully planned and executed to achieve optimal results.
        </p>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto pb-20">
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-3 md:left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-blue-500 via-purple-500 to-transparent"
          />
        </div>

        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center shadow-lg">
                <div className="h-4 w-4 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
