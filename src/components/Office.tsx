'use client';

import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Create a simple animated section component with proper TypeScript types
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className, delay = 0 }) => {
  return (
    <div 
      className={`${className} animate-fade-in`} 
      style={{ animationDelay: `${delay * 0.1}s` }}
    >
      {children}
    </div>
  );
};

// Images for each carousel with actual file paths
const receptionImages = [
  { src: '/images/Reception/Reception-Desk.jpg', alt: 'Reception desk' },
  { src: '/images/Reception/Waiting-Area.jpg', alt: 'Waiting area' },
  { src: '/images/Reception/Waiting-Area2.jpg', alt: 'Waiting area view' },
];

const officeImages = [
  { src: '/images/office/Entry-Logo.jpg', alt: 'Office entrance with logo' },
  { src: '/images/office/Badges.jpg', alt: 'Badges and credentials' },
  { src: '/images/office/Mug.jpg', alt: 'Office mug' },
  { src: '/images/office/Misc.jpg', alt: 'Office details' },
  { src: '/images/office/Misc2.jpg', alt: 'Office details' },
  { src: '/images/office/Misc3.jpg', alt: 'Office details' },
  { src: '/images/office/Misc4.jpg', alt: 'Office details' },
  { src: '/images/office/Misc5.jpg', alt: 'Office details' },
  { src: '/images/office/Misc6.jpg', alt: 'Office details' },
  { src: '/images/office/Misc7.jpg', alt: 'Office details' },
];

const consultationImages = [
  { src: '/images/PrivateConsultation/Private-Consultation.jpg', alt: 'Private consultation room' },
  { src: '/images/PrivateConsultation/Private-Consultation2.jpg', alt: 'Private consultation room alternate view' },
  { src: '/images/PrivateConsultation/Private-Consultation3.jpg', alt: 'Another consultation room' },
  { src: '/images/PrivateConsultation/Private-Consultation4.jpg', alt: 'Consultation space' },
];

const ketamineImages = [
  { src: '/images/KetamineRoom/Ketamine-Room.jpg', alt: 'Ketamine treatment room' },
  { src: '/images/KetamineRoom/Ketamine-Room2.jpg', alt: 'Ketamine treatment room alternate view' },
];

export default function Office() {
  return (
    <div className="wave-top w-full py-16 bg-gradient-to-tr from-white via-primary-50 to-white overflow-hidden">
      <AnimatedSection className="section-container mb-8">
        <h2 className="heading-2 text-center text-neutral-900 mb-4">Our Office</h2>
        <div className="h-1 w-24 bg-gradient-to-r from-primary-600 to-secondary-500 mx-auto mt-4 mb-6 rounded-full"></div>
        <p className="mt-4 max-w-xl mx-auto text-xl text-neutral-500 text-center mb-8">
          A welcoming space designed for comfort and healing
        </p>
      </AnimatedSection>
      
      {/* Top row with three carousels */}
      <div className="section-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {/* Reception Carousel */}
        <AnimatedSection className="card-rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2" delay={0.1}>
          <Carousel className="w-full">
            <CarouselContent>
              {receptionImages.map((image, index) => (
                <CarouselItem key={`reception-${index}`}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-t-3xl">
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        width={600} 
                        height={400} 
                        className="w-full h-[250px] sm:h-[300px] object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="p-5 text-center bg-gradient-to-r from-primary-50 to-white font-medium rounded-b-3xl">Our welcoming reception area</div>
        </AnimatedSection>
        
        {/* Office Carousel */}
        <AnimatedSection className="card-rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2" delay={0.2}>
          <Carousel className="w-full">
            <CarouselContent>
              {officeImages.map((image, index) => (
                <CarouselItem key={`office-${index}`}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-t-3xl">
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        width={600} 
                        height={400} 
                        className="w-full h-[250px] sm:h-[300px] object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="p-5 text-center bg-gradient-to-r from-secondary-50 to-white font-medium rounded-b-3xl">Our Waiting Area</div>
        </AnimatedSection>
        
        {/* Private Consultation Carousel */}
        <AnimatedSection className="card-rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2" delay={0.3}>
          <Carousel className="w-full">
            <CarouselContent>
              {consultationImages.map((image, index) => (
                <CarouselItem key={`consultation-${index}`}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-t-3xl">
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        width={600} 
                        height={400} 
                        className="w-full h-[250px] sm:h-[300px] object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="p-5 text-center bg-gradient-to-r from-primary-50 to-white font-medium rounded-b-3xl">Our Private consultation rooms</div>
        </AnimatedSection>
      </div>
      
      {/* Bottom row with centered carousel */}
      <div className="section-container flex justify-center">
        <AnimatedSection className="card-rounded overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3" delay={0.4}>
          <Carousel className="w-full">
            <CarouselContent>
              {ketamineImages.map((image, index) => (
                <CarouselItem key={`ketamine-${index}`}>
                  <div className="p-1">
                    <div className="overflow-hidden rounded-t-3xl">
                      <Image 
                        src={image.src} 
                        alt={image.alt} 
                        width={600} 
                        height={400} 
                        className="w-full h-[250px] sm:h-[300px] object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
          <div className="p-5 text-center bg-gradient-to-r from-secondary-50 to-white font-medium rounded-b-3xl">Our Ketamine Treatment Room</div>
        </AnimatedSection>
      </div>
    </div>
  );
} 