import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const discount =
    product.price > product.discountedPrice
      ? Math.round(
          ((product.price - product.discountedPrice) /
            product.price) *
            100
        )
      : 0;

  return (
  <Link href={`/products/${product.id}`} scroll={true}>
    <article className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        {discount > 0 && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-black px-3 py-1 text-sm font-semibold text-white">
            -{discount}%
          </span>
        )}

      <Image
      src={product.image.url}
      alt={product.image.alt}
      width={500}
      height={500}
      className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
    />
      </div>

      <div className="space-y-3 p-5">
        <h2 className="text-xl font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="text-sm text-gray-600">
          ⭐ {product.rating}/5
        </p>

        {product.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div>
          {discount > 0 ? (
            <>
              <p className="text-sm text-gray-400 line-through">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-2xl font-bold text-black">
                ${product.discountedPrice.toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-2xl font-bold text-black">
              ${product.price.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </article>
    </Link>
  );
}