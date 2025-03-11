"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useAnimateOnScroll } from '@/lib/animations';
import Container from '../ui/Container';

export default function StatsSection() {
  const { ref, isVisible } = useAnimateOnScroll();
  
  const stats = [
    { value: '98%', label: 'Client Satisfaction' },
    { value: '50+', label: 'Completed Projects' },
    { value: '30+', label: 'Industry Experts' },
    { value: '5+', label: 'Years Experience' },
  ];

  return (
    <section className="py-12 bg-primary-light/10">
      <Container>
        <motion.div 
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.6 }
                }
              }}
            >
              <h3 className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
