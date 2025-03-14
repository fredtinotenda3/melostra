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

///ho

/////

//SERVICE-PAGE-INFOR

export const serviceCategories = [
  {
    id: 1,
    title: "Residential Cleaning",
    description: "Complete home cleaning solutions for spotless living spaces",
    icon: Sparkles,
    services: [
      {
        id: 101,
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
          {
            src: "/assets/images/standard-1.jpg",
            alt: "Living room cleaning with vacuum",
          },
          {
            src: "/assets/images/standard-2.jpg",
            alt: "Mopping kitchen floor",
          },
          {
            src: "/assets/images/standard-3.jpg",
            alt: "Bathroom sanitization process",
          },
          {
            src: "/assets/images/standard-4.jpg",
            alt: "Clean kitchen countertops",
          },
        ],
      },
      {
        id: 102,
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
          {
            src: "/assets/images/deep-1.jpg",
            alt: "Deep cleaning kitchen appliances",
          },
          {
            src: "/assets/images/deep-2.jpg",
            alt: "Baseboard cleaning close-up",
          },
          {
            src: "/assets/images/deep-3.jpg",
            alt: "Window sill cleaning",
          },
          {
            src: "/assets/images/deep-4.jpg",
            alt: "Cabinet interior cleaning",
          },
        ],
      },
      {
        id: 103,
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
          {
            src: "/assets/images/move-1.jpg",
            alt: "Empty apartment cleaning",
          },
          {
            src: "/assets/images/move-2.jpg",
            alt: "Cabinet interior cleaning",
          },
          {
            src: "/assets/images/move-3.jpg",
            alt: "Light fixture dusting",
          },
          {
            src: "/assets/images/move-4.jpg",
            alt: "Appliance deep cleaning",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Commercial Cleaning",
    description: "Professional cleaning for businesses and workplaces",
    icon: Building,
    services: [
      {
        id: 201,
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
          {
            src: "/assets/images/office-1.jpg",
            alt: "Office desk cleaning",
          },
          {
            src: "/assets/images/office-2.jpg",
            alt: "Restroom sanitization",
          },
          {
            src: "/assets/images/office-3.jpg",
            alt: "Floor polishing machine",
          },
          {
            src: "/assets/images/office-4.jpg",
            alt: "Trash bin replacement",
          },
        ],
      },
      {
        id: 202,
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
          {
            src: "/assets/images/retail-1.jpg",
            alt: "Retail floor cleaning",
          },
          {
            src: "/assets/images/retail-2.jpg",
            alt: "Display case polishing",
          },
          {
            src: "/assets/images/retail-3.jpg",
            alt: "Store window washing",
          },
          {
            src: "/assets/images/retail-4.jpg",
            alt: "Entrance mat cleaning",
          },
        ],
      },
      {
        id: 203,
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
          {
            src: "/assets/images/industrial-1.jpg",
            alt: "Factory floor cleaning",
          },
          {
            src: "/assets/images/industrial-2.jpg",
            alt: "Industrial machinery cleaning",
          },
          {
            src: "/assets/images/industrial-3.jpg",
            alt: "Warehouse aisle cleaning",
          },
          {
            src: "/assets/images/industrial-4.jpg",
            alt: "Safety gear storage",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Specialized Cleaning",
    description: "Expert cleaning requiring specialized equipment",
    icon: Droplets,
    services: [
      {
        id: 301,
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
          {
            src: "/assets/images/carpet-1.jpg",
            alt: "Carpet steam cleaning",
          },
          {
            src: "/assets/images/carpet-2.jpg",
            alt: "Stain removal process",
          },
          {
            src: "/assets/images/carpet-3.jpg",
            alt: "Deodorizer application",
          },
          {
            src: "/assets/images/carpet-4.jpg",
            alt: "Drying fan setup",
          },
        ],
      },
      {
        id: 302,
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
          {
            src: "/assets/images/pressure-1.jpg",
            alt: "House exterior washing",
          },
          {
            src: "/assets/images/pressure-2.jpg",
            alt: "Driveway cleaning",
          },
          {
            src: "/assets/images/pressure-3.jpg",
            alt: "Deck restoration",
          },
          {
            src: "/assets/images/pressure-4.jpg",
            alt: "Mold removal process",
          },
        ],
      },
      {
        id: 303,
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
          {
            src: "/assets/images/tile-1.jpg",
            alt: "Grout cleaning close-up",
          },
          {
            src: "/assets/images/tile-2.jpg",
            alt: "Tile surface polishing",
          },
          {
            src: "/assets/images/tile-3.jpg",
            alt: "Sealant application",
          },
          {
            src: "/assets/images/tile-4.jpg",
            alt: "Finished tile floor",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Environmental Cleaning",
    description: "Eco-friendly cleaning solutions",
    icon: Leaf,
    services: [
      {
        id: 401,
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
          {
            src: "/assets/images/green-1.jpg",
            alt: "Eco-friendly cleaning products",
          },
          {
            src: "/assets/images/green-2.webp",
            alt: "Reusable cleaning cloths",
          },
          {
            src: "/assets/images/green-3.webp",
            alt: "Energy-efficient vacuum",
          },
          {
            src: "/assets/images/green-4.webp",
            alt: "Recycling bin setup",
          },
        ],
      },
      {
        id: 402,
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
          {
            src: "/assets/images/eco-1.jpg",
            alt: "Plant-based cleaning solution",
          },
          {
            src: "/assets/images/eco-2.jpg",
            alt: "Low-water carpet cleaning",
          },
          {
            src: "/assets/images/eco-3.jpg",
            alt: "Biodegradable packaging",
          },
          {
            src: "/assets/images/eco-4.jpg",
            alt: "Hypoallergenic certification",
          },
        ],
      },
      {
        id: 403,
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
          {
            src: "/assets/images/solar-1.jpg",
            alt: "Solar panel cleaning team",
          },
          {
            src: "/assets/images/solar-2.jpg",
            alt: "Water-efficient washing",
          },
          {
            src: "/assets/images/solar-3.jpg",
            alt: "Panel inspection",
          },
          {
            src: "/assets/images/solar-4.jpg",
            alt: "Clean solar array",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Event Cleaning",
    description: "Comprehensive event cleaning services",
    icon: CalendarDays,
    services: [
      {
        id: 501,
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
          {
            src: "/assets/images/post-1.jpg",
            alt: "Post-event trash collection",
          },
          { src: "/assets/images/post-2.jpg", alt: "Floor scrubbing" },
          { src: "/assets/images/post-3.jpg", alt: "Chair stacking" },
          {
            src: "/assets/images/post-4.jpg",
            alt: "Sanitizing high-touch areas",
          },
        ],
      },
      {
        id: 502,
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
          {
            src: "/assets/images/venue-1.jpg",
            alt: "Venue floor polishing",
          },
          {
            src: "/assets/images/venue-2.jpg",
            alt: "Table sanitizing",
          },
          {
            src: "/assets/images/venue-3.jpg",
            alt: "Restroom supplies restocking",
          },
          {
            src: "/assets/images/venue-4.jpg",
            alt: "Final walkthrough inspection",
          },
        ],
      },
      {
        id: 503,
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
          {
            src: "/assets/images/concert-1.jpg",
            alt: "Stadium trash collection",
          },
          {
            src: "/assets/images/concert-2.jpg",
            alt: "Seat row cleaning",
          },
          {
            src: "/assets/images/concert-3.jpg",
            alt: "Spill emergency response",
          },
          {
            src: "/assets/images/concert-4.jpg",
            alt: "Final venue inspection",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Pest Control",
    description: "Integrated pest management solutions",
    icon: Bug,
    services: [
      {
        id: 601,
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
          {
            src: "/assets/images/general-1.jpg",
            alt: "Pest inspection process",
          },
          {
            src: "/assets/images/general-2.jpg",
            alt: "Eco-friendly spraying",
          },
          { src: "/assets/images/general-3.jpg", alt: "Crack sealing" },
          {
            src: "/assets/images/general-4.jpg",
            alt: "Follow-up documentation",
          },
        ],
      },
      {
        id: 602,
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
          {
            src: "/assets/images/rodent-1.jpg",
            alt: "Rodent inspection",
          },
          {
            src: "/assets/images/rodent-2.jpg",
            alt: "Humane trap setup",
          },
          {
            src: "/assets/images/rodent-3.jpg",
            alt: "Exclusion barrier installation",
          },
          {
            src: "/assets/images/rodent-4.jpg",
            alt: "Prevention sealant application",
          },
        ],
      },
      {
        id: 603,
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
          {
            src: "/assets/images/termite-1.jpg",
            alt: "Termite damage inspection",
          },
          {
            src: "/assets/images/termite-2.jpg",
            alt: "Bait station installation",
          },
          {
            src: "/assets/images/termite-3.jpg",
            alt: "Wood treatment process",
          },
          {
            src: "/assets/images/termite-4.jpg",
            alt: "Prevention barrier application",
          },
        ],
      },
    ],
  },
];

//END-OF-SERVICE-INFOR

//PRODUCT-PAGE-INFOR

export const products = [
  // Original products
  {
    id: 1,
    name: "Cleaning Machine X1",
    description: "High-performance cleaning machine for all surfaces.",
    price: 299.99,
    image: "/assets/images/featured5.jpg",
    width: 100,
    height: 100,
    link: "/products#cleaning-machine",
    features: ["2000W power", "5L capacity", "HEPA filter"],
    category: "Machines",
  },
  // ... (original products 2-8 here)
  {
    id: 2,
    name: "Eco-Friendly Cleaner",
    description: "Environmentally friendly cleaning solution.",
    price: 19.99,
    image: "/assets/images/featured6.jpg",
    width: 100,
    height: 100,
    link: "/products#eco-cleaner",
    features: ["Biodegradable", "1L bottle", "Non-toxic"],
    category: "Chemicals",
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
    features: ["3 traps", "Spray bottle", "Safety gloves"],
    category: "Kits",
  },
  {
    id: 4,
    name: "Industrial Vacuum Cleaner",
    description: "Heavy-duty vacuum for commercial use.",
    price: 599.99,
    image: "/assets/images/vacuum.jpg",
    width: 100,
    height: 100,
    link: "/products#industrial-vacuum",
    features: ["3000W motor", "10L capacity", "Metal body"],
    category: "Machines",
  },
  {
    id: 5,
    name: "Floor Polisher Pro",
    description: "Professional floor polishing machine.",
    price: 899.99,
    image: "/assets/images/polisher.jpg",
    width: 100,
    height: 100,
    link: "/products#floor-polisher",
    features: ["Variable speed", "Dual brushes", "LED display"],
    category: "Machines",
  },
  {
    id: 6,
    name: "Window Cleaning Kit",
    description: "Complete set for streak-free windows.",
    price: 39.99,
    image: "/assets/images/window-kit.jpg",
    width: 100,
    height: 100,
    link: "/products#window-kit",
    features: ["Squeegee", "Microfiber cloths", "Extension pole"],
    category: "Kits",
  },
  {
    id: 7,
    name: "Disinfectant Concentrate",
    description: "Hospital-grade disinfectant solution.",
    price: 29.99,
    image: "/assets/images/disinfectant.jpg",
    width: 100,
    height: 100,
    link: "/products#disinfectant",
    features: ["5L container", "1:100 dilution", "Virucidal"],
    category: "Chemicals",
  },
  {
    id: 8,
    name: "Steam Cleaner Pro",
    description: "Multi-surface steam cleaning system.",
    price: 199.99,
    image: "/assets/images/steam-cleaner.jpg",
    width: 100,
    height: 100,
    link: "/products#steam-cleaner",
    features: ["1500W", "1.5L tank", "15 accessories"],
    category: "Machines",
  },

  // New Pest Control Products
  {
    id: 9,
    name: "Insecticide Spray",
    description: "Fast-acting spray for eliminating insects.",
    price: 14.99,
    image: "/assets/images/insecticide.jpg",
    width: 100,
    height: 100,
    link: "/products#insecticide-spray",
    features: ["500ml capacity", "Kills on contact", "Residual effect"],
    category: "Chemicals",
  },
  {
    id: 10,
    name: "Rodent Repellent Bait Station",
    description: "Weather-resistant bait station for rodent control.",
    price: 24.99,
    image: "/assets/images/rodent-bait.jpg",
    width: 100,
    height: 100,
    link: "/products#rodent-bait",
    features: ["Child-safe design", "Long-lasting formula", "6-pack"],
    category: "Chemicals",
  },
  {
    id: 11,
    name: "Ultrasonic Pest Repeller",
    description: "Electronic pest deterrent with ultrasonic waves.",
    price: 39.99,
    image: "/assets/images/ultrasonic.jpg",
    width: 100,
    height: 100,
    link: "/products#pest-repeller",
    features: ["Coverage 1200 sq ft", "Adjustable frequency", "Night light"],
    category: "Machines",
  },

  // Bathroom Cleaning Products
  {
    id: 12,
    name: "Bathroom Scrub Cleaner",
    description: "Powerful cleaner for tiles and grout.",
    price: 12.99,
    image: "/assets/images/bath-scrub.jpg",
    width: 100,
    height: 100,
    link: "/products#bath-scrub",
    features: ["Abrasive formula", "1L bottle", "Lemon scent"],
    category: "Chemicals",
  },
  {
    id: 13,
    name: "Toilet Bowl Cleaner Gel",
    description: "Clings to surfaces for deep cleaning.",
    price: 8.99,
    image: "/assets/images/toilet-cleaner.jpg",
    width: 100,
    height: 100,
    link: "/products#toilet-cleaner",
    features: ["Bleach-free formula", "Fresh scent", "500ml bottle"],
    category: "Chemicals",
  },
  {
    id: 14,
    name: "Mold & Mildew Remover",
    description: "Eliminates stubborn bathroom mold stains.",
    price: 15.99,
    image: "/assets/images/mold-remover.jpg",
    width: 100,
    height: 100,
    link: "/products#mold-remover",
    features: ["Bio-enzymatic formula", "No scrubbing needed", "500ml spray"],
    category: "Chemicals",
  },
  {
    id: 15,
    name: "Bathroom Cleaning Kit",
    description: "Complete set for bathroom maintenance.",
    price: 34.99,
    image: "/assets/images/bath-kit.jpg",
    width: 100,
    height: 100,
    link: "/products#bath-kit",
    features: ["Scrub brush", "Squeegee", "Microfiber cloths"],
    category: "Kits",
  },

  // Additional Essential Products
  {
    id: 16,
    name: "Pressure Washer",
    description: "Heavy-duty cleaning for outdoor surfaces.",
    price: 249.99,
    image: "/assets/images/pressure-washer.jpg",
    width: 100,
    height: 100,
    link: "/products#pressure-washer",
    features: ["1500 PSI", "5 nozzle tips", "Compact design"],
    category: "Machines",
  },
  {
    id: 17,
    name: "Carpet Stain Remover",
    description: "Deep cleaning solution for carpets.",
    price: 22.99,
    image: "/assets/images/carpet-cleaner.jpg",
    width: 100,
    height: 100,
    link: "/products#carpet-cleaner",
    features: ["Enzymatic action", "1L concentrate", "Color-safe"],
    category: "Chemicals",
  },
  {
    id: 18,
    name: "Automatic Air Freshener",
    description: "Continuous fragrance delivery system.",
    price: 19.99,
    image: "/assets/images/air-freshener.jpg",
    width: 100,
    height: 100,
    link: "/products#air-freshener",
    features: ["Adjustable settings", "4 scent cartridges", "Battery operated"],
    category: "Chemicals",
  },
  {
    id: 19,
    name: "Microfiber Mop Kit",
    description: "Advanced cleaning system for all floors.",
    price: 29.99,
    image: "/assets/images/mop-kit.jpg",
    width: 100,
    height: 100,
    link: "/products#mop-kit",
    features: ["Washable pads", "Adjustable handle", "360° rotation"],
    category: "Kits",
  },
  {
    id: 20,
    name: "Mosquito Zapper Lamp",
    description: "UV light trap for flying insects.",
    price: 49.99,
    image: "/assets/images/zapper.jpg",
    width: 100,
    height: 100,
    link: "/products#mosquito-zapper",
    features: ["USB rechargeable", "Weatherproof", "Easy clean tray"],
    category: "Machines",
  },
];

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
