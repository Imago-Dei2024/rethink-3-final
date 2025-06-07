import Link from 'next/link';

// Mock addiction specialists data - to be replaced with actual team information
const specialists = [
  {
    id: 1,
    name: 'Robert Chen, PA-C',
    title: 'Physician Assistant, Addiction Specialist',
    bio: 'Robert specializes in medication-assisted treatment for addiction and has extensive experience with ketamine-assisted therapy for substance use disorders. His compassionate, evidence-based approach helps patients navigate the recovery journey with dignity and support.',
    image: '/placeholder-person.jpg',
  },
  {
    id: 2,
    name: 'Karen Laber',
    title: 'Psychiatric Nurse Practitioner, Founder',
    bio: 'Karen brings over 15 years of experience in addiction medicine and dual diagnosis treatment. She employs an integrative approach that addresses both substance use disorders and co-occurring mental health conditions, focusing on whole-person healing.',
    image: '/placeholder-person.jpg',
  },
];

// FAQ data for addiction treatment
const faqs = [
  {
    question: 'How long does addiction treatment typically last?',
    answer: 'Treatment duration varies based on individual needs. Most patients begin with more intensive care, gradually transitioning to less frequent visits as recovery progresses. We offer both short-term intervention and long-term recovery support, typically ranging from several months to ongoing care for those who need it.',
  },
  {
    question: 'Do you accept insurance for addiction treatment?',
    answer: 'Yes, we accept most major insurance plans for addiction treatment services. Coverage depends on your specific plan, diagnosis, and treatment type. Medication-assisted treatment and psychiatric services are typically covered, while some specialized therapies may have different coverage. Our team can help verify your benefits before treatment begins.',
  },
  {
    question: 'What if I relapse during treatment?',
    answer: 'Relapse is often part of the recovery journey and doesn\'t mean treatment has failed. If a relapse occurs, we adjust your treatment plan accordingly, providing additional support and interventions. Our non-judgmental approach focuses on learning from setbacks and strengthening recovery skills moving forward.',
  },
  {
    question: 'Can family members be involved in treatment?',
    answer: 'With your consent, we encourage family involvement as it often strengthens recovery outcomes. We offer family education sessions, support resources, and can incorporate family members into treatment planning when appropriate. However, your privacy and preferences always come first in determining the level of family participation.',
  },
];

export default function AddictionTreatment() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Addiction Treatment at ReThink Mental Health
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Compassionate, evidence-based care to support your recovery journey.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive Addiction Treatment
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Addressing substance use disorders with dignity and compassion
            </p>
          </div>
          <div className="mt-10 max-w-4xl mx-auto text-gray-600">
            <p className="text-lg leading-relaxed">
              At ReThink Mental Health, we understand that addiction is a complex condition that affects both brain 
              function and behavior. Our comprehensive approach to addiction treatment combines evidence-based medical 
              interventions with holistic support to address the physical, psychological, and social aspects of addiction.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              We recognize that each person&apos;s journey with substance use is unique, and we provide personalized, 
              judgment-free care in a safe and supportive environment. Our goal is to empower you with the tools, 
              treatment, and ongoing support needed to achieve lasting recovery and improved quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Our Approach to Addiction Treatment
              </h2>
              <div className="mt-6 text-gray-600">
                <p className="text-lg leading-relaxed mb-4">
                  We approach addiction treatment with the understanding that substance use disorders are medical 
                  conditions, not moral failings. Our integrative model combines conventional psychiatric treatments 
                  with complementary approaches to address the whole person.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  We create a safe, judgment-free environment where you can explore the complex factors contributing 
                  to addiction. We believe in treating co-occurring mental health conditions simultaneously for the 
                  best outcomes, utilizing both traditional and innovative therapies.
                </p>
                <p className="text-lg leading-relaxed">
                  Our team prioritizes collaboration with you to develop a personalized treatment plan that respects 
                  your values, preferences, and recovery goals. We focus not just on abstinence, but on helping you 
                  build a fulfilling, healthy life in recovery.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                {/* Replace with actual image */}
                <div className="text-gray-400 text-center">
                  <p className="text-sm">Addiction treatment image placeholder</p>
                  <p className="text-xs mt-2">(Replace with actual image)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Modalities Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Treatment Modalities Offered
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Comprehensive options for your recovery journey
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Medication-Assisted Treatment */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Medication-Assisted Treatment</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>We offer FDA-approved medications to help manage withdrawal symptoms, reduce cravings, and support long-term recovery. Our medical professionals provide careful monitoring and adjustment of medications as needed.</p>
                </div>
              </div>
            </div>

            {/* Ketamine-Assisted Therapy */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Ketamine-Assisted Therapy</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>For qualifying patients, we offer ketamine-assisted therapy which can help address the underlying trauma and depression often associated with substance use disorders, reducing cravings and supporting recovery.</p>
                </div>
              </div>
            </div>

            {/* Individual Counseling */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Individual Counseling</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>One-on-one therapy sessions focus on addressing the psychological aspects of addiction, developing coping skills, and identifying triggers. We utilize evidence-based approaches including CBT, DBT, and motivational interviewing.</p>
                </div>
              </div>
            </div>

            {/* Group Therapy */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Group Therapy</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>Our therapeutic groups provide a supportive community environment where you can connect with others on similar recovery journeys, share experiences, gain insights, and develop social support networks essential for long-term recovery.</p>
                </div>
              </div>
            </div>

            {/* Family Support */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Family Support & Education</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>We offer resources, education, and support for family members of those struggling with addiction. Family involvement, when appropriate, can significantly improve treatment outcomes and support long-term recovery.</p>
                </div>
              </div>
            </div>

            {/* Nutritional Psychiatry */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Nutritional Psychiatry</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>Substance use often leads to nutritional deficiencies that can impact mental health and recovery. Our nutritional psychiatry approach addresses these deficiencies through dietary guidance, supplements, and wellness injections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Conditions We Treat
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Comprehensive care for substance use disorders
            </p>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Alcohol Use Disorder</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-600">
                    Our comprehensive approach to alcohol use disorder includes medical management of withdrawal, 
                    medication-assisted treatment, and therapeutic interventions addressing the psychological 
                    aspects of alcohol dependence.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Opioid Addiction</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-600">
                    We offer evidence-based treatment for opioid use disorders, including FDA-approved medications 
                    like buprenorphine, alongside counseling and support services to address the complex physical 
                    and psychological aspects of opioid dependence.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Prescription Medication Dependence</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-600">
                    Dependence on prescription medications, including benzodiazepines and stimulants, requires specialized 
                    care. We provide medically supervised tapering, alternative treatment options, and therapeutic support 
                    for safe discontinuation and recovery.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow overflow-hidden rounded-lg">
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Co-occurring Mental Health Disorders</h3>
                </div>
                <div className="px-6 py-5">
                  <p className="text-gray-600">
                    Many individuals with substance use disorders also experience depression, anxiety, PTSD, or other 
                    mental health conditions. Our dual-diagnosis approach treats both conditions simultaneously for 
                    more effective and lasting recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Specialists Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Addiction Treatment Specialists
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Experienced professionals dedicated to your recovery
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {specialists.map((specialist) => (
              <div key={specialist.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  {/* Replace with actual specialist photos */}
                  <div className="text-gray-400 text-center">
                    <p className="text-sm">Specialist photo placeholder</p>
                    <p className="text-xs mt-2">(Replace with photo of {specialist.name})</p>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900">{specialist.name}</h3>
                  <p className="text-sm text-blue-600 font-medium">{specialist.title}</p>
                  <div className="mt-3 text-gray-600">
                    <p>{specialist.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Your Treatment Journey
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              What to expect during addiction treatment with us
            </p>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white text-xl font-bold">1</div>
                </div>
                <div className="md:w-3/4 mt-4 md:mt-0">
                  <h3 className="text-xl font-medium text-gray-900">Initial Consultation & Assessment</h3>
                  <p className="mt-2 text-gray-600">
                    Your journey begins with a comprehensive assessment of your substance use history, mental health, 
                    physical health, and personal goals. This thorough evaluation helps us understand your unique 
                    situation and develop a personalized treatment approach.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white text-xl font-bold">2</div>
                </div>
                <div className="md:w-3/4 mt-4 md:mt-0">
                  <h3 className="text-xl font-medium text-gray-900">Personalized Treatment Planning</h3>
                  <p className="mt-2 text-gray-600">
                    Working collaboratively with you, we develop a customized treatment plan addressing your specific 
                    needs and goals. This plan may include medication management, therapeutic interventions, and 
                    complementary approaches tailored to your situation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white text-xl font-bold">3</div>
                </div>
                <div className="md:w-3/4 mt-4 md:mt-0">
                  <h3 className="text-xl font-medium text-gray-900">Ongoing Therapy & Support</h3>
                  <p className="mt-2 text-gray-600">
                    Throughout your treatment, you&apos;ll engage in regular therapeutic sessions, medication management 
                    if applicable, and supportive interventions. We continuously monitor your progress and adjust 
                    your treatment plan as needed to ensure optimal results.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-500 text-white text-xl font-bold">4</div>
                </div>
                <div className="md:w-3/4 mt-4 md:mt-0">
                  <h3 className="text-xl font-medium text-gray-900">Aftercare Planning & Relapse Prevention</h3>
                  <p className="mt-2 text-gray-600">
                    As you progress, we work with you to develop a comprehensive aftercare plan focused on maintaining 
                    your recovery and preventing relapse. This includes ongoing support, coping strategies, and 
                    resources to help you navigate challenges and build a fulfilling life in recovery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Common questions about addiction treatment
            </p>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <dl className="space-y-6 divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="pt-6">
                  <dt className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </dt>
                  <dd className="mt-2 text-gray-600">
                    <p>{faq.answer}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Schedule Your Confidential Consultation Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Take the first step toward recovery. Our compassionate team is ready to support your journey.
          </p>
          <div className="mt-8">
            <Link
              href="/appointment"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
            <div className="px-6 py-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Our Location
              </h3>
              <p className="text-gray-600 mb-4">
                ReThink Mental Health<br />
                88 Inverness Circle East, Unit K103<br />
                Englewood, CO 80112
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Phone:</span> 303-406-0784<br />
                <span className="font-medium">Fax:</span> 720-307-2357<br />
                <span className="font-medium">Email:</span> <a href="mailto:info@rethinkcare.org" className="text-blue-600 hover:text-blue-800">info@rethinkcare.org</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 