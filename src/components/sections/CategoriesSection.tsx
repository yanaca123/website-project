"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { motion } from "framer-motion";

const CategoriesSection = () => {
  return (
    <>
      {/* Header */}
      <Container className="mt-[149px] mb-5 md:mt-16 md:mb-12">
        <h2 className="font-poppins text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-[70px] leading-tight text-center font-semibold">
          Industries We Serve
        </h2>
      </Container>

      {/* Cards Section using Flex Container */}
      <Container className="px-4">
        <div className="flex flex-col md:flex-row gap-1.5 md:gap-6 min-h-[500px]">
          {/* Card 1 */}
          <Card className="relative group overflow-hidden flex-1 transition-all duration-300 hover:flex-[3]">
  <div className="relative w-full h-[400px] lg:h-[500px] transition-all duration-300">
    {/* Ensure image stays below overlay */}
    <Image
      src="/assets/Pharmaeuticals.jpg"
      alt="Pharmaceutical"
      fill
      className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-x-105"
    />
    
    {/* Dark Overlay for Better Text Readability */}
    <div className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300">
      {/* Sideways Title (Hidden on Hover) */}
      <h2 className="text-white font-medium text-xl transition-opacity duration-300 whitespace-nowrap transform rotate-[-90deg] group-hover:opacity-0 translate-y-[300%] lg:translate-y-[100%]">
        Pharmaceuticals
      </h2>
      
      {/* Main Content (Shown on Hover) */}
      <div className="flex flex-col items-center mt-4 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
        <h1 className="text-white text-3xl mb-3 text-center font-bold">
          Pharmaceuticals
        </h1>
        <p className="text-white mt-2 text-sm text-center">
          Accelerating pharmaceutical innovation with advanced R&D and manufacturing solutions.
        </p>
        <motion.a
          href="/cmo"
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
      </div>
    </div>
  </div>
</Card>


          {/* Card 2 */}
          <Card className="relative group overflow-hidden flex-1 transition-all duration-300 hover:flex-[3]">
            <div className="relative w-full h-auto md:h-[400px] lg:h-[500px] group-hover:h-[350px] transition-all duration-300">
              <Image
                src="/assets/OilBasedProducts.jpg"
                alt="Oil Based Products"
                fill
                className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              {/* Corrected Overlay with Opacity */}
              <div className="relative w-full h-[400px] lg:h-[500px] transition-all duration-300 group overflow-hidden">
                <Image
                  src="/assets/OilBasedProducts.jpg"
                  alt="Oil Based Products"
                  fill
                  className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-x-105"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 rounded-xl">
                  <h2 className="text-white font-medium text-xl transition-opacity duration-300 whitespace-nowrap transform rotate-[-90deg] group-hover:opacity-0 translate-y-[300%] lg:translate-y-[100%]">
                    Oil Based Products
                  </h2>
                  <div className="flex flex-col items-center mt-4 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                    <h1 className="text-white text-3xl mb-3 text-center font-bold">
                      Oil Based Products
                    </h1>
                    <p className="text-white mt-2 text-sm text-center">
                      Discover our cutting-edge oil-based product innovations.
                    </p>
                    <motion.a
                      href="/cmo"
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
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Card 3 */}
          <Card className="relative group overflow-hidden flex-1 transition-all duration-300 hover:flex-[3]">
  <div className="relative w-full h-auto md:h-[400px] lg:h-[500px] group-hover:h-[350px] transition-all duration-300">
    {/* Image */}
    <Image
      src="/assets/Tobacoo.jpg"
      alt="Tobacco Supplies"
      fill
      className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
    />
     <div className="relative w-full h-[400px] lg:h-[500px] transition-all duration-300 group overflow-hidden">
                <Image
                  src="/assets/Tobacoo.jpg"
                  alt="Oil Based Products"
                  fill
                  className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-x-105"
                />
    {/* Dark Overlay for Readability */}
    <div className="absolute inset-0 bg-black/70 z-10 flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300">
      {/* Vertical Text (Hidden on Hover) */}
      <h2 className="text-white font-medium text-xl transition-opacity duration-300 whitespace-nowrap transform rotate-[-90deg] group-hover:opacity-0 translate-y-[300%] lg:translate-y-[100%]">
                    Tobacco Supplies
      </h2>

      {/* Content Appearing on Hover */}
      <div className="flex flex-col items-center mt-4 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                    <h1 className="text-white text-3xl mb-3 text-center font-bold">
                      Tobacco Supplies
                    </h1>
                    <p className="text-white mt-2 text-sm text-center">
                    Explore our insights into tobacco supply innovations.
                    </p>
                    <motion.a
                      href="/cmo"
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
                  </div>
      </div>
    </div>
  </div>
</Card>

        </div>
      </Container>
    </>
  );
};

export default CategoriesSection;
