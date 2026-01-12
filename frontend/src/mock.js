// Mock data for Cake.cottag3 website

export const galleryImages = [
  {
    id: 1,
    title: "Rose Garden Tiered Cake",
    description: "3-tier vanilla cake with fresh roses",
    category: "tiered",
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80"
  },
  {
    id: 2,
    title: "Chocolate Bento Cake",
    description: "Mini chocolate cake with gold accents",
    category: "bento",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80"
  },
  {
    id: 3,
    title: "Blush Pink Wedding Cake",
    description: "4-tier wedding cake with intricate piping",
    category: "tiered",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80"
  },
  {
    id: 4,
    title: "Floral Bento Collection",
    description: "Assorted mini cakes with edible flowers",
    category: "bento",
    image: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80"
  },
  {
    id: 5,
    title: "Gold Sphere Elegance",
    description: "Tiered cake with gold spheres and roses",
    category: "tiered",
    image: "https://images.unsplash.com/photo-1562440499-64c9a5e55a3e?w=800&q=80"
  },
  {
    id: 6,
    title: "Strawberry Bento Delight",
    description: "Fresh strawberry mini cake",
    category: "bento",
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80"
  }
];

export const menuItems = [
  {
    size: "1.5kg",
    serves: "10-12 people",
    startingPrice: "3000/=",
    description: "Perfect for intimate gatherings"
  },
  {
    size: "2kg",
    serves: "15-18 people",
    startingPrice: "4000/=",
    description: "Ideal for celebrations"
  }
];

export const addOns = [
  { name: "Fresh Flowers", price: "500/=" },
  { name: "Edible Prints", price: "800/=" },
  { name: "Gold Leaf Accents", price: "1000/=" },
  { name: "Custom Topper", price: "600/=" }
];

export const cakeFlavors = [
  "Vanilla",
  "Chocolate",
  "Red Velvet",
  "Lemon",
  "Strawberry",
  "Carrot Cake",
  "Marble"
];

export const frostingTypes = [
  "Buttercream",
  "Cream Cheese",
  "Whipped Cream",
  "Fondant",
  "Ganache"
];

// Mock function to simulate form submission
export const submitOrderInquiry = async (formData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Order inquiry submitted:", formData);
      resolve({ success: true, message: "Order inquiry received! We'll contact you within 24 hours." });
    }, 1000);
  });
};