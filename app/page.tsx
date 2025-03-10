import { Features } from "./(home)/_components/features";
import { HeroSection } from "./(home)/_components/hero";
import { TimelineSection } from "./(home)/_components/timeline";
import { ContactSection } from "./(home)/_components/contact";
import { OfficeForm } from "@/components/forms/testform";
import { WhatWeDo } from "./(home)/_components/bento";
import { Testimonials } from "./(home)/_components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <section className="my-20 mt-40">
        <Testimonials />
      </section>
      <section className="">
      <Features />
      </section>
      <TimelineSection />
      <section className="w-[70vw] mt-40 m-auto h-screen flex justify-center items-center">
        <WhatWeDo />
      </section>
      <section className="mt-40 mb-10">
        <ContactSection />
      </section>
      
    </main>
  );
}
