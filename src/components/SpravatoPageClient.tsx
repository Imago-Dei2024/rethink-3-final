'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function SpravatoPageClient() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              FDA-Approved Spravato Treatment
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed"
            >
              Breakthrough esketamine nasal spray treatment for treatment-resistant depression
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/appointment" className="bg-white text-blue-800 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-center">
                Schedule Consultation
              </Link>
              <a href="tel:(949) 431-6066" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors duration-200 text-center">
                Call (949) 431-6066
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Revolutionary Treatment for Depression
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Spravato (esketamine) is an FDA-approved nasal spray that works differently than traditional antidepressants, 
              offering new hope for individuals with treatment-resistant depression.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What is Spravato?</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  Spravato is a breakthrough medication that contains esketamine, derived from ketamine. 
                  It&rsquo;s the first FDA-approved treatment that works on the brain&rsquo;s NMDA receptors, 
                  offering a new pathway to relief for those who haven&rsquo;t responded to other antidepressants.
                </p>
                <p>
                  Administered as a nasal spray in our certified REMS center, Spravato can provide 
                  rapid relief from depression symptoms, often within hours to days rather than weeks.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/spravato-treatment.jpg"
                alt="Spravato Treatment at ReThink Mental Health"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Benefits of Spravato Treatment
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Discover how Spravato can offer new possibilities for mental health recovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "FDA Approved",
                description: "Rigorously tested and approved by the FDA for treatment-resistant depression",
                icon: "✓"
              },
              {
                title: "Rapid Relief",
                description: "Many patients experience improvement within hours to days, not weeks",
                icon: "⚡"
              },
              {
                title: "New Mechanism",
                description: "Works on NMDA receptors, offering hope when other treatments have failed",
                icon: "🧠"
              },
              {
                title: "Insurance Coverage",
                description: "Covered by most major insurance plans when medically necessary",
                icon: "💳"
              },
              {
                title: "Safe Environment",
                description: "Administered in our certified REMS facility with medical supervision",
                icon: "🏥"
              },
              {
                title: "Personalized Care",
                description: "Tailored treatment plans based on your individual needs and response",
                icon: "👤"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-200"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Spravato Treatment Journey
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              A comprehensive, medically supervised process designed for your safety and success
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Evaluation",
                description: "Comprehensive assessment to determine if Spravato is right for you"
              },
              {
                step: "2",
                title: "Treatment Planning",
                description: "Personalized treatment schedule based on your specific needs"
              },
              {
                step: "3",
                title: "Supervised Administration",
                description: "Nasal spray administered in our certified REMS facility"
              },
              {
                step: "4",
                title: "Monitoring & Follow-up",
                description: "Ongoing support and adjustments to optimize your treatment"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is a Candidate Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Who is a Candidate for Spravato?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Spravato is specifically approved for adults with treatment-resistant depression - 
                  those who have not responded adequately to at least two different antidepressant treatments.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">You may be a candidate if you:</h4>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Have tried multiple antidepressants without sufficient improvement</li>
                    <li>Are currently experiencing a depressive episode</li>
                    <li>Are committed to supervised treatment sessions</li>
                    <li>Meet specific medical criteria for Spravato therapy</li>
                  </ul>
                </div>
                <p className="font-semibold text-blue-600">
                  Our experienced team will conduct a thorough evaluation to determine if Spravato is right for you.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule Your Consultation</h3>
              <p className="text-gray-700 mb-6">
                Take the first step toward exploring this innovative treatment option. 
                Our team will assess your medical history and current situation to determine if Spravato could be beneficial for you.
              </p>
              <div className="space-y-4">
                <Link href="/appointment" className="block w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 text-center">
                  Book Consultation Online
                </Link>
                <a href="tel:(949) 431-6066" className="block w-full border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200 text-center">
                  Call (949) 431-6066
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Safety & Monitoring
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Your safety is our top priority throughout your Spravato treatment journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">REMS Certification</h3>
              <p className="text-gray-700 mb-4">
                Our facility is certified under the Spravato REMS (Risk Evaluation and Mitigation Strategy) program, 
                ensuring the highest standards of safety and monitoring.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Supervised administration by trained healthcare professionals</li>
                <li>Continuous monitoring during and after treatment</li>
                <li>Safe, comfortable treatment environment</li>
                <li>Emergency protocols in place</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">What to Expect</h3>
              <p className="text-gray-700 mb-4">
                Each treatment session is carefully monitored to ensure your safety and comfort throughout the process.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Pre-treatment health assessment</li>
                <li>Blood pressure and vitals monitoring</li>
                <li>2-hour observation period post-treatment</li>
                <li>Arrangement for safe transportation home</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance & Coverage Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Insurance & Coverage
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              We work with most major insurance plans to make Spravato treatment accessible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Insurance Accepted</h3>
              <p className="text-gray-700">
                Most major insurance plans cover Spravato when medically necessary and appropriate criteria are met.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Prior Authorization</h3>
              <p className="text-gray-700">
                Our team handles insurance verification and prior authorization requirements to streamline your treatment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Support</h3>
              <p className="text-gray-700">
                We offer financial counseling and payment options to help make treatment accessible for qualifying patients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore Spravato Treatment?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Take the next step in your mental health journey. Contact us today to schedule a consultation 
              and learn if Spravato could be the breakthrough treatment you&rsquo;ve been seeking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/appointment" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
                Schedule Consultation
              </Link>
              <a href="tel:(949) 431-6066" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                Call (949) 431-6066
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
