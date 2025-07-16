import React from 'react';

export default function JRAutoDetailingSite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <header className="bg-black text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">J&R Auto Detailing</h1>
          <nav className="space-x-4">
            <a href="#services" className="hover:text-yellow-400">Services</a>
            <a href="#gallery" className="hover:text-yellow-400">Gallery</a>
            <a href="#about" className="hover:text-yellow-400">About</a>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </nav>
        </div>
      </header>
      <section className="bg-yellow-400 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Premium Car Cleaning in Portland</h2>
        <p className="text-lg">Mobile detailing that comes to you. Reliable. Affordable. Professional.</p>
        <button className="mt-6 bg-black text-white px-6 py-2 rounded-xl shadow hover:bg-gray-800">Book Now</button>
      </section>
      <section id="services" className="py-16 px-4 max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold mb-6">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-xl font-semibold mb-2">Service {i}</h4>
              <p className="text-sm text-gray-600">Placeholder description for service {i}. This will describe what’s included.</p>
            </div>
          ))}
        </div>
      </section>
      <section id="gallery" className="bg-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Before & After</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white aspect-square rounded-lg shadow"></div>
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="py-16 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">About J&R</h3>
        <p className="text-lg text-gray-700">J&R Auto Detailing is a locally owned mobile detailing service based in the Portland area. We’re passionate about clean cars, quality work, and customer satisfaction. This placeholder section will be replaced with your story, mission, and what makes your detailing stand out.</p>
      </section>
      <section id="contact" className="bg-black text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <form className="grid gap-4">
            <input type="text" placeholder="Name" className="p-3 rounded-xl text-black" />
            <input type="email" placeholder="Email" className="p-3 rounded-xl text-black" />
            <textarea placeholder="Message" className="p-3 rounded-xl text-black h-32"></textarea>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded-xl hover:bg-yellow-300">Send</button>
          </form>
        </div>
      </section>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; {new Date().getFullYear()} J&R Auto Detailing. All rights reserved.</p>
      </footer>
    </div>
  );
}
