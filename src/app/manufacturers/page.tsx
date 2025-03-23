"use client";
import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactModal from "@/components/ui/ContactFromModal";
const benefits = [
  {
    imgSrc: "/_next/static/media/forManufacturersStep1.76b91d4d.svg",
    title: "Take your products to the world",
    description:
      "You can cater to customers from around the globe, expanding your market reach.",
  },
  {
    imgSrc: "/_next/static/media/ManufacturerIconStep2.434b0869.svg",
    title: "Utilize your underutilized capacity",
    description:
      "Maximize your production efficiency by filling your unused capacity with new projects from our extensive client base.",
  },
  {
    imgSrc: "/_next/static/media/ManufacturerIconstep3.fb15731c.svg",
    title: "Seamless tech transfer to your manufacturing units",
    description:
      "Our team of dedicated scientists goes the extra mile to ensure a smooth and efficient tech transfer process.",
  },
];

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <Container>
        <section className="relative w-full h-[60vh] mdd:h-[50vh] mb-36 mdd:mb-16">
          {/* Background Image */}
          <Image
            src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FSimplifyforManufacturers.831d99da.png&w=1200&q=75"
            alt="For Manufacturers"
            width={1121}
            height={650}
            className="w-full h-full object-cover mdd:h-[50vh]"
            priority
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 w-[55%] mdd:w-full mdd:h-[50vh] md:bg-gradient-to-r from-white/90 to-white/80 flex mdd:justify-end mdd:items-end">
            <div className="flex flex-col md:ml-10 mdd:pl-4 md:container mdd:h-[20vh] mdd:w-full justify-between mdd:justify-start mdd:items-start h-full mx-auto mdd:bg-gradient-to-r from-white/90 to-white/80">
              {/* Breadcrumb Navigation */}
              <nav aria-label="breadcrumb" className="mt-10">
                <ol className="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5">
                  <li className="inline-flex items-center gap-1.5">
                    <Link
                      href="/"
                      className="transition-colors hover:text-foreground font-medium text-[#282828]"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="text-[#03BDA7]">
                    <ChevronRight className="w-3.5 h-3.5" />
                  </li>
                  <li className="inline-flex items-center gap-1.5">
                    <Link
                      href="/manufacturers"
                      className="transition-colors hover:text-foreground text-[#03BDA7] font-medium"
                    >
                      Manufacturers
                    </Link>
                  </li>
                </ol>
              </nav>

              {/* Heading */}
              <h1 className="text-6xl mdd:text-3xl font-light max-w-4xl mdd:my-2 md:-mt-10">
                Expand Your <br /> Manufacturing Horizons
                <span className="w-4 h-4 mdd:w-2 mdd:h-2 bg-teal-500 rounded-full inline-block ml-2"></span>
              </h1>
            </div>
          </div>
        </section>
        <section className="mb-48 md:container px-4 mt-20 mdd:mb-20">
          {/* Heading */}
          <h2 className="text-5xl mdd:text-4xl font-light my-6 max-w-[800px] text-[#002541]">
            Why join hands with Yanaca?
          </h2>

          {/* Subtext */}
          <p className="text-lg mdd:text-base font-light mdd:mb-12">
            At Yanaca, we empower manufacturing units to reach their full
            potential by leveraging our global network and industry expertise.
            With over 150 manufacturers already thriving in our network, now is
            the time to unlock new opportunities and drive your business
            forward.
          </p>

          {/* Benefits Section - Responsive Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 shadow-2xl group hover:bg-[#03BDA7] transition duration-300 rounded-xl text-center"
              >
                {/* <Image
              src={benefit.imgSrc}
              alt={benefit.title}
              width={100}
              height={100}
              className="mb-4 group-hover:hidden"
            /> */}
                <p className="text-2xl font-medium group-hover:text-white">
                  {benefit.title}
                </p>
                <p className="mt-2 text-gray-700 hidden group-hover:block group-hover:text-white">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="w-full min-h-[15vh] py-16">
          <div className="md:container bg-[#002541e4] text-white mdd:mx-4 mdd:p-6 mdd:py-16 py-24 rounded-xl text-center">
            {/* Heading */}
            <h2 className="text-6xl mdd:text-4xl font-thin">
              Take the first step towards global growth. Contact us now to get
              started
              <div className="w-3 h-3 mdd:w-2 mdd:h-2 bg-teal-500 rounded-full inline-block ml-2"></div>
            </h2>

            {/* Button */}
            <button
              id="get-in-touch-navbar"
              className="flex items-center justify-center hover:font-medium transition-all duration-300 min-w-[170px] max-w-[250px] w-fit group mx-auto mt-8"
              type="button"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="-ml-8 flex items-center justify-center text-white text-base">
                CLICK TO CONTINUE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right inline ml-1 group-hover:translate-x-2 transition-all duration-300"
                >
                  <path d="M18 8L22 12L18 16"></path>
                  <path d="M2 12H22"></path>
                </svg>
              </span>
            </button>
          </div>
          <ContactModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </section>
      </Container>
    </div>
  );
};

export default Page;
