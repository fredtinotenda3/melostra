"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Sparkles,
  Droplets,
  Building,
  Leaf,
  CalendarDays,
  Bug,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { serviceCategories } from "@/constants";
import PropTypes from "prop-types";

// Fallback component for error handling
const ErrorFallback = ({ error }) => (
  <div className="p-4 bg-red-50 text-red-700 rounded-lg">
    <p>Error loading component: {error.message}</p>
  </div>
);

ErrorFallback.propTypes = {
  error: PropTypes.object.isRequired,
};

const categoryIcons = {
  Residential: Sparkles,
  Commercial: Building,
  Specialized: Droplets,
  Environmental: Leaf,
  Event: CalendarDays,
  Pest: Bug,
  Default: CheckCircle2,
};

const ServicePage = () => (
  <>
    <Header />
    <main className="bg-gradient-to-b from-blue-50 to-white">
      <HeroSection />
      <ServiceCategories />
    </main>
    <Footer />
  </>
);

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % serviceCategories.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  return (
    <section className="relative h-[200px] sm:h-[300px] lg:h-[400px] w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {serviceCategories.map(
          (category, index) =>
            activeIndex === index && (
              <motion.div
                key={`${category.id}-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: reducedMotion ? 0 : 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
                role="region"
                aria-live="polite"
                aria-label={`Service category: ${category.title}`}
              >
                <motion.div
                  initial={{ scale: reducedMotion ? 1 : 0.8 }}
                  animate={{ scale: 1 }}
                  className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl"
                >
                  <category.icon
                    className="w-12 h-12 text-blue-600 p-2 bg-white rounded-lg shadow-md"
                    aria-hidden="true"
                  />
                </motion.div>

                <h1 className="text-3xl sm:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                    {category.title.split(" ")[0]}
                  </span>
                  <span className="text-gray-900">
                    {" "}
                    {category.title.split(" ").slice(1).join(" ")}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
                  {category.description}
                </p>
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {serviceCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveIndex(index)}
            className="h-1.5 w-8 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm"
            aria-label={`Go to service category ${index + 1} of ${
              serviceCategories.length
            }`}
          >
            <motion.div
              animate={{ width: activeIndex === index ? "100%" : "0%" }}
              transition={{ duration: reducedMotion ? 0 : 4.8 }}
              className="h-full bg-blue-600"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

const ServiceCategories = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
    {serviceCategories.map((category) => (
      <div key={category.id} className="mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center gap-3 mb-8 p-4 bg-white rounded-xl shadow-sm"
        >
          <category.icon
            className="w-10 h-10 text-blue-600 p-2 bg-blue-50 rounded-lg"
            aria-hidden="true"
          />
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                {category.title.split(" ")[0]}
              </span>
              <span className="text-gray-800">
                {" "}
                {category.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {category.services.map((service, idx) => (
            <ErrorBoundary key={service.id} FallbackComponent={ErrorFallback}>
              <ServiceCard service={service} index={idx} />
            </ErrorBoundary>
          ))}
        </div>
      </div>
    ))}
  </section>
);

const ImageCarousel = ({ images, features }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }, []);

  useEffect(() => {
    if (!images?.length || images.length <= 1 || reducedMotion) return;
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, images, reducedMotion]);

  const handleImageChange = (direction) => {
    setCurrentImageIndex((prev) => {
      if (direction === "next") {
        return (prev + 1) % images.length;
      }
      return (prev - 1 + images.length) % images.length;
    });
  };

  if (!images?.length) return null;

  return (
    <div
      className="relative h-52 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.3 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt={features[currentImageIndex] || "Service feature"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
            loading="lazy"
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <button
              onClick={() => handleImageChange("prev")}
              className="p-2 bg-white/50 rounded-full backdrop-blur-sm hover:bg-white/80"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={() => handleImageChange("next")}
              className="p-2 bg-white/50 rounded-full backdrop-blur-sm hover:bg-white/80"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentImageIndex === idx ? "bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  features: PropTypes.array.isRequired,
};

const ServiceCard = ({ service, index }) => {
  const Icon = categoryIcons[service.category] || categoryIcons.Default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 overflow-hidden"
    >
      <ImageCarousel images={service.images} features={service.features} />

      <div className="p-5">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-7 h-7 text-blue-600" aria-hidden="true" />
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {service.title}
          </h3>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {service.price}
          </span>
          <span className="text-sm text-gray-500">{service.duration}</span>
        </div>

        <ul className="space-y-2.5 mb-4">
          {service.features.map((feature, idx) => (
            <li
              key={idx}
              className="flex items-start text-gray-600 cursor-pointer"
            >
              <CheckCircle2
                className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="w-full flex items-center justify-between px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium"
          aria-label={`Book ${service.title} service`}
        >
          <span>Book Service</span>
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </div>
    </motion.div>
  );
};

ServiceCard.propTypes = {
  service: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

class ErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <this.props.FallbackComponent error={this.state.error} />;
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  FallbackComponent: PropTypes.elementType.isRequired,
};

export default ServicePage;
