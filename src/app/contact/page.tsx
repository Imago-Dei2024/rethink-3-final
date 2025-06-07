'use client';

import { useState } from 'react';
import Link from 'next/link';
import { submitContactForm, ContactFormData } from '@/lib/contact';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send the form data to the Firebase Cloud Function
      await submitContactForm(formData);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message || 'There was an error submitting your message. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Error submitting contact form:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const subjectOptions = [
    'General Inquiry',
    'Appointment Question',
    'Insurance or Billing',
    'Ketamine Therapy Information',
    'Spravato Information',
    'First Responder Program',
    'Other'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact Us
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
          We&apos;re here to help. Reach out with any questions or to schedule an appointment.
        </p>
      </div>

      <div className="grid md:grid-cols-12 gap-10">
        {/* Contact Form */}
        <div className="md:col-span-7">
          {submitted ? (
            <div className="bg-green-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-green-800 mb-2">Thank you for contacting us!</h2>
              <p className="text-green-700 mb-4">
                Your message has been sent successfully. We&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h2>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject (optional)</option>
                    {subjectOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>

        {/* Contact Information */}
        <div className="md:col-span-5">
          <div className="bg-white shadow-md rounded-lg p-8 h-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Office Location</h3>
                <p className="text-gray-600">88 Inverness Circle East, Unit K103</p>
                <p className="text-gray-600">Englewood, CO 80112</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Phone & Fax</h3>
                <p className="text-gray-600">Office: 303-406-0784</p>
                <p className="text-gray-600">Fax: 720-307-2357</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">
                  <a href="mailto:info@rethinkcare.org" className="text-blue-600 hover:text-blue-800">
                    info@rethinkcare.org
                  </a>
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Office Hours</h3>
                <div className="grid grid-cols-2 gap-x-4 text-gray-600">
                  <div>Monday - Thursday:</div>
                  <div>9:00 AM - 5:00 PM</div>
                  <div>Friday:</div>
                  <div>9:00 AM - 3:00 PM</div>
                  <div>Saturday - Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link
                  href="/appointment"
                  className="inline-block w-full px-6 py-3 bg-blue-600 text-center text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <div className="h-96 w-full">
            {/* Replace with an embedded Google Map */}
            <div className="flex items-center justify-center h-full bg-gray-200">
              <div className="text-gray-400 text-center">
                <p className="text-sm">Google Maps embed placeholder</p>
                <p className="text-xs mt-2">(Embed map showing 88 Inverness Circle East, Unit K103, Englewood, CO 80112)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}