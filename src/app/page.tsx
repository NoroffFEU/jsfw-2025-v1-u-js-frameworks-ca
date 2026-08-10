import { getProducts } from "@/lib/api";
import ProductBrowser from "@/components/ProductBrowser";

export default async function Home() {
  const response = await getProducts();

  const products = response.data;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
    <div className="mx-auto max-w-7xl">


    <ProductBrowser products={products} />
  </div>
    </main>
  );
}