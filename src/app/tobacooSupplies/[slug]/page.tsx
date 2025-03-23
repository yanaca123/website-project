"use client";
import ProductList from "@/components/productList/productList";
import StatBox from "@/components/statBox/statBox";
// import { Product, SimplifiedProduct } from "@/types/types";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

import { useState } from "react";

// interface Props {
//   params: { slug: string };
// }
const products = [
  {
    name: "Menthol Crystals",
    description:
      "Our natural menthol crystals are extracted from premium-quality mint oils, ensuring a refreshing and intense cooling sensation. These highly concentrated crystals are widely used in pharmaceuticals, cosmetics, and aromatherapy. They provide instant relief in balms and inhalers, enhance toothpaste freshness, and contribute to cooling formulations in skincare. Ideal for DIY remedies, they are also a crucial ingredient in medicinal applications for sore throats, congestion relief, and muscle relaxation. Their purity ensures a powerful aroma and long-lasting freshness, making them a staple in the pharmaceutical and wellness industries.",
    image:
      "https://www.norex.in/uploads/images/202209/img_x500_6319967c2a9249-50619072-78979833.jpg",
    slug: "menthol-crystals",
  },
  {
    name: "Raw Cocoa Beans",
    description:
      "Our raw cocoa beans are carefully harvested, fermented, and sun-dried to preserve their rich flavor and nutritional value. These whole cocoa beans serve as a base for artisanal chocolate making, allowing chocolatiers and enthusiasts to create bean-to-bar chocolate with distinct flavors. Packed with antioxidants, healthy fats, and minerals, they offer various health benefits, including improved heart health and mood enhancement. Whether used for brewing nutrient-rich cocoa beverages, crushing into nibs, or grinding into powder, these beans provide an authentic chocolate experience with deep, complex flavors.",
    image:
      "https://weaveskart.com/wp-content/uploads/2023/05/Fermented-_-Sun-Dried-Raw-Cocoa-Bean-1.jpg",
    slug: "raw-cocoa-beans",
  },
  {
    name: "Licorice Root",
    description:
      "Sourced from high-quality plants, our dried licorice root offers a naturally sweet taste and is widely used in herbal teas, traditional medicine, and natural sweeteners. Known for its soothing properties, licorice root helps support digestive health, alleviate respiratory issues, and provide relief for sore throats and coughs. It has been used for centuries in Ayurvedic and Chinese medicine for its potential to support adrenal health and reduce stress. With its natural compounds, it is also a popular ingredient in confectionery, skincare formulations, and detoxifying herbal blends.",
    image:
      "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2018/04/licorice.jpeg?im=AspectCrop=(16,9);Resize,width=570;",
    slug: "licorice-root",
  },
  {
    name: "Vanillin Powder",
    description:
      "Vanillin powder is a concentrated flavoring compound derived from natural vanilla beans, providing a rich, aromatic essence that enhances baked goods, confections, and beverages. As the key component responsible for the signature vanilla taste, it is widely used in the food industry for desserts, ice creams, and chocolates. Beyond culinary applications, vanillin is also utilized in pharmaceuticals and fragrances due to its calming aroma. Its versatility makes it a sought-after ingredient for gourmet recipes, as well as for commercial food production requiring consistent, high-quality vanilla flavor.",
    image: "https://m.media-amazon.com/images/I/61hEXdUssrL._AC_UL320_.jpg",
    slug: "vanillin-powder",
  },
  {
    name: "Assorted Spice Essential Oils",
    description:
      "Our collection of pure spice essential oils includes premium extracts from cinnamon, clove, cardamom, nutmeg, and other aromatic spices. These essential oils are potent and highly concentrated, making them ideal for aromatherapy, natural remedies, and culinary applications. They are commonly used in massage oils for relaxation, in diffusers to create a warm and inviting ambiance, and in food-grade formulations to enhance the depth of flavor in dishes. Packed with antioxidants and therapeutic properties, these essential oils contribute to overall well-being and holistic health practices.",
    image:
      "https://www.upwellness.com/wp-content/uploads/2016/08/Fotolia_87176242_Subscription_Monthly_M-1536x1024.jpg",
    slug: "assorted-spice-essential-oils",
  },
  {
    name: "Supari (Areca Catechu)",
    description:
      "Supari, also known as Areca Catechu or betel nut, is a traditional chewing ingredient valued for its distinct taste and stimulating properties. Our dried areca nut slices are carefully processed to retain their natural aroma and texture. Popular in cultural practices across Asia, Supari is often blended with spices and sweeteners for an enhanced taste experience. In Ayurvedic traditions, it is believed to aid digestion and oral health. With its natural alkaloids, Supari is also used in herbal formulations, making it a unique ingredient for both traditional and modern uses.",
    image:
      "https://c7.alamy.com/comp/2BE5D4A/betel-nuts-cut-and-uncut-also-called-as-supari-in-india-2BE5D4A.jpg",
    slug: "supari-areca-catechu",
  },
  {
    name: "Kapikachu (Mucuna Pruriens)",
    description:
      "Kapikachu, derived from Mucuna Pruriens seeds, is a powerful adaptogenic herb widely used in Ayurvedic medicine to support nervous system health and cognitive function. It contains natural L-Dopa, a precursor to dopamine, which plays a crucial role in mood regulation and brain function. Traditionally used to enhance energy, vitality, and reproductive health, this herbal powder is also favored by fitness enthusiasts for its potential benefits in promoting muscle strength and endurance. Its potent antioxidant properties make it a valuable addition to herbal supplement routines.",
    image:
      "https://herbalcacao.com/cdn/shop/files/mucuna-pruriens.webp?height=924&v=1738245512&width=924",
    slug: "kapikachu-mucuna-pruriens",
  },
  {
    name: "Ashwagandha Root Powder",
    description:
      "Our finely ground Ashwagandha root powder is an ancient Ayurvedic remedy known for its adaptogenic properties, helping the body manage stress and improve overall well-being. Rich in natural alkaloids, it supports immune function, boosts stamina, and promotes restful sleep. Used for centuries to enhance vitality and mental clarity, Ashwagandha is also recognized for its ability to support hormonal balance and improve endurance. Whether mixed into smoothies, teas, or capsules, this versatile herb is a must-have for holistic health and stress management.",
    image:
      "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/en_US/sliced-images/global/articles/what%20is%20ashwagandha%20image.jpg?auto=format",
    slug: "ashwagandha-root-powder",
  },
  {
    name: "Brahmi (Bacopa Monnieri)",
    description:
      "Brahmi, scientifically known as Bacopa Monnieri, is a revered Ayurvedic herb known for its cognitive-enhancing benefits. Traditionally used to improve memory, focus, and mental clarity, Brahmi is widely consumed as a supplement for brain health. It contains potent antioxidants that help combat oxidative stress and support overall neurological function. This herbal remedy is commonly used by students, professionals, and elderly individuals seeking to enhance mental performance and reduce anxiety naturally.",
    image:
      "https://m.media-amazon.com/images/I/61iVLkY90SL._AC_UF1000,1000_QL80_.jpg",
    slug: "brahmi-bacopa-monnieri",
  },
  {
    name: "Organic Green Tea Leaves",
    description:
      "Our premium organic green tea leaves are hand-picked from high-altitude tea gardens to ensure superior quality and taste. Packed with antioxidants, catechins, and polyphenols, green tea is well known for its metabolism-boosting and detoxifying properties. Enjoy a refreshing cup that supports heart health, aids digestion, and promotes mental alertness. Whether consumed hot or cold, this tea offers a natural, revitalizing beverage option that complements a healthy lifestyle.",
    image:
      "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/9/shutterstock_251566309.jpg",
    slug: "organic-green-tea-leaves",
  },
];

const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug) || null;
};
// async function fetchTobaccoData(slug: string) {
//   try {
//     const token =
//       "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
//     const response = await fetch(
//       `http://localhost:1337/api/tobaccos?filters[slug][$eq]=${slug}&populate=*`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         cache: "no-store",
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch tobacco data");
//     }

//     const data = await response.json();
//     console.log(data);
//     return data.data || [];
//   } catch (error) {
//     console.error("Error fetching tobacco data:", error);
//     return [];
//   }
// }

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

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProductBySlug(slug as string) : null;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="bg-gradient-to-r from-[#008080] to-[#93E9BE] text-white py-10 px-5 md:px-20">
        <div className="px-10">
          <p className="text-gray-800 font-bold text-3xl">
            {product ? product.name : "Product Not Found"}
          </p>
        </div>

        <section className="px-10 py-4">
          <div className="flex flex-wrap md:flex-wrap lg:flex-nowrap xl:flex-nowrap mt-4 gap-6">
            {product?.image && (
              <Image
                src={product.image}
                alt={product.name}
                width={320}
                height={320}
                className="w-80 h-80 bg-white p-2 rounded-lg shadow-lg"
              />
            )}
            <div>
              <p className="text-gray-100 text-xl font-medium leading-relaxed">
                {product
                  ? isExpanded
                    ? product.description
                    : `${product.description.slice(0, 100)}...`
                  : "Product Not Found"}
              </p>
              {product?.description && product.description.length > 100 && (
                <button
                  className="mt-2 text-gray-200 underline hover:text-gray-300 transition"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="px-10 py-4">
          <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="max-w-3xl text-left">
              <h1 className="text-5xl font-extrabold text-gray-800 leading-tight">
                Heritage & Excellence in
                <br /> Every Tobacco Creation
                <span className="text-gray-800">.</span>
              </h1>
              <p className="text-gray-100 text-lg mt-6 leading-relaxed">
                Drawing from centuries-old traditions, our tobacco products
                embody superior craftsmanship and modern precision. We blend
                time-honored methods with innovative techniques to meet
                today&apos;s dynamic consumer preferences.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <StatBox number="Industry" label="Tobacco" />
              <StatBox number="Category" label="Nicotine & Derivatives" />
              <StatBox
                number="Sub-category"
                label="Nicotine Extracts & Alkaloids"
              />
            </div>
          </div>
        </section>
      </div>

      <h1 className="flex items-center justify-center text-center text-gray-800 text-5xl font-extrabold mt-8">
        Our Top Products
      </h1>

      <ProductList products={products} />
    </div>
  );
}
