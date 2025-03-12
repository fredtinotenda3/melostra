"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import PropTypes from "prop-types";

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
      className="relative h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Image carousel"
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
            alt={features[currentImageIndex] || "Product feature"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
            quality={85}
          />
        </motion.div>
      </AnimatePresence>

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-2">
            <button
              onClick={() => handleImageChange("prev")}
              className="p-2 bg-white/50 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>
            <button
              onClick={() => handleImageChange("next")}
              className="p-2 bg-white/50 rounded-full backdrop-blur-sm hover:bg-white/80 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </div>

          {/* Pagination Dots */}
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
  images: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ).isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageCarousel;
