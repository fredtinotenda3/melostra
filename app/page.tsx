/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import {
  Sparkles,
  Building,
  Droplets,
  Leaf,
  CalendarDays,
  Bug,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Shield,
  Clock,
  Trophy,
  Star,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { JSX, useEffect, useState } from "react";
import Image from "next/image";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { carouselItems, home_products, serviceCategories } from "@/constants";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, when: "beforeChildren" },
  },
};

interface CarouselItem {
  image: string;
  title: string;
  description: string;
}

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  link: string;
}

const categoryIcons = {
  Residential: Sparkles,
  Commercial: Building,
  Specialized: Droplets,
  Environmental: Leaf,
  Event: CalendarDays,
  Pest: Bug,
};

const Carousel = ({ items }: { items: CarouselItem[] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(
    new Array(items.length).fill(false)
  );

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => {
      const newLoaded = [...prev];
      newLoaded[index] = true;
      return newLoaded;
    });
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, items.length]);

  const goToNextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % items.length);
  const goToPrevSlide = () =>
    setCurrentSlide((prev) => (prev === 0 ? items.length - 1 : prev - 1));

  return (
    <div
      className="relative h-[227px] sm:h-[400px] overflow-hidden bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {items.map((item, index) => {
        const Icon =
          categoryIcons[
            item.title.split(" ")[0] as keyof typeof categoryIcons
          ] || Sparkles;
        return (
          <motion.div
            key={index}
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              transition: { duration: 1.5 },
            }}
            style={{
              zIndex: index === currentSlide ? 2 : 1,
              background: "rgba(0,0,0,0.4)",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover object-center"
              priority={index < 2}
              onLoadingComplete={() => handleImageLoad(index)}
              style={{
                opacity: loadedImages[index] ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-center">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="p-4 sm:p-8 rounded-lg max-w-4xl"
              >
                <div className="mb-4 p-3 bg-white/20 backdrop-blur-sm rounded-xl inline-block">
                  <Icon className="w-12 h-12 text-blue-600 p-2 bg-white rounded-lg shadow-md" />
                </div>
                <h1 className="text-2xl sm:text-5xl font-bold mb-4 sm:mb-6 text-white">
                  {item.title}
                </h1>
                <p className="text-sm sm:text-xl mb-6 sm:mb-8 text-gray-200">
                  {item.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/services"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Explore Services
                  </Link>
                  <Link
                    href="/products"
                    className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    Shop Products
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      })}

      <button
        onClick={goToPrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-blue-600" : "bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceCard = ({
  service,
}: {
  service: (typeof serviceCategories)[number];
}) => {
  const Icon =
    categoryIcons[service.title.split(" ")[0] as keyof typeof categoryIcons] ||
    Sparkles;

  return (
    <motion.div variants={fadeInUp}>
      <Link href={`/services#${service.id}`} className="group block h-full">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full">
          <div className="text-blue-600 mb-4 flex justify-center">
            <div className="p-3 bg-blue-50 rounded-lg transition-colors group-hover:bg-blue-100">
              <Icon className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              {service.title.split(" ")[0]}
            </span>
            <span className="text-gray-800">
              {" "}
              {service.title.split(" ").slice(1).join(" ")}
            </span>
          </h3>
          <p className="text-gray-600 text-center">{service.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

const ProductCard = ({ product }: { product: Product }) => (
  <motion.div variants={fadeInUp} className="h-full">
    <Link href={product.link} className="block h-full">
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <h3 className="text-lg font-bold mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 flex-grow">{product.description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
            ⭐ 4.8+ Rated
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

const WhyChooseUsMarquee = () => {
  const reasons = [
    { icon: CheckCircle, text: "100% Satisfaction Guarantee" },
    { icon: Shield, text: "Licensed & Insured Professionals" },
    { icon: Leaf, text: "Eco-Friendly Solutions" },
    { icon: Clock, text: "24/7 Emergency Service" },
    { icon: Trophy, text: "Award-Winning Service" },
    { icon: Star, text: "5-Star Rated Experts" },
  ];

  return (
    <motion.section
      className="bg-blue-600 py-6 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="relative flex items-center">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...reasons, ...reasons].map((reason, index) => (
            <div
              key={index}
              className="flex items-center mx-8 text-white text-lg sm:text-xl"
            >
              <reason.icon className="w-6 h-6 mr-2" />
              <span>{reason.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Carousel items={carouselItems} />

      <motion.section
        className="container mx-auto py-16 px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "100px" }}
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Cleaning Services
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        className="bg-gray-50 py-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        viewport={{ once: true, margin: "100px" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Featured Products
          </h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home_products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="relative h-[500px] flex items-center justify-center text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Image
          src="/assets/images/pest-free.jpg"
          alt="Professional cleaning team"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-10 max-w-2xl mx-auto p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">
            Experience the Clean Difference
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-800">
            Combine our expert services with premium products for unparalleled
            results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors text-lg font-medium"
            >
              Schedule Service
            </Link>
            <Link
              href="/products"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg hover:bg-green-600 hover:text-white transition-colors text-lg font-medium"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </motion.section>

      <WhyChooseUsMarquee />
      <Footer />
    </div>
  );
};

export default Home;
