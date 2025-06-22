import Image from "next/image";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function AboutUs() {
  return (
    <>
      <Header />
      <section className="bg-[#FCFCFC] py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Motto & Vision */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1D1D1B] mb-6">
              About Us
            </h2>
            <p className="text-[#61615C] max-w-3xl mx-auto text-lg">
              At SciFun, our motto is simple:{" "}
              <span className="italic font-medium text-[#1D1D1B]">
                "Curiosity Driven, Experimentally Powered."
              </span>
              <br />
              <br />
              Our vision is to spark a lifelong love for science in every child
              by combining engaging hands-on activities, creative learning
              tools, and passionate mentorship. We believe science is not just a
              subject—it's an adventure.
            </p>
          </div>

          {/* Meet the Teachers */}
          <div className="mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1D1D1B] text-center mb-10">
              Meet Our Teachers
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              {/* Teacher 1 */}
              <div className="bg-[#EFEFEF] rounded-xl shadow-md overflow-hidden text-center p-5 w-full max-w-xs">
                <div className="w-28 h-28 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src="/Vicky.jpeg"
                    alt="Mr. Vicky Kumar Singh"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#1D1D1B]">
                  Mr. Vicky Kumar Singh
                </h4>
                <p className="text-[#61615C] text-sm mt-2">
                  B.Tech in CSE – TCET
                  <br />
                  2+ Years Experience
                </p>
              </div>

              {/* Teacher 2 */}
              <div className="bg-[#EFEFEF] rounded-xl shadow-md overflow-hidden text-center p-5 w-full max-w-xs">
                <div className="w-28 h-28 mx-auto mb-4 relative rounded-full overflow-hidden">
                  <Image
                    src="/owner.jpg"
                    alt="Mr. Ram Sharma"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <h4 className="text-lg font-semibold text-[#1D1D1B]">
                  Mr. Ram Sharma
                </h4>
                <p className="text-[#61615C] text-sm mt-2">
                  B.E. in CSE – University of Mumbai
                  <br />
                  5+ Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
