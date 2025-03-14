import React from 'react'

const ProcessStep = ({ number, title, description, isLast }: { 
  number: number; 
  title: string; 
  description: string;
  isLast: boolean;
}) => (
  <div className="relative flex items-start group">
    <div className="relative">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shrink-0 group-hover:scale-110 transition-transform duration-300 z-10">
        {number}
      </div>
      {!isLast && (
        <div className="absolute top-10 left-1/2 h-full w-px bg-gradient-to-b from-blue-600/50 to-purple-600/50 -translate-x-1/2" />
      )}
    </div>
    <div className="ml-6 pb-12">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
)

const Process = () => {
  const steps = [
    {
      title: "Discovery & Planning",
      description: "We begin with in-depth discussions to understand your vision, requirements, and objectives. This phase includes project scoping, technical specifications, and creating a detailed roadmap."
    },
    {
      title: "Design & Architecture",
      description: "Our design team creates wireframes and prototypes while our architects plan the technical infrastructure. We ensure every aspect of your project is meticulously planned before development begins."
    },
    {
      title: "Development & Integration",
      description: "Our development team brings your project to life, following best practices and using cutting-edge technologies. We maintain constant communication and provide regular updates throughout this phase."
    },
    {
      title: "Testing & Refinement",
      description: "Rigorous testing across multiple devices and scenarios ensures your project works flawlessly. We conduct thorough QA, performance optimization, and security testing."
    },
    {
      title: "Deployment & Launch",
      description: "Once everything is perfect, we handle the deployment process with zero downtime. We ensure your project launches smoothly and securely on your chosen infrastructure."
    },
    {
      title: "Ongoing Support",
      description: "Our relationship doesn't end at launch. We provide continuous support, maintenance, and updates to ensure your project remains secure, fast, and up-to-date."
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Designed to ensure every aspect of your project runs smoothly, keeping you informed at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-300 italic">
            "If you fail to prepare, prepare to fail. We believe in thorough planning and flawless execution."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Process; 