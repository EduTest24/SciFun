// app/not-found.js or pages/404.js if using Next.js routing
"use client";

import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 px-6 text-center">
      <div className="text-6xl text-red-600 mb-4">
        <i className="fas fa-exclamation-triangle"></i>
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-gray-600 mb-6 max-w-md">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        href="/"
        className="inline-block bg-[#1D1D1B] text-white px-5 py-2 rounded hover:bg-[#3A3A37] transition"
      >
        <i className="fas fa-home mr-2" />
        Go back home
      </Link>
    </div>
  );
}
