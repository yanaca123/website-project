"use client";

import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Card from "@/components/pharmaCard/pharmaCard";
import Link from "next/link";
import { ProductListProps } from "@/types/types";

const ProductList: React.FC<ProductListProps> = ({ products = [] }) => {
  const firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="px-5 py-10">
      {/* Search Bar */}
      <div className="flex items-center justify-center my-14">
        <div className="w-full max-w-lg flex items-center border border-[#006666] rounded-lg shadow-md overflow-hidden bg-white">
          <span className="px-3 text-[#006666]">
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="flex-1 p-3 focus:outline-none focus:ring-0"
          />
          <button className="px-3 py-2 bg-[#008080] rounded-sm text-white font-medium border-l border-[#006666] hover:bg-[#005555]">
            Search
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product, index) => (
            <Link
              key={product.slug ?? `product-${index}`}
              href={`/${firstSegment}/${product.slug}`}
            >
              <Card
                key={product.slug ?? `product-${index}`}
                imageSrc={product?.thumbnail?.thumbnail}
                title={product?.title}
                description={product?.description}
              />
            </Link>
          ))
        ) : (
          <p className="col-span-4 text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={`page-${index + 1}`}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 ${
                currentPage === index + 1
                  ? "bg-[#008080] text-white"
                  : "bg-gray-300"
              } rounded`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
