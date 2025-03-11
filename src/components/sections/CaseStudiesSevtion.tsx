"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll, staggerContainerVariants, fadeInUpVariants } from '@/lib/animations';
import Container from '../ui/Container';
import CaseStudyCard from '../ui/CaseStudyCard';
import Button from '../ui/Button';

export default function CaseStudiesSection() {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const caseStudies = [
    {
      title: 'Predictive Maintenance for Manufacturing',
      category: 'Machine Learning',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/case-studies/predictive-maintenance',
    },
    {
      title: 'Customer Segmentation for Retail',
      category: 'Data Science',
      imageUrl: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/case-studies/customer-segmentation',
    },
    {
      title: 'Natural Language Processing for Healthcare',
      category: 'AI Solutions',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      href: '/case-studies/nlp-healthcare',
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we&apos;ve helped organizations across industries achieve their business objectives through data-driven solutions.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={staggerContainerVariants}
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div key={index} variants={fadeInUpVariants}>
              <CaseStudyCard {...caseStudy} />
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center">
          <Button href="/case-studies" variant="outline">View All Case Studies</Button>
        </div>
      </Container>
    </section>
  );
}