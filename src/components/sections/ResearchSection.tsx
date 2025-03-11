"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container"; // Import the Container component

const ResearchSection = () => {
  return (
    <Container className="py-12">
      <motion.div
        className="text-center md:text-left"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl md:text-3xl font-semibold font-poppins">
          Research &amp; Development
        </h3>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-between gap-10 md:gap-20 pt-6">
        {/* Left Side - Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            width={500}
            height={500}
            src="/assets/ResearchSectionImage.png"
            alt="Research and Development"
            className="rounded-xl shadow-lg w-full max-w-sm md:max-w-full"
          />
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-between"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg md:text-xl font-semibold hidden md:block">
            We integrate research, development, &amp; manufacturing under one
            roof, making it easier for you to transition from concept to market.
          </p>
          <p className="text-lg md:text-xl mt-4 hidden md:block">
            Offering state-of-the-art R&amp;D infrastructure backed by a team of
            distinguished scientists who specialize in:
          </p>
          <p className="text-lg md:text-base mt-4 md:hidden">
            Integrating R&amp;D and manufacturing under one roof to make it
            easier for you to transition from concept to market.
          </p>

          {/* Bullet Points */}
          <motion.div
            className="mt-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {[
              "State-of-the-art R&D infrastructure",
              "Advanced chemical synthesis",
              "Innovative process development",
              "Custom formulations for specialized applications",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#02c5ae"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-none"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
                <span className="text-lg md:text-base">{item}</span>
              </div>
            ))}
          </motion.div>

          {/* Button */}
          <motion.a
            href="/research"
            className="bg-[#40c4aa] text-white px-6 py-3 mt-6 rounded-lg hover:bg-[#35a08b] transition-all flex items-center justify-center md:justify-start w-full md:w-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
            Explore More
          </motion.a>
        </motion.div>
      </div>
    </Container>
  );
};

export default ResearchSection;
