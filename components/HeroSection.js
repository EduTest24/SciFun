import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#EFEFEF] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-center md:justify-between">
        {/* Left Content */}
        <div className="w-full md:w-1/2 pl-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1D1D1B] mb-4 leading-tight">
            Making Science Fun, One Experiment at a Time
          </h1>
          <p className="text-base sm:text-lg text-[#61615C] mb-6">
            Unleash your child's inner scientist with SciFun's interactive and
            engaging programs.
          </p>
          <Link href="/courses">
            <button className="bg-[#1D1D1B] text-white px-6 py-3 rounded-lg text-base hover:bg-[#3A3A37] transition-all duration-200">
              Explore Courses
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-[360px] h-[280px] md:h-[400px] relative rounded-xl overflow-hidden shadow-lg mx-auto">
          <Image
            src="/heroImage.jpg"
            alt="Science experiment"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
