export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-6 py-12">
      <div className="text-center">
        <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-amber-500" />

        <h1 className="mt-6 text-xl font-semibold text-gray-900">
          Loading...
        </h1>

        <p className="mt-2 text-gray-600">
          Please wait while we load the products.
        </p>
      </div>
    </main>
  );
}
