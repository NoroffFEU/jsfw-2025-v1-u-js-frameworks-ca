import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Blend Shop logo"
              width={240}
              height={80}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Shop
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Contact
          </Link>

          <Link
            href="/cart"
            className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
          >
            Cart (0)
          </Link>
        </nav>

        <button className="rounded-lg border border-gray-300 px-3 py-2 text-sm md:hidden">
          Menu
        </button>

      </div>
    </header>
  );
}