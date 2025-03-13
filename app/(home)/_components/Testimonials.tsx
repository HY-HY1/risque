"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily R.",
    role: "Owner, Local Dog Walker",
    image: "/testimonials/emily.jpg",
    content:
      "Our new website makes booking walks so easy for our clients! We’ve seen a huge increase in inquiries, and pet owners love the real-time updates. It’s helped us grow faster than we imagined.",
    rating: 5,
  },
  {
    id: 2,
    name: "David L.",
    role: "Restaurant Owner",
    image: "/testimonials/david.jpg",
    content:
      "We needed a website that reflected our restaurant’s atmosphere and made online reservations effortless. Since launching, online bookings have surged, and we’re seeing more new customers discovering us online.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophia M.",
    role: "Owner, Local Café",
    image: "/testimonials/sophia.jpg",
    content:
      "Our café’s website now beautifully showcases our menu and lets customers order online with ease. Foot traffic has increased, and online sales have doubled. It’s been a game-changer for our business!",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/50 sticky top-0">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Websites That Help Businesses Thrive
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From local services to bustling cafés, we craft websites that drive real results.
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
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
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
          <p className="text-xl font-medium mb-4">Your business deserves a website that works for you.</p>
          <p className="text-muted-foreground">
            Let’s build something amazing—reach out today.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
