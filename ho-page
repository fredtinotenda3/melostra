/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Car, Building, Bug, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { carouselItems, home_products } from "@/constants";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Define types for carousel items, services, and products
interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface Service {
  title: string;
  description: string;
  icon: JSX.Element;
  link: string;
}

interface Product {
  id: number; // Updated to number
  image: string;
  name: string;
  description: string;
  price: number;
  link: string;
}

// Reusable Carousel Component
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  return (
    <div className="relative h-[227px] overflow-hidden">
      {carouselItems.map((item, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          {/* Dark Blue Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
          {/* Text Container */}
          <div className="absolute inset-0 flex items-center justify-center text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="p-4 sm:p-8 rounded-lg"
            >
              <h1 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6 text-white">
                {item.title}
              </h1>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-white">
                {item.description}
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/services"
                  className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Explore Services
                </Link>
                <Link
                  href="/products"
                  className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Shop Products
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ service }: { service: Service }) => (
  <motion.div variants={fadeInUp}>
    <Link href={service.link}>
      <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
        <div className="text-blue-600 mb-4">{service.icon}</div>
        <h3 className="text-xl font-bold mb-2">{service.title}</h3>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </Link>
  </motion.div>
);

// Reusable Product Card Component
const ProductCard = ({ product }: { product: Product }) => (
  <motion.div variants={fadeInUp}>
    <Link href={product.link}>
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={200}
          className="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-blue-600 font-bold mt-2">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </Link>
  </motion.div>
);

const Home = () => {
  // Sample data for services
  const services: Service[] = [
    {
      title: "Car Cleaning",
      description:
        "Professional car cleaning services to keep your vehicle spotless.",
      icon: <Car size={32} />,
      link: "/services#car-cleaning",
    },
    {
      title: "Office Cleaning",
      description:
        "Efficient office cleaning to maintain a healthy work environment.",
      icon: <Building size={32} />,
      link: "/services#office-cleaning",
    },
    {
      title: "Pest Control",
      description: "Effective pest control solutions for homes and businesses.",
      icon: <Bug size={32} />,
      link: "/pest-control",
    },
  ];

  return (
    <div>
      <Header />

      {/* Header Section as Carousel */}
      <Carousel />

      {/* Services Overview */}
      <motion.div
        className="container mx-auto py-16 px-4"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </motion.div>
      </motion.div>

      {/* Products Showcase */}
      <motion.div
        className="bg-gray-100 py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Featured Products
          </h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {home_products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Pest Control Section */}
      <motion.div
        className="bg-[url('/assets/images/washing-car.webp')] bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          className="bg-black bg-opacity-50 p-8 rounded-lg"
        >
          <h2 className="text-4xl font-bold mb-6">Pest Control Solutions</h2>
          <p className="text-xl mb-8">
            Effective and eco-friendly pest control for homes and businesses.
          </p>
          <Link
            href="/pest-control"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>

      {/* About Us Teaser */}
      <motion.div
        className="container mx-auto py-16 px-4"
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold text-center mb-8">About Melostra</h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Melostra is a trusted name in cleaning services and products. With
          years of experience, we are committed to delivering top-notch
          solutions for your home and business needs.
        </p>
        <div className="text-center">
          <Link
            href="/about"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </motion.div>

      {/* Contact Call-to-Action */}
      <motion.div
        className="bg-blue-600 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Have Questions? Get in Touch!
          </h2>
          <p className="text-xl mb-8">
            We’re here to help you with all your cleaning needs.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
