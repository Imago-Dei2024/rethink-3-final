import Link from 'next/link';

// Mock data for reviews
const reviews = [
  {
    id: 1,
    name: 'Sarah J.',
    rating: 5,
    date: 'February 15, 2023',
    reviewText: 'The ketamine therapy at ReThink has been life-changing for my treatment-resistant depression. The staff is incredible - caring, attentive, and they create such a safe space for healing. I felt supported every step of the way.',
    service: 'Ketamine Therapy'
  },
  {
    id: 2,
    name: 'Michael T.',
    rating: 5,
    date: 'March 3, 2023',
    reviewText: 'As a first responder, I\'ve struggled with PTSD for years. ReThink\'s specialized program for first responders has been the most effective treatment I\'ve found. They truly understand our unique challenges and provide targeted care that works.',
    service: 'First Responder Program'
  },
  {
    id: 3,
    name: 'Jennifer L.',
    rating: 5,
    date: 'April 18, 2023',
    reviewText: 'The integrative approach at ReThink has helped me more than years of traditional therapy alone. They look at the whole picture - mind, body, nutrition - and created a personalized plan that finally addressed my anxiety issues at the root.',
    service: 'Integrative Psychiatry'
  },
  {
    id: 4,
    name: 'David R.',
    rating: 4,
    date: 'June 2, 2023',
    reviewText: 'I\'ve been receiving Spravato treatments for my depression, and the results have exceeded my expectations. The clinic atmosphere is peaceful, and the monitoring process is thorough but comfortable. Insurance coverage was straightforward too.',
    service: 'Spravato'
  },
  {
    id: 5,
    name: 'Emily W.',
    rating: 5,
    date: 'July 12, 2023',
    reviewText: 'The genetic testing ReThink provided helped identify why I had such poor responses to previous medications. With this info, they found a treatment that actually works for me. Wish I had done this years ago - it would have saved so much trial and error.',
    service: 'Genetic Testing'
  },
  {
    id: 6,
    name: 'Robert K.',
    rating: 5,
    date: 'August 28, 2023',
    reviewText: 'The NAD+ and vitamin infusions have significantly improved my energy levels and mental clarity. Combined with my regular psychiatric care, these wellness services have been a game-changer for my overall wellbeing.',
    service: 'Wellness Injections'
  }
];

// Star rating display component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-xl ${
            star <= rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default function Reviews() {
  return (
    <div className="parallax-background py-12 md:py-20">  
      <div className="glass-panel max-w-7xl mx-auto p-6 md:p-12"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Patient Reviews
              </h1>
              <p className="mt-4 text-lg text-gray-500">
                Read what our patients say about their experiences at ReThink Mental Health.
              </p>
              <div className="mt-8">
                <Link
                  href="/leave-review"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Leave Your Review
                </Link>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="text-sm text-blue-600 font-medium">{review.service}</div>
                  </div>
                  
                  <StarRating rating={review.rating} />
                  
                  <div className="mt-4 flex-grow">
                    <p className="text-gray-600">{review.reviewText}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <p className="text-lg text-gray-700 mb-6">
                Ready to experience the ReThink difference for yourself?
              </p>
              <Link
                href="/appointment"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div> 
     </div> 
    </div> 
  );
} 