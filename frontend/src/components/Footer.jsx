import React from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, Flower2 } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-plum text-white py-12 relative overflow-hidden">
      {/* Floral decoration */}
      <Flower2 className="absolute top-5 right-10 w-24 h-24 text-white/5" />
      <Flower2 className="absolute bottom-5 left-10 w-32 h-32 text-white/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-8 h-8" />
              <h3 className="text-3xl font-bold">Cake.cottag3</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              Baking for joy, not perfection. Handcrafted cakes that make your celebrations memorable.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Flower2 className="w-5 h-5" />
              Contact Us
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>+254 700 000 000</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>hello@cakecottag3.co.ke</span>
              </div>
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5 flex-shrink-0" />
                <span>@cake.cottag3</span>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Flower2 className="w-5 h-5" />
              Business Hours
            </h4>
            <div className="space-y-3 text-white/80">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">Monday - Saturday</p>
                  <p>Orders accepted daily</p>
                  <p className="text-sm mt-2 text-white/70">48-hour notice required</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/70 text-sm">
            <p className="flex items-center gap-2">
              <Flower2 className="w-4 h-4" />
              &copy; {new Date().getFullYear()} Cake.cottag3. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#policies" className="hover:text-white transition-colors">
                Policies
              </a>
              <a href="#order" className="hover:text-white transition-colors">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};