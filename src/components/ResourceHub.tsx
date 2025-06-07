'use client';

import Link from 'next/link';
import { useState } from 'react';
import * as framerMotion from 'framer-motion';

// Extract the motion component
const { motion } = framerMotion;

// Resource categories and items
const RESOURCES = [
  {
    id: 'education',
    name: 'Educational Resources',
    description: 'Learn about mental health conditions, treatments, and recovery',
    items: [
      {
        title: 'Understanding Depression',
        description: 'An overview of depression symptoms, causes, and treatment options',
        link: '#',
        type: 'Article'
      },
      {
        title: 'Anxiety Disorders Explained',
        description: 'Different types of anxiety disorders and how they affect daily life',
        link: '#',
        type: 'Guide'
      },
      {
        title: 'The Science of PTSD',
        description: 'How trauma affects the brain and evidence-based treatments',
        link: '#',
        type: 'Research Summary'
      },
      {
        title: 'Medication Basics',
        description: 'Common psychiatric medications, how they work, and what to expect',
        link: '#',
        type: 'Guide'
      },
      {
        title: 'Therapy Approaches',
        description: 'Different therapy modalities and finding the right approach for you',
        link: '#',
        type: 'Article'
      }
    ]
  },
  {
    id: 'self-help',
    name: 'Self-Help Tools',
    description: 'Resources to support your mental wellness journey',
    items: [
      {
        title: 'Mood Tracking Journal',
        description: 'Downloadable journal to track mood patterns and identify triggers',
        link: '#',
        type: 'Downloadable PDF'
      },
      {
        title: 'Mindfulness Meditation Audio',
        description: 'Guided meditation sessions for anxiety and stress reduction',
        link: '#',
        type: 'Audio'
      },
      {
        title: 'Sleep Hygiene Checklist',
        description: 'Improve your sleep quality with these evidence-based tips',
        link: '#',
        type: 'Checklist'
      },
      {
        title: 'Crisis Plan Template',
        description: 'Create a personalized plan for managing mental health crises',
        link: '#',
        type: 'Interactive Tool'
      },
      {
        title: 'Wellness Action Workbook',
        description: 'Step-by-step workbook for creating a personalized wellness plan',
        link: '#',
        type: 'Workbook'
      }
    ]
  },
  {
    id: 'assessments',
    name: 'Self-Assessments',
    description: 'Screening tools to help identify potential concerns',
    items: [
      {
        title: 'Depression Screening (PHQ-9)',
        description: 'Standardized screening tool for depressive symptoms',
        link: '#',
        type: 'Assessment'
      },
      {
        title: 'Anxiety Assessment (GAD-7)',
        description: 'Screen for generalized anxiety disorder symptoms',
        link: '#',
        type: 'Assessment'
      },
      {
        title: 'PTSD Checklist (PCL-5)',
        description: 'Screening tool for symptoms of post-traumatic stress',
        link: '#',
        type: 'Assessment'
      },
      {
        title: 'Substance Use Questionnaire (CAGE-AID)',
        description: 'Brief screening for potential substance use concerns',
        link: '#',
        type: 'Assessment'
      },
      {
        title: 'Bipolar Spectrum Diagnostic Scale',
        description: 'Self-report tool to screen for bipolar spectrum symptoms',
        link: '#',
        type: 'Assessment'
      }
    ]
  },
  {
    id: 'support',
    name: 'Support Networks',
    description: 'Connect with others for support and shared experiences',
    items: [
      {
        title: 'National Crisis Hotlines',
        description: 'Emergency resources for immediate mental health support',
        link: '#',
        type: 'Hotlines'
      },
      {
        title: 'Online Support Communities',
        description: 'Moderated online forums for peer support',
        link: '#',
        type: 'Communities'
      },
      {
        title: 'Family Support Resources',
        description: 'Resources for family members of those with mental health conditions',
        link: '#',
        type: 'Guide'
      },
      {
        title: 'Local Support Groups',
        description: 'Find in-person support groups in your area',
        link: '#',
        type: 'Directory'
      },
      {
        title: 'Recovery Stories',
        description: 'Personal accounts of recovery and hope',
        link: '#',
        type: 'Testimonials'
      }
    ]
  }
];

export function ResourceHub() {
  const [activeCategory, setActiveCategory] = useState('education');

  const activeResources = RESOURCES.find(category => category.id === activeCategory);

  return (
    <section className="curve-top wave-bottom py-20 bg-gradient-to-tr from-secondary-50 via-white to-primary-50">
      <div className="section-container">
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="heading-2 text-neutral-900">Mental Health Resource Hub</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-4 max-w-xl mx-auto text-xl text-neutral-500">
            Access trusted resources, tools, and information to support your mental health journey
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {RESOURCES.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ease-in-out
                ${activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100 hover:shadow-md'
                }`}
              aria-current={activeCategory === category.id ? 'page' : undefined}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Resource Description */}
        {activeResources && (
          <div className="mb-8 text-center">
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {activeResources.description}
            </p>
          </div>
        )}

        {/* Resource Cards */}
        {activeResources && (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activeResources.items.map((resource, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="card-rounded bg-white/90 backdrop-blur-sm p-6 rounded-3xl shadow-soft hover:shadow-lg transition-all duration-300 border border-neutral-100"
              >
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-medium rounded-full" style={{
                    background: `linear-gradient(to right, var(--color-primary-100), var(--color-secondary-100))`,
                    color: `var(--color-primary-800)`
                  }}>
                    {resource.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">{resource.title}</h3>
                <p className="text-neutral-600 mb-4">{resource.description}</p>
                <Link 
                  href={resource.link} 
                  className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group"
                >
                  Access resource
                  <svg className="ml-1 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-primary-50/80 to-secondary-50/80 backdrop-blur-sm rounded-3xl p-8 max-w-3xl mx-auto border border-white/30 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-neutral-900 mb-4">Need personalized guidance?</h3>
            <p className="text-neutral-600 mb-6">
              Our team is here to help you navigate these resources and create a personalized treatment plan that meets your unique needs.
            </p>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <Link href="/appointment" className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-6 py-3 rounded-full inline-flex items-center font-medium shadow-md hover:shadow-lg transition-all duration-300">
                Schedule a Consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="mt-10 text-sm text-neutral-500 text-center">
          <p>
            Note: These resources are provided for educational purposes only and are not a substitute for professional medical advice, 
            diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have.
          </p>
        </div>
      </div>
    </section>
  );
} 