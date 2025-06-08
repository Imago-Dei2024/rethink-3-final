"use client";

import Link from 'next/link'; // Next.js Link component
import { MentalHealthStats } from '@/components/MentalHealthStats'; // from @/components/MentalHealthStats
import { TreatmentComparison } from '@/components/TreatmentComparison'; // from @/components/TreatmentComparison
import { ResourceHub } from '@/components/ResourceHub'; // from @/components/ResourceHub
import { MentalHealthFAQ } from '@/components/MentalHealthFAQ'; // from @/components/MentalHealthFAQ
import { RecoveryJourney } from '@/components/RecoveryJourney'; // from @/components/RecoveryJourney
import ImageGallery from '@/components/ui/ImageGallery'; // from @/components/ui/ImageGallery
import * as framerMotion from 'framer-motion'; // Animation library

// Extract the motion component
const { motion } = framerMotion;
import { WideSection } from '@/components/layout/WideSection'; // from @/components/layout/WideSection


export default function Home() {
  // Office images for gallery - START image data array
  const officeImages = [
    {
      src: '/images/office/office-1.jpg',
      alt: 'ReThink office',
      width: 800,
      height: 600 
    },
    {
      src: '/images/office/office-2.jpg',
      alt: 'Treatment room',
      width: 800,
      height: 600
    },
    {
      src: '/images/office/office-3.jpg',
      alt: 'Waiting area',
      width: 800,
      height: 600
    }
  ]; // END image data array

  return (
    <div className="min-h-screen"> {/* START main container */}
      {/* Hero Section - Inspired by Rivian's clean modern design */}
      <section className="relative text-white min-h-[80vh] flex items-center overflow-hidden"> {/* START Hero Section */} {/* This is where you'd adjust the height of the main hero section */}
        {/* Background with subtle gradient */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0" 
          >
            <source src="/videos/Hero-Intro.mp4" type="video/mp4" /> 
            Your Browser does not support this video tag.  
          </video>
        

        

        <div className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-8 py-16 md:py-24 lg:py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-8"> {/* START hero content container */}
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-1/2 z-10"
          > {/* START left side text content - framer-motion */}
            <div className="flex items-center gap-2 mb-6"> {/* START top badge */}
              <div className="h-px w-10 bg-primary-400"></div>
              <p className="text-white/95 font-medium tracking-wider text-sm uppercase">Mental Health & Wellness</p>
            </div> {/* END top badge */}
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            > {/* START main heading - framer-motion */}
              <span className="block text-white/90">Welcome to</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-white/90">
                ReThink Mental Health
              </span>
            </motion.h1> {/* END main heading */}

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 max-w-xl mb-10 font-light leading-relaxed"
            > {/* START description paragraph - framer-motion */}
              Expert psychiatry and medication management with integrative approaches. Our doors are open to everyone.
            </motion.p> {/* END description paragraph */}

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-5"
            > {/* START CTA buttons container - framer-motion */}
              <Link href="/appointment" passHref> {/* START appointment button link - Next.js Link */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}> {/* motion wrapper */}
                  <button className="px-8 py-4 rounded-md bg-white hover:bg-blue-300 text-primary-900 font-medium transition-all duration-300 flex items-center gap-2 text-lg">
                    Book Appointment
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-1">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </motion.div>
              </Link> {/* END appointment button link */}
              <Link href="/services" passHref> {/* START services button link - Next.js Link */}
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}> {/* motion wrapper */}
                  <button className="px-8 py-4 rounded-md bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-lg">
                    Our Services
                  </button>
                </motion.div>
              </Link> {/* END services button link */}
            </motion.div> {/* END CTA buttons container */}
            
            {/* Key features badges - modern and minimal */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-10 flex flex-wrap gap-3"
            > {/* START feature badges - framer-motion */}
              {["Holistic Care", "Personalized Therapy", "Innovative Approaches"].map((badge, i) => (
                <div key={i} className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-white/90">
                  {badge}
                </div>
              ))}
            </motion.div> {/* END feature badges */}
          </motion.div> {/* END left side text content */}
          
        </div> {/* END hero content container */}
        
        {/* Modern scroll indicator */}
        <motion.div 
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center"
        > {/* START scroll indicator - framer-motion */}
          <span className="text-white/70 text-sm mb-2 font-light tracking-wide">Scroll to explore</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div> {/* END scroll indicator */}
      </section> {/* END Hero Section */}

      {/* Mental Health Statistics Section - Modern Shopify-inspired design */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-950 overflow-hidden"> {/* START Mental Health Statistics Section */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8"> {/* container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          > {/* START section header - framer-motion */}
            <div className="inline-flex items-center gap-2 mb-6 text-sm text-primary-600 dark:text-primary-400 font-medium"> {/* badge */}
              <div className="h-px w-12 bg-primary-600 dark:bg-primary-400"></div>
              <span>THE NUMBERS</span>
              <div className="h-px w-12 bg-primary-600 dark:bg-primary-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4"> {/* section title */}
              Making a <span className="text-primary-600 dark:text-primary-400">difference</span> in mental healthcare
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto"> {/* section description */}
              Our evidence-based approaches are helping people regain control of their mental health
            </p>
          </motion.div> {/* END section header */}
          
          <MentalHealthStats /> {/* from @/components/MentalHealthStats */}
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-16 text-center"
          > {/* START disclaimer - framer-motion */}
            <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-2xl mx-auto">
              Statistics based on most recent available data as of 2023. 
              For more detailed information, please visit the respective organizations websites.
            </p>
          </motion.div> {/* END disclaimer */}
        </div>
      </section> {/* END Mental Health Statistics Section */}

      {/* Mission Statement with Enhanced UI */}
      <WideSection 
        bgColor="bg-gradient-to-b from-primary-50 via-white/90 to-white" 
        className="py-20"
        fullWidth
        gradientBg
        dividerTop="wave"
        rounded
        animate
      > {/* START Mission Statement Section - from @/components/layout/WideSection */}
        <div className="relative"> {/* section container */}
          <div className="text-center mb-16"> {/* START section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4"
            > {/* header content - framer-motion */}
              <span className="badge badge-primary bg-primary-100 text-primary-700 border-primary-200 font-medium py-3 px-4 rounded-lg">Our Purpose</span>
              <h2 className="heading-2 text-neutral-900 mt-4">
                Our <span className="text-gradient font-bold">Mission</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto my-6 rounded-full"></div>
              <p className="max-w-xl mx-auto text-xl text-neutral-600 font-light">
                Why we do what we do
              </p>
            </motion.div>
          </div> {/* END section header */}
          
          {/* New Grid Layout for Videos and Text/Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start"> {/* START mission content grid */}

            {/* Item 1: Video 1 (students.mp4) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl overflow-hidden shadow-lg aspect-[5/4]" 
            > {/* START video 1 container - framer-motion */}
              <video 
                src="/videos/students.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
                aria-label="Students in a classroom setting"
              /> {/* students video */}
            </motion.div> {/* END video 1 container */}

            {/* Item 2: Text and Stats Block */}
            <div className="w-full text-neutral-700"> {/* START text and stats block */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="glass-panel p-8 rounded-2xl"
                > {/* START mission text panel - framer-motion */}
                  <p className="text-lg leading-relaxed">
                    At <span className="text-primary-600 font-semibold">ReThink Mental Health</span>, our mission is to transform behavioral health care through a compassionate, 
                    holistic, and patient-centered approach. We believe that everyone matters and are committed to providing 
                    a safe, inclusive space where all individuals can find support, understanding, and empowerment. 
                  </p>
                  <p className="text-lg mt-6 leading-relaxed">
                    Our dedicated team offers personalized care that respects the unique journey of each person, fostering well-being 
                    and resilience in a nurturing environment. Together, we work to <span className="text-primary-600 font-semibold">ReThink</span> and redefine mental health services, 
                    ensuring that our doors are always open to everyone.
                  </p>
                </motion.div> {/* END mission text panel */}
                
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"> {/* START stats grid */}
                  {[
                    { value: '100+', label: 'Clients Helped Monthly', icon: 'users', delay: 0 },
                    { value: '5+', label: 'Years Experience', icon: 'calendar', delay: 0.1 },
                    { value: '15+', label: 'Treatment Options', icon: 'activity', delay: 0.2 }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: stat.delay + 0.35 }}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="card bg-white rounded-xl shadow-soft hover:shadow-md transition-all duration-300 border border-neutral-100 overflow-hidden"
                    >
                      <div className="card-body p-6 text-center">
                        <div className="mx-auto bg-primary-100 text-primary-600 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                          {stat.icon === 'users' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                          )}
                          {stat.icon === 'calendar' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          )}
                          {stat.icon === 'activity' && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
                          )}
                        </div>
                        <div className="stat-value text-3xl font-bold text-primary-700">{stat.value}</div>
                        <div className="stat-desc text-sm text-neutral-600 mt-1 font-medium">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* END stats grid */}
              </div>
            </div>
            {/* END text and stats block */} {/* END text and stats block */}

            {/* Item 3: Video 2 (joyful-hugging.mp4) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.15 }} 
              className="rounded-3xl overflow-hidden shadow-lg aspect-[5/4]" 
            > {/* START video 2 container - framer-motion */}
              <video 
                src="/videos/joyful-hugging.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
                aria-label="Two people joyfully hugging"
              /> {/* joyful-hugging video */}
            </motion.div> {/* END video 2 container */}

            {/* Item 4: Video 3 (old-couple.mp4) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.25 }} 
              className="rounded-3xl overflow-hidden shadow-lg aspect-[5/4]" 
            > {/* START video 3 container - framer-motion */}
              <video 
                src="/videos/old-couple.mp4" 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover" 
                aria-label="Old couple sitting together in a park"
              /> {/* old-couple video */}
            </motion.div> {/* END video 3 container */}
            
          </div> {/* END mission content grid */}
        </div>
      </WideSection> {/* END Mission Statement Section */}

      {/* What Makes Us Different - Enhanced with daisyUI */}
      <WideSection 
        bgColor="bg-gradient-to-br from-white via-secondary-50/30 to-white" 
        className="py-24"
        fullWidth
        animate
        dividerTop="curve"
      > {/* START What Makes Us Different Section - from @/components/layout/WideSection */}
        <div className="relative"> {/* section container */}
          <div className="text-center mb-16"> {/* START section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="badge badge-secondary bg-secondary-100 text-secondary-700 border-secondary-200 font-medium py-3 px-4 rounded-lg">Our Approach</span>
              <h2 className="heading-2 text-neutral-900 mt-4">
                What Makes Us <span className="text-gradient font-bold">Different</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-500 mx-auto my-6 rounded-full"></div>
              <p className="mt-4 max-w-xl mx-auto text-xl text-neutral-600 font-light">
                Our unique approach to mental healthcare
              </p>
            </motion.div> {/* END section header - framer-motion */}
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12 px-4"> {/* START features grid */}
            {[
              {
                title: 'Holistic Treatment',
                iconColor: 'text-emerald-500',
                icon: 'shield-check',
                description: 'We address the whole person—mind, body, and spirit—by combining conventional psychiatric treatments with evidence-based complementary approaches for comprehensive care.',
                link: '/services',
                linkText: 'Learn more about our approach',
                bgColor: 'bg-emerald-50',
                delay: 0.1
              },
              {
                title: 'Personalized Care',
                iconColor: 'text-blue-500',
                icon: 'fingerprint',
                description: 'Our treatment plans are tailored to your unique needs, preferences, and goals, considering your biological makeup, lifestyle factors, and personal history.',
                link: '/services',
                linkText: 'Explore personalized treatments',
                bgColor: 'bg-blue-50',
                delay: 0.2
              },
              {
                title: 'Innovative Treatments',
                iconColor: 'text-purple-500',
                icon: 'lightbulb',
                description: 'We offer cutting-edge treatments backed by scientific research, including Ketamine-Assisted Therapy, NAD+ IV Therapy, and Spravato (Esketamine) for treatment-resistant depression.',
                link: '/services',
                linkText: 'Discover our innovative approaches',
                bgColor: 'bg-purple-50',
                delay: 0.3
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: feature.delay, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group h-full"
              > {/* START feature card - framer-motion */}
                <div className={`card glass-panel h-full transition-all duration-300 overflow-hidden border-t-4 ${feature.iconColor.replace('text-', 'border-')}`}>
                  <div className="card-body p-8">
                    <div className="flex flex-col space-y-6">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 ${feature.bgColor} ${feature.iconColor} rounded-xl p-4 transition-colors duration-300`}>
                          {feature.icon === 'shield-check' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          )}
                          {feature.icon === 'fingerprint' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                            </svg>
                          )}
                          {feature.icon === 'lightbulb' && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                          )}
                        </div>
                        <h3 className="ml-4 text-2xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">{feature.title}</h3>
                      </div>
                      <p className="text-neutral-600 text-lg leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
                        <Link href={feature.link} className={`group/link inline-flex items-center font-medium ${feature.iconColor} hover:underline gap-1`}>
                          <span>{feature.linkText}</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover/link:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/* END features grid */}
        </div>
      </WideSection>
      {/* END What Makes Us Different Section */} {/* END What Makes Us Different Section */}

      {/* Office and Facilities Image Gallery - Enhanced with Optimized Loading */}
      <WideSection 
        bgColor="bg-gradient-to-b from-white via-neutral-50 to-white" 
        className="py-20"
        fullWidth
        animate
        shadow
        dividerBottom="wave"
      > {/* START Office and Facilities Image Gallery Section - from @/components/layout/WideSection */}
        <div className="relative"> {/* section container */}
          <div className="text-center mb-16"> {/* START section header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            > {/* START section header - framer-motion */}
              <span className="badge badge-primary bg-primary-100 text-primary-700 border-primary-200 font-medium py-3 px-4 rounded-lg">Our Space</span>
              <h2 className="heading-2 text-neutral-900 mt-4">
                Modern <span className="text-gradient font-bold">Facilities</span>
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto my-6 rounded-full"></div>
              <p className="max-w-xl mx-auto text-xl text-neutral-600 font-light">
                Take a virtual tour of our calm, welcoming treatment spaces
              </p>
            </motion.div> {/* END section header - framer-motion */}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl"
          > {/* START image gallery container - framer-motion */}
            <div className="card card-compact glass-panel border-none overflow-hidden"> {/* START gallery card */}
              <div className="card-body p-0"> {/* card body */}
                {/* LazyLoaded Image Gallery */}
                <motion.div
                  whileInView={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, margin: "-100px" }}
                > {/* START image gallery wrapper - framer-motion */}
                  <ImageGallery 
                    images={officeImages} 
                    className="rounded-xl overflow-hidden"
                  /> {/* ImageGallery component - from @/components/ui/ImageGallery */}
                </motion.div> {/* END image gallery wrapper */}
                <div className="p-6"> {/* card footer */}
                  <motion.div 
                    className="flex flex-wrap gap-4 justify-center"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1
                        }
                      }
                    }}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  > {/* START badges container - framer-motion */}
                    {[
                      "Comfortable Environment",
                      "Private Treatment Rooms",
                      "Modern Design",
                      "Calming Aesthetics"
                    ].map((badge, index) => (
                      <motion.div 
                        key={index}
                        className="badge badge-outline badge-lg p-3"
                        variants={{
                          hidden: { y: 10, opacity: 0 },
                          show: { y: 0, opacity: 1 }
                        }}
                      > {/* individual facility badge - framer-motion */}
                        {badge}
                      </motion.div>
                    ))}
                  </motion.div> {/* END badges container */}
                </div> {/* END card footer */}
              </div>
            </div> {/* END gallery card */}
          </motion.div> {/* END image gallery container */}
        </div>
      </WideSection> {/* END Office and Facilities Image Gallery Section */}

      {/* Treatment comparison section - Lazy loaded with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="my-20"
      > {/* START Treatment Comparison Section wrapper - framer-motion */}
        <TreatmentComparison /> {/* TreatmentComparison component - from @/components/TreatmentComparison */}
      </motion.div> {/* END Treatment Comparison Section wrapper */}

      {/* Resource hub - Lazy loaded with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="my-20"
      > {/* START Resource Hub Section wrapper - framer-motion */}
        <ResourceHub /> {/* ResourceHub component - from @/components/ResourceHub */}
      </motion.div> {/* END Resource Hub Section wrapper */}

      {/* FAQs - Lazy loaded with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="my-20"
      > {/* START Mental Health FAQ Section wrapper - framer-motion */}
        <MentalHealthFAQ /> {/* MentalHealthFAQ component - from @/components/MentalHealthFAQ */}
      </motion.div> {/* END Mental Health FAQ Section wrapper */}

      {/* Recovery journey - Lazy loaded with animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="my-20"
      > {/* START Recovery Journey Section wrapper - framer-motion */}
        <RecoveryJourney />
      </motion.div>
    </div>
  );
}