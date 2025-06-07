import Link from 'next/link';

export default function IntegrativePsychiatry() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Integrative Psychiatry
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              A Holistic Approach to Mental Health
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What Is Integrative Psychiatry?
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              A Personalized Approach to Mental Health
            </p>
          </div>
          <div className="mt-10 max-w-4xl mx-auto text-gray-600">
            <p className="text-lg leading-relaxed">
              At ReThink Mental Health, we combine the best of conventional psychiatry with evidence-based holistic therapies 
              to address your mental well-being from every angle—mind, body, and spirit.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              Integrative psychiatry is about understanding you as a whole person, not just addressing your symptoms. 
              From medication management and talk therapy to natural supplements and lifestyle adjustments, 
              each component is tailored to your unique needs.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              Our approach recognizes that mental health is influenced by many factors including genetics, nutrition, 
              physical health, life experiences, environment, and spirituality. By addressing all of these areas, 
              we create comprehensive treatment plans that promote lasting wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions We Treat */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Conditions We Treat
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Comprehensive Care for Various Mental Health Challenges
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Anxiety Disorders</h3>
              <p className="text-gray-600">Including generalized anxiety, panic disorder, social anxiety, and specific phobias</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Depression</h3>
              <p className="text-gray-600">From mild to severe depression, treatment-resistant depression, and seasonal affective disorder</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mood Disorders</h3>
              <p className="text-gray-600">Bipolar disorder, cyclothymia, and persistent mood disorders</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Trauma & PTSD</h3>
              <p className="text-gray-600">Addressing both acute and complex trauma with evidence-based approaches</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ADHD</h3>
              <p className="text-gray-600">Comprehensive assessment and management for adults and adolescents</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Stress-Related Conditions</h3>
              <p className="text-gray-600">Burnout, adjustment disorders, and stress management</p>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600">
            <p>Our integrative approach can be beneficial for many other conditions. Contact us to discuss your specific needs.</p>
          </div>
        </div>
      </section>

      {/* Our Approach and Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Approach and Methods
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Comprehensive Tools for Mental Wellness
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Medication Management</h3>
              <p className="text-gray-700 mb-3">
                We offer expert psychiatric medication management when needed, using the most current evidence-based practices. Our approach considers:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Thorough evaluation before prescribing</li>
                <li>Genetic testing to guide medication selection when appropriate</li>
                <li>Monitoring for effectiveness and side effects</li>
                <li>Careful integration with supplements and other treatments</li>
                <li>Focus on minimal effective dosing</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Psychotherapy & Counseling</h3>
              <p className="text-gray-700 mb-3">
                While our practice focuses on medication management and integrative treatments, we work closely with therapists to ensure a coordinated approach, including:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Cognitive Behavioral Therapy (CBT)</li>
                <li>Dialectical Behavior Therapy (DBT)</li>
                <li>Psychodynamic approaches</li>
                <li>Trauma-focused therapies</li>
                <li>Mindfulness-based cognitive therapy</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Nutritional Guidance</h3>
              <p className="text-gray-700 mb-3">
                We recognize the profound impact nutrition has on mental health and provide:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Assessment of nutritional factors affecting mental health</li>
                <li>Guidance on anti-inflammatory diets</li>
                <li>Targeted supplement recommendations</li>
                <li>Food sensitivity considerations</li>
                <li>Gut-brain connection strategies</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Mindfulness & Stress Reduction</h3>
              <p className="text-gray-700 mb-3">
                We incorporate evidence-based mindfulness techniques:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Mindfulness meditation practices</li>
                <li>Breathwork techniques</li>
                <li>Body awareness exercises</li>
                <li>Stress management strategies</li>
                <li>Sleep hygiene education</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Lifestyle Modifications</h3>
              <p className="text-gray-700 mb-3">
                We help you implement sustainable lifestyle changes:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Exercise programming for mental health</li>
                <li>Sleep optimization strategies</li>
                <li>Stress management techniques</li>
                <li>Digital wellness and screen management</li>
                <li>Social connection and support building</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Complementary Approaches</h3>
              <p className="text-gray-700 mb-3">
                We may recommend or coordinate with providers of:
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Wellness injections and IV therapy</li>
                <li>Ketamine-assisted therapy for appropriate conditions</li>
                <li>Biofeedback and neurofeedback</li>
                <li>Light therapy</li>
                <li>Other evidence-based complementary approaches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits of Integrative Psychiatry */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Benefits of Integrative Psychiatry
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Why Choose Our Holistic Approach
            </p>
          </div>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <ul className="space-y-6">
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Personalized Treatment</h4>
                      <p className="mt-1 text-gray-600">We recognize that each person is unique, with individual biochemistry, personal history, and preferences. Your treatment plan is created specifically for you.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Root Cause Focus</h4>
                      <p className="mt-1 text-gray-600">Rather than merely treating symptoms, we work to identify and address the underlying causes of your mental health challenges.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Fewer Side Effects</h4>
                      <p className="mt-1 text-gray-600">By combining approaches and sometimes using lower medication doses in conjunction with other therapies, many patients experience fewer side effects.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Long-Term Wellness</h4>
                      <p className="mt-1 text-gray-600">Our goal is not just symptom relief but teaching you skills and strategies for long-term mental wellness and resilience.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h4 className="text-lg font-medium text-gray-900">Collaborative Care</h4>
                      <p className="mt-1 text-gray-600">We work closely with your other healthcare providers to ensure a coordinated approach to your overall wellbeing.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Getting Started
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Your Journey to Integrative Mental Health
            </p>
          </div>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg shadow-md p-8">
              <ol className="space-y-8">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">1</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Initial Consultation</h4>
                    <p className="mt-1 text-gray-600">Schedule a comprehensive initial assessment where we&apos;ll discuss your health history, current challenges, and goals for treatment.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">2</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Comprehensive Assessment</h4>
                    <p className="mt-1 text-gray-600">We may recommend lab work, genetic testing, or other assessments to gather a complete picture of your health.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">3</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Personalized Treatment Plan</h4>
                    <p className="mt-1 text-gray-600">Together, we&apos;ll develop a customized plan that addresses your specific needs, preferences, and goals.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="bg-blue-600 h-8 w-8 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">4</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">Ongoing Support</h4>
                    <p className="mt-1 text-gray-600">Regular follow-ups to monitor progress, adjust treatments as needed, and continue to optimize your mental health.</p>
                  </div>
                </li>
              </ol>
              
              <div className="mt-10 text-center">
                <Link
                  href="/appointment"
                  className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Schedule Your Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Common Questions About Integrative Psychiatry
            </p>
          </div>
          
          <div className="mt-10 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-gray-900">Is integrative psychiatry covered by insurance?</h3>
                  <div className="mt-2 text-gray-600">
                    <p>Yes, many aspects of integrative psychiatric care are covered by insurance, including medication management and conventional therapeutic approaches. Some complementary treatments may not be covered. Our staff will help you understand your coverage options.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-gray-900">Do I have to stop taking my current medications?</h3>
                  <div className="mt-2 text-gray-600">
                    <p>Absolutely not. We work with you where you are. If you&apos;re currently taking psychiatric medications, we&apos;ll carefully evaluate their effectiveness and side effects before recommending any changes. Any medication adjustments would be done gradually and with careful monitoring.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-gray-900">How long will treatment take?</h3>
                  <div className="mt-2 text-gray-600">
                    <p>Treatment duration varies based on your individual needs, condition, and response to treatment. Some people notice improvements within a few weeks, while others may need longer-term support. We&apos;ll regularly assess your progress and adjust the treatment plan accordingly.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-gray-900">Is it safe to combine supplements with prescription medications?</h3>
                  <div className="mt-2 text-gray-600">
                    <p>Safety is our primary concern. There can be interactions between supplements and medications, which is why all supplements should be discussed with your provider. Our expertise in both conventional and complementary approaches allows us to safely integrate these treatments when appropriate.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5">
                  <h3 className="text-lg font-medium text-gray-900">Do I need a referral to schedule an appointment?</h3>
                  <div className="mt-2 text-gray-600">
                    <p>No, you do not need a referral to schedule an appointment with us. You can contact our office directly to set up an initial consultation. However, some insurance plans may require a referral for coverage, so it&apos;s worth checking with your insurance provider.</p>
                  </div>
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
            Begin Your Journey to Wellness Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Take the first step toward a holistic approach to mental health. Our integrative psychiatric team is ready to support you.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              href="/appointment"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule a Consultation
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-md text-base font-medium text-blue-100 bg-blue-800 border border-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 