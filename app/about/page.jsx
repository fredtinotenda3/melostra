// app/about/page.jsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Leaf, History, Users, ChevronRight } from "lucide-react";

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

const timeline = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Started as local cleaning service in Chicago",
  },
  {
    year: "2013",
    title: "Pest Control Added",
    description: "Expanded services to include eco-friendly pest solutions",
  },
  {
    year: "2016",
    title: "National Certification",
    description: "Received Green Business Certification",
  },
  {
    year: "2020",
    title: "Product Line Launch",
    description: "Introduced our own eco-friendly cleaning products",
  },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "20+ years in eco-cleaning solutions",
  },
  {
    name: "Michael Chen",
    role: "Operations Manager",
    bio: "Specialist in green pest management",
  },
  {
    name: "Emma Wilson",
    role: "Product Lead",
    bio: "Developed our organic product line",
  },
  {
    name: "David Martinez",
    role: "Customer Success",
    bio: "Ensuring 100% client satisfaction",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <motion.main
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex-1 bg-gradient-to-b from-blue-50 to-white"
      >
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div variants={fadeInUp}>
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
                  About Melostra
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Pioneering eco-friendly cleaning and pest solutions since 2010
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-8"
            >
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl bg-blue-50"
              >
                <ShieldCheck className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">
                  Certified Expertise
                </h3>
                <p className="text-gray-600">
                  Fully licensed and green-certified professionals
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl bg-blue-50"
              >
                <Leaf className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">
                  Eco Commitment
                </h3>
                <p className="text-gray-600">
                  100% biodegradable and non-toxic solutions
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-xl bg-blue-50"
              >
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2 text-black">
                  Community Focus
                </h3>
                <p className="text-gray-600">
                  Locally owned, serving 50+ neighborhoods
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center mb-12 text-black"
            >
              Our Journey
            </motion.h2>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 w-1 bg-gray-200 h-full transform -translate-x-1/2" />
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={fadeInUp}
                  className="mb-8 flex justify-between items-center w-full"
                >
                  <div
                    className={`w-5/12 ${index % 2 === 0 ? "text-right" : ""}`}
                  >
                    {index % 2 === 0 && (
                      <div className="p-4 bg-white rounded-lg shadow-md">
                        <h4 className="font-bold text-lg text-black">
                          {item.title}
                        </h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </div>

                  <div className="w-1/12 flex justify-center">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      {item.year}
                    </div>
                  </div>

                  <div className="w-5/12">
                    {index % 2 !== 0 && (
                      <div className="p-4 bg-white rounded-lg shadow-md">
                        <h4 className="font-bold text-lg">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold text-center mb-12 text-black"
            >
              Meet Our Team
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  variants={fadeInUp}
                  className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-1 text-black">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              variants={fadeInUp}
              className="bg-blue-600 text-white py-12 px-4 rounded-2xl"
            >
              <h2 className="text-3xl font-bold mb-4">
                Ready for a Cleaner Future?
              </h2>
              <p className="text-lg mb-8">
                Join thousands of satisfied customers in our eco-friendly
                revolution
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="/booking"
                  className="border-2 border-white px-8 py-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Book Service
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </div>
  );
}
