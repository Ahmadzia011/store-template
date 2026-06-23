interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Premium Mechanical Keyboard",
    price: 129,
    description: "Hot-swappable tactile switches with RGB backlighting.",
  },
  {
    id: 2,
    name: "Ergonomic Wireless Mouse",
    price: 89,
    description:
      "High-precision tracking with an ultra-comfortable thumb rest.",
  },
  {
    id: 3,
    name: "Ultra-Wide Monitor Lightbar",
    price: 49,
    description: "Asymmetric forward projection prevents screen glare.",
  },
];


export const PLANS: Product[] = [
  {
    id: 1,
    name: "Basic",
    price: 50,
    description: "Hot-swappable tactile switches with RGB backlighting.",
  },
  {
    id: 2,
    name: "Pro",
    price: 150,
    description:
      "High-precision tracking with an ultra-comfortable thumb rest.",
  },
  {
    id: 3,
    name: "Max",
    price: 250,
    description: "Asymmetric forward projection prevents screen glare.",
  },
];

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export const SUCCESS_PAGE = "http://localhost:3000/"
export const CANCELLATION_PAGE = "http://localhost:3000/cancel"