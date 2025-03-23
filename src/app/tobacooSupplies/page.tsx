// import Image from "next/image";
import React from "react";

// import tobacco1 from "../../assets/tobacco1.jpg";
// import tobaaco from "../../assets/tobbaco2.jpg";
// import { Product, SimplifiedProduct } from "@/types/types";
import StatBox from "@/components/statBox/statBox";
import ProductList from "@/components/productList/productList";

// async function fetchtobaccosData(): Promise<SimplifiedProduct[]> {
//   try {
//     const token =
//       "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
//     const response = await fetch(
//       `http://localhost:1337/api/tobaccos?populate=*`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         cache: "no-store",
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch pharmaceutical products");
//     }

//     const result = await response.json();

//     const formattedProducts: SimplifiedProduct[] = result.data.map(
//       (item: Product) => ({
//         slug: item?.slug || "",
//         title: item?.title || "",
//         description: item?.description || "",
//         thumbnail: {
//           thumbnail:
//             item?.thumbnail?.formats?.thumbnail?.url ||
//             item?.thumbnail?.url ||
//             "",
//         },
//       })
//     );

//     return formattedProducts;
//   } catch (error) {
//     console.error("Error fetching pharmaceutical products:", error);
//     return [];
//   }
// }

export default async function tobaccoComponent() {
  // const tobaccoData = await fetchtobaccosData();
  const products = [
    {
      name: "Menthol Crystals",
      description: "Natural menthol crystals derived from mint oils, offering a cooling sensation and used in various applications.",
      image: "https://www.norex.in/uploads/images/202209/img_x500_6319967c2a9249-50619072-78979833.jpg",
      slug: "menthol-crystals"
    },
    {
      name: "Raw Cocoa Beans",
      description: "Fermented and sundried whole cocoa beans, perfect for making homemade chocolate or brewing cocoa beverages.",
      image: "https://weaveskart.com/wp-content/uploads/2023/05/Fermented-_-Sun-Dried-Raw-Cocoa-Bean-1.jpg",
      slug: "raw-cocoa-beans"
    },
    {
      name: "Licorice Root",
      description: "Dried licorice root known for its sweet flavor and potential health benefits, commonly used in teas and herbal remedies.",
      image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2018/04/licorice.jpeg?im=AspectCrop=(16,9);Resize,width=570;",
      slug: "licorice-root"
    },
    {
      name: "Vanillin Powder",
      description: "A primary component of vanilla bean extract, used as a flavoring agent in various culinary applications.",
      image: "https://m.media-amazon.com/images/I/61hEXdUssrL._AC_UL320_.jpg",
      slug: "vanillin-powder"
    },
    {
      name: "Assorted Spice Essential Oils",
      description: "A collection of pure essential oils extracted from various spices, ideal for aromatherapy and enhancing flavors.",
      image: "https://www.upwellness.com/wp-content/uploads/2016/08/Fotolia_87176242_Subscription_Monthly_M-1536x1024.jpg",
      slug: "assorted-spice-essential-oils"
    },
    {
      name: "Supari (Areca Catechu)",
      description: "Dried areca nut slices, commonly known as Supari, used in traditional practices and as a chewing ingredient.",
      image: "https://c7.alamy.com/comp/2BE5D4A/betel-nuts-cut-and-uncut-also-called-as-supari-in-india-2BE5D4A.jpg",
      slug: "supari-areca-catechu"
    },
    {
      name: "Kapikachu (Mucuna Pruriens)",
      description: "Herbal powder made from Mucuna Pruriens seeds, traditionally used to support nervous system health.",
      image: "https://herbalcacao.com/cdn/shop/files/mucuna-pruriens.webp?height=924&v=1738245512&width=924",
      slug: "kapikachu-mucuna-pruriens"
    },
    {
      name: "Ashwagandha Root Powder",
      description: "Finely ground powder from Ashwagandha roots, known for its adaptogenic properties and use in Ayurvedic medicine.",
      image: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/en_US/sliced-images/global/articles/what%20is%20ashwagandha%20image.jpg?auto=format",
      slug: "ashwagandha-root-powder"
    },
    {
      name: "Brahmi (Bacopa Monnieri)",
      description: "Herbal supplement made from Brahmi leaves, traditionally used to enhance cognitive function and memory.",
      image: "https://m.media-amazon.com/images/I/61iVLkY90SL._AC_UF1000,1000_QL80_.jpg",
      slug: "brahmi-bacopa-monnieri"
    },
    {
      name: "Haritaki Powder",
      description: "Powdered Terminalia chebula fruit, used in traditional medicine for its potential health benefits.",
      image: "https://m.media-amazon.com/images/I/51eO7v4QQOL._SX300_SY300_QL70_FMwebp_.jpg",
      slug: "haritaki-powder"
    },
    {
      name: "Lavang (Clove) Essential Oil",
      description: "Pure clove essential oil, known for its strong aroma and potential therapeutic properties.",
      image: "https://m.media-amazon.com/images/I/41oLNBBVjSL._AC_UF1000,1000_QL80_.jpg",
      slug: "lavang-clove-essential-oil"
    },
    {
      name: "Organic Green Tea Leaves",
      description: "Premium quality green tea leaves, rich in antioxidants and perfect for a refreshing beverage.",
      image: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/9/shutterstock_251566309.jpg",
      slug: "organic-green-tea-leaves"
    }
  ];
  

  return (
    <div className="w-full bg-[#F2FCF6]">
      {/* Banner Section */}
      <div className="relative h-[160px] sm:h-[400px] bg-cover bg-center mb-8 sm:mb-9">
        {/* <Image
          className="absolute inset-0 z-1 w-full h-full object-cover hidden sm:block"
          src={tobacco1}
          alt="Tobacco Banner"
          priority
        />
        <Image
          className="absolute inset-0 z-1 w-full h-full object-cover sm:hidden"
          src={tobaaco}
          alt="Tobacco Mobile Banner"
          priority
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-30 hidden sm:block"></div>
        <div className="relative z-10 hidden sm:flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-500">
            Tobacco Products
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-500">
            Evolving Tobacco Solutions: Tradition Meets Innovation
          </p>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="relative z-10 block sm:hidden text-center px-4 mt-5 mb-9">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Tobacco Products
        </h1>
        <p className="text-md font-light text-gray-700">
          Evolving Tobacco Solutions: Tradition Meets Innovation
        </p>
      </div>

      {/* Information Section */}
      <section className="px-10 py-16">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Tradition & Quality <br />
              In Every Tobacco Blend
              <span className="text-[#009688]">.</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              At the forefront of tobacco craftsmanship, we deliver high-quality
              products designed to meet the evolving preferences of consumers.
              Our commitment to quality, innovation, and responsible sourcing
              ensures a refined experience in every product. Embracing
              time-honored techniques and modern innovations, we create tobacco
              solutions that resonate with tradition while meeting contemporary
              demands.
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
      <ProductList products={products} />
    </div>
  );
}
