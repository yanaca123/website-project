"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import Container from "./Container";
// import Button from "./Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 10);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const navItems = [
  //   { name: "Home", href: "/" },
  //   { name: "Services", href: "/services" },
  //   { name: "About", href: "/about" },
  //   { name: "Contact", href: "/contact" },
  // ];

  return (
    <header className="!z-50 w-full bg-[#f8f7f5] sticky top-0 flex items-center justify-center">
      {/* <div className="bg-[#25c9b1] hover:cursor-pointer text-black px-4 py-2 flex justify-between items-center ">
        <p className="container text-center font-semibold">
          Scimplify has launched ATOMS 🎉 Check it out
          <a data-faitracker-click-bind="true">here</a>
        </p>
        <button
          className="text-white hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Close notification"
          data-faitracker-form-bind="true"
          data-faitracker-click-bind="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div> */}
      <div className="flex h-8 sm:h-8 md:h-12 lg:h-16 items-center justify-between p-4 sm:px-6 md:px-8 lg:px-12 w-full max-w-screen-xl mx-auto">
        <Link
          className="-ml-3 lg:ml-0"
          href="/"
          data-faitracker-click-bind="true"
        >
          {/* <Image
            alt="Logo"
            loading="lazy"
            width="4455"
            height="2264"
            decoding="async"
            data-nimg="1"
            className="h-16 lg:h-[100px] w-auto transparent"
            src="/_next/static/media/Simplify logo with R.7671b284.svg"
          /> */}
          <div className="text-md sm:text-2xl md:text-4xl lg:text-5xl pl-2 sm:pl-[10%] md:pl-[20%] lg:pl-[30%] hover:text-[#01ffdb]">
            Yanaca
          </div>
        </Link>
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(true)}
            className="text-[#03BDA7] pr-2 sm:p-2 rounded-md outline-none transition-all duration-200 hover:bg-[#03BDA7]/10 active:scale-95 focus:ring-2 focus:ring-[#03BDA7]"
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute  top-0 left-0 w-full bg-[#03BDA7] z-50 transition-all duration-200 overflow-hidden ${
          isOpen ? "h-screen" : "h-0"
        }`}
      >
        <div className="h-screen overflow-auto flex flex-col py-12">
          {/* Close Button */}
          <div className="container h-14 flex justify-end w-full absolute top-0 left-0">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-2 -mr-2 outline-none transition-all duration-200"
              aria-label="Close Menu"
            >
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
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <nav className="container flex flex-col p-6 sm:p-8 items-center w-full">
            <div className="w-full">
              {[
                { href: "/research", label: "Research & Development" },
                { href: "/cmo", label: "Manufacturing Capabilities" },
                { href: "/manufacturers", label: "For Manufacturers" },
                { href: "/blogs", label: "Blogs" },
                { href: "/events", label: "Events" },
                { href: "/contact", label: "Contact Us" },
                { href: "/about", label: "About Us" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between text-black hover:text-white py-4 sm:py-6 w-full text-lg sm:text-md border-b border-[#75dbcf] font-semibold transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Products Link with Icon */}
            <Link
              href="#"
              className="flex items-center justify-between text-black hover:text-white py-4 sm:py-6 w-full text-lg sm:text-xl font-semibold border-b border-[#75dbcf] transition-all duration-200"
            >
              Products
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
                className="lucide lucide-arrow-right mr-1"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>

            {/* Get in Touch Button */}
            <div className="mt-10 sm:mt-14 mb-4">
              <button
                id="get-in-touch-navbar"
                className="flex items-center justify-start hover:font-medium transition-all duration-300 min-w-[150px] sm:min-w-[170px] max-w-[250px] w-fit group"
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:Rksja:"
              >
                {/* Logo for all screen sizes */}
                <Image
                  alt="LogoButton"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  className="transparent"
                  src="/assets/logoButton.svg"
                />

                <span className="-ml-6 sm:-ml-8 flex text-lg sm:text-xl items-center text-black">
                  GET IN TOUCH
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
          </nav>
        </div>

        {/* Navigation Links */}
      </div>

      <div className="items-center space-x-5 hidden lg:flex">
        <nav className="!zoom-out-110">
          <ul className="flex items-center justify-end space-x-4 text-sm xxl:gap-6 xxl:text-base">
            <li className="group w-[20%]">
              <span
                className="
      transition-colors overflow-hidden hover:text-foreground/80 
      font-normal flex justify-start items-center flex-row 
      relative py-1 no-underline text-black cursor-pointer
      before:content-[''] before:absolute before:bottom-0 before:left-0 
      before:w-full before:h-[2px] before:bg-[#03bda7] 
      before:opacity-100 before:transform before:translate-x-[-100%] 
      before:transition-transform before:duration-300 
      hover:before:translate-x-0 text-xl
    "
              >
                Our Capabilities
                <span>
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
                    className="lucide lucide-chevron-down ml-1 group-hover:rotate-180 duration-100"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </span>

              {/* Dropdown Menu */}
              <ul
                className="
             absolute hidden overflow-hidden group-hover:block 
      transition-all w-[250px] shadow-2xl bg-white text-black 
      z-50 h-fit
    "
              >
                {[
                  { href: "/cmo", label: "Manufacturing Capabilities" },
                  { href: "/research", label: "Research & Development" },
                ].map((item) => (
                  <li key={item.href} className="cursor-pointer">
                    <Link
                      href={item.href}
                      className="
            block w-full h-full p-4 bg-transparent 
            hover:bg-[#03BDA7] hover:text-white 
            transition-all duration-300 text-lg lg:text-xl
          "
                      data-faitracker-click-bind="true"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="group">
              <span
                className="
      transition-colors overflow-hidden hover:text-foreground/80 
      font-normal flex justify-start items-center flex-row 
      relative py-1 no-underline text-black cursor-pointer
      before:content-[''] before:absolute before:bottom-0 before:left-0 
      before:w-full before:h-[2px] before:bg-[#03bda7] 
      before:opacity-100 before:transform before:translate-x-[-100%] 
      before:transition-transform before:duration-300 
      hover:before:translate-x-0  text-lg lg:text-xl
    "
              >
                Products
                <span>
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
                    className="lucide lucide-chevron-down ml-1 group-hover:rotate-180 duration-100"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </span>

              {/* Dropdown Menu */}
              <ul
                className="
      absolute hidden overflow-hidden group-hover:block 
      transition-all w-[200px] shadow-2xl bg-white text-black 
      z-50 h-fit
    "
              >
                {[
                  {
                    href: "/Pharmaceutical?id=66767b1245a1e48ffd8422e8",
                    label: "Pharmaceutical",
                  },
                  {
                    href: "/OilProducts?id=66767b1245a1e48ffd8422ec",
                    label: "Oil Products",
                  },
                  {
                    href: "/TobacooSupplies?id=66767b1245a1e48ffd8422ea",
                    label: "Tobocoo Supplies",
                  },
                ].map((item) => (
                  <li key={item.href} className="cursor-pointer">
                    <a
                      href={item.href}
                      className="
            block w-full h-full p-4 bg-transparent 
            hover:bg-[#03BDA7] hover:text-white 
            transition-all duration-300 text-lg lg:text-xl
          "
                      data-faitracker-click-bind="true"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="group w-[20%] ">
              <span
                className="
      transition-colors overflow-hidden hover:text-foreground/80 
      font-normal flex justify-start items-center flex-row 
      relative py-1 no-underline text-black cursor-pointer
      before:content-[''] before:absolute before:bottom-0 before:left-0 
      before:w-full before:h-[2px] before:bg-[#03bda7] 
      before:opacity-100 before:transform before:translate-x-[-100%] 
      before:transition-transform before:duration-300 
      hover:before:translate-x-0 text-lg lg:text-xl
    "
              >
                Partner with Us
                <span>
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
                    className="lucide lucide-chevron-down ml-1 group-hover:rotate-180 duration-100"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </span>

              {/* Dropdown Menu */}
              <ul
                className="
      absolute hidden overflow-hidden group-hover:block 
      transition-all w-[200px] shadow-2xl bg-white text-black 
      z-50 h-fit
    "
              >
                {[{ href: "/manufacturers", label: "For Manufacturers" }].map(
                  (item) => (
                    <li key={item.href} className="cursor-pointer">
                      <Link
                        href={item.href}
                        className="
            block w-full h-full p-4 bg-transparent 
            hover:bg-[#03BDA7] hover:text-white 
            transition-all duration-300 text-lg lg:text-xl 
          "
                        data-faitracker-click-bind="true"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </li>

            {/* ESG Link */}
            {/* <li>
              <a
                className="
      transition-colors hover:text-foreground/80 font-normal overflow-hidden 
      block relative py-1 text-inherit no-underline
      before:content-[''] before:absolute before:bottom-0 before:left-0 
      before:w-full before:h-[2px] before:bg-[#03bda7] 
      before:opacity-100 before:transform before:translate-x-[-100%] 
      before:transition-transform before:duration-300 
      hover:before:translate-x-0
    "
                href="/esg"
                data-faitracker-click-bind="true"
              >
                ESG
              </a>
            </li> */}

            <li className="group">
              <span
                className="
      transition-colors overflow-hidden hover:text-foreground/80 
      font-normal flex justify-start items-center flex-row 
      relative py-1 no-underline text-black cursor-pointer
      before:content-[''] before:absolute before:bottom-0 before:left-0 
      before:w-full before:h-[2px] before:bg-[#03bda7] 
      before:opacity-100 before:transform before:translate-x-[-100%] 
      before:transition-transform before:duration-300 
      hover:before:translate-x-0 text-lg lg:text-xl
    "
              >
                Insights
                <span>
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
                    className="lucide lucide-chevron-down ml-1 group-hover:rotate-180 duration-100"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </span>

              {/* Dropdown Menu */}
              <ul
                className="
      absolute hidden overflow-hidden group-hover:block 
      transition-all w-[170px] shadow-2xl bg-white text-black 
      z-50 h-fit
    "
              >
                {[
                  { href: "/blogs", label: "Blogs" },
                  { href: "/events", label: "Events" },
                ].map((item) => (
                  <li key={item.href} className="cursor-pointer">
                    <a
                      href={item.href}
                      className="
            block w-full h-full p-4 bg-transparent 
            hover:bg-[#03BDA7] hover:text-white 
            transition-all duration-300 text-xl
          "
                      data-faitracker-click-bind="true"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li className="group w-50">
              <span
                className="
      transition-colors overflow-hidden hover:text-foreground/80 
      font-normal flex justify-start items-center flex-row 
      relative py-1 no-underline text-black cursor-pointer
      before:content-[''] before:absolute before:bottom-0 before:left-0 
      before:w-full before:h-[2px] before:bg-[#03bda7] 
      before:opacity-100 before:transform before:translate-x-[-100%] 
      before:transition-transform before:duration-300 
      hover:before:translate-x-0  text-lg lg:text-xl
    "
              >
                Our Company
                <span>
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
                    className="lucide lucide-chevron-down ml-1 group-hover:rotate-180 duration-100"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </span>
              </span>

              {/* Dropdown Menu */}
              <ul
                className="
      absolute hidden overflow-hidden group-hover:block 
      transition-all w-[200px] shadow-2xl bg-white text-black 
      z-50 h-fit
    "
              >
                {[
                  { href: "/contact-us", label: "Contact Us" },
                  { href: "/about-us", label: "About Us" },
                ].map((item) => (
                  <li key={item.href} className="cursor-pointer">
                    <a
                      href={item.href}
                      className="
            block w-full h-full p-4 bg-transparent 
            hover:bg-[#03BDA7] hover:text-white 
            transition-all duration-300 text-lg lg:text-xl
          "
                      data-faitracker-click-bind="true"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <button
                id="get-in-touch-navbar"
                className="
      flex items-center justify-start hover:font-medium transition-all duration-300 
      min-w-[170px] max-w-[250px] w-fit group translate-x-5
    "
                type="button"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-controls="radix-:Rf4ja:"
                data-state="closed"
                data-faitracker-form-bind="true"
                data-faitracker-click-bind="true"
              >
                {/* Conditional Image Rendering */}
                <Image
                  alt="LogoButton"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="hidden lg:block"
                  src="/assets/logoButton.svg"
                />
                <Image
                  alt="LogoButton"
                  loading="lazy"
                  width="48"
                  height="48"
                  decoding="async"
                  data-nimg="1"
                  className="lg:hidden"
                  src="/assets/logoButton.svg"
                />

                {/* Button Text */}
                <span className="-ml-8 flex items-center text-black text-xl">
                  GET IN TOUCH
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
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
