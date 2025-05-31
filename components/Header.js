import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Sci<span className="text-orange-500">Fun</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login" className="bg-blue-600 text-white px-4 py-1 rounded">Login</Link>
        </nav>
        <button className="md:hidden text-2xl">&#9776;</button> {/* hamburger placeholder */}
      </div>
    </header>
  )
}
