import Link from 'next/link';

// Mock injection product data
const injectionProducts = [
  {
    id: 1,
    name: 'Vitamin B12',
    description: 'Supports energy production, nervous system function, and red blood cell formation.',
    benefits: ['Increases energy', 'Improves mood', 'Enhances cognitive function', 'Supports immune health'],
    details: 'Our B12 injections contain methylcobalamin, the most bioavailable form of B12, which is essential for nervous system function and DNA synthesis. B12 deficiency is common, especially in those with certain dietary restrictions or absorption issues, and can lead to fatigue, mood changes, and neurological problems.',
  },
  {
    id: 2,
    name: 'Vitamin D',
    description: 'Essential for bone health, immune function, and mood regulation.',
    benefits: ['Supports bone health', 'Boosts immune function', 'Improves mood', 'Reduces inflammation'],
    details: 'Vitamin D plays a crucial role in calcium absorption, immune function, and mood regulation. Many people are deficient in vitamin D, particularly in regions with limited sun exposure or during winter months. Our vitamin D injections provide a therapeutic dose to rapidly increase levels and support overall health.',
  },
  {
    id: 3,
    name: 'Methylated B Complex',
    description: 'Blend of essential B vitamins in their most bioavailable form for optimal absorption and use by the body.',
    benefits: ['Energy production', 'Stress management', 'Cognitive support', 'Mood enhancement'],
    details: 'Our B Complex injections include the full spectrum of B vitamins (B1, B2, B3, B5, B6, B7, B9, and B12) in their most bioavailable forms. B vitamins are essential cofactors in hundreds of biochemical processes, including energy production, neurotransmitter synthesis, and stress management. The methylated forms are particularly beneficial for those with MTHFR gene variants.',
  },
  {
    id: 4,
    name: 'Glutathione',
    description: 'Powerful antioxidant that supports detoxification, immune function, and cellular health.',
    benefits: ['Detoxification support', 'Immune system enhancement', 'Skin health', 'Reduces oxidative stress'],
    details: 'Glutathione is often called the "master antioxidant" due to its central role in neutralizing free radicals and supporting the body\'s detoxification processes. It helps protect cells from oxidative damage, supports immune function, and promotes healthy skin. Levels naturally decline with age, stress, and environmental toxins.',
  },
  {
    id: 5,
    name: 'NAC (N-Acetyl Cysteine)',
    description: 'Precursor to glutathione that supports respiratory health, detoxification, and mental health.',
    benefits: ['Supports glutathione production', 'Improves respiratory health', 'Helps with OCD and rumination', 'Supports liver function'],
    details: 'NAC is a precursor to glutathione and has been studied for its benefits in respiratory conditions, mental health disorders (particularly OCD and compulsive behaviors), and liver function. It helps thin mucus in the lungs, supports the body\'s natural detoxification systems, and may help reduce rumination and compulsive thoughts.',
  },
  {
    id: 6,
    name: 'Amino Acid Blend',
    description: 'Comprehensive mix of essential amino acids for cellular repair, mood support, and cognitive function.',
    benefits: ['Supports neurotransmitter production', 'Enhances recovery', 'Improves mental clarity', 'Boosts energy'],
    details: 'Amino acids are the building blocks of proteins and serve as precursors to neurotransmitters that regulate mood, cognition, and stress response. Our amino acid blend includes a balanced mix of essential amino acids that support mental health, physical recovery, and cognitive function.',
  },
  {
    id: 7,
    name: 'Magnesium',
    description: 'Essential mineral for nervous system function, muscle relaxation, and over 300 biochemical reactions.',
    benefits: ['Reduces anxiety', 'Relieves muscle tension', 'Supports sleep', 'Improves energy production'],
    details: 'Magnesium is involved in over 300 biochemical reactions in the body and is essential for nervous system function, muscle relaxation, and energy production. Deficiency is common and can contribute to anxiety, muscle tension, sleep disturbances, and fatigue. Our magnesium injections provide rapid relief and support for these symptoms.',
  },
  {
    id: 8,
    name: 'Myers Cocktail',
    description: 'A blend of vitamins and minerals designed to boost energy, immune function, and overall wellness.',
    benefits: ['Increases energy', 'Enhances immune function', 'Reduces inflammation', 'Supports recovery'],
    details: 'The Myers Cocktail is a carefully formulated blend of vitamins and minerals, including vitamin C, B vitamins, calcium, and magnesium. Originally developed by Dr. John Myers, this mixture is designed to support immune function, increase energy, reduce inflammation, and promote overall wellness. It\'s particularly beneficial during times of stress, illness, or fatigue.',
  },
];

export default function WellnessInjections() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Wellness Injections
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Targeted micronutrient and vitamin injections to support optimal mental and physical health.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              Why Injections?
            </h2>
            <div className="prose prose-lg max-w-none text-gray-500">
              <p>
                At ReThink Mental Health, we believe in addressing the biological foundations of mental health, 
                including nutritional status and biochemical balance. Our wellness injections deliver 
                micronutrients directly into the bloodstream, bypassing the digestive system for optimal 
                absorption and bioavailability.
              </p>
              <p>
                This approach is particularly beneficial for:
              </p>
              <ul>
                <li>Individuals with absorption issues who cannot effectively utilize oral supplements</li>
                <li>Those with significant deficiencies requiring rapid repletion</li>
                <li>People experiencing acute symptoms like fatigue, brain fog, or mood disturbances</li>
                <li>Patients looking to optimize their mental and physical performance</li>
              </ul>
              <p>
                Each injection is administered by our trained medical professionals in a safe, comfortable 
                environment. We offer a variety of options tailored to address specific needs and health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Available Injections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Available Wellness Injections
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Our complete selection of micronutrient and vitamin injections.
            </p>
          </div>
          
          <div className="space-y-10">
            {injectionProducts.map((product) => (
              <div key={product.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-6 py-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-gray-700 mb-6 text-lg font-medium">{product.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-2 text-gray-600">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="text-base">{benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900 mb-3">Details:</h4>
                      <p className="text-gray-600">{product.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What to Expect
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Our simple process for wellness injections.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Consultation</h3>
              <p className="text-gray-600">
                Meet with one of our providers to discuss your health goals, symptoms, and which injections 
                might be most beneficial for your specific situation.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Administration</h3>
              <p className="text-gray-600">
                Our medical professionals will administer your selected injection in a comfortable, 
                clinical setting. The process is quick and relatively painless.
              </p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Follow-Up</h3>
              <p className="text-gray-600">
                We&apos;ll check in on your response to the injection and work with you to develop an 
                ongoing protocol based on your results and health goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Common questions about our wellness injections.
            </p>
          </div>

          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">How often should I get wellness injections?</h3>
              <p className="mt-2 text-gray-600">
                The frequency depends on your specific needs, health status, and goals. Some people benefit 
                from weekly injections initially, while others may maintain optimal levels with monthly 
                treatments. Your provider will work with you to develop a personalized protocol.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">Are there any side effects?</h3>
              <p className="mt-2 text-gray-600">
                Most people experience minimal side effects, which may include temporary discomfort at the 
                injection site. Some individuals may experience a feeling of warmth or flushing with certain 
                injections, like B vitamins. Serious adverse reactions are rare when administered by trained 
                professionals.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">How quickly will I notice results?</h3>
              <p className="mt-2 text-gray-600">
                Many people report feeling improvements in energy, focus, and mood within hours to days 
                after receiving nutrient injections, particularly if addressing a deficiency. However, 
                individual responses vary, and some benefits may develop gradually over time with consistent 
                treatment.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">Are wellness injections covered by insurance?</h3>
              <p className="mt-2 text-gray-600">
                In most cases, wellness injections are considered elective and are not covered by insurance. 
                However, in some situations where we can document medical necessity, partial coverage may be 
                possible. Our staff can provide detailed pricing information during your consultation.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">How do I know which injections are right for me?</h3>
              <p className="mt-2 text-gray-600">
                During your consultation, our providers will assess your health history, current symptoms, 
                lifestyle factors, and health goals to recommend the most appropriate injections for your 
                specific situation. In some cases, we may recommend testing to identify specific deficiencies 
                that need to be addressed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Boost Your Wellness?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Contact us to schedule a consultation and learn more about our wellness injections.
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