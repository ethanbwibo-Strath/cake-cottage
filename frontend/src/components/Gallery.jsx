import React, { useState } from 'react';
import { galleryImages } from '../mock';

export const Gallery = () => {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-soft-pink">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4">
            Our Creations
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Browse our portfolio of handcrafted tiered and bento cakes
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'all'
                  ? 'bg-plum text-white shadow-lg'
                  : 'bg-white text-plum border-2 border-plum hover:bg-plum hover:text-white'
              }`}
            >
              All Cakes
            </button>
            <button
              onClick={() => setFilter('tiered')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'tiered'
                  ? 'bg-plum text-white shadow-lg'
                  : 'bg-white text-plum border-2 border-plum hover:bg-plum hover:text-white'
              }`}
            >
              Tiered Cakes
            </button>
            <button
              onClick={() => setFilter('bento')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'bento'
                  ? 'bg-plum text-white shadow-lg'
                  : 'bg-white text-plum border-2 border-plum hover:bg-plum hover:text-white'
              }`}
            >
              Bento Cakes
            </button>
            <button
              onClick={() => setFilter('cupcakes')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === 'cupcakes'
                  ? 'bg-plum text-white shadow-lg'
                  : 'bg-white text-plum border-2 border-plum hover:bg-plum hover:text-white'
              }`}
            >
              Cupcakes
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border-2 border-white"
            >
              <div className="aspect-square overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-plum/90 via-plum/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl text-black font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-plum text-white/90">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};