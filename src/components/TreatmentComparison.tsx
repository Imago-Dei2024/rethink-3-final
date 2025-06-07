'use client';

import { useState } from 'react';
import * as framerMotion from 'framer-motion';

// Extract the motion component
const { motion } = framerMotion;

const TREATMENTS = [
  {
    id: 'medication',
    name: 'Psychiatric Medication',
    description: 'FDA-approved pharmaceuticals that target neurotransmitters and brain function to alleviate symptoms.',
    effectiveness: {
      depression: 'High (50-65% response rate)',
      anxiety: 'High (60-70% response rate)',
      ptsd: 'Moderate (40-60% response rate)',
      bipolar: 'High (60-80% for mood stabilizers)',
      schizophrenia: 'High (60-80% response rate)'
    },
    onset: '2-6 weeks for most medications',
    duration: 'Ongoing as long as medication is taken',
    sideEffects: 'Common. May include weight changes, sleep disturbances, sexual dysfunction, and others depending on medication.',
    advantages: [
      'Scientifically validated',
      'Can be life-saving for severe conditions',
      'Often covered by insurance',
      'Standardized dosing'
    ],
    considerations: [
      'May require trying multiple medications',
      'Some have withdrawal effects',
      'Regular monitoring required',
      'May not address underlying causes'
    ]
  },
  {
    id: 'therapy',
    name: 'Psychotherapy',
    description: 'Structured conversations with a trained professional to address thoughts, feelings, and behaviors.',
    effectiveness: {
      depression: 'High (50-70% response rate, especially CBT)',
      anxiety: 'High (60-80% response rate, especially CBT)',
      ptsd: 'High (60-80% with trauma-focused therapy)',
      bipolar: 'Moderate as adjunct (30-50% improvement)',
      schizophrenia: 'Moderate as adjunct (30-40% improvement)'
    },
    onset: '6-12 weeks for measurable improvement',
    duration: '3-6 months for short-term, years for complex issues',
    sideEffects: 'Minimal. Temporary emotional discomfort during processing.',
    advantages: [
      'No physical side effects',
      'Teaches long-term coping skills',
      'Addresses root causes',
      'Can be tailored to individual needs'
    ],
    considerations: [
      'Requires regular attendance and commitment',
      'More expensive than medication alone',
      'Results depend on therapist-client rapport',
      'May be challenging to find the right therapist'
    ]
  },
  {
    id: 'ketamine',
    name: 'Ketamine Therapy',
    description: 'Low-dose ketamine treatments that rapidly affect glutamate transmission in the brain.',
    effectiveness: {
      depression: 'High for treatment-resistant (70-80% response)',
      anxiety: 'Moderate to High (60-70% response)',
      ptsd: 'Promising (50-70% response in studies)',
      bipolar: 'Mixed results (30-60% for depression phase)',
      schizophrenia: 'Not typically recommended'
    },
    onset: 'Rapid (hours to days)',
    duration: '2-4 weeks per treatment, may require maintenance',
    sideEffects: 'Dissociation during treatment, nausea, increase in blood pressure. Generally temporary.',
    advantages: [
      'Rapid relief for severe symptoms',
      'Effective when other treatments fail',
      'May help create new neural pathways',
      'Limited treatments needed vs. daily medication'
    ],
    considerations: [
      'More expensive, often not covered by insurance',
      'Requires medical monitoring',
      'Relatively new treatment with evolving protocols',
      'Not suitable for everyone (heart conditions, psychosis)'
    ]
  },
  {
    id: 'integrative',
    name: 'Integrative Approaches',
    description: 'Combination of conventional treatments with evidence-based complementary approaches like nutrition, exercise, mindfulness.',
    effectiveness: {
      depression: 'High when combined (65-75% response)',
      anxiety: 'High when combined (65-80% response)',
      ptsd: 'Moderate to High (50-70% improvement)',
      bipolar: 'Moderate as adjunct (40-60% improvement)',
      schizophrenia: 'Moderate as adjunct (30-50% improvement)'
    },
    onset: 'Variable (2-12 weeks depending on approach)',
    duration: 'Ongoing with lifestyle maintenance',
    sideEffects: 'Minimal when properly implemented.',
    advantages: [
      'Addresses multiple aspects of wellbeing',
      'Often reduces medication needs',
      'Provides autonomy and self-management tools',
      'Can improve overall health beyond mental symptoms'
    ],
    considerations: [
      'Requires commitment to lifestyle changes',
      'Results may take longer than medication alone',
      'Quality of providers varies',
      'May require out-of-pocket expenses'
    ]
  }
];

const CONDITIONS = [
  { id: 'depression', name: 'Depression' },
  { id: 'anxiety', name: 'Anxiety' },
  { id: 'ptsd', name: 'PTSD' },
  { id: 'bipolar', name: 'Bipolar Disorder' },
  { id: 'schizophrenia', name: 'Schizophrenia' }
];

export function TreatmentComparison() {
  const [selectedCondition, setSelectedCondition] = useState('depression');

  return (
    <section className="curve-top wave-bottom py-20 bg-gradient-to-r from-white via-secondary-50 to-white overflow-hidden">
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-2 text-neutral-900">Treatment Comparisons</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-4 mb-6 rounded-full"></div>
          <p className="mt-4 max-w-xl mx-auto text-xl text-neutral-500">
            Evidence-based approaches for mental health conditions
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {CONDITIONS.map((condition, index) => (
              <motion.button
                key={condition.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCondition(condition.id)}
                className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${selectedCondition === condition.id
                    ? 'bg-gradient-to-r from-primary-600 to-secondary-500 text-white shadow-md'
                    : 'bg-white border border-neutral-200 text-neutral-700 hover:bg-neutral-50 hover:shadow-sm'
                  }`}
              >
                {condition.name}
              </motion.button>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="overflow-hidden rounded-[1.5rem] shadow-lg"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-primary-50 to-secondary-50">
                  <th className="p-4 text-left text-neutral-700 font-medium border-b border-neutral-200 first:rounded-tl-[1.5rem]">Treatment</th>
                  <th className="p-4 text-left text-neutral-700 font-medium border-b border-neutral-200">Effectiveness</th>
                  <th className="p-4 text-left text-neutral-700 font-medium border-b border-neutral-200">Onset of Action</th>
                  <th className="p-4 text-left text-neutral-700 font-medium border-b border-neutral-200">Side Effects</th>
                  <th className="p-4 text-left text-neutral-700 font-medium border-b border-neutral-200 last:rounded-tr-[1.5rem]">Key Advantages</th>
                </tr>
              </thead>
              <tbody>
                {TREATMENTS.map((treatment, index) => (
                  <motion.tr 
                    key={treatment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    className={`border-b border-neutral-100 hover:bg-neutral-50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'} ${index === TREATMENTS.length - 1 ? 'last:rounded-b-[1.5rem]' : ''}`}
                  >
                    <td className="p-5">
                      <h3 className="font-semibold text-neutral-900">{treatment.name}</h3>
                      <p className="text-sm text-neutral-500 mt-1">{treatment.description}</p>
                    </td>
                    <td className="p-5">
                      <motion.div 
                        key={`${treatment.id}-${selectedCondition}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="font-medium text-neutral-900"
                      >
                        {treatment.effectiveness[selectedCondition as keyof typeof treatment.effectiveness]}
                      </motion.div>
                    </td>
                    <td className="p-5 text-neutral-700">{treatment.onset}</td>
                    <td className="p-5 text-neutral-700">{treatment.sideEffects}</td>
                    <td className="p-5">
                      <ul className="list-disc list-inside text-sm text-neutral-600 space-y-1">
                        {treatment.advantages.slice(0, 2).map((advantage, i) => (
                          <li key={i}>{advantage}</li>
                        ))}
                      </ul>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 p-6 bg-gradient-to-r from-primary-50/80 to-secondary-50/80 backdrop-blur-sm rounded-2xl text-sm text-neutral-600 shadow-lg border border-white/30"
        >
          <p>
            <strong>Note:</strong> Effectiveness rates are based on clinical studies and may vary by individual. The most effective treatment approaches 
            often combine multiple modalities and are personalized to individual needs. Always consult with a qualified healthcare provider to determine 
            the best treatment plan for your specific condition.
          </p>
        </motion.div>
      </div>
    </section>
  );
} 