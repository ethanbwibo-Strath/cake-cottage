import React, { useState } from 'react';
import { submitOrderInquiry, cakeFlavors, frostingTypes } from '../mock';
import { Clock, Send } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

export const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    cakeSize: '',
    flavor: '',
    frosting: '',
    deliveryDate: '',
    budget: '',
    customRequests: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await submitOrderInquiry(formData);
      if (result.success) {
        toast.success(result.message);
        setFormData({
          name: '',
          phone: '',
          email: '',
          cakeSize: '',
          flavor: '',
          frosting: '',
          deliveryDate: '',
          budget: '',
          customRequests: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="order" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle corner floral decoration */}
      <div className="absolute top-10 right-10 w-44 h-44 opacity-8 pointer-events-none">
        <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 140 Q20 100, 50 82 Q38 52, 68 35 Q82 25, 96 35 Q126 52, 114 82 Q144 100, 144 140" 
                stroke="#592239" strokeWidth="0.8" fill="none" />
          <circle cx="42" cy="108" r="12" stroke="#592239" strokeWidth="0.8" fill="none" />
          <circle cx="72" cy="125" r="16" stroke="#592239" strokeWidth="0.8" fill="none" />
        </svg>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-6 shadow-md">
              <Send className="w-8 h-8 text-plum" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-plum mb-4">
              Order Your Cake
            </h2>
            <p className="text-lg text-gray-700">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          {/* Important Notice */}
          <div className="bg-pink-100 border-l-4 border-plum rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-plum flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-plum text-lg mb-2">
                  Important Notice
                </h3>
                <ul className="text-gray-700 space-y-1">
                  <li>• <strong>48-hour notice required</strong> for all orders</li>
                  <li>• Available <strong>Monday – Saturday</strong> only</li>
                  <li>• Orders accepted via this form or WhatsApp</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Order Form */}
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border-2 border-plum/20">
            <div className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-plum font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Jane Doe"
                    className="border-plum/20 focus:border-plum"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-plum font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+254 700 000 000"
                    className="border-plum/20 focus:border-plum"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-plum font-medium">
                  Email Address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="jane@example.com"
                  className="border-plum/20 focus:border-plum"
                />
              </div>

              {/* Cake Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="cakeSize" className="text-plum font-medium">
                    Cake Size <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.cakeSize}
                    onValueChange={(value) => handleChange('cakeSize', value)}
                  >
                    <SelectTrigger className="border-plum/20 focus:border-plum">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1.5kg">1.5 KG</SelectItem>
                      <SelectItem value="2kg">2.0 KG</SelectItem>
                      <SelectItem value="custom">Custom Size</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="deliveryDate" className="text-plum font-medium">
                    Delivery Date <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="deliveryDate"
                    type="date"
                    required
                    value={formData.deliveryDate}
                    onChange={(e) => handleChange('deliveryDate', e.target.value)}
                    className="border-plum/20 focus:border-plum"
                    min={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="flavor" className="text-plum font-medium">
                    Cake Flavor <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.flavor}
                    onValueChange={(value) => handleChange('flavor', value)}
                  >
                    <SelectTrigger className="border-plum/20 focus:border-plum">
                      <SelectValue placeholder="Select flavor" />
                    </SelectTrigger>
                    <SelectContent>
                      {cakeFlavors.map(flavor => (
                        <SelectItem key={flavor} value={flavor.toLowerCase()}>
                          {flavor}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="frosting" className="text-plum font-medium">
                    Frosting Type <span className="text-red-500">*</span>
                  </Label>
                  <Select
                    required
                    value={formData.frosting}
                    onValueChange={(value) => handleChange('frosting', value)}
                  >
                    <SelectTrigger className="border-plum/20 focus:border-plum">
                      <SelectValue placeholder="Select frosting" />
                    </SelectTrigger>
                    <SelectContent>
                      {frostingTypes.map(frosting => (
                        <SelectItem key={frosting} value={frosting.toLowerCase()}>
                          {frosting}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="budget" className="text-plum font-medium">
                  Budget Range
                </Label>
                <Input
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => handleChange('budget', e.target.value)}
                  placeholder="e.g., 3000-5000 KES"
                  className="border-plum/20 focus:border-plum"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="customRequests" className="text-plum font-medium">
                  Custom Design Requests
                </Label>
                <Textarea
                  id="customRequests"
                  value={formData.customRequests}
                  onChange={(e) => handleChange('customRequests', e.target.value)}
                  placeholder="Describe any special design elements, colors, themes, or decorations you'd like..."
                  className="border-plum/20 focus:border-plum min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-plum font-medium">
                  Additional Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Any other details we should know..."
                  className="border-plum/20 focus:border-plum min-h-[80px]"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-plum hover:bg-plum/90 text-white py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Order Inquiry'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
