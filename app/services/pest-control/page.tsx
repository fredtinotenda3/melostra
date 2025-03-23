"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useMemo } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bug,
  SprayCan,
  ShieldCheck,
  Thermometer,
  Zap,
  Sprout,
  Biohazard,
  CheckCircle,
  Home,
  Factory,
  TreePine,
  Droplets,
} from "lucide-react";

interface PestService {
  id: string;
  title: string;
  icon: LucideIcon;
  image: string;
  method: string;
  benefits: string[];
  bestFor: string[];
  process: string[];
  examples: string[];
  category: string[];
  animation: keyof typeof animationVariants;
}

const animationVariants = {
  biocontrol: {
    ladybug: {
      animate: { x: ["-20%", "120%"], rotate: [0, 540] },
      transition: { duration: 12, repeat: Infinity, ease: "linear" },
    },
  },
  spray: {
    spray: {
      animate: { rotate: [0, -15, 15, 0] },
      transition: { duration: 0.8, repeat: Infinity },
    },
    droplets: {
      animate: { x: [0, 40], y: [0, -20], opacity: [0, 1, 0] },
      transition: { duration: 1.5, repeat: Infinity },
    },
  },
  heat: {
    animate: { scale: [1, 1.5], opacity: [0.8, 0] },
    transition: { duration: 2, repeat: Infinity },
  },
  waves: {
    animate: { scale: [1, 2], opacity: [1, 0] },
    transition: { duration: 1.5, repeat: Infinity },
  },
};

const pestServices: PestService[] = [
  {
    id: "biological",
    title: "Biological Pest Control",
    icon: Sprout,
    image: "/assets/images/biological.jpg",
    method: "Natural predators & parasites introduction",
    benefits: ["Eco-friendly", "Chemical-free", "Sustainable"],
    bestFor: ["Gardens", "Agriculture", "Greenhouses"],
    process: ["Ecosystem analysis", "Predator selection", "Monitoring"],
    examples: ["Ladybugs for aphids", "Nematodes for soil pests"],
    category: ["eco-friendly", "residential", "commercial"],
    animation: "biocontrol",
  },
  {
    id: "chemical",
    title: "Targeted Chemical Treatment",
    icon: Biohazard,
    image: "/assets/images/targeted.jpg",
    method: "Precision pesticide application",
    benefits: ["Fast results", "Complete eradication", "Wide coverage"],
    bestFor: ["Severe infestations", "Commercial facilities"],
    process: ["Inspection", "Chemical selection", "Controlled application"],
    examples: ["Termite barriers", "Rodent bait stations"],
    category: ["commercial"],
    animation: "spray",
  },
  {
    id: "heat",
    title: "Thermal Elimination",
    icon: Thermometer,
    image: "/assets/images/heat.jpg",
    method: "High-temperature eradication",
    benefits: ["Chemical-free", "Deep penetration", "Single treatment"],
    bestFor: ["Bed bugs", "Stored product pests"],
    process: ["Preparation", "Heating cycle", "Cooling"],
    examples: ["Whole-room treatments", "Container sanitation"],
    category: ["residential", "commercial"],
    animation: "heat",
  },
  {
    id: "electronic",
    title: "Electronic Repelling",
    icon: Zap,
    image: "/assets/images/electronic.jpg",
    method: "Ultrasonic frequency emission",
    benefits: ["Silent operation", "Non-toxic", "Continuous protection"],
    bestFor: ["Rodents", "Insects", "Home use"],
    process: ["Device placement", "Coverage check", "Monitoring"],
    examples: ["Ultrasonic repellers", "Electromagnetic routers"],
    category: ["residential", "eco-friendly"],
    animation: "waves",
  },
];

const TextAnimation = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => (
  <motion.span
    initial="hidden"
    animate="visible"
    className={className}
    variants={{
      visible: { transition: { staggerChildren: 0.03 } },
    }}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300 },
          },
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

const PestAnimation = ({ type }: { type: keyof typeof animationVariants }) => (
  <div className="absolute inset-0 pointer-events-none">
    {type === "biocontrol" && (
      <motion.div
        {...animationVariants.biocontrol.ladybug}
        className="absolute -top-4 -left-4"
      >
        <Bug className="w-8 h-8 text-red-500" />
      </motion.div>
    )}

    {type === "spray" && (
      <>
        <motion.div
          {...animationVariants.spray.spray}
          className="absolute top-0 right-0"
        >
          <SprayCan className="w-12 h-12 text-blue-400" />
        </motion.div>
        <motion.div
          {...animationVariants.spray.droplets}
          className="absolute top-4 -right-4"
        >
          <Droplets className="w-4 h-4 text-blue-200" />
        </motion.div>
      </>
    )}

    {type === "heat" && (
      <motion.div
        {...animationVariants.heat}
        className="absolute inset-0 bg-orange-500/20 rounded-xl"
      />
    )}

    {type === "waves" && (
      <motion.div
        {...animationVariants.waves}
        className="absolute top-1/2 left-1/2 w-16 h-16 bg-purple-300/30 rounded-full -translate-x-1/2 -translate-y-1/2"
      />
    )}
  </div>
);

const ServiceCard = ({
  service,
  layout,
}: {
  service: PestService;
  layout: string;
}) => {
  const [hoverState, setHoverState] = useState({ benefit: -1, process: -1 });

  return (
    <motion.div
      className={`flex flex-col md:flex-row gap-8 my-12 ${
        layout === "right" ? "md:flex-row-reverse" : ""
      } relative overflow-hidden min-h-[400px]`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    >
      <PestAnimation type={service.animation} />

      <motion.div
        className="md:w-1/2 relative group h-[400px]"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover rounded-xl shadow-lg"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <motion.div
          className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-md"
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <service.icon className="w-8 h-8 text-blue-600" />
        </motion.div>
      </motion.div>

      <motion.div className="md:w-1/2 flex flex-col justify-center z-10 p-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          <TextAnimation text={service.title} />
        </h2>

        <motion.div
          className="mb-6 bg-blue-50 p-4 rounded-lg relative"
          whileHover={{ scale: 1.01 }}
        >
          <h3 className="text-sm font-semibold text-blue-600 mb-2">
            <TextAnimation text="METHODOLOGY" />
          </h3>
          <p className="text-gray-600">{service.method}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h3 className="text-sm font-semibold text-blue-600 mb-2">
              BENEFITS
            </h3>
            <ul className="space-y-2">
              {service.benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  className="flex items-center"
                  onHoverStart={() =>
                    setHoverState((s) => ({ ...s, benefit: i }))
                  }
                  onHoverEnd={() =>
                    setHoverState((s) => ({ ...s, benefit: -1 }))
                  }
                  animate={{ x: hoverState.benefit === i ? 5 : 0 }}
                >
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  {benefit}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-600 mb-2">
              IDEAL FOR
            </h3>
            <ul className="space-y-2">
              {service.bestFor.map((useCase, i) => (
                <motion.li
                  key={i}
                  className="flex items-center"
                  whileHover={{ scale: 1.02 }}
                >
                  <ShieldCheck className="w-4 h-4 text-blue-500 mr-2" />
                  {useCase}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          className="bg-white p-4 rounded-lg shadow-inner"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        >
          <h3 className="text-sm font-semibold text-blue-600 mb-2">
            PROCESS FLOW
          </h3>
          <ol className="list-decimal list-inside space-y-2">
            {service.process.map((step, i) => (
              <motion.li
                key={i}
                className="text-gray-600"
                whileHover={{ x: 5 }}
              >
                {step}
              </motion.li>
            ))}
          </ol>
        </motion.div>

        <motion.button
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors self-start"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Schedule Service
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default function PestControlPage() {
  const categories = useMemo(
    () => [
      "all",
      ...Array.from(
        new Set(pestServices.flatMap((service) => service.category))
      ),
    ],
    []
  );
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredServices = useMemo(() => {
    if (selectedCategory === "all") return pestServices;
    return pestServices.filter((service) =>
      service.category.includes(selectedCategory)
    );
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50 pt-[calc(68px_+_0.5cm)]">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Advanced Pest Management Solutions
            </motion.span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            <TextAnimation
              text="Customized eradication strategies for residential and commercial needs"
              className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
            />
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-4 mb-16 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full flex items-center gap-2 transition-all ${
                selectedCategory === category
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 shadow-md"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                animate={
                  selectedCategory === category
                    ? { rotate: [0, 15, -15, 0] }
                    : {}
                }
                transition={{ duration: 0.3 }}
              >
                {category === "all" ? (
                  <Bug className="w-5 h-5" />
                ) : category === "residential" ? (
                  <Home className="w-5 h-5" />
                ) : category === "commercial" ? (
                  <Factory className="w-5 h-5" />
                ) : (
                  <TreePine className="w-5 h-5" />
                )}
              </motion.span>
              {category === "all"
                ? "All Services"
                : category.replace("-", " ").toUpperCase()}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-20"
          >
            {filteredServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                layout={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="bg-blue-600 text-white rounded-xl p-8 text-center my-20 relative overflow-hidden"
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0], y: [0, -10, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-8 -left-8 opacity-20"
          >
            <ShieldCheck className="w-24 h-24" />
          </motion.div>

          <h2 className="text-2xl font-bold mb-4 relative z-10">
            Satisfaction Guarantee
          </h2>
          <p className="mb-6 max-w-xl mx-auto relative z-10">
            Our treatments come with a 90-day protection promise
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <motion.button
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              Emergency Service
            </motion.button>
            <motion.button
              className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShieldCheck className="w-5 h-5" />
              Maintenance Plans
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
