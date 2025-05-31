export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-20 ">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="text-lg font-semibold text-white">SciFun</h4>
          <p className="mt-2">Where Science Meets Fun! Your partner in academic excellence.</p>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Contact Info</h4>
          <ul className="space-y-1">
            <li>📞 +91 12345 67890</li>
            <li>✉️ info@scifun.example.com</li>
            <li>📍 123 SciFun Lane, Knowledge City</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">FB</a>
            <a href="#" className="hover:text-white">IG</a>
            <a href="#" className="hover:text-white">YT</a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-8">
        © 2025 SciFun. All Rights Reserved. Designed with 💡
      </div>
    </footer>
  )
}
