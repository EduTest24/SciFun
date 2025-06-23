import HeroSection from "@/components/HeroSection";
import OurPrograms from "@/components/OurPrograms";
import InteractiveLearning from "@/components/InteractiveLearning";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <OurPrograms />
      {/* Interactive Learning */}
      <InteractiveLearning />

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Students Say
          </h2>
          <div className="space-y-8 text-center text-gray-700">
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <blockquote className="italic text-lg">
                "SciFun made complex topics so easy to understand. I actually
                enjoy studying science now!"
              </blockquote>
              <cite className="block mt-2 text-sm text-gray-600">
                – Priya S., Grade 10
              </cite>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <blockquote className="italic text-lg">
                "The teachers are amazing and always ready to help. My scores
                have improved significantly."
              </blockquote>
              <cite className="block mt-2 text-sm text-gray-600">
                – Rohan K., Grade 12
              </cite>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <blockquote className="italic text-lg">
                "I love the experiments! It's much better than just reading from
                textbooks."
              </blockquote>
              <cite className="block mt-2 text-sm text-gray-600">
                – Ananya M., Grade 8
              </cite>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </>
  );
}
