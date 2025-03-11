"use client";
import React,{useState} from "react";
import Image from "next/image";
// import { motion } from 'framer-motion';
// import { useAnimateOnScroll } from '@/lib/animations';
// import Container from '../ui/Container';
// import Button from '../ui/Button';

export default function ContactSection() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  // const { ref, isVisible } = useAnimateOnScroll();
  const countries = [
    { name: "India", code: "🇮🇳", short: "IN" },
    { name: "United States", code: "🇺🇸", short: "US" },
    { name: "United Kingdom", code: "🇬🇧", short: "UK" },
    { name: "Canada", code: "🇨🇦", short: "CA" },
    { name: "Germany", code: "🇩🇪", short: "DE" },
    { name: "France", code: "🇫🇷", short: "FR" },
    { name: "Japan", code: "🇯🇵", short: "JP" },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <section className="bg-[#074370] text-white pb-10 relative font-poppins ">
      <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold text-center pt-6 md:pt-10">
  Find Your Perfect Chemical Solution
</h2>

<p
  className="text-sm sm:text-base md:text-xl text-center pt-3 md:pt-5 pb-6 md:pb-10 max-w-xl md:max-w-5xl mx-auto"
  id="Sfooter"
>
  Simplifying Your Supply Chain Experience
</p>

      <div className="flex flex-col-reverse md:flex-row container mx-auto items-center">

        <div className="md:basis-1/2 flex flex-wrap justify-center items-center gap-4 md:gap-10 p-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
            <Image
              className="w-32 md:w-44 h-auto"
              src="/assets/FooterForm2.png"
              alt="Footer Form Card"
              width={176}
              height={112}
            />
            <Image
              className="w-32 md:w-44 h-auto mt-2 md:mt-6"
              src="/assets/FooterForm1.png"
              alt="Footer Form Card"
              width={176}
              height={176}
            />
          </div>

          {/* Divider for large screens */}
          <div className="hidden md:block shrink-0 bg-border h-full w-[1px]"></div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
            <Image
              className="w-32 md:w-44 h-auto"
              src="/assets/FooterForm3.png"
              alt="Footer Form Card"
              width={176}
              height={112}
            />
            <Image
              className="w-32 md:w-44 h-auto mt-2 md:mt-5"
              src="/assets/FooterForm4.png"
              alt="Footer Form Card"
              width={176}
              height={112}
            />
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6">
  <div className="max-w-[550px] w-full rounded-2xl px-5 sm:px-6 bg-white mx-auto text-black pt-5">
    <h2 className="text-lg md:text-3xl font-semibold text-left py-2">
      Partner With Us.
            </h2>
            <form
              className="space-y-3 max-w-3xl mx-auto py-10 pt-0"
              data-faitracker-form-bind="true"
              data-faitracker-form-id="form-0"
            >
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-6 mdd:col-span-12">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":R16nbjsra:-form-item"
                    >
                      Name
                      <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your Name"
                      id="name-input"
                      aria-describedby="name-input-description"
                      aria-invalid="false"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-span-6 mdd:col-span-12">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":R26nbjsra:-form-item"
                    >
                      Email<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Email"
                      id="email-input"
                      aria-describedby="email-input-description"
                      aria-invalid="false"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 sm:col-span-12">
      <div className="space-y-2">
        <label className="text-sm font-medium">
          Country <span className="text-red-600">*</span>
        </label>
        <div className="relative">
          {/* Button to open dropdown */}
          <button
            className="flex items-center justify-between w-full h-10 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
            onClick={toggleDropdown}
          >
            <div className="flex items-center gap-2">
              <span>{selectedCountry.code}</span>
              <span>{selectedCountry.name}</span>
            </div>
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
              className={`h-4 w-4 transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            >
              <path d="m7 15 5 5 5-5"></path>
              <path d="m7 9 5-5 5 5"></path>
            </svg>
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-auto">
              {countries.map((country) => (
                <div
                  key={country.short}
                  className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => {
                    setSelectedCountry(country);
                    setIsOpen(false);
                  }}
                >
                  <span>{country.code}</span>
                  <span>{country.name}</span>
                  <span className="ml-auto text-gray-500">({country.short})</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
                </div>
                <div className="col-span-6 mdd:col-span-12">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":R2anbjsra:-form-item"
                    >
                      Company Name<span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter company name"
                      id="company-name-input"
                      aria-describedby="company-name-input-description"
                      aria-invalid="false"
                      name="company_name"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2 flex flex-col items-start md:pt-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor=":Renbjsra:-form-item"
                >
                  Phone number<span className="text-red-600">*</span>
                </label>
                <div className="flex w-full PhoneInput">
                  <button
                    className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 py-2 flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-10"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded="false"
                    aria-controls="radix-:Rdenbjsra:"
                    data-state="closed"
                    data-faitracker-form-bind="true"
                    data-faitracker-click-bind="true"
                  >
                    <span className="bg-foreground/20 flex h-4 w-6 overflow-hidden rounded-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 513 342"
                      >
                        <title>IN</title>
                        <path
                          fill="#181A93"
                          d="M17.3 0h478.4v342H17.3V0z"
                        ></path>
                        <path fill="#FFA44A" d="M0 0h513v114H0V0z"></path>
                        <path fill="#1A9F0B" d="M0 228h513v114H0V228z"></path>
                        <path fill="#FFF" d="M0 114h513v114H0V114z"></path>
                        <circle
                          fill="#FFF"
                          cx="256.5"
                          cy="171"
                          r="34.2"
                        ></circle>
                        <path
                          fill="#181A93"
                          d="M256.5 216.6c-25.1 0-45.6-20.5-45.6-45.6s20.5-45.6 45.6-45.6 45.6 20.5 45.6 45.6-20.5 45.6-45.6 45.6zm0-11.4c18.2 0 34.2-16 34.2-34.2s-15.9-34.2-34.2-34.2-34.2 16-34.2 34.2 16 34.2 34.2 34.2z"
                        ></path>
                        <circle
                          fill="#181A93"
                          cx="256.5"
                          cy="171"
                          r="22.8"
                        ></circle>
                      </svg>
                    </span>
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
                      className="lucide lucide-chevrons-up-down -mr-2 h-4 w-4 opacity-100"
                    >
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </button>
                  <input
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 rounded-e-lg rounded-s-none PhoneInputInput"
                    autoComplete="tel"
                    placeholder="Enter your phone number."
                    id="phone-input"
                    aria-describedby="phone-input-description"
                    aria-invalid="false"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6 mdd:col-span-12">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor=":R1inbjsra:-form-item"
                    >
                      Looking For
                    </label>
                    <button
                      type="button"
                      role="combobox"
                      aria-controls="radix-:Rlinbjsra:"
                      aria-expanded="false"
                      aria-autocomplete="none"
                      dir="ltr"
                      data-state="closed"
                      data-placeholder=""
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id=":R1inbjsra:-form-item"
                      aria-describedby=":R1inbjsra:-form-item-description"
                      aria-invalid="false"
                      data-faitracker-form-bind="true"
                      data-faitracker-click-bind="true"
                    >
                      <span className="pointer-events-none">Looking For</span>
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
                        className="lucide lucide-chevron-down h-4 w-4 opacity-50"
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                    <select
                      aria-hidden="true"
                      className="absolute border-0 w-px h-px p-0 m-[-1px] overflow-hidden clip-rect whitespace-nowrap overflow-wrap-normal"
                    >
                      <option value=""></option>
                      <option value="Chemical Sourcing Requirement">
                        Chemical Sourcing Requirement
                      </option>
                      <option value="Chemical Manufacturing Requirement">
                        Chemical Manufacturing Requirement
                      </option>
                      <option value="Chemical Research and Development Requirement">
                        Chemical Research and Development Requirement
                      </option>
                      <option value="Interested in Joining Us">
                        Interested in Joining Us
                      </option>
                      <option value="Other Requirement (Please add your requirement in comment box)">
                        Other Requirement (Please add your requirement in
                        comment box)
                      </option>
                    </select>
                  </div>
                </div>
                <div className="col-span-6 mdd:col-span-12"></div>
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor=":Rmnbjsra:-form-item"
                >
                  Message
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none"
                  placeholder="Message"
                  name="message"
                  id=":Rmnbjsra:-form-item"
                  aria-describedby=":Rmnbjsra:-form-item-description"
                  aria-invalid="false"
                ></textarea>
              </div>
              <div className="pt-3">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 bg-[#25c9b1]"
                  type="submit"
                  id="partner-with-us-homepage"
                  data-faitracker-form-bind="true"
                  data-faitracker-click-bind="true"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
