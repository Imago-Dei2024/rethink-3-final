import Link from 'next/link';

export default function NutritionCounseling() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Nutrition Counseling
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Fueling Your Mental Wellness Through Optimal Nutrition
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              The Vital Connection Between Nutrition and Mental Health
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Nourishing Your Brain for Optimal Well-being
            </p>
          </div>
          <div className="mt-10 max-w-4xl mx-auto text-gray-600">
            <p className="text-lg leading-relaxed">
              At ReThink Mental Health, we recognize that nutrition plays a foundational role in your mental wellness. The foods you eat directly impact your brain chemistry, inflammation levels, gut health, and ultimately your mood and cognitive function.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              Our nutrition counseling services are designed to help you understand and leverage the powerful connection between diet and mental health. We provide personalized guidance that supports your psychiatric treatment and enhances your overall well-being.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              Through evidence-based nutritional strategies, we help you make sustainable dietary changes that can reduce symptoms, improve treatment outcomes, and promote long-term mental health.
            </p>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Nutrition Services
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Personalized Nutrition Support for Mental Wellness
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Personalized Nutrition Assessment</h3>
              <p className="text-gray-700 mb-4">
                A comprehensive evaluation of your current dietary patterns, nutritional status, and how they may be influencing your mental health symptoms.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Detailed dietary analysis</li>
                <li>Evaluation of nutritional deficiencies</li>
                <li>Assessment of gut health</li>
                <li>Identification of potential food sensitivities</li>
                <li>Review of medication-nutrient interactions</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Mental Health Nutrition Planning</h3>
              <p className="text-gray-700 mb-4">
                Custom nutrition plans designed to support your specific mental health needs and treatment goals.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Brain-supporting meal plans</li>
                <li>Anti-inflammatory diet strategies</li>
                <li>Mood-stabilizing food recommendations</li>
                <li>Energy and focus optimization</li>
                <li>Sleep-supporting nutrition</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Targeted Supplement Guidance</h3>
              <p className="text-gray-700 mb-4">
                Evidence-based recommendations for supplements that may benefit your mental wellness, carefully coordinated with your medication regimen.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Omega-3 fatty acids</li>
                <li>Vitamin D and B vitamins</li>
                <li>Magnesium and zinc</li>
                <li>Probiotics for gut-brain health</li>
                <li>Adaptogens and natural mood supporters</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Nutritional Counseling Sessions</h3>
              <p className="text-gray-700 mb-4">
                Ongoing support to help you implement and maintain dietary changes that support your mental wellness goals.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Practical meal planning and preparation</li>
                <li>Grocery shopping guidance</li>
                <li>Eating mindfully for mental health</li>
                <li>Managing cravings and emotional eating</li>
                <li>Navigating dietary changes with family/social support</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Benefits of Nutrition Counseling
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              How Nutritional Support Enhances Mental Health Treatment
            </p>
          </div>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-blue-50 shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Enhanced Treatment Outcomes</h4>
                      <p className="mt-1 text-gray-600">Proper nutrition can amplify the effectiveness of psychiatric medications and therapy, leading to better overall treatment results.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Reduced Inflammation</h4>
                      <p className="mt-1 text-gray-600">Anti-inflammatory diets can help reduce systemic inflammation that contributes to depression, anxiety, and other mental health conditions.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Improved Gut-Brain Connection</h4>
                      <p className="mt-1 text-gray-600">Optimizing gut health can positively influence mood and cognitive function through the gut-brain axis.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Stable Energy and Mood</h4>
                      <p className="mt-1 text-gray-600">Balanced nutrition helps regulate blood sugar and provide steady energy, reducing mood swings and irritability.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Better Cognitive Function</h4>
                      <p className="mt-1 text-gray-600">Brain-supporting nutrients can enhance focus, memory, and other cognitive functions often affected by mental health conditions.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Long-term Health Benefits</h4>
                      <p className="mt-1 text-gray-600">Nutritional improvements provide benefits beyond mental health, supporting overall physical wellbeing and disease prevention.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Support */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Conditions We Support
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Nutritional Strategies for Various Mental Health Challenges
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Depression</h3>
              <p className="text-gray-600">Nutritional support focusing on anti-inflammatory foods, omega-3 fatty acids, and nutrients that support neurotransmitter production.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Anxiety Disorders</h3>
              <p className="text-gray-600">Dietary strategies to balance blood sugar, reduce stimulants, and provide calming nutrients that support the nervous system.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ADHD</h3>
              <p className="text-gray-600">Nutritional approaches that support dopamine function, reduce food sensitivities, and promote steady focus and attention.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bipolar Disorder</h3>
              <p className="text-gray-600">Dietary patterns that support mood stability, including regular eating patterns and brain-supporting nutrients.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stress & Burnout</h3>
              <p className="text-gray-600">Nutritional support for the adrenal system, stress hormone regulation, and energy production.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sleep Disorders</h3>
              <p className="text-gray-600">Dietary approaches to support healthy sleep cycles, including nutrients that promote relaxation and melatonin production.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Nutritionists */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Nutrition Specialists
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Expert Guidance for Your Nutritional Journey
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-shrink-0 h-40 w-40 bg-gray-200 rounded-full mx-auto sm:mx-0 mb-4 sm:mb-0">
                    {/* Placeholder for nutritionist photo */}
                    <div className="h-full w-full flex items-center justify-center text-gray-500">
                      <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:ml-6">
                    <h3 className="text-xl font-bold text-gray-900">Sarah Johnson, MS, RDN</h3>
                    <p className="text-blue-600 font-medium">Lead Nutritional Therapist</p>
                    <p className="mt-4 text-gray-600">
                      Sarah specializes in nutritional approaches for mental health, with extensive training in the gut-brain connection and anti-inflammatory nutrition. With over 8 years of experience, she has helped hundreds of clients optimize their nutrition to support mental wellness.
                    </p>
                    <ul className="mt-4 text-gray-600 list-disc pl-5">
                      <li>Master&apos;s in Clinical Nutrition</li>
                      <li>Certified in Mental Health Nutrition</li>
                      <li>Specializes in mood disorders and anxiety</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row">
                  <div className="flex-shrink-0 h-40 w-40 bg-gray-200 rounded-full mx-auto sm:mx-0 mb-4 sm:mb-0">
                    {/* Placeholder for nutritionist photo */}
                    <div className="h-full w-full flex items-center justify-center text-gray-500">
                      <svg className="h-24 w-24" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <div className="sm:ml-6">
                    <h3 className="text-xl font-bold text-gray-900">Michael Chen, PhD, CNS</h3>
                    <p className="text-blue-600 font-medium">Nutritional Biochemist</p>
                    <p className="mt-4 text-gray-600">
                      Michael brings a deep understanding of nutritional biochemistry to our team, focusing on how specific nutrients affect brain function and mental health. His research background allows him to integrate cutting-edge nutritional science into practical recommendations.
                    </p>
                    <ul className="mt-4 text-gray-600 list-disc pl-5">
                      <li>PhD in Nutritional Biochemistry</li>
                      <li>Researcher in nutrition and neuroscience</li>
                      <li>Specializes in nutritional interventions for ADHD and cognitive function</li>
                    </ul>
                  </div>
                </div>
              </div>
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
              Common Questions About Nutrition and Mental Health
            </p>
          </div>
          
          <div className="mt-12 max-w-4xl mx-auto space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How does nutrition affect mental health?</h3>
              <p className="text-gray-600">
                Nutrition affects mental health through multiple pathways, including providing essential nutrients for brain function, influencing inflammation levels, supporting gut health (which is connected to brain health via the gut-brain axis), and affecting neurotransmitter production. Dietary patterns can significantly impact mood, energy, focus, and stress resilience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Will I need to completely change my diet?</h3>
              <p className="text-gray-600">
                Our approach focuses on sustainable, gradual changes rather than complete diet overhauls. We work with you to identify specific areas where dietary adjustments could benefit your mental health, and develop realistic strategies that fit your lifestyle, preferences, and capabilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How does nutritional counseling work alongside my psychiatric treatment?</h3>
              <p className="text-gray-600">
                Nutritional counseling is designed to complement your psychiatric treatment. Our nutrition specialists work closely with your psychiatrist to ensure that dietary recommendations support your overall treatment plan. This integrated approach can enhance medication effectiveness, potentially reduce side effects, and address nutritional factors that may be contributing to your symptoms.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long before I see results from nutritional changes?</h3>
              <p className="text-gray-600">
                The timeline for experiencing benefits varies depending on the individual and the specific nutritional changes. Some people notice improvements in energy and focus within days of making dietary adjustments, while other benefits related to mood and anxiety may take several weeks to become apparent as the body adapts to new nutritional patterns. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Nourish Your Mental Wellness?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Take the first step toward optimizing your nutrition for better mental health.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule a Nutrition Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-800 border border-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us with Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 