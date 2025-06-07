import Link from 'next/link';

// Mock wellness services data
const wellnessServices = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: 'Nutritional Supplements',
    description: 'High-quality supplements from trusted brands like Thorne and Fullscript, recommended based on your specific needs and health goals.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    link: '/wellness/links',
  },
  {
    id: 4,
    title: 'IV Hydration Therapy',
    description: 'Intravenous delivery of fluids, vitamins, minerals, and amino acids for rapid absorption and maximum effectiveness.',
    icon: (
      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    link: '/wellness/iv-hydration',
  },
];

// Mock injection product data
const injectionProducts = [
  {
    id: 1,
    name: 'Vitamin B12',
    description: 'Supports energy production, nervous system function, and red blood cell formation.',
    benefits: ['Increases energy', 'Improves mood', 'Enhances cognitive function', 'Supports immune health'],
  },
  {
    id: 2,
    name: 'Vitamin D',
    description: 'Essential for bone health, immune function, and mood regulation.',
    benefits: ['Supports bone health', 'Boosts immune function', 'Improves mood', 'Reduces inflammation'],
  },
  {
    id: 3,
    name: 'Methylated B Complex',
    description: 'Blend of essential B vitamins in their most bioavailable form for optimal absorption and use by the body.',
    benefits: ['Energy production', 'Stress management', 'Cognitive support', 'Mood enhancement'],
  },
  {
    id: 4,
    name: 'Glutathione',
    description: 'Powerful antioxidant that supports detoxification, immune function, and cellular health.',
    benefits: ['Detoxification support', 'Immune system enhancement', 'Skin health', 'Reduces oxidative stress'],
  },
];

export default function Wellness() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Wellness Services
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Supporting your mental health journey with integrative approaches to optimize your overall wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Holistic Wellness
            </h2>
            <p className="mt-6 text-xl text-gray-500">
              At ReThink Mental Health, we believe that optimal mental health requires a holistic approach that 
              addresses the body&apos;s physical needs. Our wellness services are designed to complement our psychiatric 
              care, providing additional support for your mental health journey.
            </p>
            <p className="mt-4 text-xl text-gray-500">
              From nutrient injections that address deficiencies to NAD+ therapy that supports cellular health, 
              our wellness services are backed by science and administered by experienced professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Wellness Services
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Complementary services to support your mental and physical wellbeing.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {wellnessServices.map((service) => (
              <div key={service.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      {service.icon}
                    </div>
                    <h3 className="ml-4 text-xl font-medium text-gray-900">{service.title}</h3>
                  </div>
                  <div className="mt-4 text-gray-600">
                    <p>{service.description}</p>
                  </div>
                  <div className="mt-6">
                    <Link
                      href={service.link}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wellness Injections Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Wellness Injections
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Our micronutrient injections deliver essential vitamins and minerals directly into the bloodstream, 
                bypassing the digestive system for optimal absorption. This approach ensures these vital nutrients 
                are immediately available to the body, supporting mental health, energy production, immune function, 
                and overall wellbeing.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                Each injection is administered by our trained medical professionals in a safe, comfortable environment. 
                We offer a variety of options tailored to address specific needs and health goals.
              </p>
              <div className="mt-8">
                <Link
                  href="/wellness/injections"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  View Injection Options
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                {/* Replace with actual image */}
                <div className="text-gray-400 text-center">
                  <p className="text-sm">Wellness injection image placeholder</p>
                  <p className="text-xs mt-2">(Replace with actual image)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Injections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Popular Micronutrient Injections
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Our most frequently requested wellness injections.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {injectionProducts.map((product) => (
              <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Benefits:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Additional injection options are available. Contact us to learn more about our complete offerings.</p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us for More Information
            </Link>
          </div>
        </div>
      </section>

      {/* NAD+ Therapy Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                {/* Replace with actual image */}
                <div className="text-gray-400 text-center">
                  <p className="text-sm">NAD+ therapy image placeholder</p>
                  <p className="text-xs mt-2">(Replace with actual image)</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900">
                NAD+ Therapy
              </h2>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                NAD+ (Nicotinamide Adenine Dinucleotide) is a coenzyme essential for cellular function, energy 
                production, and repair. As we age or experience chronic stress, NAD+ levels naturally decline, 
                which can impact cognitive function, energy levels, and overall wellbeing.
              </p>
              <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                NAD+ therapy replenishes these levels directly, supporting brain health, neurological function, 
                and cellular regeneration. Benefits may include improved cognitive function, increased energy, 
                reduced cravings for those with substance use issues, and support for overall brain health.
              </p>
              <div className="mt-8">
                <Link
                  href="/wellness/nad"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Learn More About NAD+ Therapy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutritional Supplements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nutritional Supplements
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              High-quality supplements recommended by our providers.
            </p>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Trusted Partners</h3>
                <p className="mt-4 text-lg text-gray-600">
                  We partner with premium supplement brands to ensure our patients have access to the highest quality products.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="border rounded-lg p-6">
                  <div className="flex items-center justify-center h-16 mb-4">
                    {/* Replace with Thorne logo */}
                    <span className="text-xl font-bold text-gray-700">THORNE</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2 text-center">Thorne Research</h4>
                  <p className="text-gray-600 mb-4">
                    Thorne sets the standard for nutritional supplement quality, purity, and efficacy. Their products 
                    undergo rigorous testing and are free from many common allergens and additives.
                  </p>
                  <div className="text-center mt-6">
                    <Link
                      href="/wellness/links"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Access Thorne Products →
                    </Link>
                  </div>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-center justify-center h-16 mb-4">
                    {/* Replace with Fullscript logo */}
                    <span className="text-xl font-bold text-gray-700">FULLSCRIPT</span>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2 text-center">Fullscript</h4>
                  <p className="text-gray-600 mb-4">
                    Fullscript offers a comprehensive catalog of professional-grade supplements from trusted brands. 
                    Their platform makes it easy to order and reorder your recommended supplements.
                  </p>
                  <div className="text-center mt-6">
                    <Link
                      href="/wellness/links"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Access Fullscript Products →
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">
                  Supplements are recommended based on your individual needs and health goals, and are selected to 
                  complement your treatment plan. Our providers will help you determine which supplements may be 
                  beneficial for your specific situation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Enhance Your Wellness Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Contact us to learn more about our wellness services and how they can support your mental health.
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