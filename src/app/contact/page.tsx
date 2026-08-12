"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";

type FormData = {
  name: string;
  subject: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  subject?: string;
  email?: string;
  message?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validateForm(): FormErrors {
    const newErrors: FormErrors = {};

    if (formData.name.trim().length < 3) {
      newErrors.name =
        "Full name must be at least 3 characters.";
    }

    if (formData.subject.trim().length < 3) {
      newErrors.subject =
        "Subject must be at least 3 characters.";
    }

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (formData.message.trim().length < 10) {
      newErrors.message =
        "Message must be at least 10 characters.";
    }

    return newErrors;
  }

  function handleChange(
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));

    setSubmitted(false);
  }

  function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    setFormData({
      name: "",
      subject: "",
      email: "",
      message: "",
    });
  }

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 transition hover:text-black"
          >
            ← Back to shop
          </Link>

          <div className="mt-4">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Contact us
            </h1>

            <p className="mt-2 max-w-2xl text-gray-600">
              Have a question about a product or your order?
              Send us a message and we will get back to you.
            </p>
          </div>
        </div>

        <div className="rounded-3xl bg-white p-5 shadow-lg sm:p-6 md:p-8">
          {submitted && (
            <div
              role="status"
              className="mb-6 rounded-2xl bg-green-50 p-4 text-sm font-medium text-green-700"
            >
              ✓ Your message has been sent successfully.
              Thank you for contacting Blend Shop!
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                    errors.name
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-gray-400 focus:ring-gray-200"
                  }`}
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                    errors.email
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-gray-400 focus:ring-gray-200"
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we help?"
                  className={`w-full rounded-2xl border bg-white px-5 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                    errors.subject
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-gray-400 focus:ring-gray-200"
                  }`}
                />

                {errors.subject && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.subject}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={4}
                  className={`w-full resize-none rounded-2xl border bg-white px-5 py-3.5 text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-2 ${
                    errors.message
                      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
                      : "border-gray-200 focus:border-gray-400 focus:ring-gray-200"
                  }`}
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
  <p className="text-sm text-gray-500">
    We will never share your information.
  </p>

  <button
    type="submit"
    className="w-full rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-3.5 font-semibold text-white shadow-md transition hover:scale-105 hover:shadow-xl sm:w-auto"
  >
    Send Message
  </button>
</div>
          </form>
        </div>
      </div>
    </main>
  );
}