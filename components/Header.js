'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Sci<span className="text-orange-500">Fun</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-1 rounded">Login</Link>
        </nav>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow px-6 py-4 space-y-4 text-sm font-medium">
          <Link href="/" className="block">Home</Link>
          <Link href="/about" className="block">About Us</Link>
          <Link href="/contact" className="block">Contact</Link>
          <Link href="/login" className="block bg-blue-600 text-white px-4 py-2 rounded text-center">Login</Link>
        </div>
      )}
    </header>
  )
}
