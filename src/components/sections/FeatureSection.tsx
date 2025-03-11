"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/lib/animations';
import Container from '../ui/Container';

export default function FeaturesSection() {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const features = [
    {
      title: 'Tailored Solutions',
      description: 'We develop custom solutions that address your specific business challenges and goals.',
      icon: '/images/feature1.svg',
    },
    {
      title: 'Expert Team',
      description: 'Our team consists of experienced data scientists, engineers, and domain experts.',
      icon: '/images/feature2.svg',
    },
    {
      title: 'End-to-End Support',
      description: 'From initial consultation to implementation and maintenance, we provide comprehensive support.',
      icon: '/images/feature3.svg',
    },
  ];

  return (
    <section className="section bg-light py-20">
      <Container>
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            ref={ref}
            className="lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Scimplify</h2>
            <p className="text-gray-600 mb-8">
              We combine scientific expertise with business acumen to deliver data-driven solutions that create real impact.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="mr-4 p-2 bg-white rounded-lg shadow-md">
                    <Image src={feature.icon} alt={feature.title} width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-80 md:h-96 w-full">
              <Image 
                src="/images/feature1.svg" 
                alt="Features Illustration" 
                fill 
                className="object-contain" 
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
