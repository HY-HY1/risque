import { ContactForm } from "@/components/forms/contactForm";

export function ContactSection() {
  return (
    <section className="py-24 m-auto w-[70vw] bg-neutral-50 dark:bg-neutral-950">
      <div className="container px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 md:text-lg">
              Ready to transform your digital presence? Get in touch with us and let's discuss how we can help your business grow online.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-neutral-600 dark:text-neutral-400">sales@risque.org.uk</span>
              </div>
              <div className="flex items-center space-x-3">
                {/* <svg
                  className="w-5 h-5 text-neutral-600 dark:text-neutral-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-neutral-600 dark:text-neutral-400">+1 (555) 123-4567</span> */}
              </div>
            </div>
          </div>
          <div className="p-8 bg-white dark:bg-neutral-900 rounded-2xl shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
} 