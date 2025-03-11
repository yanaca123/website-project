"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerContainerVariants, fadeInUpVariants } from '@/lib/animations';
import Container from '../ui/Container';
import TestimonialCard from '../ui/TestimonialCard';

export default function TestimonialsSection() {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const testimonials = [
    {
      quote: "Working with Scimplify has been transformative for our business. Their data science solutions helped us reduce costs and improve efficiency by 30%.",
      name: "Sarah Johnson",
      title: "CTO",
      company: "TechInnovate",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote: "The AI solution implemented by Scimplify has revolutionized our customer service operations. We've seen a 40% increase in customer satisfaction.",
      name: "Michael Chen",
      title: "Director of Operations",
      company: "Global Retail Inc.",
      avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
    {
      quote: "Scimplify's expertise in machine learning helped us develop a predictive maintenance system that has saved us millions in downtime costs.",
      name: "Emily Rodriguez",
      title: "Head of Engineering",
      company: "IndustrialTech",
      avatarUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    },
  ];

  return (
    <section className="section bg-light">
      <Container>
        <motion.div 
          ref={ref}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from organizations that have transformed their operations with our data science and AI solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUpVariants}>
              <TestimonialCard {...testimonial} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
