"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Accordion, Accordions } from "@/components/ui/accordion";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  projectDescription: z.string().min(50, { message: "Minimum 50 characters required." }),
  siteUsage: z.string().min(20, { message: "Minimum 20 characters required." }),
  budget: z.number().min(100).max(10000),
  bestDays: z.string().min(1, { message: "Please specify preferred days." }),
  bestTimes: z.string().min(1, { message: "Please specify preferred times." }),
});


import { Label } from "@/components/ui/label";
import { useState } from "react";

function DualRangeSlider() {
  const [value, setValue] = useState([100, 1000]);

  return (
    <div className="space-y-4 min-w-[300px]">
      <div className="flex items-center justify-between gap-2">
        <Label className="leading-6">Dual range slider with output</Label>
        <output className="text-sm font-medium tabular-nums">
          {value[0]} - {value[1]}
        </output>
      </div>
      <Slider value={value} onValueChange={setValue} aria-label="Dual range slider with output" />
    </div>
  );
}





export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectDescription: "",
      siteUsage: "",
      budget: 1000,
      bestDays: "",
      bestTimes: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Accordions className="space-y-6">
          {/* About You Section */}
          <Accordion id="about-you" title="About You">
            <div className="space-y-4">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Name</FormLabel>
                  <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl><Input type="email" placeholder="john@example.com" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="phone" render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl><Input type="tel" placeholder="+44 123 456 7890" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </Accordion>

          {/* Project Details Section */}
          <Accordion id="project-details" title="Project Details">
            <div className="space-y-4">
              <FormField control={form.control} name="projectDescription" render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Project Description</FormLabel>
                  <FormControl><Textarea placeholder="Tell us about your project..." className="min-h-[120px]" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="siteUsage" render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>How will the site be used?</FormLabel>
                  <FormControl><Textarea placeholder="E.g., E-commerce, portfolio..." className="min-h-[100px]" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="budget" render={({ field: { value, onChange, ...field } }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Budget (£)</FormLabel>
                  <FormControl>
                    <div className="space-y-3">
                        <DualRangeSlider/>
                      <div className="text-right text-sm text-muted-foreground">Selected: £{value}</div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </Accordion>

          {/* Contact Preferences Section */}
          <Accordion id="contact-preferences" title="Get in Touch">
            <div className="space-y-4">
              <FormField control={form.control} name="bestDays" render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Best Days to Contact</FormLabel>
                  <FormControl><Input placeholder="E.g., Monday to Friday" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
              <FormField control={form.control} name="bestTimes" render={({ field }) => (
                <FormItem className="space-y-2">
                  <FormLabel>Best Times to Contact</FormLabel>
                  <FormControl><Input placeholder="E.g., 9 AM - 5 PM" {...field} /></FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>
          </Accordion>
        </Accordions>

        <Button type="submit" className="w-full mt-6">Send Message</Button>
      </form>
    </Form>
  );
}
