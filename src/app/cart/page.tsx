"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "@/features/cart/CartContext";
import Toast from "@/components/toast";

export default function CartPage() {
  const router = useRouter();
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const {
    cart,
    cartTotal,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalSavings = cart.reduce(
    (total, item) =>
      total +
      Math.max(item.price - item.discountedPrice, 0) *
        item.quantity,
    0
  );

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 transition hover:text-black"
          >
            ← Continue shopping
          </Link>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900">
            Your Cart
          </h1>

          <p className="mt-2 text-gray-600">
            Review your items before checkout.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-3xl bg-white p-12 text-center shadow-lg">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-amber-50 text-3xl">
              🛍️
            </div>

            <h2 className="mt-6 text-2xl font-bold text-gray-900">
              Your cart is empty
            </h2>

            <p className="mx-auto mt-3 max-w-md text-gray-600">
              Find something you love and add it to your cart.
              Your selected products will appear here.
            </p>

            <Link
              href="/"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-xl"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">

            <section className="space-y-4 lg:col-span-2">
              {cart.map((item) => {
                const itemPrice = item.discountedPrice;
                const itemTotal =
                  itemPrice * item.quantity;

                const itemDiscount =
                  item.price > item.discountedPrice
                    ? Math.round(
                        ((item.price -
                          item.discountedPrice) /
                          item.price) *
                          100
                      )
                    : 0;

                const itemSavings =
                  Math.max(
                    item.price -
                      item.discountedPrice,
                    0
                  ) * item.quantity;

                return (
                  <article
                    key={item.id}
                    className="rounded-3xl bg-white p-5 shadow-md transition hover:shadow-lg"
                  >
                    <div className="flex flex-col gap-5 sm:flex-row">
                      <Link
                        href={`/products/${item.id}`}
                        className="flex h-40 w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-gray-100 sm:h-32 sm:w-32"
                      >
                        <Image
                          src={item.image.url}
                          alt={item.image.alt}
                          width={160}
                          height={160}
                          className="h-full w-full object-contain transition duration-300 hover:scale-105"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Link
                              href={`/products/${item.id}`}
                              className="text-xl font-semibold text-gray-900 transition hover:text-amber-600"
                            >
                              {item.title}
                            </Link>

                            <div className="mt-2">
                              {itemDiscount > 0 ? (
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-lg font-semibold text-gray-900">
                                    $
                                    {itemPrice.toFixed(
                                      2
                                    )}
                                  </span>

                                  <span className="text-sm text-gray-400 line-through">
                                    $
                                    {item.price.toFixed(
                                      2
                                    )}
                                  </span>

                                  <span className="rounded-full bg-red-100 px-2.5 py-1 text-xs font-semibold text-red-700">
                                    -{itemDiscount}%
                                  </span>
                                </div>
                              ) : (
                                <p className="text-lg font-semibold text-gray-900">
                                  $
                                  {itemPrice.toFixed(
                                    2
                                  )}
                                </p>
                              )}

                              {itemDiscount > 0 && (
                                <p className="mt-1 text-sm font-medium text-green-600">
                                  You save $
                                  {itemSavings.toFixed(
                                    2
                                  )}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-xl font-bold text-gray-900">
                              $
                              {itemTotal.toFixed(
                                2
                              )}
                            </p>

                            {item.quantity > 1 && (
                              <p className="mt-1 text-xs text-gray-500">
                                {item.quantity} × $
                                {itemPrice.toFixed(
                                  2
                                )}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="mt-6 flex items-center justify-between">
                          <div className="flex items-center rounded-full border border-gray-200 bg-gray-50 p-1">
                            <button
                              type="button"
                              onClick={() =>decreaseQuantity(item.id)}
                              disabled={item.quantity === 1}
                              className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-gray-700 transition hover:bg-white hover:shadow-sm"
                              aria-label={`Decrease quantity of ${item.title}`}
                            >
                              −
                            </button>

                            <span className="w-10 text-center font-semibold text-gray-900">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                addToCart(item)
                              }
                              className="flex h-9 w-9 items-center justify-center rounded-full text-lg text-gray-700 transition hover:bg-white hover:shadow-sm"
                              aria-label={`Increase quantity of ${item.title}`}
                            >
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                           onClick={() => {
                            removeFromCart(item.id);
                            setToastMessage(`${item.title} removed from your cart.`);
                            setShowToast(true);
                            }}
                            className="text-sm font-medium text-gray-500 transition hover:text-red-600"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            <aside className="h-fit rounded-3xl bg-white p-7 shadow-lg lg:sticky lg:top-28">
              <h2 className="text-2xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span>Items</span>
                  <span>{totalItems}</span>
                </div>

                {totalSavings > 0 && (
                  <div className="flex justify-between font-medium text-green-600">
                    <span>You save</span>
                    <span>
                      -${totalSavings.toFixed(2)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-green-600">
                    Free
                  </span>
                </div>

                <div className="border-t border-gray-200 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">
                      Total
                    </span>

                    <span className="text-2xl font-bold text-gray-900">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

 
            <button
              type="button"
              onClick={() => {
                clearCart();
                router.push("/checkout/success");
              }}
              className="mt-7 w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 text-center font-semibold text-white shadow-md transition hover:scale-[1.02] hover:shadow-xl"
            >
              Proceed to Checkout
            </button>
            </aside>
          </div>
        )}
      </div>

    {showToast && (
      <Toast
        title="Removed from cart"
        message={toastMessage}
        onClose={() => setShowToast(false)}
      />
    )}
    </main>
  );
}
