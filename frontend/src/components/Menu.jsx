import React from 'react';
import { menuItems, addOns } from '../mock';
import { Cake, Plus } from 'lucide-react';

export const Menu = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-blush/20 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-plum/10 rounded-full mb-6">
            <Cake className="w-8 h-8 text-plum" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4">
            Menu & Pricing
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose your perfect cake size and customize with our premium add-ons
          </p>
        </div>

        {/* Main Menu */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-plum/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-plum text-white">
                    <th className="px-6 py-4 text-left text-lg font-semibold">Cake Size</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Serves</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Starting Price</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody>
                  {menuItems.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-blush/10 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-plum">{item.size}</td>
                      <td className="px-6 py-4 text-gray-700">{item.serves}</td>
                      <td className="px-6 py-4 font-semibold text-plum text-lg">
                        {item.startingPrice}
                      </td>
                      <td className="px-6 py-4 text-gray-600">{item.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Add-ons */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 text-2xl font-bold text-plum">
              <Plus className="w-6 h-6" />
              Premium Add-ons
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-plum/10 hover:shadow-lg hover:border-plum/30 transition-all duration-300 hover:scale-105"
              >
                <h3 className="font-semibold text-plum text-lg mb-2">{addon.name}</h3>
                <p className="text-2xl font-bold text-gray-800">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};