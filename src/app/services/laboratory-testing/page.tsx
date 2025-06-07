import React from 'react';
import Link from 'next/link';

export default function LaboratoryTesting() {
  // Laboratory Tests
  const labTests = [
    { 
      title: 'Blood Tests',
      description: 'Comprehensive blood panels including complete blood count (CBC), metabolic panels, thyroid function tests, vitamin levels, and more.',
      preparations: 'Fasting may be required for certain tests. Please follow specific instructions provided for your test.'
    },
    { 
      title: 'Urine Tests',
      description: 'Analysis for infections, kidney function, diabetes screening, and drug monitoring.',
      preparations: 'Collection instructions will be provided. First morning sample may be required for some tests.'
    },
    { 
      title: 'Hormone Testing',
      description: 'Evaluation of hormone levels to identify imbalances that may impact mental health.',
      preparations: 'Some hormone tests require specific timing during your cycle. Your provider will give you detailed instructions.'
    }
  ];

  // Imaging Services
  const imagingServices = [
    { 
      title: 'Brain MRI',
      description: 'Detailed imaging of brain structure to identify physical abnormalities that may affect mental health.',
      preparations: 'Remove all metal objects. Inform staff of any implants or medical devices. The procedure takes approximately 30-60 minutes.'
    },
    { 
      title: 'Functional MRI (fMRI)',
      description: 'Measures brain activity by detecting changes in blood flow, useful in understanding brain function patterns.',
      preparations: 'Similar preparation to standard MRI. You may be asked to perform specific tasks during the scan.'
    },
    { 
      title: 'SPECT Scans',
      description: 'Evaluates blood flow and activity patterns in the brain to help diagnose and assess certain conditions.',
      preparations: 'A radioactive tracer will be administered before the scan. The entire procedure takes 2-3 hours.'
    }
  ];

  // Diagnostic Tests
  const diagnosticTests = [
    { 
      title: 'Electroencephalogram (EEG)',
      description: 'Records electrical activity in the brain to evaluate seizures, sleep disorders, and other conditions.',
      preparations: 'Wash your hair the night before. Avoid caffeine and sleep medications. The test takes 1-2 hours.'
    },
    { 
      title: 'Quantitative EEG (qEEG)',
      description: 'Advanced analysis of EEG data to create brain maps showing areas of dysregulation.',
      preparations: 'Similar to standard EEG. Results are typically reviewed with your provider at a follow-up appointment.'
    },
    { 
      title: 'Neuropsychological Testing',
      description: 'Comprehensive assessment of cognitive functions, including memory, attention, and executive function.',
      preparations: 'Get adequate rest before testing. Sessions may last 2-6 hours, sometimes split across multiple appointments.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src="/videos/Hand-Adobe.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Laboratory, Imaging & Diagnostic Testing
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-white">
              Comprehensive testing services to support accurate diagnosis and personalized treatment planning.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
              Advanced Testing for Precision Mental Healthcare
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              At ReThink Mental Health, we believe in the power of evidence-based, data-driven approaches to mental health care. 
              Our comprehensive laboratory, imaging, and diagnostic testing services allow us to look beyond symptoms 
              to understand the physiological factors that may be contributing to your mental health concerns.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              Through advanced testing, we can identify underlying conditions such as nutritional deficiencies, 
              hormonal imbalances, inflammation, or neurological issues that may be impacting your mental wellbeing. 
              This information helps us create truly personalized treatment plans that address root causes, not just symptoms.
            </p>
          </div>
        </div>
      </section>

      {/* Laboratory Tests Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Laboratory Tests</h2>
              <p className="mt-4 text-lg text-gray-500">
                Our comprehensive laboratory testing helps identify biochemical imbalances that may affect mental health.
              </p>
            </div>
            
            <div className="space-y-12">
              {labTests.map((test, index) => (
                <div key={index} className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="px-6 py-5 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">{test.title}</h3>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-gray-700 mb-4">{test.description}</p>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900">Preparation Instructions:</h4>
                      <p className="mt-2 text-gray-600">{test.preparations}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Imaging Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Imaging Services</h2>
              <p className="mt-4 text-lg text-gray-500">
                Advanced brain imaging to visualize structural and functional aspects that may impact mental health.
              </p>
            </div>
            
            <div className="space-y-12">
              {imagingServices.map((service, index) => (
                <div key={index} className="bg-gray-50 shadow overflow-hidden rounded-lg">
                  <div className="px-6 py-5 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-gray-700 mb-4">{service.description}</p>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900">Preparation Instructions:</h4>
                      <p className="mt-2 text-gray-600">{service.preparations}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Tests Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Diagnostic Tests</h2>
              <p className="mt-4 text-lg text-gray-500">
                Specialized tests to evaluate brain function and cognitive performance.
              </p>
            </div>
            
            <div className="space-y-12">
              {diagnosticTests.map((test, index) => (
                <div key={index} className="bg-white shadow overflow-hidden rounded-lg">
                  <div className="px-6 py-5 border-b border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-900">{test.title}</h3>
                  </div>
                  <div className="px-6 py-5">
                    <p className="text-gray-700 mb-4">{test.description}</p>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900">Preparation Instructions:</h4>
                      <p className="mt-2 text-gray-600">{test.preparations}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-medium text-gray-900">Do I need a referral for testing?</h3>
                <p className="mt-2 text-gray-600">
                  Most tests require a referral from one of our providers. During your initial consultation, 
                  your provider will determine which tests are appropriate for your situation.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900">Are these tests covered by insurance?</h3>
                <p className="mt-2 text-gray-600">
                  Many laboratory and diagnostic tests are covered by insurance, though coverage varies by plan. 
                  Our staff will verify your benefits before testing and discuss any potential out-of-pocket costs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900">How long does it take to get results?</h3>
                <p className="mt-2 text-gray-600">
                  Timing varies by test. Some lab results are available within 1-3 days, while specialized tests 
                  may take 1-2 weeks. Your provider will schedule a follow-up appointment to review your results 
                  and discuss treatment implications.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium text-gray-900">How should I prepare for testing?</h3>
                <p className="mt-2 text-gray-600">
                  Preparation requirements vary by test. After your test is scheduled, you&apos;ll receive specific 
                  instructions. General recommendations include getting adequate rest, staying hydrated, and 
                  following any fasting guidelines if applicable.
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
            Ready to Begin Your Journey to Optimal Mental Health?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Contact us today to schedule a consultation and learn which testing services are right for you.
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