import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SciFun - Where Science Meets Fun!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      

      {/* Banner */}
      <section className="bg-yellow-100 text-center py-3 text-sm md:hidden">
        <p>🎉 50% OFF for 12th Std – For This week</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Join Now with Discount</button>
      </section>

      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-700">SciFun</h1>
        <p className="text-xl text-gray-700 mt-2">Where Science Meets Fun!</p>
        <button className="mt-6 px-6 py-3 bg-pink-500 text-white text-lg rounded">Start Free Demo</button>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose SciFun?</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <img src="https://via.placeholder.com/80x80?text=🧪" alt="Experiments" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Engaging Experiments</h3>
              <p>Hands-on activities that make learning interactive and memorable.</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/80x80?text=😊" alt="Friendly Classes" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Friendly Classes</h3>
              <p>Supportive and approachable teachers fostering a positive environment.</p>
            </div>
            <div>
              <img src="https://via.placeholder.com/80x80?text=🏆" alt="Results" className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold">Proven Results</h3>
              <p>Track record of students achieving academic excellence and clarity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Grades 6–10</h3>
              <p>NCERT Core curriculum with a fun twist. Building strong foundations.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Grade 11</h3>
              <p>In-depth Physics & Chemistry. Preparing for competitive exams.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2">Grade 12</h3>
              <p>Comprehensive Boards Full Syllabus coverage. Aim for top scores!</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="px-6 py-3 bg-blue-600 text-white rounded">Explore All Courses</button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
          <div className="space-y-6 text-center max-w-2xl mx-auto">
            <div>
              <blockquote className="italic">"SciFun made complex topics so easy to understand. I actually enjoy studying science now!"</blockquote>
              <cite className="block mt-2">- Priya S., Grade 10</cite>
            </div>
            <div>
              <blockquote className="italic">"The teachers are amazing and always ready to help. My scores have improved significantly."</blockquote>
              <cite className="block mt-2">- Rohan K., Grade 12</cite>
            </div>
            <div>
              <blockquote className="italic">"I love the experiments! It's much better than just reading from textbooks."</blockquote>
              <cite className="block mt-2">- Ananya M., Grade 8</cite>
            </div>
          </div>
        </div>
      </section>

   
    </>
  );
}
