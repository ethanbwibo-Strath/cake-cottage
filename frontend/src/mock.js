// Mock data for Cake.cottag3 website
import { cakeImages } from './utils/assetLoader';

export const galleryImages = [
  
  {
    id: 7,
    title: "Box of Cupcakes (12 pcs)",
    description: "Assorted flavors with colorful frosting",
    category: "cupcakes",
    image: cakeImages["cupcake-box1"]
  },
  {
    id: 1,
    title: "Vanilla/Strawberry Tiered Cake",
    description: "3-tier cake with purple ribbons",
    category: "tiered",
    image: cakeImages["vanilla-strawberry-tiered"]
  },
  {
    id: 2,
    title: "Vanilla Oreo Cake",
    description: "Vanilla cake with Oreo toppings and Gold Topper",
    category: "bento",
    image: cakeImages["vanilla-oreo"]
  },
  {
    id: 3,
    title: "Blush Pink Wedding Cake",
    description: "4-tier wedding cake with intricate piping",
    category: "tiered",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80"
  },
  {
    id: 8,
    title: "Box of Cupcakes (12 pcs)",
    description: "Assorted flavors with colorful frosting",
    category: "cupcakes",
    image: cakeImages["cupcake-box3"]
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
  },
  {
    id: 9,
    title: "Box of Cupcakes (12 pcs)",
    description: "Assorted flavors with colorful frosting",
    category: "cupcakes",
    image: cakeImages["cupcake-box2"]
  }
];

export const menuItems = [
  {
    tier: "1.5 KG",
    flavors: [
      { name: "Vanilla/Lemon", price: "3000/=" },
      { name: "Chocolate", price: "3200/=" },
      { name: "Vanilla Oreo", price: "3400/=" },
      { name: "Bubblegum", price: "3500/=" },
      { name: "Marble", price: "3600/=" },
      { name: "Red Velvet", price: "4000/=" }
    ]
  },
  {
    tier: "2.0 KG",
    flavors: [
      { name: "Vanilla/Lemon", price: "4000/=" },
      { name: "Chocolate", price: "4400/=" },
      { name: "Bubblegum/Vanilla Oreo", price: "5000/=" },
      { name: "Marble", price: "5200/=" },
      { name: "Red Velvet", price: "6000/=" }
    ]
  }
];

export const addOns = [
  { 
    name: "Fresh Flowers", 
    price: "500/=",
    image: cakeImages["fresh-flowers"],
    description: "Seasonal blooms arranged beautifully"
  },
  { 
    name: "Edible Prints", 
    price: "800/=",
    image: cakeImages["edible-prints"],
    description: "Custom images or designs"
  },
  { 
    name: "Gold Leaf Accents", 
    price: "1000/=",
    image: cakeImages["gold-leaf"],
    description: "Elegant metallic touches"
  },
  { 
    name: "Custom Topper", 
    price: "600/=",
    image: cakeImages["custom-topper"],
    description: "Personalized cake decorations"
  }
];

export const cakeFlavors = [
  "Vanilla",
  "Lemon",
  "Chocolate",
  "Vanilla Oreo",
  "Bubblegum",
  "Marble",
  "Red Velvet"
];

export const frostingTypes = [
  "Buttercream",
  "Cream Cheese",
  "Whipped Cream",
  "Fondant",
  "Ganache"
];