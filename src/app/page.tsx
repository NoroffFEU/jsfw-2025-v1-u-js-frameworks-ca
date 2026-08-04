import { getProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const response = await getProducts();

  const products = response.data;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900">
        Blend Shop
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}