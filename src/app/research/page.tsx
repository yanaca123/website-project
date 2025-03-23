"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBiSirSnyV8maq8zFatCZzCapFVNVRU51HQ&s",
  "https://tbcdn.talentbrew.com/company/252/v2_0/img/RES-RMI-tinified.jpg",
  "https://plus.unsplash.com/premium_photo-1663032618920-6cc64f857e65?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2NpZW5jZSUyMGxhYnxlbnwwfHwwfHx8MA%3D%3D",
  "https://t3.ftcdn.net/jpg/05/02/59/04/360_F_502590469_8TWod874SsNg29Fsq4PoHHQMqpD0in9K.jpg",
];
const Page = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div>
      <div className="relative w-full h-[60vh] hidden md:block">
        {/* Background Image */}
        <Image
          src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FResearchArmHero.5621c4f2.jpg&w=2048&q=75"
          alt="CROHero"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 w-[55%] bg-gradient-to-r from-white/90 to-white/80">
          <div className="flex flex-col justify-center h-full ml-16 container mx-auto">
            <h1 className="text-4xl lg:text-6xl font-light max-w-4xl">
              <span className="inline-block w-[580px]">
                Research Arm <br /> in Innovation
              </span>
              <span className="w-2.5 h-2.5 ml-1 lg:w-4 lg:h-4 lg:ml-2 bg-teal-500 rounded-full inline-block"></span>
            </h1>
          </div>
        </div>
      </div>
      <div className="container mx-auto font-light mt-20 mb-5">
      {/* Heading */}
      <div className="hidden md:block">
        <h2 className="text-4xl font-light mt-6 mb-4 inline-block">
          Scimplify Center for Innovation
          <span className="w-2 h-2 bg-teal-500 rounded-full inline-block ml-2"></span>
          <span className="w-2 h-2 bg-teal-500 rounded-full inline ml-2"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[45vh]">
        {/* Image & Carousel Section */}
        <div className="max-w-[500px] h-auto relative flex justify-center items-center mx-auto">
          {/* Outer Box */}
          <Image
            src="https://www.scimplify.com/_next/static/media/outerLayer.b9cdc77e.svg"
            alt="outerBoxHeroSection"
            width={500}
            height={400}
            className="absolute bottom-0 z-20 top-2"
          />

          {/* Image Slider */}
          <div className="relative w-[90%] h-[400px] overflow-hidden flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 1 }}
                className="absolute w-full flex justify-center"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  width={500}
                  height={500}
                  className="rounded-lg border shadow-sm"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center text-center lg:text-left">
          {/* Mobile Heading */}
          <div className="md:hidden">
            <h2 className="text-4xl font-light mt-6 mb-4">
              Yanaca for Innovation
              <span className="w-2.5 h-2.5 ml-1 bg-teal-500 rounded-full inline-block"></span>
              <span className="w-4 h-4 bg-teal-500 rounded-full inline ml-2"></span>
            </h2>
          </div>

          {/* Description */}
          <p className="my-4 text-lg max-w-xl">
            Located in DadaNagar, Kanpur, Our state-of-the-art R&D lab,
            reflects our commitment to scientific excellence, research, and innovation.
          </p>
          <p className="my-4 text-lg max-w-xl">
          Yanaca&apos;s Research and Development Laboratory epitomizes unparalleled excellence, pioneering innovation, and an unwavering commitment to scientific advancement. Seamlessly integrating cutting-edge research with real-world applications, Yanaca fosters groundbreaking developments in oil, bio, and food technology.

Inextricably linked with the distinguished legacy of HBTI Kanpur, Yanaca thrives on intellectual synergy, leveraging the expertise of premier engineers and researchers. This dynamic association propels the company to the forefront of technological evolution, ensuring its solutions remain at the zenith of quality, efficacy, and ingenuity.

With an ethos rooted in precision, innovation, and scientific rigor, Yanaca redefines industry standards, setting new benchmarks in chemical manufacturing and global supply chains.
          </p>
        </div>
      </div>
     </div>
    </div>
  );
};

export default Page;
