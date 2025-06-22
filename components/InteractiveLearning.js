export default function InteractiveLearning() {
  return (
    <section className="bg-[#EFEFEF] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1B] mb-6">
          Interactive Learning: Experience Science Hands-On
        </h2>

        {/* Description */}
        <p className="text-[#61615C] text-base sm:text-lg mb-12 max-w-3xl mx-auto">
          At SciFun, learning is an active process. We integrate cutting-edge
          tools and methodologies to provide an immersive educational
          experience. From building robots to analyzing real-world data, our
          students are always at the forefront of scientific exploration,
          gaining practical skills that extend beyond the classroom.
        </p>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {/* Card 1 */}
          <div className="bg-[#FCFCFC] border border-[#EFEFEF] rounded-xl p-6 shadow-md hover:shadow-lg transition w-full max-w-sm">
            <div className="flex items-start gap-4 mb-3">
              <i className="fas fa-flask text-[#1D1D1B] text-2xl"></i>
              <h3 className="text-left text-xl font-semibold text-[#1D1D1B]">
                Hands-on Experiments
              </h3>
            </div>
            <p className="text-left text-[#61615C]">
              Conduct exciting experiments that bring scientific theories to
              life.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FCFCFC] border border-[#EFEFEF] rounded-xl p-6 shadow-md hover:shadow-lg transition w-full max-w-sm">
            <div className="flex items-start gap-4 mb-3">
              <i className="fas fa-box-open text-[#1D1D1B] text-2xl"></i>
              <h3 className="text-left text-xl font-semibold text-[#1D1D1B]">
                Take-Home STEM Kits
              </h3>
            </div>
            <p className="text-left text-[#61615C]">
              Continue the learning adventure with custom kits for home-based
              projects.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FCFCFC] border border-[#EFEFEF] rounded-xl p-6 shadow-md hover:shadow-lg transition w-full max-w-sm">
            <div className="flex items-start gap-4 mb-3">
              <i className="fas fa-trophy text-[#1D1D1B] text-2xl"></i>
              <h3 className="text-left text-xl font-semibold text-[#1D1D1B]">
                Annual Science Fairs
              </h3>
            </div>
            <p className="text-left text-[#61615C]">
              Showcase innovative projects and compete with fellow young
              scientists.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#FCFCFC] border border-[#EFEFEF] rounded-xl p-6 shadow-md hover:shadow-lg transition w-full max-w-sm">
            <div className="flex items-start gap-4 mb-3">
              <i className="fas fa-laptop-code text-[#1D1D1B] text-2xl"></i>
              <h3 className="text-left text-xl font-semibold text-[#1D1D1B]">
                Virtual Science Labs
              </h3>
            </div>
            <p className="text-left text-[#61615C]">
              Access interactive online simulations for anytime, anywhere
              learning.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
