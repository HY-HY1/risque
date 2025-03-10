import {
  CodeIcon,
  RocketIcon,
  HeartIcon,
  LayersIcon,
  DrawingPinIcon,
} from "@radix-ui/react-icons";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

const features = [
  {
    Icon: CodeIcon,
    name: "Bespoke Websites",
    description: "Custom-built websites that perfectly align with your brand and business goals. From corporate sites to dynamic web applications.",
    href: "/services/web-design",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-950/50 opacity-10" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: RocketIcon,
    name: "Digital Growth",
    description: "Comprehensive SEO, analytics, and digital marketing strategies to increase your online visibility and drive meaningful traffic.",
    href: "/services/digital-growth",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/50 dark:to-pink-950/50 opacity-10" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: HeartIcon,
    name: "Website Care",
    description: "Proactive maintenance, security updates, and performance optimization to keep your website running at its best.",
    href: "/services/website-care",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-950/50 dark:to-emerald-950/50 opacity-10" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: DrawingPinIcon,
    name: "Hosting Plans",
    description: "Reliable, secure, and scalable hosting solutions with 99.9% uptime guarantee and expert support.",
    href: "/services/hosting",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-950/50 dark:to-red-950/50 opacity-10" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: LayersIcon,
    name: "UI/UX Design",
    description: "User-centered design that delivers intuitive navigation and exceptional experiences across all devices and platforms.",
    href: "/services/design",
    cta: "Learn more",
    background: <div className="absolute inset-0 bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-teal-950/50 dark:to-cyan-950/50 opacity-10" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

function WhatWeDo() {
  return (
    <div className=" mb-40 mt-20">
      <div className="text-left mb-12">
        <h2 className="text-3xl font-bold mb-4">What We Do</h2>
        <p className="text-muted-foreground max-w-2xl">
          We offer comprehensive web solutions to help your business thrive online. From design to deployment, we've got you covered.
        </p>
      </div>
      <BentoGrid className="lg:grid-rows-3">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

export { WhatWeDo };