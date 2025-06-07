import Link from 'next/link';
import { GradientButton } from '@/components/ui/GradientButton';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-black text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <h2 className="text-2xl font-bold mb-4 text-gradient">ReThink Mental Health</h2>
              <p className="text-sm text-neutral-300 mb-5 leading-relaxed">
                Expert psychiatry and medication management with integrative approaches for your complete well-being.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" className="btn btn-circle btn-sm btn-ghost bg-white/10 hover:bg-primary-600/50 hover:scale-110 transition-all duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="btn btn-circle btn-sm btn-ghost bg-white/10 hover:bg-primary-600/50 hover:scale-110 transition-all duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="btn btn-circle btn-sm btn-ghost bg-white/10 hover:bg-primary-600/50 hover:scale-110 transition-all duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h3 className="text-base font-semibold text-primary-400 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              SERVICES
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/services/integrative-psychiatry" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Integrative Psychiatry
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/services/ketamine" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Ketamine Therapy
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/services/spravato" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Spravato
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/services/first-responder" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  First Responder Program
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/services/genetic-testing" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Genetic Testing
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h3 className="text-base font-semibold text-primary-400 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              RESOURCES
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/faq" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  FAQs
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/reviews" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Reviews
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/leave-review" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Leave a Review
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/wellness/links" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  Thorne & Fullscript
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-1">
                <Link href="/wellness/nad" className="text-neutral-300 hover:text-primary-300 text-sm flex items-center">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2"></span>
                  NAD+ Therapy
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
            <h3 className="text-base font-semibold text-primary-400 mb-4 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              CONTACT US
            </h3>
            <ul className="mt-4 space-y-3 text-neutral-300 text-sm">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>88 Inverness Circle East, Unit K103<br />Englewood, CO 80112</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>O: 303-406-0784</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                </svg>
                <span>F: 720-307-2357</span>
              </li>
              <li className="flex items-center pt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@rethinkcare.org" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">
                  info@rethinkcare.org
                </a>
              </li>
              <li className="pt-5">
                <GradientButton
                  href="/appointment"
                  variant="glass"
                  className="w-full justify-center gap-2"
                  leftIcon={<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>}
                >
                  Book Appointment
                </GradientButton>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} ReThink Mental Health. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-sm text-neutral-400 hover:text-primary-400 transition-colors duration-200">
                Accessibility
              </Link>
            </div>
          </div>
          <div className="mt-6 text-xs text-center text-neutral-500">
            <p>This website is for informational purposes only and does not provide medical advice, diagnosis, or treatment.</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 