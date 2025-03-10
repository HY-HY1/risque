import { Hero } from "@/components/ui/hero"
function HeroSection() {
  return (
    <Hero
      title="A Website that works for you."
      subtitle="Transform your business with online presence. Simple, powerful, reliable."
      actions={[
        {
          label: "Contact",
          href: "#",  
          variant: "outline"
        },
        {
          label: "Get Started",
          href: "#",
          variant: "default"
        }
      ]}
      titleClassName="text-5xl md:text-6xl font-extrabold"
      subtitleClassName="text-lg md:text-xl max-w-[600px]"
      actionsClassName="mt-8"
    />
  );
}

export { HeroSection }