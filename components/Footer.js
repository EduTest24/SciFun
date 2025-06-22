import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1D1D1B] text-[#EFEFEF] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo + Description */}
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            Sci<span className="text-[#FF7A00]">Fun</span>
          </Link>
          <p className="mt-4 text-[#B5B5B0] text-sm">
            Inspiring curiosity through science education. SciFun brings
            learning to life with hands-on exploration.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#EFEFEF]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-[#B5B5B0] text-sm">
            <li>
              <Link href="/about" className="hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/courses" className="hover:text-white transition">
                Courses
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="hover:text-white transition">
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#EFEFEF]">
            Contact Us
          </h4>
          <p className="text-[#B5B5B0] text-sm mb-4">
            Email:{" "}
            <a href="mailto:info@scifun.org" className="hover:text-white">
              info@scifun.org
            </a>
            <br />
            Phone: +91 98765 43210
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-white text-lg"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-white text-lg"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-white text-lg"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-white text-lg"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="text-center text-xs text-[#B5B5B0] mt-10 border-t border-[#3A3A37] pt-6">
        © {new Date().getFullYear()} SciFun. All rights reserved.
      </div>
    </footer>
  );
}
