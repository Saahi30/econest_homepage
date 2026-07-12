export const products = [
  {
    id: "sheet-set",
    name: "1000 Thread Count Egyptian Cotton Sheet Set",
    tagline: "The Foundation of Luxurious Sleep",
    description:
      "A complete 1000 Thread Count Egyptian cotton sleep foundation with a smooth sateen weave, breathable touch, and the polished finish of luxury hotel bedding.",
    highlights: ["100% Egyptian Cotton", "1000 Thread Count", "Cooling Sateen Weave"],
    features: [
      "100% premium Egyptian cotton",
      "1000 thread count for a dense, smooth hand feel",
      "Cooling sateen weave with subtle luster",
      "Deep pockets designed for mattresses up to 16 inches",
      "Includes flat sheet, fitted sheet, and two pillowcases",
    ],
    sizes: ["Twin", "Twin XL", "Full", "Queen", "King", "California King"],
    colors: ["Ivory", "Sage", "Light Gray", "Light Blue"],
    variants: [
      {
        size: "Queen",
        color: "Sage",
        details: "6-piece set with top sheet, deep-pocket fitted sheet, and queen pillowcases",
        url: "https://www.amazon.com/dp/B0G6SXLF7P",
      },
      {
        size: "Full",
        color: "Ivory",
        details: "6-piece deep-pocket sheet set, designed to fit up to 16-inch mattresses",
        url: "https://www.amazon.com/dp/B0DZPFYKHQ",
      },
      {
        size: "Twin XL",
        color: "Ivory",
        details: "4-piece dorm-ready set with top sheet, fitted sheet, and two pillowcases",
        url: "https://www.amazon.com/dp/B0DZPFFLC2",
      },
      {
        size: "Split King",
        color: "Light Gray",
        details: "7-piece adjustable-bed set with two fitted sheets and 16-inch deep pockets",
        url: "https://www.amazon.com/dp/B0GT1RRGZ5",
      },
      {
        size: "Split King",
        color: "Light Blue",
        details: "7-piece adjustable-bed set with two fitted sheets and 16-inch deep pockets",
        url: "https://www.amazon.com/dp/B0GS94WGSM",
      },
    ],
    image: "/images/econest-sheet-set-white.jpg",
  },
  {
    id: "fitted-sheet",
    name: "Egyptian Cotton Fitted Sheet",
    tagline: "Perfectly Tailored Fit",
    description:
      "A 100% Egyptian Cotton fitted sheet designed with a 16-inch deep pocket, all-around elastic, and a cooling sateen finish for a smooth, secure hotel-quality fit.",
    highlights: ["16-inch Deep Pocket", "All-around Elastic", "Soft Cooling Comfort"],
    features: [
      "100% premium Egyptian cotton",
      "1000 thread count for soft, durable comfort",
      "All-around elastic for secure fit",
      "16-inch deep pocket design",
      "Cooling sateen weave finish",
    ],
    sizes: ["Twin XL", "Queen", "King", "Cal-King"],
    colors: ["White", "Sage", "Light Gray"],
    variants: [
      {
        size: "Queen",
        color: "White",
        details: "1000 thread count fitted sheet with a 16-inch deep pocket",
        url: "https://www.amazon.com/100-Egyptian-Cotton-Fitted-Sheet/dp/B0GK1LPLTT?th=1&psc=1",
      },
      {
        size: "Twin XL",
        color: "White",
        details: "800 thread count fitted sheet with cooling sateen weave and 16-inch deep pocket",
        url: "https://www.amazon.com/s?k=Econest+Living+Twin+XL+White+800+Thread+Count+Fitted+Sheet",
      },
      {
        size: "King",
        color: "Sage",
        details: "800 thread count fitted sheet, 78 x 80 inches with a 16-inch deep pocket",
        url: "https://www.amazon.com/dp/B0F3TZJ2XM",
      },
      {
        size: "Cal-King",
        color: "Sage",
        details: "800 thread count fitted sheet, 72 x 84 inches with a 16-inch deep pocket",
        url: "https://www.amazon.com/dp/B0F3TYYY5W",
      },
      {
        size: "King",
        color: "Light Gray",
        details: "800 thread count fitted sheet with cooling sateen weave and hotel-quality finish",
        url: "https://www.amazon.com/dp/B0BG871KYD",
      },
    ],
    image: "/images/econest-fitted-sheet-white.jpg",
  },
  {
    id: "pillowcase-set",
    name: "Egyptian Cotton Pillowcase Set",
    tagline: "Rest Your Head on Luxury",
    description:
      "A refined finishing layer for the bed, woven from the same 1000 Thread Count Egyptian cotton for a soft, breathable surface and a clean hotel-inspired finish.",
    highlights: ["1000 Thread Count", "Envelope Closure", "Breathable Finish"],
    features: [
      "100% premium Egyptian cotton",
      "1000 thread count for a smooth surface",
      "Envelope closure for a clean look",
      "Available in Standard, Queen, and King sizes",
      "Pair with any Econest sheet set or fitted sheet",
    ],
    sizes: ["Standard", "Queen", "King"],
    colors: ["White", "Ivory", "Sage", "Light Gray", "Light Blue"],
    variants: [
      {
        size: "Standard",
        color: "White",
        details: "Egyptian cotton pillowcase set with breathable sateen finish",
        url: "https://www.amazon.com/s?k=Econest+Living+Egyptian+Cotton+Pillowcase+Set+Standard+White",
      },
      {
        size: "Queen",
        color: "White",
        details: "Egyptian cotton pillowcase set with breathable sateen finish",
        url: "https://www.amazon.com/s?k=Econest+Living+Egyptian+Cotton+Pillowcase+Set+Queen+White",
      },
      {
        size: "King",
        color: "White",
        details: "Egyptian cotton pillowcase set with breathable sateen finish",
        url: "https://www.amazon.com/s?k=Econest+Living+Egyptian+Cotton+Pillowcase+Set+King+White",
      },
    ],
    image: "/images/econest-pillowcases-white.jpg",
  },
];

export const colorWays = [
  { name: "Ivory", hex: "#F5F0EB", description: "A warm, timeless neutral that complements any bedroom aesthetic." },
  { name: "White", hex: "#FDFCFA", description: "Crisp, classic, and endlessly elegant. The hallmark of luxury hospitality." },
  { name: "Sage", hex: "#9CAF88", description: "A gentle green inspired by nature's quiet moments." },
  { name: "Light Gray", hex: "#C7CBD1", description: "A refined neutral that brings calm balance to contemporary bedrooms." },
  { name: "Light Blue", hex: "#B7CCDA", description: "A powder-soft blue that reflects quiet mornings and resort-like calm." },
];

export const features = [
  {
    title: "100% Egyptian Cotton",
    description: "Premium long-staple cotton chosen for smoothness, strength, and a naturally breathable feel.",
    icon: "cotton",
  },
  {
    title: "1000 Thread Count",
    description: "A dense, refined weave that creates a soft hand feel with lasting durability.",
    icon: "thread",
  },
  {
    title: "Breathable Comfort",
    description: "Cooling cotton and sateen construction support a calm, comfortable sleep climate.",
    icon: "breeze",
  },
  {
    title: "Long Lasting Durability",
    description: "Extra-long staple fibers create stronger yarns that withstand countless washes without pilling.",
    icon: "durable",
  },
  {
    title: "Premium Craftsmanship",
    description: "Every stitch is a testament to our commitment to quality and attention to detail.",
    icon: "craft",
  },
];

export const reviews = [
  {
    name: "Sarah M.",
    location: "New York, NY",
    rating: 5,
    text: "I've stayed in some of the finest hotels around the world, and these sheets rival them all. The quality is exceptional — they only get softer with each wash.",
  },
  {
    name: "James K.",
    location: "London, UK",
    rating: 5,
    text: "After purchasing a set, I immediately ordered two more for our guest rooms. The fabric has a beautiful drape and the fitted sheets stay perfectly in place.",
  },
  {
    name: "Elena R.",
    location: "Toronto, Canada",
    rating: 5,
    text: "My sleep quality has genuinely improved since switching to Econest. The sheets feel incredibly luxurious against the skin and the temperature regulation is remarkable.",
  },
  {
    name: "David L.",
    location: "Sydney, Australia",
    rating: 5,
    text: "Exceptional quality and craftsmanship. You can feel the difference the moment you touch the fabric. Worth every penny for the investment in better sleep.",
  },
];

export const collections = [
  {
    id: "signature",
    name: "The Signature Collection",
    description: "Our flagship 1000 Thread Count Egyptian Cotton collection, available in six refined colorways. The perfect balance of weight, drape, and durability.",
    image: "https://images.pexels.com/photos/9893931/pexels-photo-9893931.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
  },
  {
    id: "hotel",
    name: "The Hotel Collection",
    description: "Coming Soon — Inspired by the world's finest hospitality experiences. Designed to bring that five-star hotel feeling home.",
    image: "https://images.pexels.com/photos/2736384/pexels-photo-2736384.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
    comingSoon: true,
  },
];

export const images = {
  hero: "/images/econest-hero-ivory-bed.jpg",
  bedroomLuxury: "/images/econest-hero-ivory-bed.jpg",
  sheetsCloseup: "/images/econest-fitted-sheet-white.jpg",
  pillows: "/images/econest-pillowcases-white.jpg",
  weaving: "https://images.pexels.com/photos/6634718/pexels-photo-6634718.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
  loom: "https://images.pexels.com/photos/6634601/pexels-photo-6634601.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
  towels: "https://images.pexels.com/photos/12932367/pexels-photo-12932367.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=1800",
  hotelBed: "/images/econest-sheet-set-white.jpg",
  sheetsStack: "/images/econest-sheet-set-white.jpg",
};
