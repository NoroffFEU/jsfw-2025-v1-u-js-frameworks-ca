import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/api";
import AddToCartButton from "@/components/AddToCartButton";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const response = await getProduct(id);

  const product = response.data;

  const discount =
    product.price > product.discountedPrice
      ? Math.round(
          ((product.price - product.discountedPrice) /
            product.price) *
            100
        )
      : 0;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="mx-auto max-w-7xl">

        <Link
          href="/"
          className="mb-6 inline-flex text-sm font-medium text-gray-600 transition hover:text-black"
        >
          ← Back to shop
        </Link>


        <div className="grid gap-10 rounded-3xl bg-white p-8 shadow-lg md:grid-cols-2 md:p-12">
          <div className="flex items-center justify-center rounded-3xl bg-gray-100 p-8">

            <Image
              src={product.image.url}
              alt={product.image.alt}
              width={450}
              height={450}
              className="rounded-2xl object-contain transition duration-300 hover:scale-105"
            />

          </div>

          <div className="flex flex-col justify-center space-y-6">

            {discount > 0 && (
              <span className="w-fit rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                -{discount}% OFF
              </span>
            )}

            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              {product.title}
            </h1>

            <p className="leading-relaxed text-gray-600">
              {product.description}
            </p>

            <a
              href="#reviews"
              className="flex w-fit items-center gap-2 text-gray-700 hover:text-black"
            >
              ⭐ {product.rating}/5
              <span className="text-sm underline">
                Reviews
              </span>
            </a>

            <div className="flex flex-wrap gap-2">

              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gray-100 px-4 py-1 text-sm text-gray-700"
                >
                  {tag}
                </span>
              ))}

            </div>

            <div className="border-t border-gray-200 pt-5">

              {discount > 0 ? (
                <>
                  <p className="text-lg text-gray-400 line-through">
                    ${product.price.toFixed(2)}
                  </p>

                  <p className="text-4xl font-bold text-gray-900">
                    ${product.discountedPrice.toFixed(2)}
                  </p>
                </>
              ) : (

                <p className="text-4xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </p>

              )}

            </div>
          <AddToCartButton product={product} />
          </div>

        </div>

        {product.reviews.length > 0 && (
          <section
            id="reviews"
            className="mt-10 rounded-3xl bg-white p-8 shadow-lg"
          >

            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Customer Reviews
            </h2>


            <div className="space-y-4">

              {product.reviews.map((review) => (

                <article
                  key={review.id}
                  className="rounded-2xl bg-gray-50 p-5"
                >

                  <p className="font-semibold">
                    {review.username}
                  </p>

                  <p>
                    ⭐ {review.rating}/5
                  </p>

                  <p className="mt-2 text-gray-600">
                    {review.description}
                  </p>

                </article>

              ))}

            </div>

          </section>
        )}

      </div>

    </main>
  );
}