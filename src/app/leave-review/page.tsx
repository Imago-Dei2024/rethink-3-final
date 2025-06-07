'use client';

import { useState } from 'react';
import Link from 'next/link';

// Star rating component
const StarRating = ({ rating, setRating }: { rating: number; setRating: (rating: number) => void }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          className={`text-2xl ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
          onClick={() => setRating(star)}
        >
          ★
        </button>
      ))}
    </div>
  );
};

export default function LeaveReview() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 0,
    reviewText: '',
    serviceName: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const setRating = (rating: number) => {
    setFormData(prev => ({
      ...prev,
      rating
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!formData.name || !formData.email || !formData.reviewText || formData.rating === 0) {
      setError('Please fill in all required fields and provide a rating.');
      return;
    }

    try {
      // In a real implementation, this would send the review data to a backend API
      // For now, we'll simulate a successful submission
      console.log('Review submitted:', formData);
      
      // Show success message
      setSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        rating: 0,
        reviewText: '',
        serviceName: '',
      });
    } catch (err) {
      setError('There was an error submitting your review. Please try again.');
      console.error('Error submitting review:', err);
    }
  };

  const services = [
    'Integrative Psychiatry',
    'Ketamine Therapy',
    'Spravato',
    'First Responder Program',
    'Genetic Testing',
    'QbTesting ADHD',
    'Wellness Injections',
    'Nutrition Counseling',
    'Other'
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Leave a Review
          </h1>
          <p className="mt-4 text-lg text-gray-500">
            We appreciate your feedback! Please share your experience with ReThink Mental Health.
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-green-800 mb-2">Thank you for your review!</h2>
            <p className="text-green-700 mb-6">
              Your review has been submitted and will be reviewed by our team before being published.
            </p>
            <div className="flex justify-center">
              <Link
                href="/reviews"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View Published Reviews
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                {error}
              </div>
            )}
            
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
              <p className="mt-1 text-sm text-gray-500">Your email will not be published.</p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700 mb-1">
                Which service did you receive?
              </label>
              <select
                id="serviceName"
                name="serviceName"
                value={formData.serviceName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select a service (optional)</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating <span className="text-red-500">*</span>
              </label>
              <StarRating rating={formData.rating} setRating={setRating} />
            </div>
            
            <div className="mb-6">
              <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700 mb-1">
                Your Review <span className="text-red-500">*</span>
              </label>
              <textarea
                id="reviewText"
                name="reviewText"
                value={formData.reviewText}
                onChange={handleChange}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Submit Review
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 