// import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative text-white px-6 py-32 md:px-12 overflow-hidden font-poppins">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://scimplify-borchure.s3.ap-south-1.amazonaws.com/FooterCompressedVideo.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-6">
            {/* <Image
              alt="Yanaca Logo"
              loading="lazy"
              width="400"
              height="100"
              decoding="async"
              className="brightness-0 invert mdd:w-40 transparent"
              src="/_next/static/media/Simplify logo with R White (1).fc9b552c.svg"
            /> */}
            <h1 className="text-7xl">Yanaca</h1>
            <p className="text-gray-300 max-w-lg">
            Driven by innovation and unparalleled R&D expertise, Yanaca is committed to delivering high-performance chemical and natural solutions to industries worldwide. Partner with us and experience the future of sustainable chemical excellence.
            </p>
          </div>
          
          {/* Right Section - Social Links & Contact */}
          <div className="space-y-6">
            {/* Social Media Links */}
            <div className="flex gap-4">
              {[
                { href: "https://www.facebook.com/scimplify1", icon: "facebook" },
                { href: "https://in.linkedin.com/company/scimplify", icon: "linkedin" },
                { href: "https://x.com/scimplify_", icon: "twitter" },
                { href: "https://www.youtube.com/@scimplify_", icon: "youtube" },
              ].map(({ href, icon }) => (
                <a key={icon} target="_blank" className="hover:text-[#7DDBC7] transition-colors" href={href}>
                  <svg className="lucide lucide-{icon} w-6 h-6" width="24" height="24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {/* Add respective path for each icon here */}
                  </svg>
                </a>
              ))}
            </div>

            {/* Contact Details */}
            <ul className="list-disc container text-[#00ffd9]">
              <li><span className="text-white">Email:</span> <a href="mailto:info@scimplify.com">yanacacom@gmail.com</a></li>
              <li><span className="text-white">Company:</span> YANACA GLOBAL TECHNOLOGIES PRIVATE LIMITED</li>
              <li><span className="text-white">CIN:</span> U21009KA2023PTC179006</li>
              <li><span className="text-white">Telephone:</span> <a href="tel:+91 6394302301">+91 6394302301</a></li>
              <li><span className="text-white">Contact Person:</span> Satyam</li>
            </ul>

            {/* Newsletter Subscription */}
            {/* <div className="mt-4 space-y-2">
              <h3 className="text-lg">Subscribe to our Newsletter</h3>
              <div className="flex gap-2 mdd:flex-col">
                <input
                  type="email"
                  className="h-10 w-full rounded-md border px-3 py-2 text-sm bg-transparent border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Enter your email"
                />
                <button className="h-10 px-4 py-2 bg-[#2fcbb4] hover:bg-[#6bc4b1] text-white rounded-md">
                  Submit
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer Links */}
        <hr className="border-gray-700" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {[
            { title: "Industries", links: ["Pharmaceutical", "Oil Products", "Tobacco Supplies"] },
            { title: "Services", links: ["CMO", "CRO"] },
            { title: "Resources", links: ["Blogs", "Events"] },
            // { title: "Our platform", links: ["ATOMS"] },
            { title: "Partner with us", links: ["Manufacturers"] },
          ].map(({ title, links }) => (
            <div key={title} className="space-y-4">
              <h3 className="text-[#00ffd9] font-medium">{title}</h3>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}><a className="text-gray-300 hover:text-white hover:underline" href="#">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright Section */}
        <hr className="border-gray-700" />
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Yanaca. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a className="hover:text-white" href="/privacypolicy">Privacy Policy</a>
            <span>|</span>
            <a className="hover:text-white" href="/termsofuse">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
