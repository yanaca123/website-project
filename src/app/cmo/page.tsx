import React from 'react'
import Image from 'next/image';

const page = () => {
    return (
        <div>
          <div className="relative w-full h-[60vh] md:h-[50vh] mb-32 md:mb-16">
      {/* Background Image */}
      <Image
        src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FCMOHEROIMAGEIMAGE.001f6e6a.jpg&w=2048&q=75"
        alt="CROHero"
        width={1932}
        height={650}
        className="w-full h-full object-cover md:h-[50vh]"
        priority
      />

      {/* Overlay with Gradient */}
      <div className="absolute inset-0 flex md:justify-end md:items-end w-[55%] md:w-full md:h-[50vh] md:bottom-0 bg-gradient-to-r from-white/90 to-white/80">
        <div className="flex flex-col md:ml-10 pl-4 md:container md:w-full md:h-[20vh] justify-center md:justify-start items-start h-full mx-auto">
          <h1 className="text-9xl md:text-4xl font-light max-w-4xl my-8 text-[#002541]">
            Your CMO Partner for Specialty{" "}
            <span className="whitespace-nowrap">
              Chemicals
              <div className="w-2.5 h-2.5 ml-1 lg:w-4 lg:h-4 lg:ml-2 bg-teal-500 rounded-full inline-block"></div>
            </span>
          </h1>
        </div>
      </div>
    </div> 
    <div className="container px-4 font-light mb-32">
      <div className="flex flex-wrap items-center justify-center min-h-[45vh] gap-8">
        {/* Left Section: Image */}
        <div className="w-full md:w-6/12 lg:w-5/12 flex justify-center items-center">
          <Image
            src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout-manufacturing-img.b6907759.png&w=640&q=75"
            alt="About Manufacturing"
            width={500}
            height={505}
            className="max-w-[300px] md:max-w-[400px] lg:max-w-[500px] w-full h-auto"
            priority
          />
        </div>

        {/* Right Section: Content */}
        <div className="w-full md:w-6/12 lg:w-7/12 flex flex-col items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mt-6 text-[#002541]">
            About <br />
            <span className="whitespace-nowrap">
              Manufacturing
              <div className="w-2.5 h-2.5 ml-1 lg:w-4 lg:h-4 lg:ml-2 bg-teal-500 rounded-full inline-block"></div>
            </span>
          </h1>

          <p className="my-4 text-base md:text-lg">
            Elevating your projects from pilot scale to full-scale commercial
            manufacturing while delivering high-quality chemical products with
            precision. Backed by innovative technology, our comprehensive CMO
            service streamlines production and accelerates market readiness for
            your products.
          </p>

          {/* Statistics Section */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 w-full my-8">
            {[{label: "Products", count: 2000}, {label: "Associated Facilities", count: 150}, {label: "Chemistries", count: 25}].map((item, index) => (
              <div key={index} className="flex flex-col items-center md:items-start">
                <div className="flex items-center">
                  <Image
                    src="https://www.scimplify.com/_next/static/media/Vectorlogobutton.ab86c173.svg"
                    alt={item.label}
                    width={48}
                    height={48}
                    className="w-[80px] md:w-[100px]"
                  />
                  <span className="text-black text-5xl md:text-6xl flex items-center">
                    {item.count}{" "}
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
                      className="lucide lucide-plus ml-1 text-[#03BDA7] text-3xl"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </span>
                </div>
                <p className="font-light text-lg md:text-xl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}

export default page
