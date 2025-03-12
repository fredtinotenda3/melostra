import {
  Sparkles,
  Building,
  Droplets,
  Leaf,
  CalendarDays,
  Bug,
} from "lucide-react";

//CAROUSEL
export const carouselItems = [
  {
    image: "/assets/images/washing-car-carousel.webp",
    title: "Your Trusted Cleaning Partner",
    description: "Professional Cleaning Services and High-Quality Products",
  },
  {
    image: "/assets/images/office-cleaning-carousel.jpg",
    title: "Office Cleaning Solutions",
    description: "Efficient and thorough cleaning for your workspace.",
  },
  {
    image: "/assets/images/pest-control-carousel.jpg",
    title: "Pest Control Services",
    description:
      "Effective and eco-friendly pest control for homes and businesses.",
  },
];

//CAROUSEL-ENDS

//HOME-PAGE SERVICES

//HOME-PAGE PRODUCTS
export const home_products = [
  {
    id: 1,
    name: "Cleaning Machine X1",
    description: "High-performance cleaning machine for all surfaces.",
    price: 299.99,
    image: "/assets/images/featured5.jpg",
    width: 100,
    height: 100,
    link: "/products#cleaning-machine",
  },
  {
    id: 2,
    name: "Eco-Friendly Cleaner",
    description: "Environmentally friendly cleaning solution.",
    price: 19.99,
    image: "/assets/images/featured6.jpg",
    width: 100,
    height: 100,
    link: "/products#eco-cleaner",
  },
  {
    id: 3,
    name: "Pest Control Kit",
    description: "Complete kit for pest control at home.",
    price: 49.99,
    image: "/assets/images/featured3.jpg",
    width: 100,
    height: 100,
    link: "/products#pest-kit",
  },
];

//HOME-PAGE PRODUCTS-END

//SERVICE-PAGE-INFOR

export const serviceCategories = [
  {
    title: "Residential Cleaning",
    description: "Complete home cleaning solutions for spotless living spaces",
    icon: Sparkles,
    services: [
      {
        title: "Standard Cleaning",
        category: "Residential",
        price: "From $150",
        duration: "2-3 hours",
        features: [
          "Surface cleaning & dusting",
          "Vacuuming & mopping",
          "Bathroom sanitization",
          "Kitchen cleaning",
        ],
        images: [
          "/assets/images/standard-1.jpg",
          "/assets/images/standard-2.jpg",
          "/assets/images/standard-3.jpg",
          "/assets/images/standard-4.jpg",
        ],
      },
      {
        title: "Deep Cleaning",
        category: "Residential",
        price: "From $250",
        duration: "4-6 hours",
        features: [
          "Detailed room-by-room cleaning",
          "Appliance exteriors",
          "Baseboard cleaning",
          "Interior window sills",
        ],
        images: [
          "/assets/images/deep-1.jpg",
          "/assets/images/deep-2.jpg",
          "/assets/images/deep-3.jpg",
          "/assets/images/deep-4.jpg",
        ],
      },
      {
        title: "Move-in/Move-out",
        category: "Residential",
        price: "From $300",
        duration: "5-8 hours",
        features: [
          "Full interior cleaning",
          "Cabinet interiors",
          "Light fixture cleaning",
          "Appliance deep clean",
        ],
        images: [
          "/assets/images/move-1.jpg",
          "/assets/images/move-2.jpg",
          "/assets/images/move-3.jpg",
          "/assets/images/move-4.jpg",
        ],
      },
    ],
  },
  {
    title: "Commercial Cleaning",
    description: "Professional cleaning for businesses and workplaces",
    icon: Building,
    services: [
      {
        title: "Office Cleaning",
        category: "Commercial",
        price: "From $200",
        duration: "Daily/Weekly",
        features: [
          "Daily maintenance cleaning",
          "Restroom sanitation",
          "Floor care & polishing",
          "Waste removal",
        ],
        images: [
          "/assets/images/office-1.jpg",
          "/assets/images/office-2.jpg",
          "/assets/images/office-3.jpg",
          "/assets/images/office-4.jpg",
        ],
      },
      {
        title: "Retail Cleaning",
        category: "Commercial",
        price: "From $250",
        duration: "After Hours",
        features: [
          "Floor maintenance",
          "Display cleaning",
          "Window cleaning",
          "High-traffic area focus",
        ],
        images: [
          "/assets/images/retail-1.jpg",
          "/assets/images/retail-2.jpg",
          "/assets/images/retail-3.jpg",
          "/assets/images/retail-4.jpg",
        ],
      },
      {
        title: "Industrial Cleaning",
        category: "Commercial",
        price: "Custom Quote",
        duration: "Project Basis",
        features: [
          "Heavy-duty cleaning",
          "Machinery cleaning",
          "Warehouse maintenance",
          "Safety compliance",
        ],
        images: [
          "/assets/images/industrial-1.jpg",
          "/assets/images/industrial-2.jpg",
          "/assets/images/industrial-3.jpg",
          "/assets/images/industrial-4.jpg",
        ],
      },
    ],
  },
  {
    title: "Specialized Cleaning",
    description: "Expert cleaning requiring specialized equipment",
    icon: Droplets,
    services: [
      {
        title: "Carpet Cleaning",
        category: "Specialized",
        price: "From $200",
        duration: "3-4 hours",
        features: [
          "Steam cleaning",
          "Stain removal",
          "Deodorizing",
          "Fast drying",
        ],
        images: [
          "/assets/images/carpet-1.jpg",
          "/assets/images/carpet-2.jpg",
          "/assets/images/carpet-3.jpg",
          "/assets/images/carpet-4.jpg",
        ],
      },
      {
        title: "Pressure Washing",
        category: "Specialized",
        price: "From $150",
        duration: "2-4 hours",
        features: [
          "Exterior surface cleaning",
          "Driveway & patio washing",
          "Deck restoration",
          "Mold/mildew removal",
        ],
        images: [
          "/assets/images/pressure-1.jpg",
          "/assets/images/pressure-2.jpg",
          "/assets/images/pressure-3.jpg",
          "/assets/images/pressure-4.jpg",
        ],
      },
      {
        title: "Tile & Grout Cleaning",
        category: "Specialized",
        price: "From $180",
        duration: "3-5 hours",
        features: [
          "Deep grout cleaning",
          "Stain removal",
          "Sealing treatment",
          "Surface polishing",
        ],
        images: [
          "/assets/images/tile-1.jpg",
          "/assets/images/tile-2.jpg",
          "/assets/images/tile-3.jpg",
          "/assets/images/tile-4.jpg",
        ],
      },
    ],
  },
  {
    title: "Environmental Cleaning",
    description: "Eco-friendly cleaning solutions",
    icon: Leaf,
    services: [
      {
        title: "Green Cleaning",
        category: "Environmental",
        price: "From $180",
        duration: "3-4 hours",
        features: [
          "Non-toxic products",
          "Sustainable methods",
          "Energy-efficient equipment",
          "Recycled materials",
        ],
        images: [
          "/assets/images/green-1.jpg",
          "/assets/images/green-2.webp",
          "/assets/images/green-3.webp",
          "/assets/images/green-4.webp",
        ],
      },
      {
        title: "Eco Carpet Care",
        category: "Environmental",
        price: "From $220",
        duration: "3-5 hours",
        features: [
          "Plant-based solutions",
          "Low-water methods",
          "Biodegradable products",
          "Allergy-safe",
        ],
        images: [
          "/assets/images/eco-1.jpg",
          "/assets/images/eco-2.jpg",
          "/assets/images/eco-3.jpg",
          "/assets/images/eco-4.jpg",
        ],
      },
      {
        title: "Solar Panel Cleaning",
        category: "Environmental",
        price: "From $150",
        duration: "2-3 hours",
        features: [
          "Eco-friendly cleaning",
          "Water conservation",
          "Streak-free finish",
          "Efficiency optimization",
        ],
        images: [
          "/assets/images/solar-1.jpg",
          "/assets/images/solar-2.jpg",
          "/assets/images/solar-3.jpg",
          "/assets/images/solar-4.jpg",
        ],
      },
    ],
  },
  {
    title: "Event Cleaning",
    description: "Comprehensive event cleaning services",
    icon: CalendarDays,
    services: [
      {
        title: "Post-Event Cleanup",
        category: "Event",
        price: "From $300",
        duration: "4-6 hours",
        features: [
          "Waste removal",
          "Floor cleaning",
          "Furniture reset",
          "Deep sanitization",
        ],
        images: [
          "/assets/images/post-1.jpg",
          "/assets/images/post-2.jpg",
          "/assets/images/post-3.jpg",
          "/assets/images/post-4.jpg",
        ],
      },
      {
        title: "Venue Preparation",
        category: "Event",
        price: "From $200",
        duration: "2-4 hours",
        features: [
          "Pre-event cleaning",
          "Surface sanitization",
          "Restroom stocking",
          "Final touch-up",
        ],
        images: [
          "/assets/images/venue-1.jpg",
          "/assets/images/venue-2.jpg",
          "/assets/images/venue-3.jpg",
          "/assets/images/venue-4.jpg",
        ],
      },
      {
        title: "Concert Cleanup",
        category: "Event",
        price: "From $500",
        duration: "6-8 hours",
        features: [
          "Large-scale waste removal",
          "Crowd debris cleanup",
          "Emergency cleaning",
          "Post-event inspection",
        ],
        images: [
          "/assets/images/concert-1.jpg",
          "/assets/images/concert-2.jpg",
          "/assets/images/concert-3.jpg",
          "/assets/images/concert-4.jpg",
        ],
      },
    ],
  },
  {
    title: "Pest Control",
    description: "Integrated pest management solutions",
    icon: Bug,
    services: [
      {
        title: "General Pest Control",
        category: "Pest",
        price: "From $100",
        duration: "1-2 hours",
        features: [
          "Insect elimination",
          "Preventative treatment",
          "Eco-friendly options",
          "Follow-up visits",
        ],
        images: [
          "/assets/images/general-1.jpg",
          "/assets/images/general-2.jpg",
          "/assets/images/general-3.jpg",
          "/assets/images/general-4.jpg",
        ],
      },
      {
        title: "Rodent Control",
        category: "Pest",
        price: "From $150",
        duration: "2-3 hours",
        features: [
          "Inspection & exclusion",
          "Trap installation",
          "Sanitation advice",
          "Prevention sealing",
        ],
        images: [
          "/assets/images/rodent-1.jpg",
          "/assets/images/rodent-2.jpg",
          "/assets/images/rodent-3.jpg",
          "/assets/images/rodent-4.jpg",
        ],
      },
      {
        title: "Termite Treatment",
        category: "Pest",
        price: "From $300",
        duration: "3-5 hours",
        features: [
          "Termite inspection",
          "Colony elimination",
          "Wood treatment",
          "Prevention barrier",
        ],
        images: [
          "/assets/images/termite-1.jpg",
          "/assets/images/termite-2.jpg",
          "/assets/images/termite-3.jpg",
          "/assets/images/termite-4.jpg",
        ],
      },
    ],
  },
];

//END-OF-SERVICE-INFOR

export const whyChooseUs = [
  {
    icon: "🌟",
    title: "Experienced Team",
    description: "Our team has years of experience in the cleaning industry.",
  },
  {
    icon: "🧼",
    title: "Eco-Friendly Products",
    description: "We use environmentally friendly cleaning products.",
  },
  {
    icon: "⏱️",
    title: "Flexible Scheduling",
    description: "Book services at a time that works best for you.",
  },
  {
    icon: "💯",
    title: "Satisfaction Guaranteed",
    description: "We guarantee 100% satisfaction with every service.",
  },
];

export const testimonials = [
  {
    quote:
      "Melostra transformed my home! Their deep cleaning service is amazing.",
    name: "Jane Doe",
    role: "Homeowner",
    image: "/images/testimonial1.jpg",
  },
  {
    quote:
      "The office has never been cleaner. Highly recommend their services!",
    name: "John Smith",
    role: "Office Manager",
    image: "/images/testimonial2.jpg",
  },
  {
    quote: "Professional, reliable, and thorough. Great experience!",
    name: "Emily Johnson",
    role: "Business Owner",
    image: "/images/testimonial3.jpg",
  },
];
