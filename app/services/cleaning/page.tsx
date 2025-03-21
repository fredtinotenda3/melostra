"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Home,
  Building,
  Factory,
  HeartPulse,
  Armchair,
  SquareSlash,
  ScanLine,
  Bug,
  Car,
  Hammer,
  Droplets,
  Music2,
  Utensils,
  AlertOctagon,
  Server,
  Plane,
  Anchor,
  Dumbbell,
  SprayCan,
  CheckCircle,
} from "lucide-react";

import Image from "next/image";
import { CleaningCategory } from "@/types/types";

// ======== BRAND THEME ========
const brandColors = {
  primary: "#2A5C82",
  secondary: "#4BAF8E",
  accent: "#FFA726",
  neutral: "#F5F7FA",
  dark: "#1A365D",
};

// ======== ANIMATION CONFIG ========
const cardAnimation = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const floatEffect = {
  hover: {
    y: [-5, 5, -5],
    rotate: [-2, 2, -2],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// ======== CLEANING CATEGORIES ========
const cleaningCategories = [
  {
    id: 1,
    title: "Residential Cleaning 🏡",
    icon: Home,
    subServices: [
      "Regular house cleaning",
      "Deep cleaning",
      "Move-in/move-out cleaning",
      "Post-construction cleaning",
    ],
  },
  {
    id: 2,
    title: "Commercial Cleaning 🏢",
    icon: Building,
    subServices: [
      "Office cleaning",
      "Retail store cleaning",
      "Restaurant cleaning",
      "Hotel and hospitality cleaning",
    ],
  },
  {
    id: 3,
    title: "Industrial Cleaning 🏭",
    icon: Factory,
    subServices: [
      "Factory cleaning",
      "Warehouse cleaning",
      "Machinery and equipment cleaning",
      "Hazardous waste removal",
    ],
  },
  {
    id: 4,
    title: "Healthcare & Medical Facility Cleaning 🏥",
    icon: HeartPulse,
    subServices: [
      "Hospital and clinic cleaning",
      "Operating room cleaning",
      "Biohazard waste cleanup",
      "Laboratory sanitization",
    ],
  },
  {
    id: 5,
    title: "Carpet & Upholstery Cleaning 🛋️",
    icon: Armchair,
    subServices: [
      "Carpet steam cleaning",
      "Stain and odor removal",
      "Furniture upholstery cleaning",
      "Rug cleaning",
    ],
  },
  {
    id: 6,
    title: "Window Cleaning 🪟",
    icon: SquareSlash,
    subServices: [
      "Exterior window cleaning",
      "Interior window cleaning",
      "High-rise window cleaning",
      "Glass restoration",
    ],
  },
  {
    id: 7,
    title: "Floor & Tile Cleaning 🧽",
    icon: ScanLine,
    subServices: [
      "Tile and grout cleaning",
      "Hardwood floor polishing",
      "Marble and granite restoration",
      "Vinyl and laminate floor cleaning",
    ],
  },
  {
    id: 8,
    title: "Pest Control & Sanitization 🦟",
    icon: Bug,
    subServices: [
      "Disinfection and sanitization",
      "Termite, rodent, and insect control",
      "Fumigation services",
      "Mold and mildew removal",
    ],
  },
  {
    id: 9,
    title: "Vehicle Cleaning 🚗",
    icon: Car,
    subServices: [
      "Car interior and exterior cleaning",
      "Fleet washing",
      "Truck and bus cleaning",
      "Pressure washing for vehicles",
    ],
  },
  {
    id: 10,
    title: "Post-Construction Cleaning 🚧",
    icon: Hammer,
    subServices: [
      "Debris and dust removal",
      "Paint and adhesive cleanup",
      "Move-in readiness cleaning",
      "Final polish for interiors and exteriors",
    ],
  },
  {
    id: 11,
    title: "Pressure Washing 💦",
    icon: Droplets,
    subServices: [
      "Sidewalk and driveway cleaning",
      "Building exterior cleaning",
      "Roof and gutter cleaning",
      "Graffiti removal",
    ],
  },
  {
    id: 12,
    title: "Event Cleaning 🎉",
    icon: Music2,
    subServices: [
      "Pre-event setup cleaning",
      "During-event maintenance cleaning",
      "Post-event cleanup",
      "Festival and concert cleaning",
    ],
  },
  {
    id: 13,
    title: "Kitchen & Restaurant Cleaning 🍽️",
    icon: Utensils,
    subServices: [
      "Commercial kitchen deep cleaning",
      "Exhaust hood and duct cleaning",
      "Grease trap cleaning",
      "Restaurant floor and table sanitization",
    ],
  },
  {
    id: 14,
    title: "Crime Scene & Trauma Cleaning 🚔",
    icon: AlertOctagon,
    subServices: [
      "Biohazard and blood cleanup",
      "Odor and hazardous waste removal",
      "Homicide and accident scene cleaning",
      "Suicide cleanup",
    ],
  },
  {
    id: 15,
    title: "Data Center & IT Equipment Cleaning 🖥️",
    icon: Server,
    subServices: [
      "Server room dust removal",
      "Anti-static equipment cleaning",
      "IT rack and wiring cleaning",
      "Climate-controlled environment sanitization",
    ],
  },
  {
    id: 16,
    title: "Aviation & Aircraft Cleaning ✈️",
    icon: Plane,
    subServices: [
      "Cabin and cockpit deep cleaning",
      "Airport terminal and lounge cleaning",
      "Exterior aircraft washing",
      "Runway and hangar cleaning",
    ],
  },
  {
    id: 17,
    title: "Marine & Boat Cleaning 🚢",
    icon: Anchor,
    subServices: [
      "Yacht and cruise ship cleaning",
      "Deck and hull cleaning",
      "Interior cabin detailing",
      "Engine and mechanical cleaning",
    ],
  },
  {
    id: 18,
    title: "Gym & Fitness Center Cleaning 🏋️",
    icon: Dumbbell,
    subServices: [
      "Sanitizing gym equipment",
      "Locker room deep cleaning",
      "Odor and sweat stain removal",
      "Shower and restroom cleaning",
    ],
  },
];

// ======== MODAL COMPONENT ========
const CategoryModal = ({
  category,
  onClose,
}: {
  category: CleaningCategory;
  onClose: () => void;
}) => (
  <motion.div
    className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="bg-white rounded-xl max-w-2xl w-full mx-4 p-8 relative border-2"
      style={{
        boxShadow: `0 20px 40px -10px ${brandColors.primary}40`,
        borderColor: brandColors.primary,
      }}
      variants={{
        hidden: { scale: 0.95, opacity: 0 },
        visible: { scale: 1, opacity: 1 },
        exit: { scale: 0.9, opacity: 0 },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ type: "spring", stiffness: 200 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-primary transition-colors"
      >
        <motion.span whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          ✕
        </motion.span>
      </button>

      <div className="flex items-start gap-6 mb-6">
        <motion.div
          className="p-3 rounded-lg"
          style={{ background: brandColors.neutral }}
          whileHover={{ rotate: 15 }}
        >
          <category.icon
            className="w-8 h-8"
            style={{ color: brandColors.primary }}
          />
        </motion.div>
        <h2 className="text-3xl font-bold" style={{ color: brandColors.dark }}>
          {category.title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3
            className="text-lg font-semibold"
            style={{ color: brandColors.primary }}
          >
            Services Include:
          </h3>
          <ul className="space-y-2">
            {category.subServices.map((service: string, idx: number) => (
              <motion.li
                key={idx}
                className="flex items-center p-3 rounded-lg transition-all"
                style={{
                  background: brandColors.neutral,
                }}
                whileHover={{
                  x: 10,
                  boxShadow: `0 5px 15px ${brandColors.primary}20`,
                }}
              >
                <CheckCircle
                  className="w-4 h-4 mr-2"
                  style={{ color: brandColors.secondary }}
                />
                <span style={{ color: brandColors.dark }}>{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          className="relative h-64 rounded-xl overflow-hidden border-2"
          style={{ borderColor: brandColors.neutral }}
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(45deg, ${brandColors.primary}20, ${brandColors.secondary}20)`,
            }}
          />
          <Image
            src="/assets/cleaning-modal-bg.jpg"
            alt={category.title}
            fill
            className="object-cover mix-blend-multiply"
            priority
          />
        </motion.div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <motion.button
          className="px-6 py-3 rounded-lg font-semibold transition-colors"
          style={{
            background: brandColors.primary,
            color: brandColors.neutral,
          }}
          whileHover={{
            scale: 1.05,
            background: brandColors.dark,
            boxShadow: `0 5px 15px ${brandColors.primary}40`,
          }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Service
        </motion.button>
        <motion.button
          className="px-6 py-3 rounded-lg font-semibold border-2 transition-colors"
          style={{
            borderColor: brandColors.primary,
            color: brandColors.primary,
          }}
          whileHover={{
            background: brandColors.primary,
            color: brandColors.neutral,
            scale: 1.05,
          }}
          whileTap={{ scale: 0.95 }}
        >
          View Packages
        </motion.button>
      </div>
    </motion.div>
  </motion.div>
);

// ======== CATEGORY CARD ========
const CleaningCategoryCard = ({
  category,
  onClick,
}: {
  category: CleaningCategory;
  onClick: () => void;
}) => (
  <motion.div
    variants={cardAnimation}
    whileHover="hover"
    whileTap={{ scale: 0.97 }}
    className="group relative rounded-2xl overflow-hidden cursor-pointer border-2 border-transparent"
    style={{
      background: brandColors.neutral,
    }}
    onClick={onClick}
  >
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
      style={{
        background: `radial-gradient(circle at var(--x,50%) var(--y,50%), ${brandColors.primary}10, transparent)`,
      }}
    />

    <motion.div
      className="p-6 flex flex-col items-center text-center relative"
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="mb-4 p-3 rounded-full"
        style={{ background: brandColors.primary + "15" }}
        whileHover={{ rotate: 15 }}
      >
        <category.icon
          className="w-8 h-8"
          style={{ color: brandColors.primary }}
        />
      </motion.div>

      <h3
        className="text-xl font-bold mb-2 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(45deg, ${brandColors.primary}, ${brandColors.secondary})`,
        }}
      >
        {category.title.split(" ")[0]}
        <span className="text-dark">
          {" "}
          {category.title.split(" ").slice(1).join(" ")}
        </span>
      </h3>

      <div className="flex flex-wrap gap-2 justify-center">
        {category.subServices
          .slice(0, 3)
          .map((service: string, idx: number) => (
            <motion.span
              key={idx}
              className="px-2 py-1 rounded-full text-sm font-medium"
              style={{
                background: brandColors.primary + "15",
                color: brandColors.dark,
              }}
              whileHover={{
                background: brandColors.primary,
                color: brandColors.neutral,
                scale: 1.05,
              }}
            >
              {service}
            </motion.span>
          ))}
      </div>
    </motion.div>

    <motion.div
      className="absolute -top-4 -right-4 opacity-5"
      variants={floatEffect}
    >
      <category.icon
        className="w-24 h-24"
        style={{ color: brandColors.primary }}
      />
    </motion.div>
  </motion.div>
);

// ======== MAIN PAGE ========
export default function ProfessionalCleaningPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<CleaningCategory | null>(null);

  return (
    <div>
      <div
        className="min-h-screen pt-24"
        style={{ background: brandColors.neutral }}
      >
        <div className="container mx-auto px-4 py-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold  bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Professional Cleaning Solutions
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto"
              style={{ color: brandColors.dark }}
            >
              Comprehensive cleaning services for every environment - From homes
              to high-rises, we deliver exceptional results with eco-friendly
              solutions.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {cleaningCategories.map((category) => (
              <CleaningCategoryCard
                key={category.id}
                category={category}
                onClick={() => setSelectedCategory(category)}
              />
            ))}
          </motion.div>

          <AnimatePresence>
            {selectedCategory && (
              <CategoryModal
                category={selectedCategory}
                onClose={() => setSelectedCategory(null)}
              />
            )}
          </AnimatePresence>

          <motion.section
            className="rounded-2xl p-8 text-center relative overflow-hidden border-2"
            style={{
              backgroundColor: brandColors.dark,
              borderColor: brandColors.primary,
            }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 opacity-10">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.3, 0],
                    rotate: [0, 180],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <SprayCan
                    className="w-12 h-12"
                    style={{ color: brandColors.primary }}
                  />
                </motion.div>
              ))}
            </div>

            <h2
              className="text-3xl font-bold mb-6"
              style={{ color: brandColors.neutral }}
            >
              Why Choose Our Services?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Certified Experts", "Eco-Friendly", "24/7 Support"].map(
                (item) => (
                  <motion.div
                    key={item}
                    className="p-6 rounded-xl backdrop-blur-sm border-2"
                    style={{
                      background: brandColors.primary + "15",
                      color: brandColors.neutral,
                      borderColor: brandColors.primary,
                    }}
                    whileHover={{
                      y: -10,
                      background: brandColors.primary + "30",
                      boxShadow: `0 10px 20px ${brandColors.primary}20`,
                    }}
                  >
                    <h3
                      className="text-xl font-semibold mb-3"
                      style={{ color: brandColors.secondary }}
                    >
                      {item}
                    </h3>
                    <p className="text-sm opacity-90">
                      {item === "Certified Experts" &&
                        "Trained professionals with background checks"}
                      {item === "Eco-Friendly" &&
                        "Green cleaning solutions and practices"}
                      {item === "24/7 Support" &&
                        "Round-the-clock customer service"}
                    </p>
                  </motion.div>
                )
              )}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
