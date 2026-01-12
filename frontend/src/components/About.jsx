import React from 'react';
import { Heart, Flower2 } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-soft-pink relative overflow-hidden">
      {/* Floral background decoration */}
      <Flower2 className="absolute top-10 right-10 w-32 h-32 text-plum/5" />
      <Flower2 className="absolute bottom-10 left-10 w-40 h-40 text-plum/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-md">
              <Heart className="w-8 h-8 text-plum" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-plum mb-6">
              Our Story
            </h2>
            {/* Floral divider */}
            <div className="flex justify-center gap-2 mb-6">
              <Flower2 className="w-5 h-5 text-plum/40" />
              <Flower2 className="w-4 h-4 text-plum/60" />
              <Flower2 className="w-5 h-5 text-plum/40" />
            </div>
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
            <p className="text-center text-plum font-medium text-xl pt-4 flex items-center justify-center gap-2">
              <Flower2 className="w-6 h-6" />
              Let us bake happiness into your next celebration.
              <Flower2 className="w-6 h-6" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};