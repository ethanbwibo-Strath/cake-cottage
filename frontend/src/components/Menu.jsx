import React, { useState } from 'react';
import { menuItems, addOns } from '../mock';
import { Cake, Plus, Flower2 } from 'lucide-react';

export const Menu = () => {
  const [hoveredAddon, setHoveredAddon] = useState(null);

  return (
    <section id="menu" className="py-20 bg-white relative overflow-hidden">
      {/* Floral background decoration */}
      <Flower2 className="absolute top-20 left-5 w-24 h-24 text-plum/5" />
      <Flower2 className="absolute bottom-20 right-5 w-32 h-32 text-plum/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6 shadow-md">
            <Cake className="w-8 h-8 text-plum" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4">
            Menu & Pricing
          </h2>
          {/* Floral divider */}
          <div className="flex justify-center gap-2 mb-4">
            <Flower2 className="w-5 h-5 text-plum/40" />
            <Flower2 className="w-4 h-4 text-plum/60" />
            <Flower2 className="w-5 h-5 text-plum/40" />
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose your perfect cake size and flavor combination
          </p>
        </div>

        {/* Main Menu - Two Tiers */}
        <div className="max-w-5xl mx-auto mb-16 space-y-8">
          {menuItems.map((tier, tierIndex) => (
            <div key={tierIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-plum/20">
              <div className="bg-plum text-white px-6 py-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Flower2 className="w-6 h-6" />
                  {tier.tier} Tier
                </h3>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {tier.flavors.map((flavor, flavorIndex) => (
                    <div
                      key={flavorIndex}
                      className="bg-pink-50 rounded-lg p-4 border border-plum/10 hover:border-plum/40 hover:shadow-md transition-all duration-300 hover:scale-105"
                    >
                      <h4 className="font-semibold text-plum mb-2">{flavor.name}</h4>
                      <p className="text-2xl font-bold text-gray-800">{flavor.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add-ons with hover image effect */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-2xl font-bold text-plum">
              <Plus className="w-6 h-6" />
              Premium Add-ons
              <Flower2 className="w-6 h-6" />
            </div>
            <p className="text-gray-600 mt-2">Hover to see examples</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="relative bg-white rounded-xl p-6 shadow-md border-2 border-plum/10 hover:border-plum/40 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredAddon(index)}
                onMouseLeave={() => setHoveredAddon(null)}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Flower2 className="w-5 h-5 text-plum" />
                  <h3 className="font-semibold text-plum text-lg">{addon.name}</h3>
                </div>
                <p className="text-2xl font-bold text-gray-800 mb-2">{addon.price}</p>
                <p className="text-sm text-gray-600">{addon.description}</p>
                
                {/* Hover image popup */}
                {hoveredAddon === index && (
                  <div className="absolute left-full ml-4 top-0 z-50 w-64 bg-white rounded-xl shadow-2xl border-2 border-plum/30 overflow-hidden animate-in fade-in zoom-in duration-200">
                    <img 
                      src={addon.image} 
                      alt={addon.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-plum mb-2">{addon.name}</h4>
                      <p className="text-sm text-gray-600">{addon.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};