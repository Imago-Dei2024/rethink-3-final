import Link from 'next/link';

// NAD+ benefits data
const nadBenefits = [
  {
    id: 1,
    title: 'Cognitive Function',
    description: 'NAD+ supports brain health and may improve focus, mental clarity, and cognitive performance. It helps protect neurons and supports cellular energy production in the brain.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Energy Production',
    description: 'NAD+ is essential for the production of cellular energy. Supplementation may help reduce fatigue and increase physical energy by supporting the mitochondria.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Cellular Repair',
    description: 'NAD+ plays a critical role in DNA repair and cellular maintenance, supporting overall cellular health and potentially slowing age-related decline.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Addiction Recovery',
    description: 'NAD+ therapy may help reduce cravings and support recovery from substance dependence by replenishing depleted levels and supporting brain function.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Mood Support',
    description: 'By supporting neurotransmitter production and neuronal health, NAD+ therapy may help improve mood stability and reduce symptoms of anxiety and depression.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Metabolic Function',
    description: 'NAD+ is involved in metabolic processes that regulate blood sugar and lipid metabolism, potentially supporting better metabolic health.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

// FAQ data
const faqs = [
  {
    question: "What is NAD+ therapy?",
    answer: "NAD+ (Nicotinamide Adenine Dinucleotide) therapy involves the administration of NAD+ directly into the bloodstream to increase levels of this essential coenzyme in the body. NAD+ is involved in hundreds of metabolic processes and is crucial for energy production, cellular repair, and proper brain function."
  },
  {
    question: "How is NAD+ administered?",
    answer: "At ReThink Mental Health, we offer NAD+ through intravenous (IV) infusion. This method delivers NAD+ directly into the bloodstream, bypassing the digestive system for maximum bioavailability. The infusion typically lasts 2-4 hours, during which you can relax, read, or work on your laptop."
  },
  {
    question: "How many sessions will I need?",
    answer: "The number of sessions varies based on your specific health goals and condition. For general wellness and cognitive support, many clients benefit from 1-2 sessions per month. For those addressing specific health concerns or substance dependence, an initial series of 3-10 daily sessions may be recommended, followed by maintenance sessions."
  },
  {
    question: "Is NAD+ therapy safe?",
    answer: "NAD+ therapy is generally considered safe when administered by qualified healthcare professionals. As NAD+ is a naturally occurring molecule in the body, the risk of adverse reactions is low. However, some people may experience mild side effects during infusion, such as flushing, mild nausea, or headache, which typically resolve quickly."
  },
  {
    question: "How quickly will I notice results?",
    answer: "Many clients report feeling increased mental clarity and energy within hours to days after their first infusion. However, the full benefits of NAD+ therapy often develop gradually over the course of multiple treatments, with improvements in mood, energy, cognitive function, and sleep quality typically becoming more noticeable after several sessions."
  },
  {
    question: "Is NAD+ therapy covered by insurance?",
    answer: "Currently, NAD+ therapy is considered an integrative treatment and is typically not covered by insurance. We offer competitive pricing for our NAD+ services and can provide detailed cost information during your consultation."
  }
];

export default function NadTherapy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              NAD+ Therapy
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Supporting cellular health, energy production, and cognitive function through advanced NAD+ infusions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              What is NAD+?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-500">
              <p>
                NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme found in all living cells that plays a crucial 
                role in cellular metabolism and energy production. It&apos;s essential for converting the food we eat into 
                cellular energy, activating enzymes that repair damaged DNA, and regulating important biological processes.
              </p>
              <p>
                As we age, face chronic stress, or struggle with certain health conditions, our body&apos;s natural NAD+ 
                levels decline. This reduction can impact cellular function and energy production, potentially 
                contributing to cognitive decline, fatigue, and various health challenges.
              </p>
              <p>
                NAD+ therapy at ReThink Mental Health involves the administration of NAD+ directly into the bloodstream 
                through intravenous (IV) infusion, allowing for maximum absorption and bioavailability. This approach 
                helps replenish depleted NAD+ levels, supporting cellular health, brain function, and overall wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Benefits of NAD+ Therapy
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Discover how NAD+ therapy can support your health and wellbeing.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {nadBenefits.map((benefit) => (
              <div key={benefit.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      {benefit.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-gray-900">{benefit.title}</h3>
                  </div>
                  <div className="text-gray-600">
                    <p>{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The NAD+ Treatment Process
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              What to expect during your NAD+ therapy sessions.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Consultation</h3>
              <p className="text-gray-600">
                Meet with our providers to discuss your health concerns, goals, and determine if NAD+ therapy is right for you.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Preparation</h3>
              <p className="text-gray-600">
                We&apos;ll place an IV line and create a comfortable environment for your infusion session. We recommend eating before treatment.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Infusion</h3>
              <p className="text-gray-600">
                The NAD+ is administered slowly over 2-4 hours. During this time, you can relax, read, work, or rest.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Follow-Up</h3>
              <p className="text-gray-600">
                We&apos;ll assess your response to treatment and develop a personalized plan for future sessions based on your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Who Can Benefit from NAD+ Therapy?
              </h2>
              <div className="prose prose-lg text-gray-500">
                <p>
                  NAD+ therapy can be beneficial for a wide range of individuals, including:
                </p>
                <ul>
                  <li>
                    <strong>Individuals experiencing cognitive decline or brain fog</strong> - NAD+ helps support 
                    brain cell function and neuronal health.
                  </li>
                  <li>
                    <strong>Those struggling with chronic fatigue or low energy</strong> - NAD+ is essential for 
                    cellular energy production.
                  </li>
                  <li>
                    <strong>People in recovery from substance use disorders</strong> - NAD+ may help reduce cravings 
                    and support brain recovery.
                  </li>
                  <li>
                    <strong>Individuals with mood disorders</strong> - NAD+ supports neurotransmitter production 
                    and brain function.
                  </li>
                  <li>
                    <strong>Those interested in preventative health and longevity</strong> - NAD+ plays a role in 
                    cellular repair and may help mitigate age-related decline.
                  </li>
                  <li>
                    <strong>Athletes and active individuals</strong> - NAD+ can support energy production, recovery, 
                    and performance.
                  </li>
                </ul>
                <p>
                  During your consultation, our providers will help determine if NAD+ therapy is appropriate for 
                  your specific health concerns and goals.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                {/* Replace with actual image */}
                <div className="text-gray-400 text-center">
                  <p className="text-sm">NAD+ therapy image placeholder</p>
                  <p className="text-xs mt-2">(Replace with actual image)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Common questions about NAD+ therapy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-xl font-bold text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Research */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Science Behind NAD+
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Research supporting NAD+ therapy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto prose prose-lg text-gray-500">
            <p>
              NAD+ has been the subject of extensive scientific research, particularly in the fields of 
              neuroscience, aging, and metabolic health. Here&apos;s what the research shows:
            </p>
            <ul>
              <li>
                Studies have demonstrated that NAD+ levels decline with age, and this decline is associated 
                with various aspects of aging and age-related diseases.
              </li>
              <li>
                Research has shown that boosting NAD+ levels can activate sirtuins, a group of proteins that 
                regulate cellular health, metabolism, and longevity.
              </li>
              <li>
                Clinical studies have indicated that NAD+ supplementation may support cognitive function, energy 
                levels, and cellular repair mechanisms.
              </li>
              <li>
                Emerging research suggests potential benefits for neurodegenerative conditions, metabolic disorders, 
                and addiction recovery.
              </li>
            </ul>
            <p>
              While research on intravenous NAD+ therapy is still evolving, the fundamental role of NAD+ in cellular 
              function is well-established in scientific literature. Our approach combines this scientific foundation 
              with clinical experience to provide evidence-informed treatments.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Experience the Benefits of NAD+ Therapy?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Contact us to schedule a consultation and learn if NAD+ therapy is right for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-800 border border-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 