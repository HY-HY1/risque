import  {Features}  from "./(home)/_components/features";
import { HomeHero } from "./(home)/_components/hero";
import { TimelineSection } from "./(home)/_components/timeline";
import { ContactSection } from "./(home)/_components/contact";
import { OfficeForm } from "@/components/forms/testform";
import { WhatWeDo } from "./(home)/_components/bento";
import { Testimonials } from "./(home)/_components/Testimonials";

export default function Home() {
  return (
    <main className="">
      <HomeHero />
      <section className="md:my-20 md:mt-40">
        <Testimonials />
      </section>
      <section className="">
      <Features />
      </section>
      <TimelineSection />
      <section className="w-[90vw] md:w-[70vw] mt-[700px] lg:mt-[300px] m-auto h-screen flex justify-center items-center">
        <WhatWeDo />
      </section>
      <section className="mt-[600px] lg:mt-[200px] mb-10">
        <ContactSection />
      </section>
      
    </main>
  );
}
