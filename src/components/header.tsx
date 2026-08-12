"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/features/cart/CartContext";

export default function Header() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:py-6">
          <Link 
            href="/" 
            className="flex items-center"
            onClick={closeMenu}>
            <Image
              src="/logo.png"
              alt="Blend Shop logo"
              width={240}
              height={80}
              className="h-14 w-auto object-contain sm:h-16 md:h-20"
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
            Cart ({cartCount})
          </Link>
        </nav>

       <button
  type="button"
  onClick={() => setMenuOpen((current) => !current)}
  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm transition hover:border-gray-300 hover:bg-gray-50 md:hidden"
  aria-expanded={menuOpen}
  aria-controls="mobile-menu"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
>
  <span className="flex flex-col gap-1.5">
    <span
      className={`block h-0.5 w-5 bg-gray-800 transition ${
        menuOpen ? "translate-y-2 rotate-45" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-5 bg-gray-800 transition ${
        menuOpen ? "opacity-0" : ""
      }`}
    />
    <span
      className={`block h-0.5 w-5 bg-gray-800 transition ${
        menuOpen ? "-translate-y-2 -rotate-45" : ""
      }`}
    />
  </span>
</button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="border-t border-gray-200 bg-white md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            <Link
              href="/"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-black"
            >
              Shop
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="rounded-2xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-50 hover:text-black"
            >
              Contact
            </Link>

            <Link
              href="/cart"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Cart ({cartCount})
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
