"use client"

import * as React from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import MobileNavbar from "./mobileNavbar"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Bespoke Websites",
    href: "/services/web-design",
    description:
      "Crafting unique, conversion-focused websites tailored to your business goals and target audience.",
  },
  {
    title: "E-commerce Solutions",
    href: "/services/ecommerce",
    description:
      "Building powerful online stores that drive sales with seamless user experience and secure payments.",
  },
  {
    title: "Digital Growth",
    href: "/services/seo",
    description:
      "Comprehensive SEO, analytics, and digital marketing to increase your online visibility and ROI.",
  },
  {
    title: "Website Care Plans",
    href: "/services/maintenance",
    description:
      "Proactive maintenance, security updates, and 24/7 support to keep your website running smoothly.",
  },
  {
    title: "Content Strategy",
    href: "/services/marketing",
    description:
      "Strategic content creation and management to engage your audience and build brand authority.",
  },
  {
    title: "UI/UX Design",
    href: "/services/branding",
    description:
      "User-centered design that delivers intuitive navigation and exceptional user experiences.",
  },
]

export function NavMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-blue-500/10 to-purple-500/10 p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Transform Your Online Presence
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      We design and build websites that convert visitors into customers.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about" title="Our Story">
                Award-winning web design agency with over a decade of experience.
              </ListItem>
              <ListItem href="/portfolio" title="Success Stories">
                See how we've helped businesses achieve their digital goals.
              </ListItem>
              <ListItem href="/process" title="Our Approach">
                Our proven 6-step process for delivering exceptional results.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>What We Do</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="/blog" title="Blog">
                Expert insights on web design, development, and digital trends.
              </ListItem>
              <ListItem href="/guides" title="Guides">
                Free resources to help grow your online business.
              </ListItem>
              <ListItem href="/case-studies" title="Case Studies">
                Detailed analysis of our most successful projects.
              </ListItem>
              <ListItem href="/faq" title="FAQ">
                Common questions about our services and process.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/onboarding" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Start Your Project
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200",
            "hover:bg-gray-100 dark:hover:bg-gray-800",
            "focus:bg-gray-100 dark:focus:bg-gray-800",
            className
          )}
          {...props}
        >
          <div className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-1">{title}</div>
          <p className="line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is our breakpoint for mobile
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (isMobile) {
    return <MobileNavbar />;
  }

  return (
    <div className='z-50 h-20 w-full fixed border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg'>
      <div className='max-w-7xl mx-auto px-4 h-full'>
        <div className='flex justify-between items-center h-full'>
          <Link href="/" className="flex items-center space-x-3">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text">
              RISQUE 
            </span>
          </Link>
          <NavMenu/>
        </div>
      </div>
    </div>
  );
};

export default Navbar

export function ThemeProvider() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            document.documentElement.classList.add('dark');
          })();
        `,
      }}
    />
  );
}
