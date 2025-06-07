'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Appointment() {
  const [activeTab, setActiveTab] = useState('new');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Schedule an Appointment
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            Take the first step toward better mental health. We&apos;re here to help you on your journey.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="flex -mb-px">
            <button
              onClick={() => setActiveTab('new')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                activeTab === 'new'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              New Patients
            </button>
            <button
              onClick={() => setActiveTab('existing')}
              className={`py-4 px-6 text-center border-b-2 font-medium text-sm md:text-base ${
                activeTab === 'existing'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Existing Patients
            </button>
          </nav>
        </div>

        {/* New Patient Content */}
        {activeTab === 'new' && (
          <div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">New Patient Information</h2>
                <p className="text-gray-600 mb-6">
                  We&apos;re excited to welcome you to ReThink Mental Health. To schedule your first appointment, please follow these steps:
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Step 1: Complete New Patient Forms</h3>
                    <p className="text-blue-700 mb-3">
                      Please download and complete the new patient forms before your first appointment. This will help us understand your needs and medical history.
                    </p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Download Forms
                    </button>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Step 2: Verify Insurance</h3>
                    <p className="text-blue-700 mb-3">
                      We accept most major insurance plans. Please have your insurance information ready when scheduling your appointment. You can contact our office to verify your coverage.
                    </p>
                    <Link
                      href="/faq"
                      className="text-blue-600 font-medium hover:text-blue-800"
                    >
                      View accepted insurance plans →
                    </Link>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Step 3: Schedule Your Appointment</h3>
                    <p className="text-blue-700 mb-3">
                      You can schedule your first appointment using our online booking system or by calling our office directly at 303-406-0784.
                    </p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Book Online
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h2>
                
                <div className="space-y-4 text-gray-600">
                  <p>
                    Your first appointment will typically last 45-60 minutes and includes a comprehensive evaluation of your mental health needs and concerns.
                  </p>
                  <p>
                    During this visit, you will meet with one of our providers who will discuss your symptoms, medical history, and treatment goals. Together, you&apos;ll develop a personalized treatment plan.
                  </p>
                  <p>
                    Please arrive 15 minutes before your scheduled appointment time with your completed forms, insurance card, and a valid photo ID.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Existing Patient Content */}
        {activeTab === 'existing' && (
          <div>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Existing Patient Portal</h2>
                <p className="text-gray-600 mb-6">
                  Welcome back! As an existing patient, you have several options for scheduling your next appointment.
                </p>

                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-green-800 mb-2">Patient Portal</h3>
                    <p className="text-green-700 mb-3">
                      Log in to our secure patient portal to schedule appointments, request prescription refills, send secure messages to your provider, and view your medical records.
                    </p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                      Access Patient Portal
                    </button>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Phone Scheduling</h3>
                    <p className="text-blue-700 mb-3">
                      Prefer to schedule by phone? Call our office at 303-406-0784 during business hours to speak with our scheduling team.
                    </p>
                    <p className="text-blue-700 text-sm">
                      Monday - Thursday: 9:00 AM - 5:00 PM<br />
                      Friday: 9:00 AM - 3:00 PM
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-md">
                    <h3 className="text-lg font-medium text-blue-800 mb-2">Online Booking</h3>
                    <p className="text-blue-700 mb-3">
                      Use our online booking system to schedule your next appointment at your convenience.
                    </p>
                    <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Book Online
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Contact Information */}
        <div className="mt-12 bg-gray-50 rounded-lg p-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Questions About Appointments?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about scheduling, insurance coverage, or what to expect at your appointment, please don&apos;t hesitate to contact us.
          </p>
          <div className="flex flex-wrap gap-4">
            <a 
              href="tel:3034060784" 
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call: 303-406-0784
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <svg className="mr-2 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}