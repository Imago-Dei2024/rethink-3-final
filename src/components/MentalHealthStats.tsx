'use client';

import { useState, useEffect } from 'react';
import * as framerMotion from 'framer-motion';

// Extract the motion component
const { motion } = framerMotion;

// Mental health statistics
const STATS = [
  {
    id: 1,
    title: "Adults with Mental Illness",
    value: 52.9,
    suffix: "M",
    description: "1 in 5 U.S. adults experience mental illness each year (2021 data)",
    source: "National Alliance on Mental Illness (NAMI)"
  },
  {
    id: 2,
    title: "Young Adults Affected",
    value: 17.4,
    suffix: "%",
    description: "Mental health conditions affect 17.4% of young adults (18-25 years)",
    source: "National Institute of Mental Health (NIMH)"
  },
  {
    id: 3,
    title: "Treatment Gap",
    value: 57,
    suffix: "%",
    description: "57% of adults with mental illness don't receive treatment",
    source: "Mental Health America (MHA)"
  },
  {
    id: 4,
    title: "Economic Impact",
    value: 225,
    suffix: "B",
    description: "Mental illness costs the U.S. economy $225 billion annually",
    source: "Journal of Clinical Psychiatry"
  },
  {
    id: 5,
    title: "Recovery Rate",
    value: 80,
    suffix: "%",
    description: "80% of people treated for depression show improvement within 4-6 weeks",
    source: "American Psychiatric Association (APA)"
  },
  {
    id: 6,
    title: "Substance Use Comorbidity",
    value: 9.2,
    suffix: "M",
    description: "9.2M adults have co-occurring mental illness and substance use disorders",
    source: "Substance Abuse and Mental Health Services Admin (SAMHSA)"
  }
];

type AnimatedCounterProps = {
  value: number;
  suffix: string;
  duration?: number;
};

const AnimatedCounter = ({ value, suffix, duration = 1.5 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const totalDuration = duration * 1000; // convert to ms
    const incrementTime = totalDuration / end;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
    
    return () => clearInterval(timer);
  }, [value, duration]);
  
  return (
    <span className="text-4xl font-bold text-gradient">
      {count.toFixed(count < 10 ? 1 : 0)}{suffix}
    </span>
  );
};

export function MentalHealthStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {STATS.map((stat, index) => (
        <motion.div
          key={stat.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
        >
          <div className="h-full flex flex-col bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
            {/* Card top accent line with icon */}
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-1 w-full"></div>
            
            <div className="p-6 md:p-8 flex flex-col h-full">
              {/* Icon circle */}
              <div className="mb-5 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                  {index % 3 === 0 && <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></>
                  }
                  {index % 3 === 1 && <><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></>
                  }
                  {index % 3 === 2 && <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></>
                  }
                </svg>
              </div>
              
              {/* Stat title */}
              <h3 className="text-lg font-medium text-neutral-800 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {stat.title}
              </h3>
              
              {/* Stat value */}
              <div className="mt-2 mb-6">
                <div className="flex items-baseline">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
              </div>
              
              {/* Description and source */}
              <div className="mt-auto">
                <p className="text-neutral-600 dark:text-neutral-300 text-base">
                  {stat.description}
                </p>
                <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  <p className="text-sm text-neutral-500 dark:text-neutral-500 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2 inline-block">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    {stat.source}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
} 