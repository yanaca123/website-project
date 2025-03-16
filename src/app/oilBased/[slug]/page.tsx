import Image from "next/image";
import React from "react";
import StatBox from "@/components/statBox/statBox";
import ProductList from "@/components/productList/productList";
import { Product, SimplifiedProduct } from "@/types/types";

async function fetchOilData(slug: string) {
  try {
    const token =
      "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
    const response = await fetch(
      `http://localhost:1337/api/oil-baseds?filters[slug][$eq]=${slug}&populate=*`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch tobacco data");
    }

    const data = await response.json();
    console.log(data);
    return data.data || [];
  } catch (error) {
    console.error("Error fetching tobacco data:", error);
    return [];
  }
}

async function fetchOilsData(): Promise<SimplifiedProduct[]> {
  try {
    const token =
      "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
    const response = await fetch(
      `http://localhost:1337/api/oil-baseds?populate=*`,
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
            item?.thumbnail?.formats?.thumbnail?.url ||
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

export default async function ProductDetail({
  params,
}: {
  params: { slug: string };
}) {
  const oilData = await fetchOilsData();
  const { slug } = await props.params;
  const oData = await fetchOilData(slug);

  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#008080] to-[#93E9BE] text-white py-10 px-5 md:px-20">
        <div className="px-10">
          <p className="text-gray-800 font-bold text-3xl">
            {oData?.length > 0 ? oData[0]?.title : "Product Not Found"}
          </p>
        </div>

        <section className="px-10 py-4 ">
          <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap mt-4 gap-6">
            {(oData[0]?.thumbnail?.formats?.thumbnail?.url ||
              oData[0]?.thumbnail?.url) && (
              <Image
                src={
                  oData[0]?.thumbnail?.formats?.thumbnail?.url ||
                  oData[0]?.thumbnail?.url
                }
                alt="Product"
                className="w-80 h-80 bg-white p-2 rounded-lg shadow-lg"
              />
            )}
            <p className=" text-gray-100 text-xl font-medium leading-relaxed">
              {oData?.length > 0 ? oData[0]?.description : "Product Not Found"}
            </p>
          </div>
        </section>
        <section className="px-10 py-4 ">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="max-w-3xl text-left">
              <h1 className="text-5xl font-extrabold  text-gray-800 leading-tight">
                Refined Excellence in
                <br />
                Oil-Based Formulations<span className="text-gray-800">.</span>
              </h1>
              <p className="text-gray-100 text-lg mt-6 leading-relaxed">
                Harnessing the power of nature, our oil-based formulations
                integrate cutting-edge extraction techniques to preserve
                potency, stability, and therapeutic value for a wide range of
                applications.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <StatBox number="Industies" label="Oil-Based" />
              <StatBox number="Category" label="Essential Oils & Extracts" />
              <StatBox
                number="Sub-category"
                label="Distilled Oils & Natural Derivatives"
              />
            </div>
          </div>
        </section>
      </div>
      <h1 className="flex items-center justify-center text-center text-gray-800 text-5xl  font-extrabold mt-8">
        Our Top Products
      </h1>
      <ProductList products={oilData} />
    </div>
  );
}
