import Link from 'next/link';

export const metadata = {
  title: 'Spravato Treatment | ReThink Mental Health',
  description: 'FDA-approved Spravato (esketamine) nasal spray treatment for treatment-resistant depression. REMS certified Spravato center accepting most insurance plans.',
};

export default function SpravatoPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Spravato® Treatment
            </h1>
            <p className="text-xl text-blue-100 mb-10">
              FDA-approved esketamine nasal spray for treatment-resistant depression. REMS certified Spravato provider accepting most insurance plans.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/appointment"
                className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Spravato? */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What is Spravato?
            </h2>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p>
              Spravato (esketamine) is a prescription nasal spray medication administered under the supervision of a healthcare provider. Approved by the FDA in 2019, it represents a significant advancement in treating depression.
            </p>
            <p>
              Unlike traditional oral antidepressants that primarily target serotonin, norepinephrine, or dopamine, Spravato works on the glutamate system in the brain as an NMDA receptor antagonist. This unique mechanism makes it effective for many patients who haven&apos;t responded adequately to conventional antidepressant treatments.
            </p>
            <p>
              <strong>Important Note:</strong> This information is provided for educational purposes only and is not intended to replace professional medical advice. Treatment decisions should always be made in consultation with a qualified healthcare provider.
            </p>
          </div>
        </div>
      </section>

      {/* How Spravato Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How Spravato Works
            </h2>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p>
              Spravato acts differently from traditional antidepressants by targeting the glutamate neurotransmitter system rather than just serotonin, norepinephrine, or dopamine systems. As an NMDA receptor antagonist, it helps restore synaptic connections in brain cells involved in mood regulation.
            </p>
            <p>
              This novel mechanism of action can lead to rapid symptom improvement, often within hours or days, compared to conventional antidepressants that may take weeks to show benefits. This rapid response can be particularly valuable for patients experiencing severe depression symptoms.
            </p>
            <p>
              While scientists are still studying its complete mechanisms, research suggests Spravato promotes neuroplasticity - the brain&apos;s ability to form new neural connections and adapt - which may help overcome the neural pathway disruptions associated with treatment-resistant depression.
            </p>
          </div>
        </div>
      </section>

      {/* Who Might Benefit */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Who Might Benefit from Spravato
            </h2>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p>
              Spravato is specifically indicated for adults with:
            </p>
            <ul>
              <li>Treatment-resistant depression (TRD) - defined as depression that hasn&apos;t improved after trying at least two different antidepressant treatments</li>
              <li>Major depressive disorder (MDD) with suicidal thoughts or behaviors (used alongside an oral antidepressant)</li>
            </ul>
            <p>
              Candidates for Spravato treatment are typically patients who:
            </p>
            <ul>
              <li>Continue to struggle with depression symptoms despite trying multiple antidepressant medications</li>
              <li>Experience significant functional impairment due to their depression</li>
              <li>Are looking for potentially faster symptom relief than conventional antidepressants can provide</li>
            </ul>
            <p>
              Not everyone with depression is a suitable candidate for Spravato. A thorough evaluation by our healthcare providers will help determine if this treatment is appropriate for your specific situation.
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Administration & Treatment Process
            </h2>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600">
            <p>
              Spravato treatment at ReThink Mental Health follows a carefully structured process to ensure both safety and effectiveness:
            </p>
            <h3>Initial Evaluation</h3>
            <p>
              Before beginning treatment, you&apos;ll undergo a comprehensive psychiatric evaluation to determine if Spravato is appropriate for your condition.
            </p>
            <h3>Treatment Setting</h3>
            <p>
              All Spravato treatment sessions take place in our REMS-certified healthcare facility under direct medical supervision. You cannot self-administer Spravato at home.
            </p>
            <h3>Treatment Schedule</h3>
            <p>
              A typical Spravato treatment plan includes:
            </p>
            <ul>
              <li><strong>Induction Phase:</strong> Two sessions per week for the first 4 weeks</li>
              <li><strong>Maintenance Phase:</strong> Once weekly for weeks 5-8, then once weekly or once every two weeks for week 9 and beyond, based on your response</li>
            </ul>
            <h3>Session Structure</h3>
            <p>
              Each session follows this pattern:
            </p>
            <ol>
              <li>Pre-treatment assessment of blood pressure and mental status</li>
              <li>Self-administration of the nasal spray under provider supervision</li>
              <li>Post-administration monitoring period of at least 2 hours</li>
              <li>Final assessment to ensure you&apos;re ready to leave safely</li>
            </ol>
            <p>
              Due to potential drowsiness and dissociation, you must not drive or operate machinery on the day of treatment. You&apos;ll need to arrange transportation home after each session.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits & Risks */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Benefits & Risks
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Potential Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Rapid symptom improvement, often within hours or days</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Effective for many patients with treatment-resistant depression</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>May reduce suicidal thoughts more quickly than traditional treatments</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Works through a different mechanism than conventional antidepressants</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>May help restore brain connections damaged by chronic depression</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-4">Potential Risks & Side Effects</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Dissociation (feeling disconnected from reality) during or after treatment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Dizziness, nausea, sedation, or increased blood pressure</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Inability to drive or operate machinery on treatment days</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Not suitable for patients with certain cardiovascular conditions or history of psychosis</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Time commitment for twice-weekly visits during initial treatment phase</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 mt-12">
            <p>
              Our healthcare team thoroughly discusses all potential benefits and risks before initiating treatment and monitors you closely throughout the process to minimize any adverse effects.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & Insurance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Safety & Considerations
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  Spravato is administered under a Risk Evaluation and Mitigation Strategy (REMS) program, which includes specific safety protocols:
                </p>
                <ul>
                  <li>Treatment is only available at certified healthcare facilities like ours</li>
                  <li>You must be monitored for at least 2 hours after each dose</li>
                  <li>Your blood pressure is checked before and after treatment</li>
                  <li>You cannot take the medication home</li>
                </ul>
                <p>
                  Before beginning treatment, we conduct a thorough evaluation to identify contraindications, including:
                </p>
                <ul>
                  <li>Aneurysmal vascular disease or arteriovenous malformation</li>
                  <li>History of intracerebral hemorrhage</li>
                  <li>Hypersensitivity to ketamine or esketamine</li>
                  <li>Pregnancy or breastfeeding (potential risks)</li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                Insurance & Cost
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  As a Medicare-certified Spravato provider, we work with most major insurance plans. Many insurance companies now cover Spravato treatment for eligible patients with treatment-resistant depression.
                </p>
                <p>
                  The coverage process typically includes:
                </p>
                <ul>
                  <li>Prior authorization documenting previous treatment failures</li>
                  <li>Coverage for both the medication and the observation period</li>
                  <li>Potential copays or coinsurance depending on your specific plan</li>
                </ul>
                <p>
                  Our team assists with insurance verification and prior authorization processes to help maximize your coverage. For patients with financial concerns, the manufacturer of Spravato (Janssen) offers patient assistance programs that may help reduce out-of-pocket costs.
                </p>
                <p>
                  For specific information about your insurance coverage and potential costs, please <Link href="/contact" className="text-blue-600 hover:text-blue-800">contact our office</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experiences */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Patient Experiences
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Stories from our treatment community
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 shadow rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-lg">M</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">Michelle</h3>
                  <p className="text-gray-500 text-sm">Treatment-resistant depression, 42</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;After trying multiple antidepressants over 15 years with minimal relief, I felt hopeless. Within my first few Spravato treatments, I noticed a significant lifting of my depression. The dissociation experience during treatment was strange at first, but the staff was so supportive. For the first time in years, I feel like I can move forward with my life.&quot;
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-lg">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-800 font-bold text-lg">J</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900">James</h3>
                  <p className="text-gray-500 text-sm">Major depressive disorder, 35</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;I was skeptical about Spravato after so many failed treatments. The first sessions were challenging—I experienced some dizziness and felt disconnected. But by week three, I noticed I was sleeping better and had more energy. Six months in, I&apos;m maintaining with biweekly treatments. It wasn&apos;t a miracle cure, but it gave me back enough functionality to benefit from therapy and rebuild my life.&quot;
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8 text-gray-600 text-center text-sm">
            <p>*Patient experiences are individual and results may vary. These anonymized testimonials reflect real patient experiences but do not guarantee similar outcomes.</p>
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
          </div>
          <div className="max-w-4xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">How quickly does Spravato work?</h3>
              <div className="mt-2 prose prose-lg text-gray-600">
                <p>
                  Unlike traditional antidepressants that may take weeks to show effects, many patients report feeling improvement within hours or days after their first Spravato treatments. However, the full benefits typically develop over the course of several weeks of consistent treatment.
                </p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">Is Spravato covered by insurance?</h3>
              <div className="mt-2 prose prose-lg text-gray-600">
                <p>
                  Many insurance plans, including Medicare and commercial insurance, now cover Spravato for eligible patients with treatment-resistant depression. Coverage typically requires documentation of previous treatment failures. Our team can help verify your benefits and navigate the authorization process.
                </p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">What does a Spravato treatment session feel like?</h3>
              <div className="mt-2 prose prose-lg text-gray-600">
                <p>
                  Many patients experience a temporary dissociative state during treatment—feeling detached from their surroundings or experiencing perceptual changes. This typically resolves within 1-2 hours. Other common experiences include feeling relaxed, sedated, or experiencing mild dizziness. Our team provides a comfortable, supportive environment and monitors you throughout the experience.
                </p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">How long will I need to continue Spravato treatment?</h3>
              <div className="mt-2 prose prose-lg text-gray-600">
                <p>
                  Treatment duration varies based on individual response. The initial intensive phase lasts 4 weeks with twice-weekly sessions. After that, treatment typically continues with weekly or biweekly sessions for maintenance. Some patients benefit from long-term maintenance treatment, while others may eventually taper off. Our providers work with you to determine the optimal treatment schedule based on your response and needs.
                </p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-xl font-bold text-gray-900">Will I still need to take my other antidepressant medications?</h3>
              <div className="mt-2 prose prose-lg text-gray-600">
                <p>
                  Yes. Spravato is designed to be used in conjunction with an oral antidepressant, not as a replacement. The combination of Spravato and an oral antidepressant provides more comprehensive treatment for depression symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Ready to Learn if Spravato is Right for You?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Schedule a comprehensive evaluation with our experienced providers to discuss if Spravato could be an appropriate treatment option for your depression.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/appointment"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule Consultation
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

      {/* Disclaimer */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-sm text-gray-500">
            <p className="mb-2">
              <strong>Disclaimer:</strong> The information provided on this page is for educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of information you have read on this website.
            </p>
            <p>
              Individual results may vary. All medical decisions regarding Spravato treatment should be made in consultation with your healthcare provider, taking into account your personal medical history and current health status.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 