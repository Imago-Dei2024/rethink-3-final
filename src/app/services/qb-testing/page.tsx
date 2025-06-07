import Link from 'next/link';

export default function QbTestingADHD() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Qb Testing for ADHD
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Objective, Accurate, and Comprehensive ADHD Assessment
            </p>
            <p className="text-lg text-blue-200">
              Advanced technology for precise ADHD diagnosis and monitoring
            </p>
            <div className="mt-8">
              <Link href="/appointment" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50">
                Book Your Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              What is Qb Testing?
            </h2>
            <div className="prose prose-lg prose-blue max-w-none">
              <p>
                QbTest is an FDA-cleared, computer-based test that objectively measures the three core symptoms of ADHD: hyperactivity, inattention, and impulsivity. By combining motion tracking technology with a computer-based attention task, QbTest provides clinicians with objective data to aid in the assessment and treatment monitoring of ADHD.
              </p>
              <p>
                Unlike traditional subjective assessments based solely on questionnaires and observations, QbTest delivers quantifiable data that helps our providers make more informed decisions about diagnosis and treatment. This technology represents a significant advancement in how ADHD is assessed and managed at ReThink Mental Health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Benefits of Qb Testing
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Why objective measurement matters
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Objective Measurement</h3>
                <p className="mt-2 text-base text-gray-500">
                  Provides quantifiable data on ADHD symptoms, reducing reliance on subjective assessments.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Enhanced Accuracy</h3>
                <p className="mt-2 text-base text-gray-500">
                  Improves diagnostic precision by detecting patterns that might not be observable during clinical interviews.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Quick Assessment</h3>
                <p className="mt-2 text-base text-gray-500">
                  Completes in approximately 15-20 minutes, providing fast results that aid in treatment decisions.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">Treatment Monitoring</h3>
                <p className="mt-2 text-base text-gray-500">
                  Allows for objective measurement of treatment effectiveness, helping optimize medication and therapy approaches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Should Consider Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Who Should Consider Qb Testing?
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Identifying who can benefit most from objective assessment
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {/* Children */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Children and Adolescents</h3>
                <div className="text-gray-600">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Students struggling with academic performance</li>
                    <li>Children with behavioral concerns at home or school</li>
                    <li>Adolescents with difficulty organizing, planning, or completing tasks</li>
                    <li>Young people experiencing social challenges related to attention or impulse control</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Adults */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Adults</h3>
                <div className="text-gray-600">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Individuals suspecting undiagnosed ADHD affecting work or relationships</li>
                    <li>Adults experiencing challenges with focus, organization, or time management</li>
                    <li>People wanting to optimize their current ADHD treatment</li>
                    <li>Those seeking clarity about symptoms that might be ADHD or another condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              What to Expect During the Test
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Simple, non-invasive, and informative
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 p-4 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">1</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Preparation</h3>
                  <p className="mt-2 text-sm text-gray-500">Brief explanation of the test procedure and setup of the equipment in a quiet, distraction-free environment.</p>
                </div>
                <div className="md:w-1/3 p-4 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">2</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">The Test</h3>
                  <p className="mt-2 text-sm text-gray-500">A 15-20 minute computer-based task that tracks your movements and responses to visual stimuli while wearing a small motion tracking device.</p>
                </div>
                <div className="md:w-1/3 p-4 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">3</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Follow-Up</h3>
                  <p className="mt-2 text-sm text-gray-500">A comprehensive review of your results with our provider, who will interpret the data and discuss treatment recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Results Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Understanding Your Results
            </h2>
            <div className="prose prose-lg prose-blue max-w-none">
              <p>
                QbTest results provide a comprehensive analysis of your attention, impulsivity, and activity levels compared to age and gender-matched peers. The report includes colorful graphs and clear metrics that our providers will explain in detail during your follow-up appointment.
              </p>
              <p>
                Your results will help our clinical team:
              </p>
              <ul>
                <li>Identify specific patterns of ADHD symptoms</li>
                <li>Distinguish between different ADHD subtypes (predominantly inattentive, predominantly hyperactive-impulsive, or combined)</li>
                <li>Create a personalized treatment plan that addresses your unique needs</li>
                <li>Establish a baseline to measure treatment progress over time</li>
              </ul>
              <p>
                Remember that while QbTest provides valuable objective data, it is just one component of a comprehensive ADHD assessment. Our providers will integrate these results with clinical interviews, rating scales, and other information to make an accurate diagnosis and effective treatment recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Common questions about Qb Testing
            </p>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Is Qb Testing covered by insurance?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>Many insurance plans cover Qb Testing as part of a comprehensive ADHD assessment. Our staff will verify your coverage and discuss any potential costs before scheduling your test.</p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">How long does it take to get results?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>Results are available immediately after completing the test. Your provider will schedule a follow-up appointment, typically within a week, to review and interpret the results with you.</p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Is the test suitable for both children and adults?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>Yes, QbTest is designed for individuals ages 6-60. The test parameters are adjusted based on age and gender to provide accurate comparisons with normative data.</p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Should I stop taking ADHD medication before the test?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>This depends on the purpose of the test. If the goal is diagnostic assessment, your provider may recommend temporarily pausing medication. If the test is to evaluate treatment effectiveness, you may be asked to take the test while on your current medication. Always follow your provider&apos;s specific instructions.</p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Can Qb Testing definitively diagnose ADHD?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>While QbTest provides valuable objective data, no single test can definitively diagnose ADHD. Our providers use QbTest results alongside clinical interviews, behavior rating scales, and other information to make an accurate diagnosis according to established clinical guidelines.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to Take the Next Step?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Schedule your QbTest today and gain valuable insights into your attention, activity, and impulsivity patterns.</p>
          <Link 
            href="/appointment" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-blue-700 bg-white hover:bg-blue-50"
          >
            Book Your Assessment
          </Link>
        </div>
      </section>
    </div>
  );
} 