import { Hero } from "@/components/ui/hero"

export function HomeHero() {
  return (
    <Hero
      title="A Website that works for you."
      subtitle="Transform your business with online presence. Simple, powerful, reliable."
      actions={[
        {
          label: "Contact",
          href: "/contact",
          variant: "default"
        },
        {
          label: "Learn More",
          href: "/services",
          variant: "outline"
        }
      ]}
      titleClassName="text-4xl md:text-6xl lg:text-7xl"
      subtitleClassName="text-xl text-muted-foreground"
      actionsClassName="mt-8"
    />
  )
}