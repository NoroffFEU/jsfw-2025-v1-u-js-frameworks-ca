"use client";
import { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/features/cart/CartContext";
import Toast from "@/components/toast";

type AddToCartButtonProps = {
  product: Product;
};

export default function AddToCartButton({
  product,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setShowToast(true);
  };

  return (
    <>
    <button
      type="button"
      onClick={handleAddToCart}
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
    
    {showToast && (
        <Toast
          title="Added to cart"
          message={`${product.title} added to your cart.`}
          action={{
            label: "View cart",
            href: "/cart",
          }}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}