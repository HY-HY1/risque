import React from 'react'

interface ServiceCardProps {
  id: string
  title: string
  description: string
  features: string[]
}

const ServiceCard = ({ id, title, description, features }: ServiceCardProps) => {
  return (
    <div id={id} className="scroll-mt-24 group">
      <div className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-950 p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-transparent bg-clip-text mb-4">
          {title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          {description}
        </p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <svg
                className="h-5 w-5 flex-shrink-0 text-blue-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ServiceCard 