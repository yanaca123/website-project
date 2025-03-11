"use client"
import { useState } from "react";
import Image from "next/image";

type ProductCardProps = {
  imageUrl: string;
  altText: string;
  iconUrl: string;
  name: string;
  casNo: string;
  category: string;
  subCategory: string;
  description: string;
  productLink: string;
};

const ProductCard = ({
  imageUrl,
  altText,
  iconUrl,
  name,
  casNo,
  category,
  subCategory,
  description,
  productLink,
}: ProductCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="text-card-foreground bg-[#d6fbf6] rounded-lg overflow-hidden shadow-sm p-6 md:p-3 py-3 flex flex-col border-0">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={altText}
          width={128}
          height={128}
          className="w-32 h-32 object-contain mb-4 shadow-2xl rounded-lg"
        />
        <div className="absolute -top-7 -right-10 md:-right-8 md:-top-6 w-20 h-20 bg-[#1a365d] rounded-full flex items-center justify-center">
          <Image src={iconUrl} alt="Icon" width={50} height={50} />
        </div>
      </div>
      <h2 className="text-2xl font-semibold text-[#1a365d] mb-4 md:text-[20px] md:leading-[28px] md:font-bold">
        {name}
      </h2>
      <div className="space-y-2 flex-grow text-sm md:text-xs">
        <p className="md:text-[16px] md:leading-[24px] font-merriweather">
          <span className="font-semibold text-[#074370]">CAS No. :</span> {casNo}
        </p>
        <p className="md:text-[16px] md:leading-[24px] font-merriweather">
          <span className="font-semibold text-[#074370]">Category :</span> {category}
        </p>
        <p className="md:text-[16px] md:leading-[24px] font-merriweather">
          <span className="font-semibold text-[#074370]">Sub-Category :</span> {subCategory}
        </p>
        <div className="shrink-0 h-[1px] w-full bg-[#8da6a2]"></div>
        <div className="mt-4 md:text-[16px] md:leading-[24px] font-merriweather">
          <p className="text-gray-700">
            <span className="font-semibold text-[#074370]">Description:</span>{" "}
            {isExpanded ? description : `${description.substring(0, 100)}...`}
            <button
              className="text-[#074370] underline hover:text-blue-700 ml-1 font-medium"
              onClick={toggleDescription}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </p>
        </div>
      </div>
      <div className="flex gap-2 mt-6 text-sm md:flex-col">
        <a
          href={productLink}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium text-white bg-[#1a365d] hover:bg-blue-900 transition-colors h-10 px-4 py-2 md:text-center basis-1/2"
        >
          View Product
        </a>
        <button
          className="inline-flex text-white items-center justify-center whitespace-nowrap h-10 px-4 w-full bg-[#1B365D] hover:bg-[#264875] font-semibold text-sm py-3 rounded-xl basis-1/2"
          type="button"
        >
          Request a Quote
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
