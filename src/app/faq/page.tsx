'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        question: "What services does ReThink Mental Health provide?",
        answer: "ReThink Mental Health provides a comprehensive range of mental health services including adult and pediatric psychiatric evaluation, treatment, and medication management; specialized care for first responders, frontline healthcare workers, and military personnel; genetic testing; ketamine therapy; Spravato intranasal ketamine; addiction treatment; micronutrient and vitamin injections; nutrition counseling; and more."
      },
      {
        question: "What age groups do you treat?",
        answer: "We care for patients ages 6 and up. We respect and value a person's experience in all stages and walks of life."
      },
      {
        question: "How do I schedule an appointment?",
        answer: "You can schedule an appointment by calling our office at 303-406-0784, using our online booking system through the Patient Portal, or contacting us through the Appointment page on our website."
      },
      {
        question: "Do you offer telehealth services?",
        answer: "Yes, we provide both in-person and telehealth mental health services to accommodate your needs and preferences."
      }
    ]
  },
  {
    category: 'Insurance and Payment',
    questions: [
      {
        question: "What insurance plans do you accept?",
        answer: "We accept a wide range of insurance plans including Aetna, Anthem Blue Cross Blue Shield, Cigna, United Healthcare, Medicare, Tricare, and many others. Please contact our office for a complete and current list of accepted insurance plans."
      },
      {
        question: "Is Ketamine therapy covered by insurance?",
        answer: "While traditional ketamine therapy (IM/SQ) is typically not covered by insurance, Spravato (intranasal esketamine) is FDA-approved for treatment-resistant depression and is covered by most private insurance plans. We can help you navigate insurance coverage and authorization processes."
      },
      {
        question: "What payment options do you offer?",
        answer: "We accept cash, credit cards, HSA/FSA accounts, and offer various payment plans. For services not covered by insurance, we provide transparent pricing and will discuss all costs before treatment begins."
      }
    ]
  },
  {
    category: 'Ketamine and Spravato Therapy',
    questions: [
      {
        question: "What is ketamine therapy and how does it work?",
        answer: "Ketamine is a medication that has been shown to rapidly reduce symptoms of depression, anxiety, PTSD, and certain pain conditions. It works differently than traditional antidepressants by targeting the glutamate system in the brain rather than serotonin, which allows for more rapid relief of symptoms, often within hours or days rather than weeks."
      },
      {
        question: "What is the difference between Spravato and other forms of ketamine therapy?",
        answer: "Spravato (esketamine) is an FDA-approved nasal spray derived from ketamine, specifically approved for treatment-resistant depression. We also offer intramuscular (IM) and subcutaneous (SQ) ketamine treatments. The main differences are in administration method, insurance coverage (Spravato is often covered), and slight variations in the experience and efficacy for different conditions."
      },
      {
        question: "What conditions can be treated with ketamine therapy?",
        answer: "Ketamine therapy has shown effectiveness for treatment-resistant depression, anxiety disorders, PTSD, OCD, certain chronic pain conditions, and substance use disorders. Each person's response is unique, and we develop personalized treatment plans based on your specific needs."
      },
      {
        question: "What can I expect during a ketamine treatment session?",
        answer: "Treatment sessions typically last 1-2 hours. You'll be in a comfortable, private room with monitoring throughout the session. Most patients report a relaxed, sometimes mildly dissociative experience. Our staff provides support before, during, and after your session. You'll need someone to drive you home afterward, as you should not drive for 24 hours following treatment."
      },
      {
        question: "Is ketamine therapy safe?",
        answer: "When administered in a controlled medical setting by trained professionals, ketamine therapy is considered safe. We conduct thorough evaluations before beginning treatment, monitor you throughout the process, and have emergency protocols in place. Side effects are typically mild and temporary."
      }
    ]
  },
  {
    category: 'First Responder Program',
    questions: [
      {
        question: "What specialized services do you offer for first responders?",
        answer: "Our First Responder Program provides tailored mental health services that address the unique stressors and experiences of police officers, firefighters, paramedics, EMTs, and other emergency personnel. We offer trauma-informed care, specialized PTSD treatments, and confidential evaluation and treatment."
      },
      {
        question: "Do you also provide services for military personnel?",
        answer: "Yes, we provide specialized mental health services for both active duty and retired military personnel, with a focus on addressing combat-related trauma, PTSD, depression, anxiety, and adjustment issues."
      }
    ]
  },
  {
    category: 'Genetic Testing and Treatment Approaches',
    questions: [
      {
        question: "What is genetic testing and how does it help with treatment?",
        answer: "Genetic testing analyzes your genetic profile to identify how your body might metabolize certain medications. This helps us select medications that are more likely to be effective with fewer side effects, reducing the trial-and-error approach often used in psychiatry."
      },
      {
        question: "What is your approach to integrative psychiatry?",
        answer: "Our integrative approach combines conventional psychiatry with complementary therapies. We focus on the whole person—mind, body, and spirit—and may incorporate nutritional guidance, lifestyle modifications, supplements, and other holistic strategies alongside traditional medical treatments when appropriate."
      }
    ]
  },
  {
    category: 'Wellness Services',
    questions: [
      {
        question: "What micronutrient and vitamin injections do you offer?",
        answer: "We offer various micronutrient injections including vitamin B12, vitamin D, methylated B vitamins, and specialized formulations to support mood, energy, immune function, and overall wellness. These can be tailored to your specific needs based on lab work and symptoms."
      },
      {
        question: "What is NAD+ therapy and what benefits does it provide?",
        answer: "NAD+ (Nicotinamide Adenine Dinucleotide) therapy involves administering this essential coenzyme that plays a crucial role in cellular energy production and repair. Benefits may include improved cognitive function, increased energy, reduction in cravings (for those with substance use issues), and support for overall brain health."
      }
    ]
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('General');
  const [openQuestions, setOpenQuestions] = useState<Record<string, boolean>>({});

  const toggleQuestion = (question: string) => {
    setOpenQuestions(prev => ({
      ...prev,
      [question]: !prev[question]
    }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Find answers to common questions about our services, treatments, and approaches.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Category navigation */}
          <div className="md:w-1/3">
            <div className="sticky top-8 bg-white shadow rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-2">
                {faqs.map((category) => (
                  <button
                    key={category.category}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeCategory === category.category
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveCategory(category.category)}
                  >
                    {category.category}
                  </button>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                >
                  <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Have another question? Contact us
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ content */}
          <div className="md:w-2/3">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{activeCategory}</h2>
                <div className="space-y-6">
                  {faqs
                    .find(cat => cat.category === activeCategory)
                    ?.questions.map((faq, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <button
                          onClick={() => toggleQuestion(faq.question)}
                          className="flex justify-between items-start w-full text-left"
                        >
                          <h3 className="text-lg font-medium text-gray-900 pr-8">{faq.question}</h3>
                          <span className="ml-6 h-7 flex items-center">
                            <svg
                              className={`h-6 w-6 transform ${openQuestions[faq.question] ? '-rotate-180' : 'rotate-0'}`}
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </span>
                        </button>
                        <div
                          className={`mt-2 prose prose-blue text-gray-500 ${
                            openQuestions[faq.question] ? 'block' : 'hidden'
                          }`}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            {activeCategory === 'Insurance and Payment' && (
              <div className="mt-8 bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-medium text-blue-800 mb-4">Accepted Insurance Plans</h3>
                <p className="text-blue-700 mb-4">
                  We accept most major insurance plans. Below is a list of some of the insurance providers we work with:
                </p>
                <div className="grid grid-cols-2 gap-2 text-blue-600">
                  <div>• Aetna</div>
                  <div>• Anthem Blue Cross Blue Shield</div>
                  <div>• Cigna</div>
                  <div>• United Healthcare</div>
                  <div>• Medicare</div>
                  <div>• Medicaid</div>
                  <div>• Tricare</div>
                  <div>• Humana</div>
                  <div>• Kaiser (for Spravato)</div>
                  <div>• And many others</div>
                </div>
                <p className="mt-4 text-blue-700">
                  Insurance coverage varies by plan and service. Please contact our office at 303-406-0784 for verification of your specific benefits.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
          <Link
            href="/appointment"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Schedule an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
} 