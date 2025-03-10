"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Action {
  label: string;
  href: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
}

interface HeroProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  title?: string;
  subtitle?: string;
  actions?: Action[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
}

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      title = "Transform Your Digital Presence",
      subtitle = "We create stunning websites and digital solutions that drive results.",
      actions = [],
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          "relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background",
          className
        )}
        {...props}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:linear-gradient(0deg,transparent,white)]" />

        {/* Content */}
        <div className="relative container mx-auto px-4 text-center z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
              "text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500",
              titleClassName
            )}
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12",
              subtitleClassName
            )}
          >
            {subtitle}
          </motion.p>
          {actions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={cn("flex gap-4 justify-center", actionsClassName)}
            >
              {actions.map((action, index) => (
                <Link key={index} href={action.href}>
                  <Button 
                    size="lg" 
                    variant={action.variant || "default"}
                    className="text-lg px-8"
                  >
                    {action.label}
                  </Button>
                </Link>
              ))}
            </motion.div>
          )}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </section>
    )
  }
)

Hero.displayName = "Hero"

export { Hero }
