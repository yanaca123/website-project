import ProductList from "@/components/productList/productList";
import StatBox from "@/components/statBox/statBox";
import { Product, SimplifiedProduct } from "@/types/types";
import Image from "next/image";
import React from "react";

async function fetchTobaccoData(slug: string) {
  try {
    const token =
      "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
    const response = await fetch(
      `http://localhost:1337/api/tobaccos?filters[slug][$eq]=${slug}&populate=*`,
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

async function fetchtobaccosData(): Promise<SimplifiedProduct[]> {
  try {
    const token =
      "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
    const response = await fetch(
      `http://localhost:1337/api/tobaccos?populate=*`,
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

export default async function ProductDetail(props: {
  params: { slug: string };
}) {
  const tobaccoData = await fetchtobaccosData();
  const { slug } = await props.params;
  const tobData = await fetchTobaccoData(slug);

  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#008080] to-[#93E9BE] text-white py-10 px-5 md:px-20">
        <div className="px-10">
          <p className="text-gray-800 font-bold text-3xl">
            {tobData?.length > 0 ? tobData[0]?.title : "Product Not Found"}
          </p>
        </div>

        <section className="px-10 py-4 ">
          <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap mt-4 gap-6">
            {(tobData[0]?.thumbnail?.formats?.thumbnail?.url ||
              tobData[0]?.thumbnail?.url) && (
              <Image
                src={
                  tobData[0]?.thumbnail?.formats?.thumbnail?.url ||
                  tobData[0]?.thumbnail?.url
                }
                alt="Product"
                className="w-80 h-80 bg-white p-2 rounded-lg shadow-lg"
              />
            )}
            <p className=" text-gray-100 text-xl font-medium leading-relaxed">
              {tobData?.length > 0
                ? tobData[0]?.description
                : "Product Not Found"}
            </p>
          </div>
        </section>
        <section className="px-10 py-4 ">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="max-w-3xl text-left">
              <h1 className="text-5xl font-extrabold  text-gray-800 leading-tight">
                Heritage & Excellence in
                <br /> Every Tobacco Creation
                <span className="text-gray-800">.</span>
              </h1>
              <p className="text-gray-100 text-lg mt-6 leading-relaxed">
                Drawing from centuries-old traditions, our tobacco products
                embody superior craftsmanship and modern precision. We blend
                time-honored methods with innovative techniques to meet today's
                dynamic consumer preferences.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <StatBox number="Industies" label="Tobacco" />
              <StatBox number="Category" label="Nicotine & Derivatives" />
              <StatBox
                number="Sub-category"
                label="Nicotine Extracts & Alkaloids"
              />
            </div>
          </div>
        </section>
      </div>
      <h1 className="flex items-center justify-center text-center text-gray-800 text-5xl  font-extrabold mt-8">
        Our Top Products
      </h1>
      <ProductList products={tobaccoData} />
    </div>
  );
}
