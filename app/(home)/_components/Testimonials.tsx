"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "/testimonials/sarah.jpg",
    company_logo: "/companies/techstart.png",
    content: "Working with this team was transformative for our business. Our new website has increased our conversion rate by 150% and provides a much better user experience.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder, EcoStore",
    image: "/testimonials/michael.jpg",
    company_logo: "/companies/ecostore.png",
    content: "The e-commerce solution they built for us is incredible. Our sales have doubled since launch, and the platform is so easy to manage. Couldn't be happier!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma Davis",
    role: "Marketing Director, StyleHub",
    image: "/testimonials/emma.jpg",
    company_logo: "/companies/stylehub.png",
    content: "Their attention to detail and understanding of our brand was impressive. The website they delivered exceeded our expectations in every way.",
    rating: 5,
  }
];

export function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what our clients have to say about their experience working with us
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20 mb-2" />
                  <p className="text-muted-foreground">{testimonial.content}</p>
                </div>

                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-xl font-medium mb-4">Ready to transform your digital presence?</p>
          <p className="text-muted-foreground">
            Join our satisfied clients and take your business to the next level
          </p>
        </motion.div>
      </div>
    </section>
  );
} 