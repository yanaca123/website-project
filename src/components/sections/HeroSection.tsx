"use client";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const stats = [
  { count: 3000, label: "Products" },
  { count: 150, label: "Factories" },
  { count: 25, label: "Chemistries" },
  { count: 15, label: "Countries" },
];
const Counter: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const interval = Math.max(10, duration / target);

    const counter = setInterval(() => {
      start += Math.ceil(target / (duration / interval));
      if (start >= target) {
        start = target;
        clearInterval(counter);
      }
      setCount(start);
    }, interval);

    return () => clearInterval(counter);
  }, [target]);

  return <motion.span className="text-lg sm:text-3xl md:text-5xl lg:text-6xl font-semibold">{count}+</motion.span>;
};
export default function HeroSection() {
  return (
    <Container className="relative text-white py-12 overflow-hidden md:h-[800px] mdd:h-[500px] xxxsss:h-[560px] xxss:h-[530px] font-poppins">
      <div className="absolute inset-0 w-full h-1/2 lg:h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://scimplify-borchure.s3.ap-south-1.amazonaws.com/6881171_Factory_Manufacture_3840x2160+(online-video-cutter.com)+(1).mp4"
            type="video/mp4"
          />
        </video>

        {/* Responsive Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-l from-[#064270]/80 via-[#0c5462]/75 to-[#116357]/70"></div>
      </div>

      <div className="relative z-10 space-y-12">
        <div className="text-center lg:text-left md:pt-10 mdd:text-center mdd:text-[32px] mdd:leading-[40px]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[64px] font-light leading-snug md:leading-tight mb-6 md:mb-10">
            At <span className="font-bold">YANACA</span> <br />
            <span className="text-[#01ffdb] font-semibold">se Food </span>
            Technology tak
          </h1>

          <Link
            id="contact-us-homepage"
            href="/contact"
            className="bg-[#01ffdb] text-xs sm:text-xs md:text-lg text-black font-medium px-2 py-1 md:px-6 md:py-4 rounded-md hover:bg-[#35a08b] hover:text-white transition-colors flex items-center justify-center w-full max-w-[90px] md:max-w-[200px] mx-auto md:mt-10 my-4"
          >
            <span className="text-xs md:text-lg leading-[24px] md:leading-[18px]">
              Contact Us
            </span>
          </Link>
        </div>

        {/* Statistics Section */}
        <div className="md:pt-3 flex items-center justify-center md:justify-between md:items-start md:top-10">
      <div className="relative grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-10 w-3/4 md:w-full bg-white p-12 py-4 rounded-2xl shadow-lg md:px-24">
        {stats.map(({ count, label }, index) => (
          <div key={index} className="flex flex-col text-[#24c9b1] items-center">
            <div className="flex items-center">
              <Counter target={count} />
            </div>
            <div className="text-xs sm:text-lg md:text-2xl lg:text-3xl text-black font-merriweather mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>

      {/* <Image
      src="/_next/static/media/Intersect.72189cc5.png"
      width={100}
      height={100}
      className="absolute -bottom-16 mdd:bottom-16 pt-10 mdd:pt-0"
      alt="Intersect"
    /> */}

      <section className="absolute mdd:bottom-0 pt-10 mdd:pt-0 bg-white w-full h-16 md:hidden"></section>
    </Container>
  );
}
