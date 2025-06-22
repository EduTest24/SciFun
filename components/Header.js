"use client";
import { useState } from "react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#FCFCFC] border-b border-[#EFEFEF] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logobg.png" // ✅ Adjust the path as per your actual logo
            alt="SciFun Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-3xl font-extrabold text-[#1D1D1B] tracking-tight">
            Sci<span className="text-[#FF7A00]">Fun</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium items-center">
          <Link
            href="/about"
            className="text-[#61615C] hover:text-[#1D1D1B] transition-colors duration-200"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="text-[#61615C] hover:text-[#1D1D1B] transition-colors duration-200"
          >
            Contact
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <button className="bg-[#1D1D1B] hover:bg-[#3A3A37] text-white px-5 py-2 rounded-lg transition-all duration-200">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="text-[#61615C] hover:text-[#1D1D1B] transition-colors duration-200"
            >
              Dashboard
            </Link>
            <UserButton />
          </SignedIn>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-3xl text-[#61615C] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div className="md:hidden bg-[#FCFCFC] border-t border-[#EFEFEF] px-6 py-4 space-y-4 text-base font-medium transition-all duration-300">
          <Link
            href="/about"
            className="block text-[#61615C] hover:text-[#1D1D1B] transition"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block text-[#61615C] hover:text-[#1D1D1B] transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <button className="w-full bg-[#1D1D1B] hover:bg-[#3A3A37] text-white px-4 py-2 rounded-lg text-center transition">
                Login
              </button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <Link
              href="/dashboard"
              className="text-[#61615C] hover:text-[#1D1D1B] transition-colors duration-200"
            >
              Dashboard
            </Link>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </header>
  );
}
