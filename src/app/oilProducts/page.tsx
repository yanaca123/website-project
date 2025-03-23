// import Image from "next/image";
import React from "react";
// import oil1 from "../../assets/oil2.jpg";

import ProductList from "@/components/productList/productList";
// import { Product, SimplifiedProduct } from "@/types/types";
import StatBox from "@/components/statBox/statBox";

// async function fetchOilBasedData(): Promise<SimplifiedProduct[]> {
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
//       throw new Error("Failed to fetch oil based products");
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
 const products = [
  {
    "name": "Almond Oil",
    "description": "A natural oil extracted from almonds, commonly used in skincare and cosmetic products.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtbvQCp5OaRjeIGbKYFjL7dJVomvsuLHkrRQ&s",
    "slug": "almond-oil"
  },
  {
    "name": "Beeswax",
    "description": "A natural wax produced by honeybees, used in creams, lotions, and lip balms for its emulsifying properties.",
    "image": "https://www.huffshoneyfarm.com/wp-content/uploads/2017/02/beeswax2.jpg",
    "slug": "beeswax"
  },
  {
    "name": "Carbopol 940",
    "description": "A thickening agent used in gels and creams to create a smooth consistency.",
    "image": "https://images-na.ssl-images-amazon.com/images/I/61OjT2kVoYL._AC_UL116_SR116,116_.jpg",
    "slug": "carbopol-940"
  },
  {
    "name": "Ceto Macrogol 1000",
    "description": "An emulsifying agent used to stabilize creams and lotions.",
    "image": "https://www.pazzox.nl/media/products/4260691-153543.jpg?type=resize&w=1000&h=1000",
    "slug": "ceto-macrogol-1000"
  },
  {
    "name": "Ceto Stearyl Alcohol",
    "description": "A fatty alcohol mixture used as an emulsifier and thickener in skincare products.",
    "image": "https://c7.alamy.com/comp/K1BT8P/stearyl-alcohol-molecule-constituent-of-cetostearyl-alcohol-cetearyl-K1BT8P.jpg",
    "slug": "ceto-stearyl-alcohol"
  },
  {
    "name": "Cetyl Alcohol",
    "description": "A fatty alcohol used to stabilize and thicken emulsions in lotions and creams.",
    "image": "https://incidecoder-content.storage.googleapis.com/2a21e4ed-965f-4034-a7d0-578d70f0b6c7/ingredients/cetyl-alcohol/cetyl-alcohol_250x180@1x.webp",
    "slug": "cetyl-alcohol"
  },
  {
    "name": "Emulsifying Wax (68%)",
    "description": "A blend of waxes that help water and oil mix in cosmetic formulations.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLyeTh7vpHGvRLNIvON4aeHzBRXJ3I5jzMrA&s",
    "slug": "emulsifying-wax"
  },
  {
    "name": "Glycerine",
    "description": "A humectant that attracts moisture to the skin, keeping it hydrated.",
    "image": "https://media.istockphoto.com/id/1170654281/photo/liquid-glycerol-in-clear-glass.jpg?s=612x612&w=0&k=20&c=3dgNt2DhXTCNX4qvWQUt3aTjXV6izRqwzJI98ULg8is=",
    "slug": "glycerine"
  },
  {
    "name": "Glyceryl Monostearate",
    "description": "An emulsifier used in cosmetics to stabilize formulations and provide a smooth texture.",
    "image": "https://ases.in/cdn/shop/products/glyceryl-monostearet-500x500.jpg?v=1645595944",
    "slug": "glyceryl-monostearate"
  },
  {"name": "Isopropyl Myristate",
    "description": "A synthetic oil used to improve the texture and absorption of skincare products.",
    "image": "https://britiscientific.com/all-media/storage/static/shop/product/598389103_BS13908.png",
    "slug": "isopropyl-myristate"
  },
  {
    "name": "Jojoba Oil",
    "description": "A natural oil with moisturizing and anti-inflammatory properties, ideal for skincare.",
    "image": "https://britiscientific.com/all-media/storage/static/shop/product/598389103_BS13908.png",
    "slug": "jojoba-oil"
  },
  {
    "name": "Kokum Butter",
    "description": "A natural butter known for its healing and moisturizing properties in skincare.",
    "image": "https://s.alicdn.com/@sc04/kf/Abfa8904841cb45fd8dd438d8eb74b5f06.jpg_720x720q50.jpg",
    "slug": "kokum-butter"
  },
  {
    "name": "Lanolin",
    "description": "A natural wax derived from sheep's wool, used as a deep moisturizer in skincare.",
    "image": "https://ases.in/cdn/shop/products/lanolin-pestizidfrei-pheur.jpg?v=1645334772",
    "slug": "lanolin"
  },
  {
    "name": "Light Liquid Paraffin",
    "description": "A mineral oil used as an emollient to lock moisture into the skin.",
    "image": "https://accuchem.in/wp-content/uploads/2024/07/Liquid-Paraffin-Oil.webp",
    "slug": "light-liquid-paraffin"
  },
  {
    "name": "Mango Butter",
    "description": "A rich butter extracted from mango seeds, known for its moisturizing and healing properties.",
    "image": "https://skinkraft.com/cdn/shop/articles/mango_butter_1024x1024.jpg?v=1599828863",
    "slug": "mango-butter"
  },
  {
    "name": "Microcrystalline Wax",
    "description": "A refined wax used in cosmetics to add texture and stability to formulations.",
    "image": "https://www.forestessentialsindia.com/blog/wp-content/uploads/2020/02/Microcrystalline-wax.png",
    "slug": "microcrystalline-wax"
  },
  {
    "name": "Niacinamide",
    "description": "A form of vitamin B3 that helps improve skin texture and brightness.",
    "image": "https://images.pexels.com/photos/29675494/pexels-photo-29675494/free-photo-of-glass-dropper-bottle-of-skincare-serum.jpeg?auto=compress&cs=tinysrgb&w=600",
    "slug": "niacinamide"
  },
  {
    "name": "Olive Oil",
    "description": "A natural oil rich in antioxidants and vitamins, used for deep hydration.",
    "image": "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321246/olive-oil-in-a-bottle-which-may-be-used-on-the-face.jpg",
    "slug": "olive-oil"
  },
  {
    "name": "Paraffin Wax",
    "description": "A soft wax used in cosmetics and skincare to lock in moisture.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Paraffin.jpg",
    "slug": "paraffin-wax"
  },
  {
    "name": "Shea Butter",
    "description": "A rich butter known for its deep moisturizing and healing properties.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg/1024px-M%C3%A9lange_du_Beurre_de_karit%C3%A9_et_huiles_essentielles_dans_une_boite_pour_massage_02.jpg",
    "slug": "shea-butter"
  },
  {
    "name": "Stearic Acid",
    "description": "A fatty acid used as an emulsifier and thickener in cosmetics.",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYRem98Vc6bvo5L4W3Bu1wnqgORualqHwNxQ&s",
    "slug": "stearic-acid"
  },
  {
    "name": "Triethanolamine",
    "description": "A pH balancer and emulsifier used in cosmetic formulations.",
    "image": "https://5.imimg.com/data5/RB/UV/DI/SELLER-107498714/triethanolamine.jpg",
    "slug": "triethanolamine"
  },
  {
    "name": "Vitamin E Oil",
    "description": "A powerful antioxidant that helps nourish and protect the skin.",
    "image": "https://smhs.gwu.edu/sites/g/files/zaskib1151/files/2023-09/vitae_web_1304185486.jpg",
    "slug": "vitamin-e-oil"
  }
 ]; 

export default async function oilBasedComponent() {
  // const oilData = await fetchOilBasedData();
  return (
    <div className="w-full bg-[#F2FCF6]">
      <div className="relative  h-[160px] sm:h-[400px] bg-cover bg-center mb-8 sm:mb-9">
        {/* <Image
          className="absolute inset-0 z-1 w-full h-[400px]  object-cover hidden sm:block"
          src={oil1}
          alt="Homepage Banner"
          priority
        />
        <Image
          className="absolute inset-0 z-1 w-full h-[160px] object-cover sm:hidden"
          src={oil1}
          alt="Homepage Mobile Banner"
          priority
        /> */}
        <div className="absolute inset-0 bg-black bg-opacity-30 hidden sm:block"></div>
        <div className="relative z-10 hidden sm:flex flex-col items-center  justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-500">
            Oil-Based Products
          </h1>
          <p className="text-lg md:text-xl font-semibold   mb-6 text-gray-500">
            Lipid-Based Drug Formulations: Enhancing Therapeutic Efficacy
          </p>
        </div>
      </div>

      <div className="relative z-10 block sm:hidden text-center px-4 mt-5 mb-9">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">
          Oil-Based Products
        </h1>
        <p className="text-md font-light text-gray-700">
          Lipid-Based Drug Formulations: Enhancing Therapeutic Efficacy
        </p>
      </div>
      <section className="px-10 py-16 ">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="max-w-3xl text-left">
            <h1 className="text-5xl font-extrabold  text-gray-900 leading-tight">
              Precision & Purity <br /> In Oil-Based Formulations
              <span className="text-[#009688]">.</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              At the forefront of oil-based innovation, we deliver high-quality
              solutions designed to meet the evolving needs of modern
              healthcare. Our commitment to purity, efficacy, and advanced
              formulation technology ensures that every product enhances
              therapeutic effectiveness and well-being.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <StatBox number="2000" label="Exclusive Products" />
            <StatBox number="150" label="Factories" />
            <StatBox number="25" label="Chemistries" />
          </div>
        </div>
      </section>
      <h1 className="flex items-center justify-center text-center text-gray-800 text-5xl  font-extrabold">
        Our Products
      </h1>
      <ProductList products={products} />
    </div>
  );
}
