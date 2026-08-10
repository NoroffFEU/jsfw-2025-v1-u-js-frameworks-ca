"use client";

import Link from "next/link";

export default function CheckoutSuccessPage() {

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="mx-auto flex max-w-2xl justify-center">
        <div className="w-full rounded-3xl bg-white p-10 text-center shadow-lg md:p-14">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl text-green-600">
            ✓
          </div>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900">
            Thank you for your order!
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Your order has been successfully completed.
          </p>

          <p className="mt-2 text-gray-500">
            We appreciate your purchase from Blend Shop.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-4 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-xl"
          >
            Continue Shopping
          </Link>

        </div>
      </div>
    </main>
  );
}

