import { cn } from "@/lib/utils";
import {
  IconDeviceLaptop,
  IconPalette,
  IconChartBar,
  IconRocket,
  IconDeviceAnalytics,
  IconHeadset,
  IconBrandWordpress,
  IconShieldCheck,
} from "@tabler/icons-react";
import { GridPattern } from "./grid-pattern";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Custom Web Solutions",
      description:
        "Tailored websites and web applications designed specifically for your business needs and growth goals.",
      icon: <IconDeviceLaptop />,
    },
    {
      title: "Modern Design",
      description:
        "Beautiful, responsive designs that work seamlessly across all devices and enhance your brand image.",
      icon: <IconPalette />,
    },
    {
      title: "SEO Optimization",
      description:
        "Built-in SEO best practices to help your business rank better and attract more organic traffic.",
      icon: <IconChartBar />,
    },
    {
      title: "Fast Performance",
      description: 
        "Lightning-fast loading speeds and optimal performance to keep your visitors engaged.",
      icon: <IconRocket />,
    },
    {
      title: "Analytics & Insights",
      description: 
        "Detailed analytics and reporting to track your website's performance and visitor behavior.",
      icon: <IconDeviceAnalytics />,
    },
    {
      title: "Dedicated Support",
      description:
        "Ongoing technical support and maintenance to keep your website running smoothly.",
      icon: <IconHeadset />,
    },
    {
      title: "CMS Integration",
      description:
        "Easy-to-use content management systems so you can update your website without technical knowledge.",
      icon: <IconBrandWordpress />,
    },
    {
      title: "Security First",
      description: 
        "Enterprise-grade security measures to protect your business and customer data.",
      icon: <IconShieldCheck />,
    },
  ];

  return (
    <div className="relative">
      <GridPattern
        width={2000}
        height={3000}
        spacing={40}
        size={1}
        dotOpacity={0.2}
        className="absolute top-[120vh] inset-0 h-full w-full"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
