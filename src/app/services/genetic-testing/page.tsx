import Link from 'next/link';

export default function GeneticTesting() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Genetic Testing
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Personalized medicine through advanced genetic insights
            </p>
            <p className="text-lg text-blue-200">
              Discover how your unique genetic profile can guide more effective treatment decisions
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Understanding Genetic Testing
            </h2>
            <div className="prose prose-lg prose-blue max-w-none">
              <p>
                Genetic testing is a powerful tool that analyzes your DNA to provide insights into how your body processes medications. At ReThink Mental Health, we utilize pharmacogenomic testing to help identify which psychiatric medications and dosages may work best for you based on your genetic makeup.
              </p>
              <p>
                This advanced approach eliminates the traditional trial-and-error method of prescribing, potentially reducing adverse side effects and improving treatment outcomes. Our genetic testing is simple, non-invasive, and can significantly streamline your journey toward finding the right treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Tests Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Types of Genetic Tests We Offer
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Comprehensive testing tailored to your needs
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Pharmacogenetic Testing */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Pharmacogenetic Testing</h3>
                <div className="text-gray-600">
                  <p>Evaluates how your genes affect your response to medications, helping identify which psychiatric medications will be most effective with fewer side effects.</p>
                </div>
              </div>
            </div>

            {/* Neurotransmitter Testing */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Neurotransmitter Testing</h3>
                <div className="text-gray-600">
                  <p>Assesses neurotransmitter levels to better understand the underlying biochemical factors that may contribute to your mental health condition.</p>
                </div>
              </div>
            </div>

            {/* Nutrigenomic Testing */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-6 py-8">
                <h3 className="text-xl font-medium text-gray-900 mb-4">Nutrigenomic Testing</h3>
                <div className="text-gray-600">
                  <p>Examines how your genetic variations affect your nutritional needs, helping create personalized supplement recommendations that support mental health.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Benefits of Genetic Testing
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Why genetic insights matter for your treatment
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
                <h3 className="text-lg font-medium text-gray-900">Personalized Treatment Plans</h3>
                <p className="mt-2 text-base text-gray-500">
                  Tailored medication selections based on your genetic profile, increasing the likelihood of successful treatment.
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
                <h3 className="text-lg font-medium text-gray-900">Reduced Side Effects</h3>
                <p className="mt-2 text-base text-gray-500">
                  Minimize adverse reactions by identifying medications that may cause problems based on your genetic makeup.
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
                <h3 className="text-lg font-medium text-gray-900">Faster Treatment Response</h3>
                <p className="mt-2 text-base text-gray-500">
                  Skip the trial-and-error approach, potentially reducing the time it takes to find an effective treatment.
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
                <h3 className="text-lg font-medium text-gray-900">Cost-Effective Care</h3>
                <p className="mt-2 text-base text-gray-500">
                  Potentially reduce healthcare costs by avoiding medications that won&apos;t work well for you and preventing adverse reactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              The Genetic Testing Process
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Simple, non-invasive, and informative
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 p-4 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">1</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Initial Consultation</h3>
                  <p className="mt-2 text-sm text-gray-500">Meet with our provider to discuss your health history and determine if genetic testing is right for you.</p>
                </div>
                <div className="md:w-1/4 p-4 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">2</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Sample Collection</h3>
                  <p className="mt-2 text-sm text-gray-500">Simple and painless cheek swab or saliva sample collected in our office.</p>
                </div>
                <div className="md:w-1/4 p-4 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">3</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Laboratory Analysis</h3>
                  <p className="mt-2 text-sm text-gray-500">Your sample is sent to a specialized laboratory for comprehensive genetic analysis.</p>
                </div>
                <div className="md:w-1/4 p-4 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white text-xl font-bold">4</div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">Results & Treatment Plan</h3>
                  <p className="mt-2 text-sm text-gray-500">Review your results with our provider and receive a personalized treatment plan based on your genetic profile.</p>
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
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xl text-gray-500">
              Common questions about genetic testing
            </p>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Is genetic testing covered by insurance?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>Many insurance plans cover genetic testing, especially when it&apos;s deemed medically necessary. Our staff will work with you to verify your coverage and discuss financial options.</p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">How long does it take to get results?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>Typically, results are available within 7-14 business days after your sample reaches the laboratory.</p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Is genetic testing painful or invasive?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>No, our genetic testing uses a simple cheek swab or saliva sample, which is completely painless and non-invasive.</p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">How is my genetic information kept private?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>We adhere to strict privacy protocols in compliance with HIPAA regulations. Your genetic information is secure and confidential, and is never shared without your explicit consent.</p>
              </div>
            </div>
            <div className="py-6">
              <h3 className="text-lg font-medium text-gray-900">Will I need to be retested in the future?</h3>
              <div className="mt-2 text-base text-gray-500">
                <p>Genetic testing is typically a one-time procedure since your genetic makeup does not change. However, as the science evolves, additional testing might be recommended to provide more comprehensive insights.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to Take the Next Step?
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-2xl mx-auto">
            Discover how genetic testing can transform your mental health treatment with personalized insights.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/appointment"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule a Consultation
            </Link>
          </div>
          <p className="mt-4 text-sm text-blue-200">
            Questions? Contact us at <a href="tel:+15555555555" className="underline">555-555-5555</a> or <a href="mailto:info@rethinkmentalhealth.com" className="underline">info@rethinkmentalhealth.com</a>
          </p>
        </div>
      </section>

      {/* Privacy and Compliance Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            ReThink Mental Health is committed to protecting your privacy. All genetic testing is conducted in compliance with HIPAA regulations and other applicable healthcare privacy laws.
          </p>
        </div>
      </section>
    </div>
  );
} 