 "use client";

import { useEffect } from "react";
import Link from "next/link";

type ToastProps = {
  title: string;
  message: string;
  onClose: () => void;
  action?: {
    label: string;
    href: string;
  };
};

export default function Toast({
  title,
  message,
  onClose,
  action,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className="
        fixed bottom-6 left-1/2 z-[100]
        flex w-[calc(100%-2rem)] max-w-md
        -translate-x-1/2 items-center gap-3
        rounded-2xl bg-white px-5 py-4
        text-gray-900 shadow-2xl
        ring-1 ring-gray-200
        animate-in slide-in-from-bottom-5 fade-in
      "
      role="status"
      aria-live="polite"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
        ✓
      </div>

      <div className="flex-1">
        <p className="text-sm font-semibold">
          {title}
        </p>

        <p className="mt-0.5 text-sm text-gray-600">
          {message}
        </p>
      </div>

      {action && (
        <Link
          href={action.href}
          onClick={onClose}
          className="
            shrink-0 rounded-full
            bg-gray-900 px-3 py-2
            text-xs font-semibold text-white
            transition hover:bg-gray-700
          "
        >
          {action.label}
        </Link>
      )}

      <button
        type="button"
        onClick={onClose}
        className="
          rounded-full px-2 py-1
          text-xl leading-none text-gray-400
          transition hover:bg-gray-100 hover:text-gray-700
        "
        aria-label="Close notification"
      >
        ×
      </button>
    </div>
  );
}