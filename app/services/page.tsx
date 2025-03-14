import React from 'react'
import Hero from './_components/Hero'
import ServiceCard from './_components/ServiceCard'
import CTA from './_components/CTA'
import SectionHeader from './_components/SectionHeader'
import { services } from './_components/services-data'
import TechStack from './_components/TechStack'
import Process from './_components/Process'

const Page = () => {
  return (
    <div className='w-full min-h-[100vh] mt-20'>
      <Hero />

      {/* Services Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader 
            title="Our Expertise"
            description="Comprehensive web solutions to help your business thrive in the digital world"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>

      <Process />

      <TechStack />

      <CTA />
    </div>
  )
}

export default Page