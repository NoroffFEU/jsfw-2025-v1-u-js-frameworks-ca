"use client";

import { useEffect } from "react";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({
  error,
  reset,
}: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-lg">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-100 text-4xl">
          ⚠️
        </div>

        <h1 className="mt-6 text-3xl font-bold text-gray-900">
          Something went wrong
        </h1>

        <p className="mt-4 text-gray-600">
          We could not load this page right now.
          Please try again.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-black px-8 py-3 font-semibold text-white transition hover:bg-gray-800"
        >
          Try again
        </button>
      </div>
    </main>
  );
}