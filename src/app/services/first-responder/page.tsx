import Link from 'next/link';
import Image from 'next/image';

export default function FirstResponderProgram() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-800 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Mental Health Support for First Responders
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              Specialized care designed for those who serve our communities.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Support for Those Who Support Others
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Dedicated mental health care for first responders
            </p>
          </div>
          <div className="mt-10 max-w-4xl mx-auto text-gray-600">
            <p className="text-lg leading-relaxed">
              At ReThink Mental Health, we understand the unique mental health challenges faced by first responders, 
              frontline healthcare workers, and military personnel. The nature of your work exposes you to high-stress 
              situations, trauma, and emotional strain that can take a significant toll on your mental health and wellbeing.
            </p>
            <p className="text-lg mt-4 leading-relaxed">
              Our practice is committed to providing specialized, confidential, and compassionate care tailored 
              specifically to the needs of those who serve our communities. We offer a safe space where you can 
              address your mental health concerns with providers who understand the unique pressures of your profession.
            </p>
          </div>
        </div>
      </section>w

      {/* Common Challenges Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Understanding First Responder Mental Health
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Common challenges unique to your profession
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">PTSD and Trauma-Related Disorders</h3>
              <p className="text-gray-600">
                Repeated exposure to traumatic events can lead to post-traumatic stress disorder (PTSD) and related 
                conditions. Symptoms may include flashbacks, nightmares, heightened anxiety, and emotional numbing.
                First responders experience these at rates significantly higher than the general population.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Anxiety and Depression</h3>
              <p className="text-gray-600">
                The high-pressure nature of first responder work, combined with irregular schedules and 
                exposure to human suffering, can contribute to anxiety disorders and depression. These conditions 
                may manifest as persistent worry, feelings of hopelessness, or loss of interest in activities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Burnout and Compassion Fatigue</h3>
              <p className="text-gray-600">
                Constant exposure to crisis situations and the emotional demands of helping others can lead to 
                burnout and compassion fatigue. This may present as emotional exhaustion, decreased job satisfaction, 
                and a reduced sense of personal accomplishment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sleep Disorders and Stress Management</h3>
              <p className="text-gray-600">
                Shift work, on-call schedules, and the high-stress nature of emergency response can disrupt normal 
                sleep patterns and stress regulation. This can lead to insomnia, sleep apnea, and difficulties 
                managing stress in both professional and personal life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Treatment Approaches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Specialized Approach
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Tailored treatments for first responders
            </p>
          </div>

          <div className="mt-10">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized One-on-One Care</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We provide individualized, one-on-one care that addresses your specific needs and experiences. 
                  Our approach focuses on building a strong therapeutic relationship in a private, confidential setting 
                  where you can feel safe discussing sensitive topics related to your work and mental health.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Trauma-Informed Psychiatric Care</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Our providers are trained in trauma-informed approaches that recognize and address the impact of 
                  traumatic experiences on mental health. We understand how trauma affects the brain and body, and 
                  we tailor our interventions to support healing and resilience.
                </p>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative Treatment Options</h3>
                <p className="text-lg text-gray-600">
                  We offer cutting-edge treatments that have shown promising results for first responders:
                </p>
                <ul className="list-disc pl-6 mt-2 mb-6 text-gray-600">
                  <li className="mb-2">Ketamine-assisted therapy for treatment-resistant PTSD and depression</li>
                  <li className="mb-2">Spravato (esketamine) treatments</li>
                  <li className="mb-2">Medication management with specialized knowledge of medications that work well with high-stress professions</li>
                  <li>Holistic and integrative approaches including nutritional psychiatry and wellness injections</li>
                </ul>
              </div>
              
              <div className="mt-10 lg:mt-0">
                <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
                  <Image src="/images/First-Responder/hero-bg.jpg" 
                  alt="First responder support" 
                  width={1000} 
                  height={1000} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Specialist */}
      <section id="specialist" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our First Responder Specialist
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              Dedicated expert in first responder mental health
            </p>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="lg:flex">
                <div className="lg:w-1/3 bg-gray-200 lg:h-auto h-64 flex items-center justify-center">
                  <Image src="/images/team/Erin-Webb.jpg" 
                  alt="Erin Webb" 
                  width={1000} 
                  height={1000} />
                  <div className="text-gray-400 text-center">
                    <p className="text-sm">Team member photo placeholder</p>
                    <p className="text-xs mt-2">(Replace with photo of Erin Webb)</p>
                  </div>
                </div>
                <div className="p-8 lg:w-2/3">
                  <h3 className="text-2xl font-semibold text-gray-900">Erin Webb</h3>
                  <p className="text-sm text-blue-600 font-medium mb-4">Psychiatric Nurse Practitioner</p>
                  <div className="text-gray-600">
                    <p className="mb-4">
                      Erin Webb brings extensive experience working with first responders and military veterans. 
                      His approach combines evidence-based psychiatric treatments with holistic methods tailored 
                      to the unique needs of those in high-stress professions.
                    </p>
                    <p className="mb-4">
                      With specialized training in trauma-informed care and PTSD treatment approaches, including 
                      ketamine therapy, Erin understands the complex mental health challenges faced by first responders 
                      and is dedicated to providing compassionate, effective care in a safe, confidential environment.
                    </p>
                    <p>
                      His background working with emergency services personnel gives him unique insight into the 
                      pressures and experiences of your profession, allowing for more targeted and effective treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Environment Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Office Environment
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              A private, comfortable space for healing
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="bg-gray-200 h-80 overflow-hidden">
                <Image src="/images/PrivateConsultation/Private-Consultation2.jpg" 
                alt="Private consultation room" 
                width={1000} 
                height={1000} />
                <div className="text-gray-400 text-center">
                  <p className="text-sm">Private consultation room</p>
                  <p className="text-xs mt-2">(Replace with actual image)</p>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-sm text-gray-600">Private consultation rooms ensuring complete confidentiality</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="bg-gray-200 h-80 overflow-hidden">
                <Image src="/images/KetamineRoom/Ketamine-Room.jpg" 
                alt="Ketamine therapy room" 
                width={1000} 
                height={1000} />
                <div className="text-gray-400 text-center">
                  <p className="text-sm">Ketamine therapy room</p>
                  <p className="text-xs mt-2">(Replace with actual image)</p>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-sm text-gray-600">Ketamine therapy rooms designed for comfort and relaxation</p>
              </div>
            </div>
            
            <div className="overflow-hidden rounded-lg shadow-md">
              <div className="bg-gray-200 h-80 overflow-hidden">
                <Image src="/images/Reception/Reception-Desk.jpg" 
                alt="Reception area" 
                width={1000} 
                height={1000} />
                <div className="text-gray-400 text-center">
                  <p className="text-sm">Reception area</p>
                  <p className="text-xs mt-2">(Replace with actual image)</p>
                </div>
              </div>
              <div className="p-3 bg-white">
                <p className="text-sm text-gray-600">Discreet, welcoming reception area</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center text-gray-600">
            <p className="text-lg">
              Our office environment is designed with your privacy and comfort in mind. We understand 
              the importance of discretion for first responders seeking mental health support, and our 
              space reflects this commitment to confidentiality and professionalism.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Anonymous) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
              From those we&apos;ve helped
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75 14.25 10.76 14.25 12 13.24 14.25 12 14.25zm-6 0c-1.24 0-2.25-1.01-2.25-2.25S4.76 9.75 6 9.75 8.25 10.76 8.25 12 7.24 14.25 6 14.25zm12 0c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25S20.25 10.76 20.25 12 19.24 14.25 18 14.25z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Firefighter</p>
                  <p className="text-sm text-gray-500">10 years of service</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;After years of struggling with sleep issues and anxiety following a difficult call, 
                I finally found support that understands what we go through. The specialized care I&apos;ve 
                received has made a tremendous difference in both my professional and personal life.&quot;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75 14.25 10.76 14.25 12 13.24 14.25 12 14.25zm-6 0c-1.24 0-2.25-1.01-2.25-2.25S4.76 9.75 6 9.75 8.25 10.76 8.25 12 7.24 14.25 6 14.25zm12 0c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25S20.25 10.76 20.25 12 19.24 14.25 18 14.25z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Police Officer</p>
                  <p className="text-sm text-gray-500">15 years of service</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;The ketamine therapy program helped me break through the PTSD symptoms that were affecting 
                my ability to work and connect with my family. For the first time in years, I feel like 
                myself again. The team truly understands the unique pressures we face.&quot;
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 14.25c-1.24 0-2.25-1.01-2.25-2.25S10.76 9.75 12 9.75 14.25 10.76 14.25 12 13.24 14.25 12 14.25zm-6 0c-1.24 0-2.25-1.01-2.25-2.25S4.76 9.75 6 9.75 8.25 10.76 8.25 12 7.24 14.25 6 14.25zm12 0c-1.24 0-2.25-1.01-2.25-2.25s1.01-2.25 2.25-2.25S20.25 10.76 20.25 12 19.24 14.25 18 14.25z"></path>
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-gray-900 font-medium">Paramedic</p>
                  <p className="text-sm text-gray-500">8 years of service</p>
                </div>
              </div>
              <p className="text-gray-600">
                &quot;Finding a provider who understands the unique stressors of emergency medicine has been 
                life-changing. The personalized approach to my treatment has helped me develop better coping 
                mechanisms and improved my overall wellbeing both on and off duty.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl mb-6">
            Take The First Step Today
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            We understand the courage it takes to reach out for support. Our team is ready to provide 
            confidential, specialized care designed for first responders.
          </p>
          <div className="mt-8">
            <Link
              href="/appointment"
              className="px-8 py-3 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Schedule a Confidential Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 