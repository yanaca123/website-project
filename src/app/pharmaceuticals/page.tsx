import Image from "next/image";
import React from "react";

import pharma from "../../assets/pharmaceuticals2.jpg";
import pharma1 from "../../assets/pharmaceuticals3.jpg";
import { Product, SimplifiedProduct } from "@/types/types";
import StatBox from "@/components/statBox/statBox";
import ProductList from "@/components/productList/productList";

async function fetchPharmaceuticalsData(): Promise<SimplifiedProduct[]> {
  try {
    const token =
      "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
    const response = await fetch(
      `http://localhost:1337/api/pharamaceuticals?populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch pharmaceutical products");
    }

    const result = await response.json();

    const formattedProducts: SimplifiedProduct[] = result.data.map(
      (item: Product) => ({
        slug: item?.slug || "",
        title: item?.title || "",
        description: item?.description || "",
        thumbnail: {
          thumbnail:
            item.thumbnail?.formats?.thumbnail?.url ||
            item?.thumbnail?.url ||
            "",
        },
      })
    );

    return formattedProducts;
  } catch (error) {
    console.error("Error fetching pharmaceutical products:", error);
    return [];
  }
}

export default async function PharmaceuticalComponent() {
  const pharmaData = await fetchPharmaceuticalsData();

  return (
    <div className="w-full bg-[#F2FCF6]">
      {/* Banner Section */}
      <div className="relative h-[160px] sm:h-[400px] bg-cover bg-center mb-8 sm:mb-9">
        <Image
          className="absolute inset-0 z-1 w-full h-full object-cover hidden sm:block"
          src={pharma}
          alt="Homepage Banner"
          priority
        />
        <Image
          className="absolute inset-0 z-1 w-full h-full object-cover sm:hidden"
          src={pharma1}
          alt="Homepage Mobile Banner"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 hidden sm:block"></div>
        <div className="relative z-10 hidden sm:flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#008080]">
            Pharmaceuticals & Drug Supplies
          </h1>
          <p className="text-lg md:text-xl font-semibold mb-6 text-[#008080]">
            Advancing Health Through Precision & Innovation
          </p>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="relative z-10 block sm:hidden text-center px-4 mt-5 mb-9">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Pharmaceuticals & Drug Supplies
        </h1>
        <p className="text-md font-light text-gray-700">
          Advancing Health Through Precision & Innovation
        </p>
      </div>

      {/* Information Section */}
      <section className="px-10 py-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Advancing Health <br /> Through Precision
              <span className="text-[#009688]">.</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              At the forefront of pharmaceutical innovation, we deliver
              high-quality solutions designed to meet the demands of modern
              medicine. Our commitment to safety, efficacy, and cutting-edge
              technology ensures that every product contributes to better health
              outcomes.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <StatBox number="2000" label="Exclusive Products" />
            <StatBox number="150" label="Factories" />
            <StatBox number="25" label="Chemistries" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <h1 className="flex items-center justify-center text-center text-gray-800 text-5xl font-extrabold">
        Our Products
      </h1>
      <ProductList products={pharmaData} />
    </div>
  );
}
