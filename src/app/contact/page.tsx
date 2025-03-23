"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { useEffect, useState } from "react";

const Contact = () => {
  const email = "yanacacom@gmail.com";
  const [mounted, setMounted] = useState(false);
  const phone = "+91 6394302301";
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div>
      <Container>
        <div className="relative w-full h-[300px] lg:h-[60vh]">
          <Image
            alt="CROHero"
            loading="lazy"
            width={4996}
            height={3360}
            decoding="async"
            className="w-full h-full object-cover"
            src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FContactHeroImage.994c3baf.png&w=3840&q=75"
          />
          <div className="absolute inset-0 w-full lg:w-[55%] bg-gradient-to-r from-white/90 to-white/80">
            <div className="flex flex-col justify-center h-full mx-auto container px-6 lg:px-16">
              <h1 className="text-5xl lg:text-7xl font-light max-w-4xl">
                <span className="inline-block">Contact</span>
                <span className="whitespace-nowrap">
                  {" "}
                  Us
                  <span className="w-2.5 h-2.5 ml-1 lg:w-4 lg:h-4 lg:ml-2 bg-teal-500 rounded-full inline-block"></span>
                </span>
              </h1>
            </div>
          </div>
        </div>
        <section className="container py-14 lg:py-20">
          <h2 className="text-4xl lg:text-6xl font-light text-[#002541] mb-4 inline-block">
            Our <span className="whitespace-nowrap">Office</span>
            <span className="inline-block w-4 h-4 bg-teal-500 rounded-full ml-2"></span>
          </h2>

          <div className="mt-6 lg:mt-12 w-full max-w-4xl mx-auto">
            <div className="flex items-start space-x-5 lg:space-x-10">
              <Image
                src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlocationIcon.31db4b39.png&w=64&q=75" // Replace with your actual icon path
                alt="Location Icon"
                className="w-[40px] lg:w-[50px]"
                width={64}
                height={64}
              />
              <div>
                <h3 className="text-xl lg:text-4xl font-normal text-teal-500">
                  Dada Nagar Industrial Area Factory
                </h3>
                <p className="mt-3 lg:mt-5 lg:text-lg text-slate-500 font-light">
                  Site 5, Dada Nagar Industrial Area,
                  <br />
                  Kanpur, Uttar Pradesh, India.
                </p>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-6 lg:mt-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2663.7701519287457!2d80.27633285192007!3d26.497134781415333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDI5JzUwLjAiTiA4MMKwMTYnNDMuNyJF!5e1!3m2!1sen!2sin!4v1742558227745!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: "12px" }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        <section className="bg-[#64C8C2] text-white py-14 lg:py-20">
          <div className="container mx-auto text-center">
            {/* Section Heading */}
            <h2 className="text-4xl lg:text-6xl font-light text-[#002541] inline-block">
              General <span className="whitespace-nowrap">Inquiries</span>
              <span className="inline-block w-4 h-4 bg-white rounded-full ml-2"></span>
            </h2>
            <p className="text-base mt-4 max-w-2xl mx-auto">
              We&apos;d love to hear from you! Please contact us for any
              inquiries.
            </p>

            {/* Contact Section */}
            <div className="mt-8 lg:mt-12 flex flex-col items-center space-y-6">
              {/* Email Contact */}
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md text-[#002541]">
                <Mail className="w-6 h-6 text-[#64C8C2]" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Email Us</h3>
                  {mounted ? (
                    <Link
                      href={`mailto:${email}`}
                      className="text-base hover:underline"
                    >
                      {email}
                    </Link>
                  ) : (
                    <a
                      href={`mailto:${email}`}
                      className="text-base hover:underline"
                    >
                      {email}
                    </a>
                  )}
                </div>
              </div>

              {/* Phone Contact */}
              <div className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md text-[#002541]">
                <Phone className="w-6 h-6 text-[#64C8C2]" />
                <div className="text-left">
                  <h3 className="text-lg font-semibold">Call Us</h3>
                  <Link
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-base hover:underline"
                  >
                    {phone}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container py-14 lg:pt-20 lg:pb-48">
          {/* Heading */}
          <div className="max-w-[800px] text-4xl lg:text-6xl font-light text-[#002541]">
            Join Our{" "}
            <span className="whitespace-nowrap">
              Team
              <span className="w-2.5 h-2.5 ml-1 lg:w-4 lg:h-4 lg:ml-2 bg-teal-500 rounded-full inline-block"></span>
            </span>
          </div>
          <p className="mt-6 lg:text-xl font-light">
            We are always looking for talented individuals to join our team. If
            you are passionate about the specialty chemicals industry and want
            to make a difference, check out our current openings below.
          </p>

          {/* Mobile View */}
          <div className="lg:hidden">
            <div className="mt-8">
              <Image
                src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoinusimagebg.de5576f2.jpg&w=1920&q=75"
                alt="Join Us"
                width={1600}
                height={800}
                className="w-full"
              />
            </div>
            <div className="sm:mx-6 p-6 text-white bg-[#002541d7] -mt-10 sm:-mt-20 relative">
              <div className="text-xl font-normal">Why Work with Us?</div>
              <p className="text-sm mt-4 font-light">
                At Yanaca, we believe in fostering a collaborative and inclusive
                work environment. We offer opportunities for growth,
                professional development, and the chance to work on innovative
                projects that shape the future of the specialty chemicals
                industry.
              </p>
              <a
                href={`mailto:${email}`}
                className="block w-fit mt-6 px-9 py-3 rounded-md text-lg font-medium bg-white text-[#002541]"
              >
                Join Us
              </a>
            </div>
          </div>

          {/* Desktop View */}
          <div className="hidden relative w-full h-fit lg:flex justify-center items-center my-10">
            <div className="container w-full h-[80vh] overflow-hidden">
              <Image
                src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjoinusimagebg.de5576f2.jpg&w=1920&q=75"
                alt="Join Us"
                width={1600}
                height={800}
                className="!h-[700px] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-[30px] w-[90%] flex justify-center items-center flex-row p-4 bg-[#002541d7]">
              {/* Left Section */}
              <div className="w-1/2 my-2 border-r border-white pr-10">
                <h3 className="text-2xl text-white">Why Work with Us?</h3>
                <p className="text-white font-light text-sm my-2 text-justify">
                  At Yanaca, we believe in fostering a collaborative and
                  inclusive work environment. We offer opportunities for growth,
                  professional development, and the chance to work on innovative
                  projects that shape the future of the specialty chemicals
                  industry.
                </p>
              </div>

              {/* Right Section */}
              <div className="flex flex-col w-[500px] items-center justify-center h-full">
                <a href={`mailto:${email}`}>
                  <Image
                    src="https://www.scimplify.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJoinUsButton.d6d4b784.png&w=256&q=75"
                    alt="Join Us"
                    width={200}
                    height={80}
                    className="ml-72 mt-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Contact;
