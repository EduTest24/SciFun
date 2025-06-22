import Image from "next/image";

export default function OurPrograms() {
  return (
    <section className="bg-[#FCFCFC] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1B] mb-12 text-left">
          Our Programs: Tailored for Every Young Scientist
        </h2>

        {/* Layout: Cards + Image */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: 60% - Cards */}
          <div className="flex-[3] flex flex-col gap-6">
            {/* Top row with 2 cards */}
            <div className="flex flex-col sm:flex-row gap-6">
              {/* Kids Card */}
              <div className="bg-[#EFEFEF] p-6 rounded-xl shadow-md flex-1">
                <h3 className="text-xl font-semibold text-[#1D1D1B] mb-2">
                  Kids (Ages 5–9)
                </h3>
                <p className="text-[#61615C] mb-4">
                  Introduction to basic scientific principles through playful
                  experiments and engaging stories.
                </p>
                <ul className="list-disc pl-5 text-[#61615C] space-y-1">
                  <li>Fun with physics</li>
                  <li>Nature explorers</li>
                  <li>Chemistry for kids</li>
                </ul>
              </div>

              {/* Teens Card */}
              <div className="bg-[#EFEFEF] p-6 rounded-xl shadow-md flex-1">
                <h3 className="text-xl font-semibold text-[#1D1D1B] mb-2">
                  Teens (Ages 10–14)
                </h3>
                <p className="text-[#61615C] mb-4">
                  Diving deeper into core science concepts with more complex
                  experiments and projects.
                </p>
                <ul className="list-disc pl-5 text-[#61615C] space-y-1">
                  <li>Robotics basics</li>
                  <li>Environmental science</li>
                  <li>Forensic science</li>
                </ul>
              </div>
            </div>

            {/* High Schoolers Card */}
            <div className="bg-[#EFEFEF] p-6 rounded-xl shadow-md w-full">
              <h3 className="text-xl font-semibold text-[#1D1D1B] mb-2">
                High Schoolers (Ages 15–18)
              </h3>
              <p className="text-[#61615C] mb-4">
                Advanced topics and pre-university preparation with challenging
                STEM applications.
              </p>
              <ul className="list-disc pl-5 text-[#61615C] space-y-1">
                <li>Advanced coding</li>
                <li>Biotechnology lab</li>
                <li>Engineering design</li>
              </ul>
            </div>
          </div>

          {/* Right: 40% - Image */}
          <div className="flex-[2] h-[600px] relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/OurPrograms.jpg" // Replace with your actual image
              alt="Young scientists in action"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
