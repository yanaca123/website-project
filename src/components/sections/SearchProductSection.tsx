import React from "react";
import Image from "next/image";

const SearchProductSection = () => {
  return (
    <div>
      <div className="container mx-auto flex items-center justify-center flex-col md:flex-row font-poppins px-6 md:px-12">
        {/* Image Section */}
        <Image
          alt="Magnifying glass logo"
          loading="lazy"
          width={550}
          height={756}
          decoding="async"
          data-nimg="1"
          className="h-[70vh] md:h-[55vh] md:opacity-100 opacity-40 md:basis-1/3 hidden md:block"
          style={{ color: "transparent" }}
          src="/assets/SearchBroken.svg"
        />

        {/* Text & Button Section */}
        <div className="text-center md:text-left md:basis-2/3 p-5 mt-10 md:mt-0">
          <h2 className="text-[32px] md:text-[44px] lg:text-[64px] leading-[40px] md:leading-[55px] lg:leading-[75px] font-semibold text-[#082f49]">
            Can&apos;t find what you need? <br />
            Let us guide you to the right{" "}
            <span className="inline whitespace-nowrap">product</span>
          </h2>

          {/* Button */}
          <a
            id="find-your-product"
            href="/Pharmaceutical?id=66767b1245a1e48ffd8422e8#productSearch"
            className="bg-[#40c4aa] text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-[#35a08b] transition-colors inline-flex items-center mt-6 md:mt-8"
            data-faitracker-click-bind="true"
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
              className="lucide lucide-arrow-right inline-flex mr-2 group-hover:translate-x-1 transition-all delay-75"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
            FIND YOUR PRODUCT
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchProductSection;
