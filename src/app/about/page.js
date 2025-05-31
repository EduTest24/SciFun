import React from 'react';

const AboutUs = () => {
 return (
  <div className="container mx-auto px-4 py-8">
   <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
   
   <div className="grid md:grid-cols-2 gap-8">
    <div className="space-y-4">
     <h2 className="text-2xl font-semibold">Our Mission</h2>
     <p className="text-gray-700">
      Our mission is to make science education fun, accessible, and engaging for students of all ages.
      We believe in hands-on learning and practical experiments that spark curiosity and foster
      a deep understanding of scientific concepts.
     </p>
    </div>

    <div className="space-y-4">
     <h2 className="text-2xl font-semibold">Who We Are</h2>
     <p className="text-gray-700">
      We are a team of passionate educators, scientists, and innovators dedicated to
      transforming science education. With years of experience in both education and
      scientific research, we bring unique insights to our teaching methods.
     </p>
    </div>
   </div>

   <div className="mt-12">
    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
    <div className="grid md:grid-cols-3 gap-6">
     <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold mb-2">Innovation</h3>
      <p className="text-gray-700">Constantly evolving our methods to provide the best learning experience</p>
     </div>
     <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold mb-2">Excellence</h3>
      <p className="text-gray-700">Maintaining high standards in everything we do</p>
     </div>
     <div className="p-4 bg-gray-50 rounded-lg">
      <h3 className="font-semibold mb-2">Inclusivity</h3>
      <p className="text-gray-700">Making science education accessible to everyone</p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AboutUs;