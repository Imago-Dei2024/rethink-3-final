import Link from 'next/link';
import Image from 'next/image';
import Office from '@/components/Office';


const teamMembers = [
  {
    id: 1,
    name: 'Karen Laber',
    title: 'PMHNP-BC, Founder',
    bio: 'Karen is a Psychiatric Mental Health Nurse Practitioner. With over 25 years of experience as an EMT, ER, ICU and flight nurse, Karen\'s experiences in these roles came with a great personal cost, as any nurse or responder can relate to.  She realized that there was a need for both culturally relevant and competent mental health care, where responders could get help from someone who understands the lifestyle and demands of responder life, and the impact it has. Her passion for treating first responders and their families led her to become a board certified psychiatric mental health nurse practitioner (PMHNP-BC), and together with her husband, they founded ReThink Mental Health and Wellness.  She enjoys teaching, especially peer support trainings for several local police, fire, and EMS, agencies. She also lectures for paramedic and nursing students sharing lessons she has learned in her career and how to avoid and overcome secondary trauma. She leads a secondary trauma and resiliency course on occasion with a local non-profit.  She is also certified in weight loss medicine and peptide therapy and believes mental health includes caring for the entire body. She takes an individualized, person-centered approach to care. She is married to a Police Officer and has two grown boys. She loves music, the outdoors, and is an avid big game hunter. Her pup Lilly also joins her at the office every day.',
    image: '/images/team/Karen-Laber.jpg',
  },
  {
    id: 2,
    name: 'Erin Webb',
    title: 'Psychiatric Nurse Practitioner - PMHNP-BC',
    bio: 'Erin is a Psychiatric Mental Health Nurse Practitioner with over 15 years of nursing experience working with military members and their families, as well as Veterans. As a Navy Veteran herself, Erin has a passion for serving those who serve our country and community. She believes in a holistic approach to mental wellness, recognizing that resilience and healing arent attained with a one-size-fits-all treatment plan, but rather one that has been tailored to each individuals unique desires, needs, and often age.  Erin also enjoys supporting and caring for young children and older adults.  Because of her current and past experience in the Navy, she understands the intricacies of caring for those, and the families of those, that serve, as well as first responders. Erin was born and raised in Arizona and lived all over the country during her nearly 12 years of active-duty service. Now in Colorado, she remains a member of the United States Navy Reserves. Erin is also married to a Navy Veteran, with whom she shares two children and two dogs. She enjoys spending time with her family, listening to true crime podcasts, gardening and crafting.',
    image: '/images/team/Erin-Webb.jpg',
  },
  {
    id: 3,
    name: 'Jackie Ewer',
    title: 'Psychiatric Mental Health Nurse Practitioner - RN, CCRN',
    bio: 'Jackie is long-time Registered Nurse and ReThinks Ketamine and IV Wellness Program Manager and, She has worked with clients of all ages throughout her career.  Her nursing expertise includes Trauma nursing, ICU, interventional radiology, medical robotics, she also has a deep passion for caring for those who have suffered spinal cord injuries, traumatic brain injuries (TBI), She also worked in mental health care where she has managed psychiatry practices , mobile IV and ketamine programs prior to joining our team at ReThink. Outside of her professional life, she enjoys spending time with her two sons, furry four-legged family members, traveling, live music, sports, and exploring new restaurants around town.',
    image: '/images/team/Jackie-Ewer.jpg',
  },
  {
    id: 4,
    name: 'Brooklyne Armbruster',
    title: 'Administrative Assistant',
    bio: 'Brooklyne is an integral part of our team here at ReThink. She keeps the office running smoothly and we would be lost without her! She welcomes everyone who walks through our door with her contagious smile and energy. Brooklyne proudly comes from a long line of Emergency Responders and Veterans who are her inspiration for working in healthcare. Her mom is a long-time ER/ICU nurse (and one of the funniest people in the world), and two very special grandfathers. One served our country in WWII as a paratrooper, and the other served in the Airforce in Vietnam, as well as being a Houston Police K9 Unit Officer. Brooklyne has an innate caregiver heart full of compassion, and coupled with her incredibly funny sense of humor, she keeps us all smiling! In her free time she enjoys paddleboarding, music, and animals. She is the parent of a cantankerous orange kitty named Tigger, AKA "Mista", who sadly, does NOT enjoy paddle boarding.  ',
    image: '/images/team/Brookelyne-Armbruster.jpg',
  },
  {
    id: 5,
    name: 'Lilly',
    title: 'Our Therapy Dog',
    bio: 'Lilly is ReThink Mental Health and Wellness resident therapy dog in training. She is certain that she is actually the Office Manager, door greeter, couch warmer, and generally in charge of all things. She is eagerly working on her service dog training and certification. During your appointment, you will likely meet her in our waiting room with one of her stuffed animals or patrolling the halls looking for someone to give hugs and kisses to! She will frequently present her beloved toys to you as a friendship gesture when you arrive. She joins Karen during client sessions and helps provide stress relief and comfort to clients. She especially loves to give hugs with her fluffy paws.  She has the gift of "lying puppy dog eyes", which she uses to make others believe she is in need of food and lacking attention. We assure you, she is fed and spoiled, so don\'t believe her!',
    image: '/images/team/Lilly-Bug.jpg',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section - Modern Design with Purple-Teal Gradient */}
      <section className="relative text-white overflow-hidden py-20 md:py-24">
        {/* Background with gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900 via-indigo-800 to-teal-700">
          {/* Modern geometric pattern overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#grid-pattern)" />
            </svg>
          </div>
          
          {/* Subtle animated light effect */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" className="animate-pulse">
              <defs>
                <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </radialGradient>
              </defs>
              <ellipse cx="50%" cy="50%" rx="60%" ry="40%" fill="url(#glow)" />
            </svg>
          </div>
          
          {/* Subtle diagonal lines */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-tr from-white/5 to-transparent"></div>
          <div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-bl from-white/5 to-transparent"></div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            {/* Title with animation */}
            <div className="inline-flex items-center gap-2 mb-6 text-sm text-teal-300 font-medium">
              <div className="h-px w-12 bg-teal-400"></div>
              <span className="uppercase tracking-wide">OUR STORY</span>
              <div className="h-px w-12 bg-teal-400"></div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-700 ease-in-out">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-white">ReThink Mental Health</span>
            </h1>
            <p className="mt-4 text-xl max-w-2xl mx-auto text-white/80 font-light">
              Expert care delivered with compassion, innovation, and a dedication to your wellbeing.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Modern Design */}
      <section id="mission" className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 text-sm text-purple-600 dark:text-purple-400 font-medium">
              <div className="h-px w-8 bg-purple-600 dark:bg-purple-400"></div>
              <span className="uppercase tracking-wide">OUR PURPOSE</span>
              <div className="h-px w-8 bg-purple-600 dark:bg-purple-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our <span className="text-purple-600 dark:text-purple-400">Mission</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
              Why we do what we do
            </p>
          </div>
          
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-10 -right-20 w-64 h-64 bg-teal-100 dark:bg-teal-900/20 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-100 dark:bg-purple-900/20 rounded-full blur-3xl opacity-30 dark:opacity-20"></div>
            
            {/* Card with content */}
            <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-sm">
              <div className="absolute top-0 w-full h-1 bg-gradient-to-r from-purple-500 to-teal-500"></div>
              
              <div className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                  <div className="p-3 rounded-full bg-gradient-to-br from-purple-500/10 to-teal-500/10 border border-purple-200 dark:border-purple-800">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#mission-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                      <defs>
                        <linearGradient id="mission-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#8b5cf6" /> {/* purple-500 */}
                          <stop offset="100%" stopColor="#14b8a6" /> {/* teal-500 */}
                        </linearGradient>
                      </defs>
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Transforming Mental Health Care</h3>
                </div>
                
                <div className="space-y-4 text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  <p className="text-lg transition-all duration-500 hover:translate-x-1">
                    At ReThink Mental Health, our mission is to transform behavioral health care through a compassionate, 
                    holistic, and patient-centered approach. We believe that everyone matters and are committed to providing 
                    a safe, inclusive space where all individuals can find support, understanding, and empowerment. 
                  </p>
                  <p className="text-lg transition-all duration-500 hover:translate-x-1">
                    Our dedicated team offers personalized care that respects the unique journey of each person, fostering well-being 
                    and resilience in a nurturing environment. Together, we work to <span className="text-purple-600 dark:text-purple-400 font-medium">ReThink</span> and redefine mental health services, 
                    ensuring that our doors are always open to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section - Modern Design */}
      <section className="py-20 bg-neutral-50 dark:bg-neutral-900/60">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-6 text-sm text-teal-600 dark:text-teal-400 font-medium">
                <div className="h-px w-8 bg-teal-500 dark:bg-teal-400"></div>
                <span className="uppercase tracking-wide">OUR APPROACH</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-8">
                Our Philosophy on <span className="text-teal-600 dark:text-teal-400">Mental Health Care</span>
              </h2>
              
              {/* Decorative element */}
              <div className="absolute -z-10 -top-10 -left-10 w-40 h-40 rounded-full bg-purple-200/30 dark:bg-purple-900/20 blur-2xl"></div>
              
              <div className="space-y-6 text-neutral-700 dark:text-neutral-300">
                <div className="transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-neutral-900 dark:text-white">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-100 dark:bg-teal-900/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-teal-600 dark:text-teal-400">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v8"></path>
                        <path d="M8 12h8"></path>
                      </svg>
                    </div>
                    Holistic Understanding
                  </h3>
                  <p className="text-lg leading-relaxed pl-10">
                    Mental health is more than just emotions and coping skills. It means understanding all aspects of your unique journey. 
                    There is only one you, and you are celebrated and valued at ReThink. Your physical, spiritual, and mental health all 
                    are a part of who you are, and an imbalance in one affects the others.
                  </p>
                </div>
                
                <div className="transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-neutral-900 dark:text-white">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-purple-600 dark:text-purple-400">
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                      </svg>
                    </div>
                    Safe & Judgment-Free
                  </h3>
                  <p className="text-lg leading-relaxed pl-10">
                    We provide a safe and judgment-free environment for you to explore the issues at hand. We are here to see you 
                    as a whole person, and that means incorporating your personal values into your treatment.
                  </p>
                </div>
                
                <div className="transition-transform duration-500 ease-in-out hover:translate-y-[-5px]">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-2 text-neutral-900 dark:text-white">
                    <div className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-indigo-600 dark:text-indigo-400">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    Integrative Approach
                  </h3>
                  <p className="text-lg leading-relaxed pl-10">
                    Our integrative approach combines the best of conventional medicine with evidence-based complementary therapies. 
                    We believe that effective treatment requires addressing the root causes of distress, not just managing symptoms.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden group">
                {/* Border glow effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-500/30 transition-all duration-700 ease-in-out z-10"></div>
                
                {/* Image with hover effect */}
                <div className="relative h-[500px] overflow-hidden rounded-2xl shadow-lg">
                  <Image 
                    src="/images/About-Us/Our-Phil.jpg"
                    alt="Our integrative approach to mental health care"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full transition-all duration-1000 ease-in-out group-hover:scale-105"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-60"></div>
                  
                  {/* Quote overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500 ease-in-out translate-y-4 group-hover:translate-y-0">
                    <blockquote className="text-white text-lg font-light italic">
                      &quot;Mental health isn&apos;t about fixing what&apos;s broken. It&apos;s about nurturing what&apos;s strong.&quot;
                    </blockquote>
                    <p className="text-teal-300 mt-2 text-sm font-medium">— ReThink Mental Health Philosophy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - Modern Design */}
      <section id="team" className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 text-sm text-indigo-600 dark:text-indigo-400 font-medium">
              <div className="h-px w-8 bg-indigo-600 dark:bg-indigo-400"></div>
              <span className="uppercase tracking-wide">EXPERT CARE</span>
              <div className="h-px w-8 bg-indigo-600 dark:bg-indigo-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Meet Our <span className="text-indigo-600 dark:text-indigo-400">Team</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
              Dedicated professionals committed to your care
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white dark:bg-neutral-800 overflow-hidden rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
              >
                <div className="relative">
                  {/* Accent top line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-teal-500"></div>
                  
                  {/* Image container with overlay hover effect */}
                  <div className="relative h-72 overflow-hidden">
                    <Image 
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      width={600}
                      height={600}
                      className="object-cover w-full h-full transition-transform duration-1000 ease-in-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
                
                <div className="px-6 py-6">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400 font-medium mb-4">{member.title}</p>
                  
                  <div className="mt-3 text-neutral-700 dark:text-neutral-300">
                    <p className="line-clamp-4 text-sm">{member.bio}</p>
                    
                    <details className="mt-3 group">
                      <summary className="text-indigo-600 dark:text-indigo-400 text-sm font-medium cursor-pointer flex items-center">
                        <span>Read more</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </summary>
                      <p className="mt-3 text-sm">{member.bio}</p>
                    </details>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Gallery Section - Modern Design */}
      <section id="office-gallery" className="py-20 bg-neutral-50 dark:bg-neutral-900/60 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative">
          {/* Decorative elements */}
          <div className="absolute -z-10 top-0 right-40 w-80 h-80 rounded-full bg-teal-200/20 dark:bg-teal-900/10 blur-3xl"></div>
          <div className="absolute -z-10 bottom-0 left-20 w-80 h-80 rounded-full bg-purple-200/20 dark:bg-purple-900/10 blur-3xl"></div>
          
          <div className="text-center mb-14 relative">
            <div className="inline-flex items-center gap-2 mb-4 text-sm text-teal-600 dark:text-teal-400 font-medium">
              <div className="h-px w-8 bg-teal-500 dark:bg-teal-400"></div>
              <span className="uppercase tracking-wide">ENVIRONMENT</span>
              <div className="h-px w-8 bg-teal-500 dark:bg-teal-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our <span className="text-teal-600 dark:text-teal-400">Office</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
              A healing space designed for comfort and privacy
            </p>
          </div>

          <div className="transition-all duration-700 ease-in-out transform hover:scale-[0.99]">
            <Office />
          </div>
        </div>
      </section>

      {/* Location Section - Modern Design */}
      <section className="py-20 bg-white dark:bg-neutral-900">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 mb-4 text-sm text-purple-600 dark:text-purple-400 font-medium">
              <div className="h-px w-8 bg-purple-500 dark:bg-purple-400"></div>
              <span className="uppercase tracking-wide">FIND US</span>
              <div className="h-px w-8 bg-purple-500 dark:bg-purple-400"></div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white mb-4">
              Our <span className="text-purple-600 dark:text-purple-400">Location</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400">
              Conveniently located in Englewood, Colorado
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 mt-10">
            <div className="md:col-span-3">
              <div className="rounded-2xl overflow-hidden shadow-lg h-96 w-full transition-all duration-500 ease-in-out transform hover:shadow-xl border border-neutral-200 dark:border-neutral-800">
                {/* Replace with an embedded Google Map */}
                <div className="flex items-center justify-center h-full bg-neutral-100 dark:bg-neutral-800 relative">
                  {/* Map placeholder with pin drop animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="relative">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600 dark:text-purple-400 animate-pulse" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 dark:bg-purple-400 rounded-full animate-ping opacity-75"></div>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-neutral-600 dark:text-neutral-400 text-center">
                      <p className="text-sm font-medium">Google Maps embed placeholder</p>
                      <p className="text-xs mt-2">(Embed map showing 88 Inverness Circle East, Unit K103, Englewood, CO 80112)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="h-full rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg transition-all duration-500 ease-in-out transform hover:translate-y-[-5px]">
                <div className="h-3 bg-gradient-to-r from-purple-500 to-teal-500"></div>
                <div className="p-8">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/20">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="url(#location-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                            <defs>
                              <linearGradient id="location-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#8b5cf6" /> {/* purple-500 */}
                                <stop offset="100%" stopColor="#14b8a6" /> {/* teal-500 */}
                              </linearGradient>
                            </defs>
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">ReThink Mental Health</h3>
                      </div>
                      
                      <div className="space-y-5 text-neutral-700 dark:text-neutral-300">
                        <div className="flex items-start gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 dark:text-neutral-400 shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="font-medium">Address:</p>
                            <p>88 Inverness Circle East, Unit K103</p>
                            <p>Englewood, CO 80112</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 dark:text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                          <div>
                            <p className="font-medium">Phone:</p>
                            <p>303-406-0784</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 dark:text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 008 7v5.5a2.5 2.5 0 01-5 0V5a1 1 0 00-1-1H3zM16 3a1 1 0 00-1 1v6h-1.5a1 1 0 00-1 1v7a1 1 0 001 1h2a2.5 2.5 0 010-5h-2v-2h1.5a2.5 2.5 0 010-5H16z" />
                          </svg>
                          <div>
                            <p className="font-medium">Fax:</p>
                            <p>720-307-2357</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neutral-500 dark:text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                          <div>
                            <p className="font-medium">Email:</p>
                            <a href="mailto:info@rethinkcare.org" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200">info@rethinkcare.org</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <a href="https://maps.google.com/?q=88+Inverness+Circle+East,+Unit+K103,+Englewood,+CO+80112" target="_blank" rel="noopener noreferrer" className="mt-8 flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium group">
                      <span className="group-hover:underline">Open in Google Maps</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Modern Design with Purple-Teal */}
      <section className="py-20 text-white overflow-hidden relative">
        {/* Background with gradient */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-purple-900 via-indigo-800 to-teal-700">
          {/* Animated subtle waves */}
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full absolute bottom-0 left-0">
              <path
                fill="currentColor"
                fillOpacity="1"
                d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                className="animate-pulse"
                style={{animationDuration: "10s"}}
              ></path>
            </svg>
          </div>
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
            
            {/* Content with animations */}
            <div className="text-center max-w-3xl mx-auto transition-all duration-700 ease-in-out transform hover:scale-[1.02]">
              <div className="inline-flex items-center gap-2 mb-6 text-sm text-teal-300 font-medium">
                <div className="h-px w-12 bg-teal-400/50"></div>
                <span className="uppercase tracking-wide">GET STARTED</span>
                <div className="h-px w-12 bg-teal-400/50"></div>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Schedule Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-white">Appointment Today</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-10 font-light">
                Take the first step toward better mental health. Our team is ready to provide compassionate, personalized care.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-5">
                <Link
                  href="/appointment"
                  className="px-8 py-4 rounded-md bg-white hover:bg-white/90 text-purple-900 font-medium transition-all duration-300 flex items-center gap-2 text-lg group"
                >
                  <span>Book an Appointment</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-md bg-transparent border border-white/30 text-white hover:bg-white/10 transition-all duration-300 text-lg group"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}