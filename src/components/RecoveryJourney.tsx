'use client';

import { useState } from 'react';
import * as framerMotion from 'framer-motion';

// Extract the motion component
const { motion } = framerMotion;

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah M.",
    age: 34,
    condition: "Depression & Anxiety",
    quote: "The holistic approach at ReThink changed everything for me. After trying different medications with my previous provider and feeling like a zombie, the team here helped me find the right medication balance while incorporating nutrition and exercise. For the first time in years, I feel like myself again.",
    image: "/images/testimonials/sarah.jpg",
    journey: [
      { stage: "Seeking Help", description: "Sarah reached out after struggling with depression for over 5 years" },
      { stage: "Personalized Plan", description: "Combined medication with nutrition counseling and exercise therapy" },
      { stage: "Progress", description: "Gradually reduced medication as holistic approaches took effect" },
      { stage: "Today", description: "Managing well with minimal medication and continued lifestyle practices" }
    ]
  },
  {
    id: 2,
    name: "Michael R.",
    age: 42,
    condition: "PTSD & Substance Use",
    quote: "As a veteran, I struggled to find treatment that actually worked for my PTSD. The ketamine therapy at ReThink provided relief I hadn't experienced with any other treatment. My substance use decreased as my symptoms improved, and I finally feel hope again.",
    image: "/images/testimonials/michael.jpg",
    journey: [
      { stage: "Crisis Point", description: "Reached out after years of unsuccessfully managing PTSD symptoms" },
      { stage: "Innovative Treatment", description: "Began ketamine therapy combined with trauma-focused counseling" },
      { stage: "Breakthrough", description: "Experienced significant symptom reduction after just 4 sessions" },
      { stage: "Today", description: "Maintains improvements with occasional maintenance sessions" }
    ]
  },
  {
    id: 3,
    name: "Jen K.",
    age: 28,
    condition: "Treatment-Resistant Depression",
    quote: "After failing multiple medication trials and feeling hopeless, the genetic testing at ReThink was life-changing. It revealed why certain medications weren't working for me, and guided my psychiatrist to find options that actually helped. Combined with Spravato treatment, I've found stability I never thought possible.",
    image: "/images/testimonials/jen.jpg",
    journey: [
      { stage: "Exhausted Options", description: "Had tried 7 different medications with minimal improvement" },
      { stage: "Precision Medicine", description: "Genetic testing revealed medication metabolism issues" },
      { stage: "Targeted Treatment", description: "Started on medications matched to genetic profile plus Spravato" },
      { stage: "Today", description: "Maintaining remission with personalized medication plan" }
    ]
  }
];

export function RecoveryJourney() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const current = TESTIMONIALS[activeTestimonial];

  return (
    <section className="wave-top curve-bottom py-20 bg-gradient-to-bl from-white via-primary-50 to-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-neutral-900">Recovery Journeys</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-4 max-w-xl mx-auto text-xl text-neutral-500">
            Real stories from real people on their path to wellness
          </p>
        </motion.div>

        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-lg soft-shadow max-w-5xl mx-auto transform transition-all duration-500">
          <div className="md:grid md:grid-cols-12">
            {/* Image Column - Hidden on mobile */}
            <div className="md:col-span-5 relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900"></div>
              <div className="relative h-full w-full p-8 flex flex-col justify-between text-white z-10">
                <div>
                  <h3 className="text-2xl font-semibold">{current.name}, {current.age}</h3>
                  <p className="text-primary-200 mt-1">{current.condition}</p>
                </div>
                <div className="mt-auto">
                  <div className="flex justify-between items-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveTestimonial((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                      aria-label="Previous testimonial"
                      className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                    >
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </motion.button>
                    <div className="flex space-x-2">
                      {TESTIMONIALS.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveTestimonial(idx)}
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            idx === activeTestimonial ? "bg-white" : "bg-white/30"
                          }`}
                          aria-label={`Go to testimonial ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setActiveTestimonial((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                      aria-label="Next testimonial"
                      className="p-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                    >
                      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-7 p-8 lg:p-10">
              {/* Mobile Header */}
              <div className="flex justify-between items-center mb-6 md:hidden">
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900">{current.name}, {current.age}</h3>
                  <p className="text-neutral-500 text-sm">{current.condition}</p>
                </div>
                <div className="flex space-x-2">
                  {TESTIMONIALS.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonial(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === activeTestimonial ? "bg-gradient-to-r from-primary-600 to-secondary-500" : "bg-neutral-300"
                      }`}
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <motion.div 
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <svg className="w-10 h-10 text-primary-200 mb-2" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-lg text-neutral-700 italic">{current.quote}</p>
              </motion.div>

              {/* Journey Timeline */}
              <motion.div 
                key={`timeline-${current.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10"
              >
                <h4 className="text-md font-medium text-neutral-800 mb-4">Recovery Journey</h4>
                <ol className="relative border-l border-neutral-300">
                  {current.journey.map((step, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                      className="mb-6 ml-6"
                    >
                      <div className="absolute flex items-center justify-center w-7 h-7 bg-gradient-to-r from-primary-600 to-secondary-500 rounded-full -left-3.5 ring-8 ring-white text-white text-xs">
                        {index + 1}
                      </div>
                      <h3 className="font-medium text-neutral-900">{step.stage}</h3>
                      <p className="text-sm text-neutral-600 mt-1">{step.description}</p>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Ready to start your recovery journey?</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8">
            Everyone&apos;s path to mental wellness is unique. Let us help you find yours with personalized care.
          </p>
          <motion.a 
            href="/appointment" 
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center px-6 py-3 font-medium rounded-full shadow-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:from-primary-700 hover:to-secondary-700"
          >
            Schedule Your Consultation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
} 