"use client";

import { CheckCircle2 } from "lucide-react";
import { motion, stagger, useAnimate } from "framer-motion";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const cardAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, duration: 0.6 },
  }),
};

const ServiceCard = ({ title, price, features, image, index }) => (
  <motion.div
    variants={cardAnimation}
    initial="hidden"
    animate="visible"
    custom={index}
    className="group relative overflow-hidden rounded-xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
  >
    <div className="relative aspect-video">
      <Image
        src={image}
        alt={`${title} service`}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
    <div className="p-6 bg-gradient-to-t from-white via-white/90 to-white/80">
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-lg text-gray-700 mt-2 font-medium">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
            <span className="text-left">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="/services"
        className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
      >
        Learn More →
      </Link>
    </div>
  </motion.div>
);

const services = [
  {
    title: "Residential Cleaning",
    price: "Starting from $150",
    features: [
      "Standard Cleaning",
      "Deep Cleaning",
      "Move-in/Move-out Cleaning",
      "Post-construction Cleaning",
      "Carpet Cleaning",
    ],
    image: "/assets/images/featured2.jpg",
  },
  // ... other service objects
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="py-12 bg-gray-50">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Premium Cleaning Services
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>

          <motion.div variants={fadeIn} className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Book a Service Now
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
