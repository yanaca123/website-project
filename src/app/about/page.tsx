import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Card from "@/components/ui/Card";
import Container from '@/components/ui/Container';
// import Button from '@/components/ui/Button';
type Feature = {
  title: string;
  description: string;
  bgColor: string;
  iconBgColor: string;
  iconSrc: string;
  iconAlt: string;
};

export const metadata: Metadata = {
  title: "About Us | Scimplify",
  description:
    "Learn about Scimplify and our mission to provide data science and AI solutions for businesses.",
};

export default function AboutPage() {
  const features = [
    {
      title: "Sustainability Driven",
      description:
        "We are focused on manufacturing chemicals by the most sustainable and environment-friendly way possible.",
      bgColor: "#015c56",
      iconBgColor: "#0d8771",
      iconSrc: "/_next/static/media/Layer_1sustain.126b6549.svg",
      iconAlt: "Sustainability Driven",
    },
    {
      title: "Quality at Core",
      description:
        "From sourcing of raw materials till finished goods production, we follow a 3-step quality inspection process.",
      bgColor: "#015c56",
      iconBgColor: "#0d8771",
      iconSrc: "/_next/static/media/quality.adf23cf8.svg",
      iconAlt: "Quality at Core",
    },
    {
      title: "Fungible Manufacturing",
      description:
        "Fungible manufacturing network to fulfill demand of any volume.",
      bgColor: "#015c56",
      iconBgColor: "#0d8771",
      iconSrc: "/_next/static/media/D 1manufungi.b40080a6.svg",
      iconAlt: "Fungible Manufacturing",
    },
    {
      title: "Proprietary Digital Technologies",
      description:
        "Be in control of all your projects with our in-house digital suite—an epitome of transparency and trust.",
      bgColor: "#015c56",
      iconBgColor: "#0d8771",
      iconSrc: "/_next/static/media/quality.adf23cf8.svg",
      iconAlt: "Proprietary Digital Technologies",
    },
  ];
  const FeatureCard = ({
    title,
    description,
    bgColor,
    iconBgColor,
    iconSrc,
    iconAlt,
  }: Feature) => {
    return (
      <div className="flex flex-col h-full">
        <div
          className={`relative overflow-hidden rounded-xl p-6 h-full`}
          style={{ backgroundColor: bgColor }}
        >
          <div className="flex gap-4 md:flex-col">
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: iconBgColor }}
            >
              <Image
                alt={iconAlt}
                loading="lazy"
                width={52}
                height={52}
                className="p-1"
                src={iconSrc}
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-light text-[#00ffdf] md:font-light md:text-lg">
                {title}
              </h3>
              <p className="text-white md:text-white">{description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const teamMembers = [
    {
      name: "Dr Ravi Ponniah",
      image: "/_next/static/media/RnD1.0c58a69d.png",
      description:
        "With 40+ years in the pharmaceutical industry, Dr. Ravi has contributed to the development of 100+ commercialized APIs. His technical expertise extends to CDMO, CRAMS, nucleosides, peptides, and specialty chemicals.",
    },
    {
      name: "Dr Javed Iqbal",
      image: "/_next/static/media/RnD2.9d0b1c63.png",
      description:
        "With an illustrious professional career spanning over 35+ years, Dr. Iqbal’s contributions to innovative drug discovery, organic synthesis, and medicinal chemistry have been integral in transforming Dr. Reddy’s into a powerhouse in the pharmaceutical industry.",
    },
    {
      name: "Prem Kumar",
      image: "/_next/static/media/RnDTeam100.7a7a51fb.png",
      description:
        "Dr. Prem specializes in the synthesis of biologically active natural products, multi-step reactions, and the design of novel chemical entities. With 20+ patents and 8 publications, Dr. Prem is spearheading key research projects at Scimpify.",
    },
  ];

  return (
    <>
      <section className="pt-32 pb-16">
        {/* Desktop View */}
        <div className="relative w-full h-[60vh] hidden mdd:block">
          {/* <Image
            alt="CROHero"
            loading="lazy"
            width={1791}
            height={650}
            decoding="async"
            className="w-full h-full object-cover"
            src="/_next/static/media/AboutUsHeroImage.7b3e158a.jpg"
          /> */}
          <div className="absolute inset-0 w-[43%] bg-[#f8f7f4]/70 backdrop-blur-[34px] flex items-center">
            <div className="ml-16">
              <h1 className="text-6xl font-light max-w-4xl">About Us</h1>
              <div className="w-4 h-4 ml-2 bg-teal-500 rounded-full inline-block"></div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="mdd:hidden">
          {/* <Image
            alt="CROHero"
            loading="lazy"
            width={440}
            height={319}
            decoding="async"
            className="w-full h-[40vh] object-cover"
            src="/_next/static/media/AboutUsImageMobile.e713c350.jpg"
          /> */}
          <div className="bg-[#f8f7f5] text-5xl font-light py-10 container">
            About Us
            <div className="w-2 h-2 bg-teal-500 rounded-full inline-block ml-2"></div>
          </div>
        </div>

        {/* About Scimplify Section */}
        <div className="flex pt-20 mdd:pt-10">
          <div className="flex mdd:flex-col justify-center items-start">
            <div className="basis-1/2">
              <Image
                alt="Scientist Working"
                loading="lazy"
                width={980}
                height={980}
                decoding="async"
                src="/assets/image.webp"
              />
            </div>
            <div className="basis-1/2 px-10 mdd:p-3">
              <h2 className="text-[#002541] text-6xl mdd:text-4xl font-light">
                About Yanaca
              </h2>
              <p className="text-[#282828] font-light mdd:text-base text-xl mt-4">
              Yanaca is a leading global provider of custom-engineered plants and equipment for the food, feed and biofuels industries. Our reliable and innovative technologies transform oilseeds, grains and tropical oils into protein feed/food, edible oils/fats, oleochemicals and biofuel. YANACA offers high-quality production, globally competitive costs and unparalleled lead times in the manufacturing of capital goods, consumer goods and precision parts. Our products are designed to meet the specific needs of our customers, and are manufactured to the highest quality standards. We are committed to providing our customers with the best possible service and support, and we are dedicated to continuous improvement in all areas of our business.
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission Section (Mobile Only) */}
        <div className="container mdd:mb-10 hidden mdd:block">
          <div className="flex flex-col items-center">
            <Image
              alt="Our Mission"
              loading="lazy"
              width={802}
              height={398}
              decoding="async"
              src="/assets/image(1).webp"
            />
            <div className="bg-white rounded-3xl shadow-2xl max-w-72 px-10 py-3 -mt-10 text-center">
              <h3 className="text-[#002541] text-4xl font-light leading-[50px]">
                Our Mission
              </h3>
              <p className="text-[#282828] text-base font-normal pt-2">
                Simplifying research, manufacturing, and supply chain processes
                in specialty chemicals by leveraging our in-house R&D and
                manufacturing expertise to meet diverse customer needs
                efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-14">
          <div>
            <Image
              alt="Our Mission Image"
              loading="lazy"
              width={802}
              height={398}
              decoding="async"
              src="/assets/image (1).webp"
            />
          </div>
          <div className="bg-white rounded-3xl shadow-2xl max-w-72 px-10 py-3 -mt-10">
            <div className=" text-[#002541] pt-5 text-4xl font-light font-['Helvetica Now Text'] leading-[50px]">
              Our Vision
            </div>
            <div className="text-justify text-[#282828] text-base font-normal font-['Helvetica Now Text'] pb-5">
              To establish ourselves as a preferred and trusted partner for
              Indian and international customers seeking to develop and source
              high-quality chemical products by serving critical sectors within
              the specialty chemical industry.
            </div>
          </div>
        </div>

        <div className="container mdd:hidden mt-16">
          <div className="flex gap-x-10 items-center justify-center">
            <div className="basis-1/2">
              <Image
                alt="Our Mission"
                loading="lazy"
                width={802}
                height={398}
                decoding="async"
                data-nimg="1"
                src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FOurMissionHQ.fb35a1ae.png&amp;w=1920&amp;q=75"
              />
            </div>
            <div className="basis-1/2">
              <div className="text-[#002541] pb-5 text-6xl font-light font-['Helvetica Now Text ']  text-6xl mdd:text-4xl font-light mt-6  inline-block text-[#002541]">
                Our Mission
              </div>
              <div className="text-[#282828]  font-light my-4 text-lg">
                Simplifying the research, manufacturing, and supply chain
                processes in specialty chemicals by leveraging our in-house
                R&amp;D and manufacturing expertise to meet diverse customer
                needs efficiently.
              </div>
            </div>
          </div>
        </div>
        <div className="container pt-10 mdd:hidden">
          <div className="flex gap-x-10 items-center justify-center">
            <div className="basis-1/2">
              <div className="text-[#002541] pb-5 text-6xl font-light font-['Helvetica Now Text'] mdd:text-4xl mt-6 inline-block">
                Our Vision
              </div>
              <div className="text-[#282828] font-light my-4 text-lg">
                To establish ourselves as a preferred and trusted partner for
                Indian and international customers seeking to develop and source
                high-quality chemical products by serving critical sectors
                within the specialty chemical industry.
              </div>
            </div>
            <div className="basis-1/2">
              <Image
                alt="Our Mission"
                loading="lazy"
                width={802}
                height={398}
                decoding="async"
                src="/_next/static/media/VisionHQ.cc8e2fa9.png"
              />
            </div>
          </div>
        </div>

        <Container className="bg-white mb-20 mt-10">
      <div className="flex space-x-2 overflow-hidden p-8 bg-white h-[80vh] mdd:hidden">
        <div className="font-light text-5xl container mt-[100px] mb-5">
          Our Values
          <div className="text-justify text-[#212529] text-xl font-light font-['Helvetica Now Text']">
            The Guiding Principles of Scimplify
          </div>
        </div>
          <div className="flex gap-6">
        {[
          { src: "Group 10705AboutUs4.a805ea5b.jpg", title: "Innovation" },
          { src: "Group 10702AboutUs1.718e633c.jpg", title: "Integrity" },
          { src: "Group 10704AboutUs3.8e3febc3.jpg", title: "Excellence" },
          { src: "Group 10703AboutUs2.6c8e57f6.jpg", title: "Sustainability" },
        ].map((item, index) => (
          <Card key={index} className="relative group overflow-hidden flex-1 transition-all duration-300 hover:flex-[3]">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src="/assets/Pharmaeuticals.jpg"
                alt="Pharmaceutical"
                fill
                className="object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-xl">
                {/* Vertical Text (visible by default) */}
                <h2 className="text-white font-medium text-xl transition-opacity duration-300 whitespace-nowrap transform rotate-[-90deg] group-hover:opacity-0">
                  {item.title}
                </h2>
                {/* Explore More Button & Explanation (hidden by default) */}
                <div className="flex flex-col items-center mt-4 opacity-0 pointer-events-none transition-opacity duration-300 group-hover:opacity-100 group-hover:pointer-events-auto">
                  <h1 className="text-white text-3xl mb-3 tex-center text-bold">
                    {item.title}
                  </h1>
                  <p className="text-white pt-2 pb-3 text-lg text-center">
                    Accelerating pharmaceutical innovation with advanced R&D and
                    manufacturing solutions for active pharmaceutical
                    ingredients (APIs).
                  
                  </p>
                </div>
              </div>
              </div>
          </Card>
        ))}
        </div>
      </div>
    </Container>
        <div className="font-light text-5xl container mt-9 mb-12 hidden mdd:block">
          Our Values
          <div className="text-justify text-[#212529] text-base font-normal">
            The Guiding Principles of Scimplify
          </div>
        </div>

        <div className="overflow-hidden mb-10 bg-gray-100 h-[80vh] container mx-auto w-full hidden mdd:flex flex-col space-y-2">
          {[
            { src: "Group 10705AboutUs4.a805ea5b.jpg", title: "Innovation" },
            { src: "Group 10702AboutUs1.718e633c.jpg", title: "Integrity" },
            { src: "Group 10704AboutUs3.8e3febc3.jpg", title: "Excellence" },
            {
              src: "Group 10703AboutUs2.6c8e57f6.jpg",
              title: "Sustainability",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out w-full"
              style={{ height: "200px" }}
            >
              <Image
                src={`/static/media/${item.src}`}
                alt={item.title}
                className="absolute inset-0 object-cover w-full h-full"
                width={200}
                height={200}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 sm:p-8">
                <h2 className="text-white font-medium text-xl duration-300 whitespace-nowrap">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div className="container mx-auto mt-16 p-4">
          <div className="text-center mb-10">
            <p className="text-[#24c9b1] text-3xl italic">Lab Innovators</p>
            <h2 className="text-[#002541] text-4xl font-light">Our R&D Team</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group rounded-3xl overflow-hidden bg-[#e5f4f4]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={422}
                  height={479}
                  className="w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#178988]/80 to-[#173a53]/90 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out p-4 text-center">
                  <h2 className="text-white text-2xl font-light mb-1">
                    {member.name}
                  </h2>
                  <p className="text-white text-xl mb-2 italic">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#002541] mb-20 mdd:mt-14 mdd:mb-10 mt-20">
          <div className="container">
            <div>
              <div className="text-[#002541] pb-12 pt-12 mdd:pb-10 mdd:pt-10  text-6xl font-light font-['Helvetica Now Text ']  text-6xl mdd:text-4xl font-light  inline-block text-white">
                Why Choose Scimplify?
              </div>
              <div className="grid grid-rows-3 gap-6 md:grid-cols-2 items-stretch mdd:pb-10 pb-16">
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-xl bg-[#015c56] p-6 h-full">
                    <div className="flex gap-4 mdd:flex-col">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0d8771]">
                        <Image
                          alt="Technology Pack &amp; Research Talent "
                          loading="lazy"
                          width="57"
                          height="57"
                          decoding="async"
                          data-nimg="1"
                          className="p-1"
                          style={{ color: "transparent" }}
                          src="/_next/static/media/Microscope.bc5e8369.svg"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl   font-light text-[#00ffdf] mdd:font-light mdd:text-lg">
                          Technology Pack &amp; Research Talent{" "}
                        </h3>
                        <p className="text-white mdd:text-white">
                          Achieve new heights with latest technologies, 25+
                          reaction capabilities, custom synthesis &amp; process
                          optimization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col h-full">
                  <div className="relative overflow-hidden rounded-xl bg-[#015c56] p-6 h-full">
                    <div className="flex gap-4 mdd:flex-col">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#0d8771]">
                        <Image
                          alt="Compliance Focused "
                          loading="lazy"
                          width="36"
                          height="54"
                          decoding="async"
                          data-nimg="1"
                          className="p-1"
                          style={{ color: "transparent" }}
                          src="/_next/static/media/compliancesvg.15c2c621.svg"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl   font-light text-[#00ffdf] mdd:font-light mdd:text-lg">
                          Compliance Focused{" "}
                        </h3>
                        <p className="text-white mdd:text-white">
                          Ensuring every step adheres to the highest standards,
                          enabling cutting-edge innovation with unwavering
                          assurance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
