import React from 'react';
import { Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-soft-pink relative overflow-hidden">
      {/* Subtle corner floral decoration */}
      <div className="absolute top-10 right-10 w-40 h-40 opacity-8 pointer-events-none">
        <svg viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 130 Q20 90, 50 75 Q35 45, 65 30 Q80 20, 95 30 Q125 45, 110 75 Q140 90, 140 130" 
                stroke="#592239" strokeWidth="0.8" fill="none" />
          <circle cx="40" cy="100" r="12" stroke="#592239" strokeWidth="0.8" fill="none" />
          <circle cx="70" cy="115" r="15" stroke="#592239" strokeWidth="0.8" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-md">
              <Heart className="w-8 h-8 text-plum" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-plum mb-6">
              Our Story
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Welcome to <span className="font-semibold text-plum">Cake.cottag3</span>, Nairobi's boutique bakery where every cake is crafted with passion and care. We believe in creating moments of pure joy through our handmade creations.
            </p>
            <p>
              Our philosophy is simple: <span className="font-semibold text-plum italic">"Baking for joy, not perfection."</span> Each cake tells a unique story, blending artistry with flavor to make your celebrations truly memorable.
            </p>
            <p>
              From elegant tiered wedding cakes adorned with fresh roses and gold accents to delightful bento cakes perfect for intimate moments, we pour our heart into every creation. We specialize in custom designs that reflect your personality and vision.
            </p>
            <p className="text-center text-plum font-medium text-xl pt-4">
              Let us bake happiness into your next celebration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};