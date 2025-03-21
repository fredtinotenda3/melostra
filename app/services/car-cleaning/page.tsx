"use client";
import { motion } from "framer-motion";
import {
  Car,
  Droplets,
  Sparkles,
  Brush,
  Shield,
  Zap,
  Bug,
  Home,
  Thermometer,
  Hand,
  CircleDashed,
  Lightbulb,
  Wrench,
} from "lucide-react";

// Service indicators with specific animations
// Service indicators with specific animations
const SERVICE_INDICATORS = [
  {
    icon: Droplets,
    name: "Pressure Wash",
    animation: { y: [0, -20, 0], rotate: [0, 15, -15, 0] },
  },
  {
    icon: Brush,
    name: "Paint Correction",
    animation: { scale: [1, 1.2, 1], rotate: [0, 360] },
  },
  {
    icon: Home, // Changed from VacuumCleaner to Home
    name: "Interior Detailing",
    animation: { x: [-10, 10, -10], y: [0, -10, 0] },
  },
];

const ServiceIndicator = ({
  service,
}: {
  service: (typeof SERVICE_INDICATORS)[0];
}) => (
  <motion.div
    className="absolute text-blue-500/80"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    animate={service.animation}
    transition={{
      duration: 4 + Math.random() * 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  >
    <service.icon className="w-12 h-12" />
    <motion.span
      className="absolute top-full left-1/2 -translate-x-1/2 text-xs font-medium text-blue-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      {service.name}
    </motion.span>
  </motion.div>
);

const CarCleaningPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Animated Service Indicators */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {SERVICE_INDICATORS.map((service, i) => (
          <ServiceIndicator key={i} service={service} />
        ))}
      </div>

      {/* Interactive Service Showcase */}
      <section className="relative z-10 py-20 px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-center mb-20 text-blue-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Complete Car Care Services
        </motion.h1>

        {/* Service Categories */}
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
          {[
            {
              title: "Exterior Services",
              icon: Sparkles,
              services: [
                { name: "Hand Wash", icon: Hand },
                { name: "Ceramic Coating", icon: Shield },
                { name: "Paint Correction", icon: Brush },
                { name: "Pressure Washing", icon: Droplets },
                { name: "Headlight Restoration", icon: Lightbulb },
              ],
            },
            {
              title: "Interior Services",
              icon: Home,
              services: [
                { name: "Deep Cleaning", icon: Zap },
                { name: "Leather Care", icon: Thermometer },
                { name: "Odor Removal", icon: CircleDashed },
                { name: "Fabric Protection", icon: Shield },
                { name: "Dashboard Detailing", icon: Brush },
              ],
            },
            {
              title: "Specialized Services",
              icon: Bug,
              services: [
                { name: "Engine Detailing", icon: Wrench },
                { name: "Undercarriage Wash", icon: Droplets },
                { name: "Convertible Top Care", icon: Shield },
                { name: "Alloy Wheel Detailing", icon: Sparkles },
                { name: "Pet Hair Removal", icon: Zap },
              ],
            },
          ].map((category, index) => (
            <motion.div
              key={category.title}
              className="p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div
                  className="p-3 bg-blue-100 rounded-lg"
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                >
                  <category.icon className="w-8 h-8 text-blue-600" />
                </motion.div>
                <h2 className="text-2xl font-bold text-blue-900">
                  {category.title}
                </h2>
              </div>
              <div className="space-y-4">
                {category.services.map((service, i) => (
                  <motion.div
                    key={service.name}
                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg group"
                    whileHover={{ scale: 1.02 }}
                  >
                    <motion.div
                      className="p-2 bg-white rounded-lg shadow-sm"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{ duration: 4, delay: i * 0.2 }}
                    >
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </motion.div>
                    <span className="text-blue-900">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Animated Call-to-Action */}
      <motion.section
        className="py-20 px-4 bg-blue-900 text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="mb-8"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 15, -15, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <Car className="w-24 h-24 mx-auto text-white" />
          </motion.div>
          <h2 className="text-3xl font-bold mb-4">
            Ready for Showroom Perfection?
          </h2>
          <motion.button
            className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Full Service Package
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
};

export default CarCleaningPage;
