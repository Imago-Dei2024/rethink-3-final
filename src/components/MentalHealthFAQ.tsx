'use client';

import React, { useState } from 'react';
import * as framerMotion from 'framer-motion';

// Extract the components
const { motion, AnimatePresence } = framerMotion;

const FAQS = [
  {
    id: 'signs',
    question: 'What are the signs I might need professional mental health support?',
    answer: `Common signs include persistent sadness or anxiety, significant changes in sleep or appetite, withdrawal from activities and relationships you once enjoyed, difficulty concentrating, feelings of hopelessness, or thoughts of harming yourself. Physical symptoms like headaches, digestive issues, or fatigue with no clear medical cause can also indicate mental health concerns. If these symptoms persist for more than two weeks or interfere with your daily functioning, it's advisable to seek professional help.`
  },
  {
    id: 'medication',
    question: 'How do I know if medication is right for my mental health condition?',
    answer: `Medication decisions are highly individual and depend on your specific diagnosis, symptom severity, medical history, and personal preferences. Medications are often most beneficial for moderate to severe conditions or when symptoms significantly impact daily functioning. The best approach is a thorough evaluation with a psychiatric provider who can discuss potential benefits, risks, and alternatives based on your unique situation. Many people find optimal results with a combination of medication and therapy rather than medication alone.`
  },
  {
    id: 'therapy-types',
    question: 'What are the different types of therapy and how do I know which is best for me?',
    answer: `Common evidence-based therapies include Cognitive Behavioral Therapy (CBT) for changing negative thought patterns, Dialectical Behavior Therapy (DBT) for emotional regulation and distress tolerance, Psychodynamic therapy for exploring unconscious patterns, EMDR for trauma processing, and Interpersonal therapy for relationship issues. The "best" therapy depends on your specific concerns, goals, and personal preferences. Many therapists use an integrative approach, combining elements from different modalities. An initial consultation with a therapist can help determine which approach might be most effective for your situation.`
  },
  {
    id: 'insurance',
    question: 'Will my insurance cover mental health treatment?',
    answer: `Most insurance plans now cover mental health services due to mental health parity laws, though coverage varies by plan. Check with your insurance provider about specific benefits, in-network providers, coverage limits, and any required referrals or authorizations. Ask about coverage for both therapy and psychiatric medication management. Our office staff can help verify your benefits before your first appointment and discuss payment options if you have limited coverage or are uninsured.`
  },
  {
    id: 'first-appointment',
    question: 'What should I expect during my first appointment?',
    answer: `Your first appointment typically lasts 45-60 minutes and focuses on gathering information to understand your concerns and develop an appropriate treatment plan. The provider will ask about your current symptoms, medical and mental health history, family history, medications, substance use, and treatment goals. It's helpful to prepare by noting key symptoms, their timeline, and any questions you have. You'll also complete some paperwork about your history and symptoms. This initial assessment helps determine the best approach for your specific needs, whether that includes medication, therapy recommendations, or other treatments.`
  },
  {
    id: 'lifestyle',
    question: 'Beyond medication and therapy, what lifestyle changes can help improve mental health?',
    answer: `Evidence shows several lifestyle factors significantly impact mental health: Regular physical activity (even walking 30 minutes daily), consistent sleep habits, balanced nutrition with whole foods, stress management techniques like mindfulness or deep breathing, limited alcohol and caffeine, social connection and community involvement, time in nature, and engaging in meaningful activities. While not replacements for professional treatment in serious conditions, these approaches can complement treatment and help maintain mental wellness. Our integrative approach incorporates these evidence-based lifestyle modifications alongside conventional treatments.`
  },
  {
    id: 'support-person',
    question: 'How can I support a loved one with a mental health condition?',
    answer: `Supporting a loved one involves educating yourself about their condition, listening without judgment, encouraging professional help when needed, respecting their treatment decisions, and avoiding critical language. Recognize warning signs of crisis and know emergency resources. Set healthy boundaries to prevent caregiver burnout. Small gestures of support like helping with daily tasks can be valuable. Remember that recovery isn't linear, and your consistent support matters even when progress seems slow. Consider attending family therapy or support groups for guidance on being an effective support person.`
  },
  {
    id: 'crisis',
    question: 'What should I do in a mental health crisis or emergency?',
    answer: `If you or someone you know is having thoughts of suicide or self-harm, call or text 988 (Suicide & Crisis Lifeline) for immediate 24/7 support. For life-threatening emergencies, call 911 or go to your nearest emergency room. If not in immediate danger but experiencing an urgent mental health concern, contact your mental health provider for emergency guidance or use their after-hours service. Our practice provides crisis support for established patients and can help you develop a personalized crisis plan during regular treatment to prepare for potential future crises.`
  }
];

export function MentalHealthFAQ() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <section className="wave-top curve-bottom py-20 bg-gradient-to-bl from-secondary-50 via-white to-primary-50 overflow-hidden">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-neutral-900">Frequently Asked Questions</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-secondary-500 to-primary-600 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-4 max-w-xl mx-auto text-xl text-neutral-500">
            Common questions about mental health treatment
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-5">
            {FAQS.map((faq, index) => (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl border border-neutral-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="border-none">
                  <button 
                    onClick={() => toggleFaq(faq.id)}
                    className={`w-full flex justify-between items-center cursor-pointer p-6 text-lg font-medium text-neutral-900 transition-colors ${openFaq === faq.id ? 'bg-gradient-to-r from-primary-50 to-secondary-50/40' : index % 2 === 0 ? 'bg-gradient-to-r from-primary-50/30 to-white' : 'bg-gradient-to-r from-secondary-50/30 to-white'}`}
                    aria-expanded={openFaq === faq.id}
                  >
                    <span className="text-left pr-4">{faq.question}</span>
                    <motion.span 
                      animate={{ rotate: openFaq === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-neutral-500"
                      >
                        <path 
                          d="M6 9L12 15L18 9" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                        />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-neutral-600">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-neutral-600">
            Still have questions? We&apos;re here to help.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <motion.a 
              href="/contact" 
              whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-transparent border font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] bg-gradient-to-r from-white to-white hover:from-primary-50 hover:to-primary-50 border-primary-600 text-primary-600"
            >
              Contact Us
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 