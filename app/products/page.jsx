"use client";

import { useState, useMemo, useEffect } from "react";
import {
  CheckCircle2,
  ShoppingCart,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/src/context/CartContext";
import { products } from "@/constants";

const ProductModal = ({ product, onClose }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-xl max-w-4xl w-full p-6 flex flex-col lg:flex-row gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full lg:w-1/2 relative h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="w-full lg:w-1/2 space-y-4 overflow-y-auto max-h-[80vh]">
          <div className="flex justify-between items-start">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <p className="text-gray-600">{product.description}</p>

          <div className="text-xl font-bold text-blue-600">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </div>

          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProductCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        <div
          className="relative h-64 cursor-pointer"
          onClick={() => setSelectedProduct(product)}
          role="button"
          aria-label={`View details for ${product.name}`}
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2 text-black">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <span className="text-blue-600 font-bold">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
              {product.category}
            </span>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const items = [
    {
      src: "/assets/images/featured1.jpg",
      alt: "Professional cleaning equipment",
    },
    {
      src: "/assets/images/featured6.jpg",
      alt: "Eco-friendly cleaning products",
    },
    {
      src: "/assets/images/featured4.jpg",
      alt: "Industrial cleaning tools",
    },
  ];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  const handleNext = () => {
    setDirection("next");
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const variants = {
    initial: (direction) => ({
      opacity: 0,
      scale: direction === "next" ? 0.95 : 1.05,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
    exit: (direction) => ({
      opacity: 0,
      scale: direction === "next" ? 1.05 : 0.95,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <div
      className="relative w-full overflow-hidden h-48 sm:h-56 lg:h-64"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute w-full h-full flex items-center justify-center bg-gray-100"
        >
          <Image
            src={items[currentIndex].src}
            alt={items[currentIndex].alt}
            fill
            className="object-contain p-4"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};

export default function ProductsPage() {
  const categories = useMemo(
    () => [...new Set(products.map((product) => product.category))],
    []
  );
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Carousel />
      <main className="min-h-screen bg-gray-50">
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-black">
            Our Products
          </h1>

          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                !selectedCategory
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
              aria-label="Show all products"
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-blue-100 text-blue-800 hover:bg-blue-200"
                }`}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
