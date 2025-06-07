import Link from 'next/link';

export default function KetamineTherapy() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Ketamine Therapy
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              A revolutionary approach for treatment-resistant depression, anxiety, PTSD, and chronic pain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
              What is Ketamine Therapy?
            </h2>
            <div className="prose prose-lg prose-blue text-gray-500 mx-auto">
              <p>
                Ketamine therapy has emerged as a breakthrough treatment for various mental health conditions, 
                particularly those that have not responded well to traditional treatments. Unlike conventional 
                antidepressants that primarily target serotonin, ketamine works on the glutamate system in the brain, 
                offering rapid relief of symptoms, often within hours or days rather than weeks.
              </p>
              <p>
                At ReThink Mental Health, we offer intramuscular (IM) and subcutaneous (SQ) ketamine treatments 
                in a safe, comfortable environment under the careful supervision of our experienced medical team. 
                Each treatment session is personalized to meet your specific needs and therapeutic goals.
              </p>
              <p>
                Our ketamine treatment rooms are designed for comfort and relaxation, creating a calm, 
                supportive space for your healing journey. Our staff provides guidance and support before, 
                during, and after each session to ensure a positive therapeutic experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Conditions We Treat with Ketamine
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Ketamine therapy has shown effectiveness for multiple mental health and pain conditions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Treatment-Resistant Depression */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Treatment-Resistant Depression</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>
                    For those who haven&apos;t responded to traditional antidepressants, ketamine can provide rapid relief, 
                    often after just a few treatments.
                  </p>
                </div>
              </div>
            </div>

            {/* Anxiety Disorders */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Anxiety Disorders</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>
                    Ketamine can help reduce symptoms of generalized anxiety, social anxiety, and panic disorder by 
                    promoting neuroplasticity and breaking cycles of anxious thought patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* PTSD */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">PTSD</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>
                    Ketamine may help process traumatic memories and reduce the emotional charge associated with them, 
                    providing relief from intrusive thoughts, flashbacks, and hypervigilance.
                  </p>
                </div>
              </div>
            </div>

            {/* Chronic Pain */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Chronic Pain</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>
                    Ketamine can be effective for certain chronic pain conditions by resetting pain signaling pathways 
                    in the brain and reducing central sensitization.
                  </p>
                </div>
              </div>
            </div>

            {/* OCD */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">OCD</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>
                    By modulating glutamate, ketamine may help reduce obsessive thoughts and compulsive behaviors in 
                    obsessive-compulsive disorder, especially in treatment-resistant cases.
                  </p>
                </div>
              </div>
            </div>

            {/* Substance Use Disorders */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <h3 className="ml-4 text-xl font-medium text-gray-900">Substance Use Disorders</h3>
                </div>
                <div className="mt-4 text-gray-600">
                  <p>
                    Ketamine therapy can help reduce cravings and support recovery from addiction by addressing 
                    underlying depression, anxiety, and trauma that often fuel substance use.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              The Ketamine Treatment Process
            </h2>
            
            <div className="mt-12 space-y-12">
              {/* Initial Consultation */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">
                    Your journey begins with a comprehensive evaluation by one of our providers to determine if 
                    ketamine therapy is appropriate for your condition. We&apos;ll review your medical history, current 
                    symptoms, and treatment goals. We&apos;ll discuss what to expect from ketamine therapy and answer 
                    any questions you may have.
                  </p>
                </div>
              </div>

              {/* Preparation */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Preparation</h3>
                  <p className="text-gray-600">
                    Before your first treatment, we&apos;ll provide detailed instructions on how to prepare, including any 
                    medication adjustments, fasting guidelines, and what to bring for your comfort. We recommend wearing 
                    comfortable clothing and arranging for transportation home after your treatment, as you should not 
                    drive for 24 hours following ketamine administration.
                  </p>
                </div>
              </div>

              {/* Treatment Session */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Treatment Session</h3>
                  <p className="text-gray-600">
                    Upon arrival, your vital signs will be checked, and you&apos;ll be settled in a comfortable, private 
                    treatment room. The ketamine will be administered via intramuscular injection or subcutaneous 
                    infusion. The session typically lasts 1-2 hours, during which you&apos;ll be continuously monitored 
                    by our medical staff. Many patients report a relaxed, sometimes mildly dissociative experience. 
                    Some describe insights, shifts in perspective, or a profound sense of peace during the session.
                  </p>
                </div>
              </div>

              {/* Post-Treatment Integration */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">4</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Post-Treatment Integration</h3>
                  <p className="text-gray-600">
                    After your session, you&apos;ll have time to rest and reorient before heading home. We encourage 
                    reflection, journaling, and discussing your experience with your provider. Many patients find 
                    that the insights gained during ketamine sessions, combined with ongoing therapy, contribute to 
                    lasting positive changes.
                  </p>
                </div>
              </div>

              {/* Treatment Course */}
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 flex justify-center">
                  <div className="bg-blue-100 rounded-full h-16 w-16 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">5</span>
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Treatment Course</h3>
                  <p className="text-gray-600">
                    A typical initial course of ketamine therapy consists of 6 sessions over 2-3 weeks, though this 
                    may vary based on your response and needs. After the initial series, maintenance sessions may be 
                    scheduled as needed to sustain improvements, typically every 4-6 weeks. Throughout your treatment 
                    course, we&apos;ll regularly assess your progress and adjust the approach as necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety and Side Effects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              Safety and Side Effects
            </h2>
            <div className="prose prose-lg prose-blue text-gray-500 mx-auto">
              <p>
                When administered in a controlled medical setting by trained professionals, ketamine therapy is 
                considered safe. At ReThink Mental Health, patient safety is our top priority. We conduct thorough 
                evaluations before beginning treatment, monitor you continuously throughout each session, and have 
                emergency protocols in place.
              </p>
              <h3>Potential Side Effects</h3>
              <p>Common temporary side effects may include:</p>
              <ul>
                <li>Nausea</li>
                <li>Mild increase in blood pressure</li>
                <li>Dizziness</li>
                <li>Feeling of dissociation or &quot;floating&quot;</li>
                <li>Visual disturbances</li>
                <li>Drowsiness</li>
              </ul>
              <p>
                Most side effects are mild and resolve quickly after the treatment. Our team is experienced in 
                managing these effects to ensure your comfort and safety.
              </p>
              <h3>Who Should Not Receive Ketamine?</h3>
              <p>Ketamine therapy may not be appropriate for individuals with:</p>
              <ul>
                <li>Uncontrolled high blood pressure</li>
                <li>Unstable heart disease</li>
                <li>Untreated thyroid disease</li>
                <li>Active substance abuse</li>
                <li>History of psychosis</li>
                <li>Pregnancy</li>
              </ul>
              <p>
                During your consultation, we&apos;ll conduct a thorough evaluation to determine if ketamine therapy 
                is safe and appropriate for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance and Costs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md">
            <div className="px-6 py-8 sm:p-10">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Insurance Coverage and Costs
              </h2>
              <div className="prose prose-lg text-gray-600 mb-6">
                <p>
                  Traditional ketamine therapy (IM/SQ) is typically not covered by insurance. However, we offer 
                  transparent pricing and may be able to provide documentation for potential out-of-network reimbursement 
                  or HSA/FSA use.
                </p>
                <p>
                  <strong>For Spravato (esketamine nasal spray):</strong> As an FDA-approved treatment for 
                  treatment-resistant depression, Spravato is covered by many insurance plans. We can help you 
                  navigate insurance authorization for this treatment option. Visit our <Link href="/services/spravato" className="text-blue-600 hover:text-blue-700">Spravato page</Link> for more information.
                </p>
                <p>
                  During your consultation, we&apos;ll discuss costs and payment options in detail. We&apos;re committed to 
                  making these innovative treatments as accessible as possible.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Contact for Pricing
                </Link>
                <Link
                  href="/appointment"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="mt-12 space-y-8">
              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    How quickly will I notice results from ketamine therapy?
                  </h3>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    Many patients report feeling improvements after just 1-2 sessions, though a full course of 
                    treatment is typically recommended for lasting benefits. Unlike traditional antidepressants 
                    that can take weeks to work, ketamine often provides rapid relief, sometimes within hours to days.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Is ketamine therapy addictive?
                  </h3>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    When administered in a controlled medical setting at therapeutic doses and frequencies, 
                    ketamine therapy has not been shown to be addictive. Our protocols are designed to maximize 
                    therapeutic benefits while minimizing any risk of dependence. We closely monitor all patients 
                    throughout their treatment course.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    What&apos;s the difference between ketamine therapy and Spravato?
                  </h3>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    Spravato (esketamine) is an FDA-approved nasal spray derived from the S-enantiomer of ketamine, 
                    specifically approved for treatment-resistant depression. Traditional ketamine therapy typically 
                    uses racemic ketamine (containing both R and S enantiomers) administered via intramuscular or 
                    subcutaneous methods. The main differences are in administration method, insurance coverage 
                    (Spravato is often covered), and slight variations in the experience and efficacy for different conditions.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    Do I need to continue my other treatments while receiving ketamine therapy?
                  </h3>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    In most cases, yes. Ketamine therapy is often most effective when used as part of a comprehensive 
                    treatment plan that may include other medications, therapy, and lifestyle modifications. We work 
                    closely with your existing providers to ensure coordinated care. Any medication changes should be 
                    discussed with your healthcare team.
                  </p>
                </div>
              </div>

              <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="px-6 py-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    What should I expect to feel during a ketamine treatment?
                  </h3>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">
                    Experiences vary, but many patients report feeling relaxed, a sense of disconnection from their 
                    body, changes in perception, and sometimes meaningful insights or new perspectives. Some describe 
                    it as dreamlike or meditative. Our team is present throughout to ensure your comfort and safety. 
                    The effects wear off completely within a few hours after treatment.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Have more questions about ketamine therapy?</p>
              <Link
                href="/faq"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                View our complete FAQ section →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Explore Ketamine Therapy?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Take the first step toward relief from treatment-resistant conditions. 
            Contact us to schedule a consultation and learn if ketamine therapy is right for you.
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