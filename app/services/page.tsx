"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Sparkles,
  Bug,
  Car,
  CheckCircle,
  Shield,
  Clock,
  Leaf,
} from "lucide-react";
import { ErrorBoundary } from "react-error-boundary";
import { useEffect, useState, useMemo } from "react";
import { ServiceCategory } from "@/types/types";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const cardHover = {
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      bounce: 0.2,
    },
  },
  hover: {
    y: -5,
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const AnimatedHeading = ({
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
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03 },
      },
    }}
  >
    {text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))}
  </motion.span>
);

const AnimatedIcon = ({ serviceId }: { serviceId: string }) => {
  if (serviceId === "pest-control") {
    return (
      <motion.div
        animate={{
          x: ["0%", "15%", "-15%", "0%"],
          y: ["0%", "-20%", "20%", "0%"],
          rotate: [0, 15, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Bug className="w-6 h-6 text-blue-600" />
      </motion.div>
    );
  }

  if (serviceId === "car-cleaning") {
    return (
      <motion.div
        animate={{
          rotate: [0, 15, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <motion.div
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
          className="relative overflow-hidden rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #e5e7eb 0%, #f9fafb 50%, #e5e7eb 100%)",
            backgroundSize: "200% 200%",
          }}
        >
          <Car className="w-6 h-6 text-blue-600 relative z-10" />
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Sparkles className="w-6 h-6 text-blue-600" />
    </motion.div>
  );
};

const ServiceCardSkeleton = () => (
  <div className="w-full bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="aspect-video bg-gradient-to-r from-gray-100 to-gray-200" />
    <div className="p-6 space-y-3">
      <div className="h-6 bg-gray-100 rounded w-3/4" />
      <div className="h-4 bg-gray-100 rounded w-1/2" />
      <div className="flex flex-wrap gap-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-5 bg-gray-100 rounded-full w-16" />
        ))}
      </div>
    </div>
  </div>
);

const WhyChooseUsMarquee = () => {
  const reasons = [
    { icon: CheckCircle, text: "Satisfaction Guaranteed" },
    { icon: Shield, text: "Licensed Professionals" },
    { icon: Leaf, text: "Eco-Friendly Solutions" },
    { icon: Clock, text: "24/7 Availability" },
  ];

  return (
    <motion.section
      className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
    >
      <div className="absolute inset-0 flex items-center justify-between px-4 pointer-events-none">
        <div className="w-16 h-full bg-gradient-to-r from-blue-600 to-transparent" />
        <div className="w-16 h-full bg-gradient-to-l from-blue-600 to-transparent" />
      </div>

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        {[...reasons, ...reasons].map((reason, index) => (
          <div key={index} className="flex items-center mx-8 text-white">
            <reason.icon className="w-5 h-5 mr-2 text-blue-200" />
            <span className="text-sm font-medium">{reason.text}</span>
          </div>
        ))}
      </motion.div>
    </motion.section>
  );
};

const ServiceCard = ({ service }: { service: ServiceCategory }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    className="group relative h-full"
  >
    <Link
      href={`/services/${service.id}`}
      className="block h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      <motion.div variants={cardHover} className="h-full">
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40" />
          <div className="absolute bottom-4 left-4 p-2 bg-white/90 rounded-lg backdrop-blur-sm">
            <AnimatedIcon serviceId={service.id} />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-3">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              <AnimatedHeading text={service.title.split(" ")[0]} />
            </span>
            <span className="text-gray-800">
              {" "}
              <AnimatedHeading
                text={service.title.split(" ").slice(1).join(" ")}
              />
            </span>
          </h3>
          <motion.p
            className="text-gray-600 mb-4 text-sm leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {service.description}
          </motion.p>
          <div className="flex flex-wrap gap-2">
            {service.services.map((s, index) => (
              <motion.span
                key={index}
                className="px-3 py-1.5 bg-blue-50 text-blue-800 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  </motion.div>
);

export default function ServicesPage() {
  const [services, setServices] = useState<ServiceCategory[]>([]);
  const [loading, setLoading] = useState(true);

  const serviceCategories = useMemo(
    () => [
      {
        id: "cleaning",
        title: "Professional Cleaning",
        description:
          "Comprehensive residential & commercial cleaning solutions",
        image: "/assets/images/cleaning-hero.jpg",
        icon: Sparkles,
        services: [
          "Deep Cleaning",
          "Commercial",
          "Specialized",
          "Eco-Friendly",
        ],
      },
      {
        id: "pest-control",
        title: "Pest Control",
        description: "Effective elimination & prevention services",
        image: "/assets/images/pest-control-hero.jpg",
        icon: Bug,
        services: ["General Pests", "Termites", "Rodents", "Fumigation"],
      },
      {
        id: "car-cleaning",
        title: "Auto Care",
        description: "Premium vehicle cleaning & detailing",
        image: "/assets/images/car-cleaning-hero.jpg",
        icon: Car,
        services: ["Interior", "Exterior", "Engine", "Detailing"],
      },
      // ... (other categories remain the same)
    ],
    []
  );

  useEffect(() => {
    const fetchServices = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setServices(serviceCategories);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, [serviceCategories]); // Added dependency

  return (
    <div>
      <div className="min-h-screen bg-gray-50 pt-[calc(68px_+_0.5cm)] ">
        <AnimatePresence>
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container mx-auto px-4 pb-16"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    <AnimatedHeading text="Premium Service" />
                  </span>
                  <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {" "}
                    <AnimatedHeading text="Solutions" />
                  </span>
                </h1>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  <AnimatedHeading
                    text="Experience cutting-edge technology and eco-friendly practices"
                    className="inline-block"
                  />
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
              >
                {loading
                  ? [...Array(3)].map((_, i) => <ServiceCardSkeleton key={i} />)
                  : services.map((service) => (
                      <ErrorBoundary
                        key={service.id}
                        fallback={<ServiceCardSkeleton />}
                      >
                        <ServiceCard service={service} />
                      </ErrorBoundary>
                    ))}
              </motion.div>

              <WhyChooseUsMarquee />

              <motion.section
                variants={staggerContainer}
                className="bg-white rounded-2xl shadow-sm p-8 mt-12"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold text-center mb-8"
                >
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Our Cleaning Philosophy
                  </span>
                </motion.h2>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                  variants={staggerContainer}
                >
                  {[
                    {
                      title: "Certified Experts",
                      content: "Trained and background-checked professionals",
                      icon: Shield,
                    },
                    {
                      title: "Satisfaction Guarantee",
                      content: "100% money-back guarantee",
                      icon: CheckCircle,
                    },
                    {
                      title: "Eco-Friendly",
                      content: "Green cleaning solutions available",
                      icon: Leaf,
                    },
                    {
                      title: "Flexible Scheduling",
                      content: "24/7 booking availability",
                      icon: Clock,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="p-6 bg-blue-50 rounded-xl text-center"
                      whileHover={{ y: -5 }}
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.content}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>
            </motion.div>
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
