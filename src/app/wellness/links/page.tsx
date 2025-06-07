import Link from 'next/link';

// Supplement partners data
const supplementPartners = [
  {
    id: 1,
    name: 'Thorne Research',
    logo: '/placeholder-thorne-logo.png', // Replace with actual logo
    description: 'Thorne sets the standard for nutritional supplement quality, purity, and efficacy. Their products undergo rigorous testing and are free from many common allergens and additives.',
    link: 'https://www.thorne.com/', // Replace with your affiliate link
    features: [
      'NSF Certified for Sport® on select products',
      'Free from gluten, dairy, soy, and artificial colors',
      'Rigorous triple-testing methodology',
      'Used by medical professionals worldwide'
    ]
  },
  {
    id: 2,
    name: 'Fullscript',
    logo: '/placeholder-fullscript-logo.png', // Replace with actual logo
    description: 'Fullscript offers a comprehensive catalog of professional-grade supplements from trusted brands. Their platform makes it easy to order and reorder your recommended supplements.',
    link: 'https://fullscript.com/', // Replace with your affiliate link
    features: [
      'Access to 300+ professional-grade supplement brands',
      'Automatic refill reminders',
      'Educational resources and wellness content',
      'Exclusive discounts on quality supplements'
    ]
  }
];

// Popular supplement categories
const supplementCategories = [
  {
    id: 1,
    name: 'Mood Support',
    description: 'Supplements designed to support neurotransmitter production, stress management, and overall mood regulation.',
    examples: ['5-HTP', 'SAMe', 'L-Theanine', 'Magnesium Glycinate', 'Omega-3 Fatty Acids']
  },
  {
    id: 2,
    name: 'Cognitive Function',
    description: 'Formulations that support brain health, memory, focus, and cognitive performance.',
    examples: ['Acetyl-L-Carnitine', 'Bacopa Monnieri', 'Lion\'s Mane Mushroom', 'Phosphatidylserine', 'Ginkgo Biloba']
  },
  {
    id: 3,
    name: 'Sleep Support',
    description: 'Natural ingredients that help promote relaxation and healthy sleep cycles.',
    examples: ['Melatonin', 'Valerian Root', 'Magnesium', 'GABA', 'L-Theanine']
  },
  {
    id: 4,
    name: 'Stress Management',
    description: 'Adaptogens and nutrients that help the body adapt to stress and support adrenal function.',
    examples: ['Ashwagandha', 'Rhodiola Rosea', 'Holy Basil', 'B-Complex Vitamins', 'Phosphatidylserine']
  },
  {
    id: 5,
    name: 'Energy & Vitality',
    description: 'Supplements that support cellular energy production and overall vitality.',
    examples: ['CoQ10', 'B Vitamins', 'Iron', 'Creatine', 'D-Ribose']
  },
  {
    id: 6,
    name: 'Gut-Brain Support',
    description: 'Formulations targeting the gut-brain axis to support both digestive and mental health.',
    examples: ['Probiotics', 'Digestive Enzymes', 'L-Glutamine', 'Zinc Carnosine', 'Quercetin']
  }
];

export default function NutritionalSupplements() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Nutritional Supplements
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              High-quality supplements to support your mental health and overall wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              The Role of Nutrition in Mental Health
            </h2>
            <div className="prose prose-lg max-w-none text-gray-500">
              <p>
                At ReThink Mental Health, we recognize that optimal mental health requires adequate nutrition 
                and biochemical balance. While medication and therapy are often essential components of 
                treatment, nutritional support can play a significant complementary role in mental health care.
              </p>
              <p>
                The brain requires specific nutrients to function optimally, including omega-3 fatty acids, 
                B vitamins, minerals like zinc and magnesium, and amino acids that serve as precursors to 
                neurotransmitters. Deficiencies in these nutrients can contribute to or exacerbate mental 
                health conditions.
              </p>
              <p>
                Our providers may recommend high-quality nutritional supplements as part of your comprehensive 
                treatment plan. We&apos;ve partnered with trusted supplement companies to ensure you have access to 
                products that meet our standards for purity, potency, and efficacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplement Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Trusted Supplement Partners
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Access professional-grade supplements through our trusted partners.
            </p>
          </div>
          
          <div className="space-y-12">
            {supplementPartners.map((partner) => (
              <div key={partner.id} className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-8">
                  <div className="lg:grid lg:grid-cols-3 lg:gap-8 items-center">
                    <div className="text-center">
                      <div className="h-32 flex items-center justify-center">
                        {/* Replace with actual logo */}
                        <span className="text-2xl font-bold text-gray-700">{partner.name}</span>
                      </div>
                      <div className="mt-6">
                        <a 
                          href={partner.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Access {partner.name}
                        </a>
                      </div>
                    </div>
                    <div className="mt-8 lg:mt-0 lg:col-span-2">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{partner.name}</h3>
                      <p className="text-gray-600 mb-6">{partner.description}</p>
                      <h4 className="text-lg font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="list-disc pl-5 space-y-1 text-gray-600">
                        {partner.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Our process for supplement recommendations and fulfillment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Personalized Assessment</h3>
              <p className="text-gray-600">
                Your provider will evaluate your specific needs, symptoms, health history, and any lab 
                results to determine which supplements may be beneficial for you.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Targeted Recommendations</h3>
              <p className="text-gray-600">
                Based on your assessment, your provider will recommend specific supplements, including 
                the appropriate dosage and administration schedule.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Convenient Fulfillment</h3>
              <p className="text-gray-600">
                Access your recommended supplements through our partner platforms. Products are 
                shipped directly to your home for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supplement Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Common Supplement Categories
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Supplements are recommended based on your individual needs. Here are some common categories.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {supplementCategories.map((category) => (
              <div key={category.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{category.name}</h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.examples.map((example, index) => (
                      <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-medium text-yellow-800 mb-2">Important Information</h3>
                <div className="text-yellow-700 space-y-2">
                  <p>
                    Supplements are not intended to diagnose, treat, cure, or prevent any disease and are not 
                    a substitute for prescription medication or therapy when these interventions are needed.
                  </p>
                  <p>
                    Always consult with your healthcare provider before starting any new supplement, especially 
                    if you are pregnant, nursing, have a medical condition, or are taking medications. 
                  </p>
                  <p>
                    Your provider will discuss potential interactions between supplements and medications you 
                    may be taking to ensure safety and effectiveness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Optimize Your Nutritional Support?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Schedule an appointment to discuss personalized supplement recommendations with one of our providers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule an Appointment
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