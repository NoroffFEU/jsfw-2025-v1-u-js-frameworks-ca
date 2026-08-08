"use client";

import { Product } from "@/types/product";
import { useCart } from "@/features/cart/CartContext";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      onClick={() => addToCart(product)}
      className="
        w-fit rounded-full
        bg-gradient-to-r from-amber-500 to-orange-500
        px-10 py-4
        font-semibold text-white
        shadow-md
        transition
        hover:scale-105
        hover:shadow-xl
      "
    >
      Add to Cart
    </button>
  );
}