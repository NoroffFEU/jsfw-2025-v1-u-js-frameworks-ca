"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/product";

type ProductBrowserProps = {
products: Product[];
};

export default function ProductBrowser({
products,
}: ProductBrowserProps) {
const [search, setSearch] = useState("");
const [sort, setSort] = useState("default");

const filteredProducts = useMemo(() => {
const searchTerm = search.toLowerCase().trim();

const filtered = products.filter((product) =>
  product.title.toLowerCase().includes(searchTerm)
);

return [...filtered].sort((a, b) => {
  switch (sort) {
    case "price-low":
      return a.discountedPrice - b.discountedPrice;

    case "price-high":
      return b.discountedPrice - a.discountedPrice;

    case "rating":
      return b.rating - a.rating;

    case "name":
      return a.title.localeCompare(b.title);

    default:
      return 0;
  }
});

}, [products, search, sort]);

return (
<>
<div className="mb-8 border-b border-gray-200 pb-6"> <div className="flex flex-col gap-5 md:flex-row md:items-end md:gap-4">
<div className="w-full flex-1"> <label
           htmlFor="product-search"
           className="mb-2 block text-sm font-semibold text-gray-800"
         >
Search products </label>

```
        <input
          id="product-search"
          type="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search by product name..."
          className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-6 text-base text-gray-900 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-gray-400 focus:ring-2 focus:ring-gray-200 md:h-12 md:rounded-full md:px-5 md:text-base"
        />
      </div>

      <div className="w-full md:w-60">
        <label
          htmlFor="product-sort"
          className="mb-2 block text-sm font-semibold text-gray-800"
        >
          Sort products
        </label>

        <select
          id="product-sort"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
          className="h-14 w-full rounded-2xl border border-gray-200 bg-white px-6 text-base text-gray-900 shadow-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-gray-200 md:h-12 md:rounded-full md:px-5 md:text-base"
        >
          <option value="default">Recommended</option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="rating">
            Highest Rated
          </option>

          <option value="name">
            Name: A to Z
          </option>
        </select>
      </div>
    </div>
  </div>

  <div className="mb-5 flex items-center justify-between">
    <p className="text-sm text-gray-500">
      Showing{" "}
      <span className="font-semibold text-gray-900">
        {filteredProducts.length}
      </span>{" "}
      {filteredProducts.length === 1
        ? "product"
        : "products"}
    </p>

    {search && (
      <button
        type="button"
        onClick={() => setSearch("")}
        className="rounded-full px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black"
      >
        Clear search
      </button>
    )}
  </div>

  {filteredProducts.length > 0 ? (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  ) : (
    <div className="rounded-3xl bg-white px-6 py-16 text-center shadow-sm">
      <h2 className="text-2xl font-bold text-gray-900">
        No products found
      </h2>

      <p className="mt-2 text-gray-600">
        Try searching for a different product.
      </p>

      <button
        type="button"
        onClick={() => setSearch("")}
        className="mt-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-7 py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-lg"
      >
        Clear search
      </button>
    </div>
  )}
</>
);
}
