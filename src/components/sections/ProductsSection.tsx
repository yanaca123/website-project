import React from "react";
// import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";

  const products = [
    { 
      name: "Supari (Areca Catechu)",
      description: "Supari, also known as Areca Catechu or betel nut, is a traditional chewing ingredient valued for its distinct taste and stimulating properties. Our dried areca nut slices are carefully processed to retain their natural aroma and texture. Popular in cultural practices across Asia, Supari is often blended with spices and sweeteners for an enhanced taste experience. In Ayurvedic traditions, it is believed to aid digestion and oral health. With its natural alkaloids, Supari is also used in herbal formulations, making it a unique ingredient for both traditional and modern uses.",
      imageUrl: "https://c7.alamy.com/comp/2BE5D4A/betel-nuts-cut-and-uncut-also-called-as-supari-in-india-2BE5D4A.jpg",
      slug: "supari-areca-catechu",
      altText: "Molecular structure",
      iconUrl: "/assets/topRightIcon.svg",
      casNo: "530-62-1",
      category: "Tobacco",
      subCategory: "Nicotine & Derivatives",
      productLink: "/tobacooSupplies/supari-areca-catechu",
    },
    { name: "Ashwagandha Root Powder",
      description:
        "Our finely ground Ashwagandha root powder is an ancient Ayurvedic remedy known for its adaptogenic properties, helping the body manage stress and improve overall well-being. Rich in natural alkaloids, it supports immune function, boosts stamina, and promotes restful sleep. Used for centuries to enhance vitality and mental clarity, Ashwagandha is also recognized for its ability to support hormonal balance and improve endurance. Whether mixed into smoothies, teas, or capsules, this versatile herb is a must-have for holistic health and stress management.",
      imageUrl:
        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/bp-wellness-centrum/en_US/sliced-images/global/articles/what%20is%20ashwagandha%20image.jpg?auto=format",
      slug: "ashwagandha-root-powder",
      altText: "Molecular structure",
      iconUrl: "/assets/topRightIcon.svg",
      casNo: "154477-54-0",
      category: "Tobacco",
      subCategory: "Nicotine & Derivatives",
      productLink: "/tobacooSupplies/ashwagandha-root-powder",
    },
    {
      name: "Brahmi (Bacopa Monnieri)",
    description:
      "Brahmi, scientifically known as Bacopa Monnieri, is a revered Ayurvedic herb known for its cognitive-enhancing benefits. Traditionally used to improve memory, focus, and mental clarity, Brahmi is widely consumed as a supplement for brain health. It contains potent antioxidants that help combat oxidative stress and support overall neurological function. This herbal remedy is commonly used by students, professionals, and elderly individuals seeking to enhance mental performance and reduce anxiety naturally.",
    imageUrl:
      "https://m.media-amazon.com/images/I/61iVLkY90SL._AC_UF1000,1000_QL80_.jpg",
    slug: "brahmi-bacopa-monnieri",
      altText: "Molecular structure",
      iconUrl: "/assets/topRightIcon.svg",
      casNo: "2033-24-1",
      category: "Pharmaceutical Actives Precursors",
      subCategory: "Heterocyclic Compounds",
      productLink: "/product/brahmi-bacopa-monnieri",
    },
    {
      name: "Organic Green Tea Leaves",
      description:
        "Our premium organic green tea leaves are hand-picked from high-altitude tea gardens to ensure superior quality and taste. Packed with antioxidants, catechins, and polyphenols, green tea is well known for its metabolism-boosting and detoxifying properties. Enjoy a refreshing cup that supports heart health, aids digestion, and promotes mental alertness. Whether consumed hot or cold, this tea offers a natural, revitalizing beverage option that complements a healthy lifestyle.",
      imageUrl:
        "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/9/shutterstock_251566309.jpg",
      slug: "organic-green-tea-leaves",
     
      altText: "Molecular structure of Itraconazole",
      iconUrl: "/assets/topRightIcon.svg", // Replace with actual icon path
      casNo: "84625-61-6",
      category: "Pharmaceutical Actives & Precursors",
      subCategory: "Active Pharmaceutical Ingredients (APIs)",
      
      productLink: "/tobacooSupplies/organic-green-tea-leaves", // Replace with actual product URL
    },
  ];

const ProductsSection = () => {
  return (
    <div>
     <h2 className="container text-black text-[24px] leading-[32px] md:text-[32px] md:leading-[40px] lg:text-[44px] lg:leading-[48px] font-semibold text-center py-6 md:py-8 lg:py-10">
  Explore our top products
</h2>

<div className="grid grid-cols-1 md:grid-cols-4 mdd:grid-cols-1 gap-6 p-6 mdd:p-3 bg-white">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
    </div>
  );
};

export default ProductsSection;
