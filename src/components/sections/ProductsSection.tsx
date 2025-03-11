import React from "react";
// import Image from "next/image";
import ProductCard from "@/components/ui/ProductCard";

  const products = [
    {
      imageUrl: "https://cdn.scimplify.com/products/images/66767bc845a1e48ffd842348/9decf0be-754c-4093-9059-c342092133c7.png",
      altText: "Molecular structure",
      iconUrl: "/assets/topRightIcon.svg",
      name: "N,N Carbonyl diimidazole (CDI)",
      casNo: "530-62-1",
      category: "Intermediate",
      subCategory: "Reagents",
      description: "N,N'-Carbonyl diimidazole (CDI) is an organic reagent primarily used in peptide synthesis, protein modification, and pharmaceutical research.",
      productLink: "/product/N,N Carbonyl diimidazole (CDI)",
    },
    {
      imageUrl: "https://cdn.scimplify.com/products/images/6676c268b38954b972d1f7b5/65fff739-2c03-4b0d-ae06-74ce1dae0b8c.png",
      altText: "Molecular structure",
      iconUrl: "/assets/topRightIcon.svg",
      name: "FEXO CHLORO 4-(4-Chloro-1-oxobutyl)-α,α-dimethyl benzeneacetic Acid Methyl Ester",
      casNo: "154477-54-0",
      category: "Intermediate",
      subCategory: "Antihistamine",
      description: "Fexo Chloro is a pharmaceutical intermediate primarily used in the synthesis of Fexofenadine, a second-generation antihistamine.",
      productLink: "/product/FEXO CHLORO 4-(4-Chloro-1-oxobutyl)-α,α-dimethyl benzeneacetic Acid Methyl Ester",
    },
    {
      imageUrl: "https://cdn.scimplify.com/products/images/6676c258b38954b972d1f72f/cbc47ea1-1813-4a4c-82ee-52a6bae59944.png",
      altText: "Molecular structure",
      iconUrl: "/assets/topRightIcon.svg",
      name: "2,2-Dimethyl-1,3-dioxane-4,6-dione (Meldrum's Acid)",
      casNo: "2033-24-1",
      category: "Pharmaceutical Actives Precursors",
      subCategory: "Heterocyclic Compounds",
      description: "Meldrum's Acid is a versatile organic compound widely used in chemical synthesis and the pharmaceutical industries.",
      productLink: "/product/2,2-Dimethyl-1,3-dioxane-4,6-dione (Meldrum's Acid)",
    },
    {
      imageUrl: "https://cdn.scimplify.com/products/images/6676c28ab38954b972d1f8ff/ceb4205f-6287-4a5a-b320-71a3b549a38f.png", // Replace with actual image path
      altText: "Molecular structure of Itraconazole",
      iconUrl: "/assets/topRightIcon.svg", // Replace with actual icon path
      name: "Itraconazole ITC (API)",
      casNo: "84625-61-6",
      category: "Pharmaceutical Actives & Precursors",
      subCategory: "Active Pharmaceutical Ingredients (APIs)",
      description:
        "Itraconazole is a triazole-class antifungal agent used to treat a variety of fungal infections by inhibiting the synthesis of ergosterol, an essential component of fungal cell membranes. It is effective against a broad spectrum of fungi, including Aspergillus, Blastomyces, Histoplasma, and Candida species.",
      productLink: "/products/itraconazole", // Replace with actual product URL
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
