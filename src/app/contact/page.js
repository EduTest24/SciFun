import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We'd love to hear from you! Whether you’re curious about a course,
            need assistance, or just want to connect—reach out to us!
          </p>
        </div>

        <div className="mt-14 max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-10">
          <form className="space-y-6">
            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <i className="fas fa-user absolute left-3 top-3.5 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="pl-10 w-full py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
            </div>

            {/* Email Address Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <i className="fas fa-envelope absolute left-3 top-3.5 text-gray-400"></i>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="pl-10 w-full py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <div className="relative">
                <i className="fas fa-comment-dots absolute left-3 top-3.5 text-gray-400"></i>
                <textarea
                  rows="4"
                  placeholder="Tell us what you need help with..."
                  className="pl-10 pt-3 w-full border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition-transform duration-200 hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}
