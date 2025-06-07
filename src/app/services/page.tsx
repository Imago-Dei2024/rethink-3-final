import Link from 'next/link';

// Service data
const services = [
  {
    id: 1,
    title: 'Integrative Psychiatry',
    description: 'Our integrative psychiatry services combine conventional psychiatric treatments with evidence-based complementary approaches to address the whole person—mind, body, and spirit.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    link: '/services/integrative-psychiatry',
  },
  {
    id: 2,
    title: 'Ketamine Therapy',
    description: 'We offer innovative ketamine treatments for depression, anxiety, PTSD, and chronic pain in a comfortable, safe environment under expert supervision.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    link: '/services/ketamine',
  },
  {
    id: 3,
    title: 'Spravato',
    description: 'As a REMS certified center, we provide FDA-approved Spravato (esketamine) nasal spray for treatment-resistant depression, which is covered by most insurance plans.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    link: '/services/spravato',
  },
  {
    id: 4,
    title: 'First Responder Program',
    description: 'Specialized mental health services for first responders, frontline healthcare workers, active duty and retired military personnel, addressing their unique challenges.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    link: '/services/first-responder',
  },
  {
    id: 5,
    title: 'Genetic Testing',
    description: 'Our specialized genetic testing helps identify how your body metabolizes medications, allowing for more personalized and effective treatment plans.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    link: '/services/genetic-testing',
  },
  {
    id: 6,
    title: 'QbTesting for ADHD',
    description: 'Advanced, objective ADHD testing that provides clear measurements of attention, impulsivity, and activity to aid in accurate diagnosis and treatment planning.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: '/services/qb-testing',
  },
  {
    id: 7,
    title: 'Wellness Injections',
    description: 'Micronutrient and vitamin injections designed to support optimal physical and mental health by addressing nutritional deficiencies.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    link: '/wellness/injections',
  },
  {
    id: 8,
    title: 'NAD+ Therapy',
    description: 'NAD+ therapy helps improve cognitive function, energy levels, and cellular health, supporting overall brain health and wellbeing.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    link: '/wellness/nad',
  },
  {
    id: 9,
    title: 'Addiction Treatment',
    description: 'Comprehensive addiction treatment services combining medical management, therapy, and innovative approaches like ketamine-assisted therapy.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    link: '/services/addiction',
  },
  {
    id: 10,
    title: 'Nutrition Counseling',
    description: 'Our nutrition counseling focuses on the powerful connection between diet and mental health, offering personalized guidance for supporting optimal brain function.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    link: '/services/nutrition',
  },
  {
    id: 11,
    title: 'Laboratory & Diagnostic Testing',
    description: 'Comprehensive laboratory, imaging, and diagnostic testing services to identify physiological factors that may be impacting your mental health.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    link: '/services/laboratory-testing',
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero Section - Modern Design */}
      <section className="relative text-white overflow-hidden bg-gradient-to-br from-primary-900 to-secondary-900 py-20 md:py-24">
        {/* Modern geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>
        
        {/* Subtle diagonal line elements */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-tr from-white/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-bl from-white/5 to-transparent"></div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 mb-6 text-sm text-primary-300 font-medium">
              <div className="h-px w-12 bg-primary-400"></div>
              <span className="uppercase tracking-wide">TREATMENTS & APPROACHES</span>
              <div className="h-px w-12 bg-primary-400"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-white">Services</span>
            </h1>
            <p className="mt-4 text-xl max-w-xl mx-auto text-white/80 font-light">
              Comprehensive mental health care tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section - Modern Design */}
      <section className="py-16 md:py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Expert Mental Health <span className="text-primary-600 dark:text-primary-400">Services</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-8 rounded-full"></div>
            <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              At ReThink Mental Health, we offer a comprehensive range of services designed to address 
              the full spectrum of mental health needs. Our approach combines traditional psychiatry 
              with innovative treatments and holistic care.
            </p>
            <p className="mt-6 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
              Each treatment plan is personalized to meet your specific needs and goals, 
              drawing from our diverse array of services and specialties.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid - Modern Design */}
      <section className="py-20 md:py-24 bg-neutral-50 dark:bg-neutral-950">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link 
                href={service.link} 
                key={service.id} 
                className="group"
              >
                <div className="h-full flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                  {/* Card top accent line */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-1 w-full"></div>
                  
                  <div className="p-6 md:p-8 flex flex-col h-full">
                    {/* Service icon */}
                    <div className="mb-5 w-12 h-12 rounded-full bg-primary-600 dark:bg-primary-800 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    
                    {/* Service title */}
                    <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-neutral-600 dark:text-neutral-300 text-base flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Learn more link */}
                    <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex">
                      <div className="text-primary-600 dark:text-primary-400 font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                        Explore
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Section - Modern Design */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="bg-neutral-50 dark:bg-neutral-800/30 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <div className="px-8 py-12">
              <div className="flex flex-col md:flex-row md:items-center gap-8">
                <div className="md:w-2/3">
                  <div className="inline-flex items-center gap-2 mb-4 text-sm text-primary-600 dark:text-primary-400 font-medium">
                    <div className="h-px w-8 bg-primary-500"></div>
                    <span>PAYMENT OPTIONS</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-4">
                    Insurance & Payment Information
                  </h3>
                  <div className="space-y-4 text-neutral-600 dark:text-neutral-300">
                    <p className="text-lg">
                      We accept most major insurance plans, including Aetna, Anthem Blue Cross Blue Shield, Cigna, 
                      United Healthcare, Medicare, and many others. Coverage varies by service and plan.
                    </p>
                    <p className="text-lg">
                      Some of our specialized services, like ketamine therapy, may not be covered by insurance. 
                      We offer transparent pricing and payment options for these services.
                    </p>
                  </div>
                </div>
                
                <div className="md:w-1/3 flex flex-col items-start mt-8 md:mt-0">
                  <div className="flex flex-wrap gap-3 mb-6">
                    {['Aetna', 'Anthem', 'Cigna', 'UnitedHealthcare', 'Medicare'].map((ins, i) => (
                      <div key={i} className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/40 text-sm font-medium text-primary-600 dark:text-primary-400">
                        {ins}
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/faq"
                    className="inline-flex items-center px-6 py-3 rounded-md bg-primary-600 hover:bg-primary-700 text-white transition-colors duration-200 text-base font-medium"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-2">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design */}
      <section className="py-20 text-white overflow-hidden bg-gradient-to-br from-primary-800 to-secondary-800 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <pattern id="cta-pattern" width="15" height="15" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor"/>
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Take the <span className="text-primary-300">First Step</span>?
            </h2>
            <p className="text-xl text-white/80 mb-10 mx-auto">
              Our team is ready to help you find the right services for your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <Link
                href="/appointment"
                className="px-8 py-4 rounded-md bg-white hover:bg-white/90 text-primary-900 font-medium transition-colors duration-300 text-base flex items-center"
              >
                Schedule an Appointment
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-md bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-base"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 