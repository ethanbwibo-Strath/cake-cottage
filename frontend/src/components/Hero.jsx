import React from 'react';
import { Flower2 } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-100 via-white to-pink-50">
      {/* Floral decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-plum rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating flowers */}
      <Flower2 className="absolute top-20 left-[10%] w-12 h-12 text-plum/20 animate-pulse" />
      <Flower2 className="absolute top-40 right-[15%] w-16 h-16 text-plum/15 animate-pulse" style={{animationDelay: '1s'}} />
      <Flower2 className="absolute bottom-32 left-[20%] w-10 h-10 text-plum/20 animate-pulse" style={{animationDelay: '0.5s'}} />
      <Flower2 className="absolute bottom-20 right-[25%] w-14 h-14 text-plum/15 animate-pulse" style={{animationDelay: '1.5s'}} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Decorative flower accent */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2">
              <Flower2 className="w-8 h-8 text-plum" />
              <Flower2 className="w-6 h-6 text-plum/70" />
              <Flower2 className="w-8 h-8 text-plum" />
            </div>
          </div>
          
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
              className="bg-plum text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-plum/90 transition-all duration-300 hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <Flower2 className="w-5 h-5" />
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