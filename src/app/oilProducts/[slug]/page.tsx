"use client";
// import { GetStaticProps, GetStaticPaths } from "next";
import Image from "next/image";
import React from "react";
import StatBox from "@/components/statBox/statBox";
import ProductList from "@/components/productList/productList";
// import { Product, SimplifiedProduct } from "@/types/types";
import { useState } from "react";
import { useParams } from "next/navigation";

// interface Props {
//   params: { slug: string };
// }
const products = [
  {
    name: "Almond Oil",
    description:
      "Almond oil is a versatile and nutrient-rich oil extracted from premium-quality almonds. It is widely used in skincare and haircare due to its high content of vitamin E, antioxidants, and essential fatty acids. This natural oil deeply nourishes and hydrates the skin, making it an excellent choice for reducing dryness, irritation, and signs of aging. It also promotes healthy hair by strengthening roots, reducing dandruff, and adding shine. Additionally, almond oil is used in aromatherapy, massage therapy, and homemade cosmetic formulations. Its lightweight texture allows for quick absorption without clogging pores, making it suitable for all skin types. Regular application helps in fading dark circles, soothing sunburn, and improving overall skin tone. Its anti-inflammatory properties also assist in treating minor wounds and infections. The oil is commonly found in lotions, serums, lip balms, and soaps, enhancing their moisturizing effects. Whether used alone or blended with other ingredients, almond oil is a must-have in natural beauty care routines.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbvQCp5OaRjeIGbKYFjL7dJVomvsuLHkrRQ&s",
    slug: "almond-oil",
  },
  {
    name: "Beeswax",
    description:
      "Beeswax is a natural wax secreted by honeybees and is widely valued for its protective, thickening, and emulsifying properties. It is a staple ingredient in skincare and cosmetic products such as lip balms, salves, lotions, and candles. Beeswax creates a breathable barrier on the skin, locking in moisture while allowing it to breathe, making it perfect for dry and chapped skin. It contains natural antibacterial and anti-inflammatory properties, helping to heal wounds, soothe irritations, and reduce acne. Its ability to emulsify and stabilize formulations makes it a preferred choice in DIY beauty recipes. Additionally, beeswax is used in woodworking, leather conditioning, and even food preservation. Due to its pleasant natural scent and non-toxic nature, it is commonly incorporated into eco-friendly household products. Whether for skin protection, natural cosmetics, or candle making, beeswax remains one of the most versatile and beneficial natural substances available.",
    image:
      "https://www.huffshoneyfarm.com/wp-content/uploads/2017/02/beeswax2.jpg",
    slug: "beeswax",
  },
  {
    name: "Carbopol 940",
    description:
      "Carbopol 940 is a high-efficiency thickening agent used in gels, creams, and personal care formulations to create a smooth, stable, and luxurious consistency. It is a synthetic polymer that swells in water, forming clear, high-viscosity gels that provide excellent texture and spreadability. This ingredient is essential in hand sanitizers, shampoos, body washes, and facial cleansers, offering an elegant and professional feel to the products. It enhances the stability of formulations by preventing ingredient separation and improving product longevity. Carbopol 940 is also used in pharmaceutical gels, providing controlled release of active ingredients. Due to its superior water-absorbing properties, it is often found in high-quality lotions and serums. Additionally, it helps suspend solid particles in formulations, making it valuable in exfoliating scrubs and medicated gels. Its non-greasy, lightweight feel makes it ideal for oil-free skincare products. Whether for cosmetic, pharmaceutical, or industrial applications, Carbopol 940 ensures optimal texture and performance.",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61OjT2kVoYL._AC_UL116_SR116,116_.jpg",
    slug: "carbopol-940",
  },
  {
    name: "Ceto Macrogol 1000",
    description:
      "Ceto Macrogol 1000 is a powerful emulsifying agent widely used in creams and lotions to ensure a stable mixture of water and oil-based ingredients. It plays a crucial role in preventing separation, giving skincare formulations a smooth and uniform texture. Known for its excellent spreadability, it enhances the application process, allowing creams to glide effortlessly onto the skin. This ingredient is frequently used in pharmaceutical and cosmetic formulations due to its non-irritating properties, making it ideal for sensitive skin. Additionally, it helps improve the moisturizing effects of lotions, providing long-lasting hydration. By preventing oil-based components from solidifying at low temperatures, it ensures product consistency and extends shelf life. Ceto Macrogol 1000 is a vital component in many skincare products, delivering both functionality and a luxurious feel.",
    image:
      "https://www.pazzox.nl/media/products/4260691-153543.jpg?type=resize&w=1000&h=1000",
    slug: "ceto-macrogol-1000",
  },
  {
    name: "Ceto Stearyl Alcohol",
    description:
      "Ceto Stearyl Alcohol is a mixture of fatty alcohols that functions as an emulsifier and thickener in skincare products. It is commonly used to enhance the texture of lotions and creams, providing them with a rich, creamy consistency. This ingredient acts as a stabilizer, preventing separation and ensuring a smooth, uniform blend. Known for its excellent moisturizing properties, it helps the skin retain hydration, making it feel soft and supple. It is also a key ingredient in hair conditioners, improving manageability and imparting a silky feel. Due to its emollient nature, Ceto Stearyl Alcohol helps reduce dryness and irritation, making it a preferred choice for sensitive skin formulations. Derived from natural sources like coconut or palm oil, it is widely used in hypoallergenic products and contributes to the overall effectiveness of skincare and haircare formulations.",
    image:
      "https://c7.alamy.com/comp/K1BT8P/stearyl-alcohol-molecule-constituent-of-cetostearyl-alcohol-cetearyl-K1BT8P.jpg",
    slug: "ceto-stearyl-alcohol",
  },
  {
    name: "Cetyl Alcohol",
    description:
      "Cetyl Alcohol is a fatty alcohol widely used in cosmetics as a stabilizer and thickening agent. It plays an essential role in maintaining the consistency and structure of lotions, creams, and other emulsions. Acting as an emollient, it softens and smoothens the skin while helping it retain moisture for longer durations. Cetyl Alcohol is also known for reducing the greasy feel of oil-based products, making them more lightweight and pleasant to use. This versatile ingredient is found in various personal care items such as shampoos, conditioners, and moisturizers, enhancing their performance. It is derived from plant oils, including coconut and palm, and is known for its gentle and non-irritating properties, making it suitable for sensitive skin formulations. Its ability to distribute active ingredients evenly within a formulation ensures optimal effectiveness and a luxurious feel.",
    image:
      "https://incidecoder-content.storage.googleapis.com/2a21e4ed-965f-4034-a7d0-578d70f0b6c7/ingredients/cetyl-alcohol/cetyl-alcohol_250x180@1x.webp",
    slug: "cetyl-alcohol",
  },
  {
    name: "Emulsifying Wax (68%)",
    description:
      "Emulsifying Wax (68%) is a carefully blended mix of waxes that plays a crucial role in stabilizing emulsions in cosmetic formulations. It ensures that oil and water-based ingredients mix effectively, preventing separation and maintaining a consistent texture. This ingredient improves the spreadability of lotions and creams, allowing for smooth and even application. It is widely used in natural and organic formulations, as it helps create stable and effective emulsions without harsh additives. Additionally, emulsifying wax enhances the consistency and longevity of beauty products by keeping ingredients well-integrated. It also acts as a mild surfactant, improving the usability of skincare formulations. Its compatibility with both oil- and water-based ingredients makes it a versatile component in various personal care and cosmetic products, delivering long-lasting stability and an improved user experience.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyeTh7vpHGvRLNIvON4aeHzBRXJ3I5jzMrA&s",
    slug: "emulsifying-wax",
  },
  {
    name: "Glycerine",
    description:
      "Glycerine is a powerful humectant that attracts moisture from the air and locks it into the skin, ensuring deep hydration. It plays a vital role in maintaining the skin’s natural moisture balance, making it an essential ingredient in moisturizers, creams, and serums. Due to its gentle nature, glycerine is widely used in products for sensitive and dry skin, helping to soothe irritation and prevent rough patches. It also enhances the absorption of other active ingredients in skincare formulations, allowing them to work more effectively. Beyond skincare, glycerine is used in hair care products to reduce frizz and maintain softness. Its versatility and ability to retain hydration make it a fundamental component in a wide range of cosmetic and pharmaceutical applications.",
    image:
      "https://media.istockphoto.com/id/1170654281/photo/liquid-glycerol-in-clear-glass.jpg?s=612x612&w=0&k=20&c=3dgNt2DhXTCNX4qvWQUt3aTjXV6izRqwzJI98ULg8is=",
    slug: "glycerine",
  },
  {
    name: "Glyceryl Monostearate",
    description:
      "Glyceryl Monostearate is a common emulsifier used in cosmetic formulations to stabilize and improve the texture of creams and lotions. By preventing the separation of oil and water components, it ensures a smooth and uniform consistency in skincare and personal care products. This ingredient also functions as a mild moisturizer, helping the skin retain hydration while providing a velvety feel. It is frequently used in formulations for lotions, sunscreens, and makeup products to enhance their spreadability and absorption. Glyceryl Monostearate also serves as a thickening agent, improving the richness and longevity of cosmetic formulations, making it an invaluable component in skincare and pharmaceutical applications.",
    image:
      "https://ases.in/cdn/shop/products/glyceryl-monostearet-500x500.jpg?v=1645595944",
    slug: "glyceryl-monostearate",
  },
  {
    name: "Isopropyl Myristate",
    description:
      "Isopropyl Myristate is a lightweight synthetic oil widely used in skincare products to enhance absorption and improve texture. It helps deliver active ingredients deeper into the skin while reducing the greasy feel of oil-based formulations. This makes it a preferred ingredient in lotions, serums, and sunscreens, providing a silky-smooth application. Isopropyl Myristate also acts as a conditioning agent, making the skin feel softer and more hydrated without clogging pores. It is frequently used in hair care products to enhance detangling and smoothness, ensuring a non-sticky, lightweight finish. Its versatility in enhancing product consistency and performance makes it a valuable ingredient in cosmetics and skincare formulations.",
    image:
      "https://britiscientific.com/all-media/storage/static/shop/product/598389103_BS13908.png",
    slug: "isopropyl-myristate",
  },
  {
    name: "Jojoba Oil",
    description:
      "Jojoba Oil is a natural, plant-derived oil known for its exceptional moisturizing and anti-inflammatory properties. It closely resembles the skin's natural sebum, allowing it to penetrate deeply without clogging pores. This makes it a highly effective ingredient for balancing oil production in both dry and oily skin types. Jojoba Oil is packed with vitamins E and B, as well as antioxidants, which help protect the skin from environmental stressors and promote healing. It is commonly used in skincare products to soothe irritation, reduce redness, and support overall skin health. Additionally, it is a popular ingredient in hair care formulations for nourishing the scalp and promoting stronger, shinier hair.",
    image:
      "https://britiscientific.com/all-media/storage/static/shop/product/598389103_BS13908.png",
    slug: "jojoba-oil",
  },
  {
    name: "Kokum Butter",
    description:
      "Kokum Butter is a rich, plant-based butter known for its deeply moisturizing and healing properties. Extracted from the seeds of the Garcinia indica tree, it is a natural emollient that helps restore skin elasticity and hydration. Unlike heavier butters, Kokum Butter is non-greasy and absorbs quickly, making it ideal for creams, balms, and lotions. It is rich in essential fatty acids and antioxidants, which help repair damaged skin, soothe dryness, and promote a youthful appearance. Due to its ability to enhance skin barrier function, it is often used in lip balms, body butters, and anti-aging formulations. Its soothing and nourishing effects make it a valuable ingredient for skincare and hair care applications.",
    image:
      "https://s.alicdn.com/@sc04/kf/Abfa8904841cb45fd8dd438d8eb74b5f06.jpg_720x720q50.jpg",
    slug: "kokum-butter",
  },
  {
    name: "Lanolin",
    description:
      "Lanolin is a natural, wax-like substance derived from sheep’s wool, widely used as a deep moisturizer in skincare. It forms a protective barrier on the skin, preventing moisture loss and keeping the skin soft and supple. Lanolin is highly effective for treating dry, chapped, or irritated skin, making it a key ingredient in balms, ointments, and intensive moisturizers. Its ability to mimic the skin’s natural lipids allows for deep hydration without clogging pores. Lanolin is also commonly used in lip care, hand creams, and baby skincare products due to its gentle, soothing properties. Its exceptional moisture-retaining ability makes it a valuable addition to both cosmetic and pharmaceutical formulations.",
    image:
      "https://ases.in/cdn/shop/products/lanolin-pestizidfrei-pheur.jpg?v=1645334772",
    slug: "lanolin",
  },
  {
    name: "Light Liquid Paraffin",
    description:
      "Light Liquid Paraffin, also known as mineral oil, is a highly refined emollient used to lock moisture into the skin. It creates a protective barrier that prevents water loss, making it a key ingredient in moisturizers, lotions, and therapeutic skin treatments. This ingredient is widely used in medical and cosmetic applications for its ability to soothe dryness and irritation. Light Liquid Paraffin is often found in baby oils, ointments, and barrier creams, where it helps keep the skin hydrated and protected. Its non-comedogenic nature makes it suitable for sensitive and dry skin, providing long-lasting hydration without causing breakouts.",
    image:
      "https://accuchem.in/wp-content/uploads/2024/07/Liquid-Paraffin-Oil.webp",
    slug: "light-liquid-paraffin",
  },
  {
    name: "Mango Butter",
    description:
      "Mango Butter is a nutrient-rich butter extracted from mango seeds, known for its deep moisturizing and healing properties. It is packed with vitamins A, C, and E, which help promote collagen production and improve skin elasticity. This natural emollient is highly effective in soothing dry, rough, and irritated skin while protecting against environmental damage. Mango Butter is widely used in body butters, lip balms, and anti-aging creams due to its ability to nourish and restore the skin’s natural barrier. It also enhances hair care products by providing hydration and shine to dry, brittle hair. With its luxurious texture and skin-loving benefits, Mango Butter is a staple in natural skincare formulations.",
    image:
      "https://skinkraft.com/cdn/shop/articles/mango_butter_1024x1024.jpg?v=1599828863",
    slug: "mango-butter",
  },
  {
    name: "Microcrystalline Wax",
    description:
      "Microcrystalline Wax is a refined wax commonly used in cosmetics to add texture and stability to formulations. It enhances the thickness and consistency of products like lipsticks, balms, and creams while providing a smooth and glossy finish. This wax helps retain moisture and protect the skin from external aggressors, making it a valuable ingredient in skincare products. It also contributes to the long-lasting effect of makeup by improving adhesion and preventing smudging. Due to its versatility, Microcrystalline Wax is found in a variety of cosmetic and pharmaceutical applications, where it enhances both performance and aesthetic appeal.",
    image:
      "https://www.forestessentialsindia.com/blog/wp-content/uploads/2020/02/Microcrystalline-wax.png",
    slug: "microcrystalline-wax",
  },
  {
    name: "Niacinamide",
    description:
      "Niacinamide, a form of vitamin B3, is a powerful ingredient known for its ability to improve skin texture and brightness. It helps strengthen the skin barrier, reduce redness, and even out skin tone, making it a popular choice for brightening and anti-aging products. Niacinamide also regulates sebum production, making it effective for both dry and oily skin types. It is widely used in serums, moisturizers, and sunscreens to enhance skin health and provide a radiant complexion. With its numerous benefits, Niacinamide is a staple in modern skincare formulations, delivering visible improvements in skin clarity and hydration.",
    image:
      "https://images.pexels.com/photos/29675494/pexels-photo-29675494/free-photo-of-glass-dropper-bottle-of-skincare-serum.jpeg?auto=compress&cs=tinysrgb&w=600",
    slug: "niacinamide",
  },
  {
    name: "Olive Oil",
    description:
      "Olive oil is a natural oil extracted from olives, widely recognized for its deep hydrating and nourishing properties. Rich in essential fatty acids, vitamins E and K, and antioxidants, it helps to lock in moisture, improve skin elasticity, and provide a natural glow. It is commonly used in skincare formulations to combat dryness, soothe irritation, and protect the skin from environmental damage. Due to its lightweight yet deeply penetrating nature, olive oil is also used as a carrier oil in massage therapies, enhancing the absorption of other beneficial ingredients. It has been used for centuries in Mediterranean beauty rituals and remains a key ingredient in modern skincare, known for its ability to soften and smooth the skin while promoting overall skin health.",
    image:
      "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321246/olive-oil-in-a-bottle-which-may-be-used-on-the-face.jpg",
    slug: "olive-oil",
  },
  {
    name: "Paraffin Wax",
    description:
      "Paraffin wax is a soft, colorless solid derived from petroleum, widely used in cosmetics and skincare for its excellent moisture-locking properties. It forms a protective barrier over the skin, preventing moisture loss and making it particularly beneficial for people with extremely dry or chapped skin. In professional skincare treatments, paraffin wax is commonly applied as a warm, melted layer to hands and feet, enhancing hydration and leaving the skin feeling soft and supple. Additionally, it has therapeutic benefits, often used in heat therapy to soothe sore muscles and joints by improving blood circulation. Due to its occlusive nature, paraffin wax is found in lip balms, hand creams, and body lotions, ensuring long-lasting hydration and protection against harsh environmental factors.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Paraffin.jpg",
    slug: "paraffin-wax",
  },
  {
    name: "Shea Butter",
    description:
      "Shea butter is a luxurious, nutrient-rich fat extracted from the nuts of the African shea tree. Known for its exceptional moisturizing and healing properties, shea butter is packed with vitamins A, E, and F, as well as essential fatty acids that nourish and restore dry, damaged skin. It provides deep hydration without clogging pores, making it suitable for all skin types, including sensitive and acne-prone skin. Shea butter is widely used to alleviate conditions such as eczema, psoriasis, and stretch marks due to its natural anti-inflammatory and soothing effects. Its creamy texture melts upon contact with the skin, creating a protective barrier that locks in moisture for long-lasting hydration. In addition to skincare, shea butter is commonly found in hair care products, helping to condition and strengthen hair while reducing frizz and dryness.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg/1024px-M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg",
    slug: "shea-butter",
  },
  {
    name: "Stearic Acid",
    description:
      "Stearic acid is a naturally occurring fatty acid derived from plant and animal sources, widely used in skincare and cosmetic formulations. As a key emulsifier and thickening agent, stearic acid helps stabilize and enhance the texture of creams, lotions, and cleansers, ensuring a smooth and luxurious feel. It acts as a surfactant, allowing water and oil to mix, which is crucial in maintaining the consistency and effectiveness of skincare products. Stearic acid also contributes to the skin’s protective barrier, preventing moisture loss and enhancing hydration. Due to its cleansing properties, it is often found in facial cleansers and body washes, where it helps remove dirt, oil, and impurities without stripping the skin of its natural oils. Additionally, stearic acid is used in shaving creams and soaps, producing a rich lather that improves glide and comfort during shaving.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRem98Vc6bvo5L4W3Bu1wnqgORualqHwNxQ&s",
    slug: "stearic-acid",
  },
  {
    name: "Triethanolamine",
    description:
      "Triethanolamine, often abbreviated as TEA, is a common emulsifier and pH balancer used in cosmetic and personal care formulations. It helps maintain the stability and consistency of products by preventing the separation of oil and water-based ingredients. TEA is frequently found in facial cleansers, shampoos, and moisturizers, where it enhances texture, improves foaming properties, and ensures an even application. Additionally, triethanolamine plays a crucial role in adjusting the pH of cosmetic formulations, ensuring that products remain gentle and effective on the skin. While it is highly effective in maintaining the integrity of skincare products, it is often combined with other hydrating and soothing ingredients to ensure it remains non-irritating. Due to its versatility and emulsifying capabilities, triethanolamine is an essential component in a wide range of beauty and personal care products.",
    image:
      "https://5.imimg.com/data5/RB/UV/DI/SELLER-107498714/triethanolamine.jpg",
    slug: "triethanolamine",
  },
  {
    name: "Vitamin E Oil",
    description:
      "Vitamin E oil is a powerful antioxidant widely used in skincare for its ability to nourish, protect, and repair the skin. It helps combat free radical damage caused by environmental stressors such as UV rays and pollution, making it an essential ingredient in anti-aging products. Vitamin E oil deeply hydrates and soothes dry or irritated skin, improving elasticity and reducing the appearance of scars, fine lines, and wrinkles. It is often found in serums, moisturizers, and lip balms, providing long-lasting hydration and a healthy, radiant glow. Beyond its skincare benefits, vitamin E oil is also used in hair care to nourish the scalp, strengthen hair follicles, and promote hair growth. Its ability to accelerate wound healing and reduce inflammation makes it a popular choice in soothing treatments for sunburns, eczema, and minor cuts.",
    image:
      "https://smhs.gwu.edu/sites/g/files/zaskib1151/files/2023-09/vitae_web_1304185486.jpg",
    slug: "vitamin-e-oil",
  },
  // Continue expanding the descriptions for the remaining products...
];

const getProductBySlug = (slug: string) => {
  return products.find((product) => product.slug === slug) || null;
};

// async function fetchOilData(slug: string) {
//   try {
//     const token =
//       "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
//     const response = await fetch(
//       `http://localhost:1337/api/oil-baseds?filters[slug][$eq]=${slug}&populate=*`,
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

// async function fetchOilsData(): Promise<SimplifiedProduct[]> {
//   try {
//     const token =
//       "1288693b2489b929f9e16180aeab189aee84fd183e12cc26fa3add1cc9259e25ec80f21bdd5edaf93966da633ad62d7e13dea0fdf5310c6d227ad03b845dc7726663a56bf86b8ab791ebee2b052e198a77a03f0913a2f2e066c1a1fbcfc429f759ff746567a72acb0dccd72bccda89c8153e54cf48bb1d8f1fe5051486d4fd90";
//     const response = await fetch(
//       `http://localhost:1337/api/oil-baseds?populate=*`,
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

      <h1 className="flex items-center justify-center text-center text-gray-800 text-5xl font-extrabold mt-8">
        Our Top Products
      </h1>

      <ProductList products={products} />
    </div>
  );
}
