import { getProducts } from "../lib/api.ts";

export default async function Home() {
  const response = await getProducts();

  const products = response.data;

  return (
    <main>
      <h1>Blend shop</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img
              src={product.image.url}
              alt={product.image.alt}
            />

            <h2>{product.title}</h2>

            <p>{product.description}</p>

            <p>Rating: {product.rating}/5</p>

            <p>
              Price: ${product.price}
            </p>

            {product.discountedPrice < product.price && (
              <p>
                Discount price: ${product.discountedPrice}
              </p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}