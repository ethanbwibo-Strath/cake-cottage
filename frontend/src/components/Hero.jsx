import React from 'react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-50">
      {/* Subtle background blur */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-plum rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
      </div>
      
      {/* Subtle corner floral decorations */}
      <div className="absolute top-10 left-10 w-32 h-32 opacity-10 pointer-events-none">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90 Q10 60, 30 50 Q20 30, 40 20 Q50 10, 60 20 Q80 30, 70 50 Q90 60, 90 90" 
                stroke="#592239" strokeWidth="0.5" fill="none" />
          <circle cx="25" cy="65" r="8" stroke="#592239" strokeWidth="0.5" fill="none" />
          <circle cx="45" cy="75" r="10" stroke="#592239" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-32 h-32 opacity-10 pointer-events-none transform rotate-180">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 90 Q10 60, 30 50 Q20 30, 40 20 Q50 10, 60 20 Q80 30, 70 50 Q90 60, 90 90" 
                stroke="#592239" strokeWidth="0.5" fill="none" />
          <circle cx="25" cy="65" r="8" stroke="#592239" strokeWidth="0.5" fill="none" />
          <circle cx="45" cy="75" r="10" stroke="#592239" strokeWidth="0.5" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-plum leading-tight">
            Baking for joy,<br />
            <span className="text-plum/70">not perfection</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Handcrafted cakes that bring sweetness to your celebrations. Every creation tells a story of love and dedication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <a
              href="#order"
              className="bg-plum text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-plum/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Order Your Cake
            </a>
            <a
              href="#gallery"
              className="bg-white text-plum px-8 py-4 rounded-full text-lg font-medium border-2 border-plum hover:bg-plum hover:text-white transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};