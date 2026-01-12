import React from 'react';
import { Heart } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-soft-pink">
      <div className="container mx-auto px-6">
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