import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Truck, Clock, DollarSign, Calendar, Flower2 } from 'lucide-react';

export const Policies = () => {
  const policies = [
    {
      id: 'delivery',
      icon: Truck,
      title: 'Delivery Policy',
      content: (
        <div className="space-y-3 text-gray-700">
          <p>We offer <strong>Uber-only delivery</strong> for all orders within Nairobi.</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Delivery fees are calculated based on your location</li>
            <li>We coordinate pickup and delivery times with you</li>
            <li>Cakes are carefully packaged to ensure safe transport</li>
            <li>Self-pickup is also available at our bakery</li>
          </ul>
        </div>
      )
    },
    {
      id: 'ordering',
      icon: Clock,
      title: 'Ordering Requirements',
      content: (
        <div className="space-y-3 text-gray-700">
          <p><strong>48-hour advance notice</strong> is required for all cake orders.</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Orders accepted <strong>Monday through Saturday</strong> only</li>
            <li>We do not accept same-day or next-day orders</li>
            <li>Rush orders may be accommodated with additional fees (contact us)</li>
            <li>Holiday orders require at least 1 week advance notice</li>
          </ul>
        </div>
      )
    },
    {
      id: 'addons',
      icon: DollarSign,
      title: 'Custom Add-ons & Pricing',
      content: (
        <div className="space-y-3 text-gray-700">
          <p>Enhance your cake with our premium add-ons:</p>
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li><strong>Fresh Flowers:</strong> 500/= (seasonal blooms arranged on your cake)</li>
            <li><strong>Edible Prints:</strong> 800/= (custom images or designs)</li>
            <li><strong>Gold Leaf Accents:</strong> 1000/= (elegant metallic touches)</li>
            <li><strong>Custom Toppers:</strong> 600/= (personalized cake decorations)</li>
          </ul>
          <p className="pt-2">Additional design elements may incur extra charges. We'll provide a detailed quote before confirming your order.</p>
        </div>
      )
    },
    {
      id: 'cancellation',
      icon: Calendar,
      title: 'Cancellation & Refund Policy',
      content: (
        <div className="space-y-3 text-gray-700">
          <ul className="list-disc list-inside space-y-2 ml-2">
            <li>Cancellations made <strong>24+ hours before delivery</strong>: Full refund minus 10% processing fee</li>
            <li>Cancellations made <strong>less than 24 hours</strong>: 50% refund</li>
            <li>No refunds for same-day cancellations or no-shows</li>
            <li>Date changes must be requested at least 48 hours in advance</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section id="policies" className="py-20 bg-soft-pink relative overflow-hidden">
      {/* Floral background decoration */}
      <Flower2 className="absolute top-20 right-10 w-32 h-32 text-plum/5" />
      <Flower2 className="absolute bottom-20 left-10 w-28 h-28 text-plum/5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4">
              Our Policies
            </h2>
            {/* Floral divider */}
            <div className="flex justify-center gap-2 mb-4">
              <Flower2 className="w-5 h-5 text-plum/40" />
              <Flower2 className="w-4 h-4 text-plum/60" />
              <Flower2 className="w-5 h-5 text-plum/40" />
            </div>
            <p className="text-lg text-gray-700">
              Important information about ordering, delivery, and our services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {policies.map((policy) => {
              const Icon = policy.icon;
              return (
                <AccordionItem
                  key={policy.id}
                  value={policy.id}
                  className="bg-white border-2 border-plum/20 rounded-xl overflow-hidden hover:border-plum/40 transition-all duration-300 shadow-md"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-pink-50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-plum" />
                      </div>
                      <span className="text-xl font-semibold text-plum text-left">
                        {policy.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    {policy.content}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};