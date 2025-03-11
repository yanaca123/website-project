"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerContainerVariants, fadeInUpVariants } from '@/lib/animations';
import Container from '../ui/Container';
import ServiceCard from '../ui/ServiceCard';

export default function ServicesSection() {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const services = [
    {
      title: 'Data Science',
      description: 'Transform raw data into actionable insights with our comprehensive data science solutions.',
      icon: '/images/service1.svg',
      href: '/services#data-science',
    },
    {
      title: 'Machine Learning',
      description: 'Implement cutting-edge machine learning models to automate processes and drive innovation.',
      icon: '/images/service2.svg',
      href: '/services#machine-learning',
    },
    {
      title: 'AI Solutions',
      description: 'Leverage artificial intelligence to solve complex business challenges and gain competitive advantage.',
      icon: '/images/service3.svg',
      href: '/services#ai-solutions',
    },
  ];

  return (
    <section className="section">
      <Container>
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end solutions to help businesses harness the power of data and advanced analytics.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={fadeInUpVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}