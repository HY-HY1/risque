import Image from "next/image";
import React from "react";

const TechStack = () => {
  const technologies = [
    {
      name: "Next.js",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1280px-Nextjs-logo.svg.png",
      width: 120
    },
    {
      name: "MongoDB",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
      width: 160
    },
    {
      name: "Tailwind CSS",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png",
      width: 200
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-4">
            Our Tech Stack
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We use cutting-edge technologies to build modern, scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {technologies.map((tech) => (
            <div 
              key={tech.name}
              className="relative w-full h-20 flex items-center justify-center group"
            >
              <Image
                src={tech.image}
                alt={tech.name}
                width={tech.width}
                height={50}
                className="object-contain transition-all duration-300 group-hover:scale-110 dark:invert dark:brightness-200 dark:contrast-0 brightness-0"
                style={{
                  maxWidth: tech.width,
                  width: "auto",
                  height: "auto"
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
