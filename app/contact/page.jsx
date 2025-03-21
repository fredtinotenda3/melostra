// app/contact/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronRight } from "lucide-react";

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

const serviceAreas = [
  "Downtown Area",
  "Suburban Districts",
  "Industrial Zones",
  "Residential Neighborhoods",
  "Commercial Centers",
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapState, setMapState] = useState({
    loaded: false,
    showFallback: false,
  });

  useEffect(() => {
    const loadTimer = setTimeout(
      () => setMapState((prev) => ({ ...prev, loaded: true })),
      2000
    );
    const fallbackTimer = setTimeout(
      () => setMapState((prev) => ({ ...prev, showFallback: true })),
      5000
    );

    return () => {
      clearTimeout(loadTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submission:", data);
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <motion.main
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex-1 bg-gradient-to-b from-blue-50 to-white"
      >
        {/* Emergency Banner */}
        <motion.div
          variants={fadeInUp}
          className="bg-red-600 text-white py-2 sm:py-4"
        >
          <div className="container mx-auto px-2 sm:px-4 flex flex-col xs:flex-row items-center justify-center gap-2 sm:gap-4">
            <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
            <div className="text-center">
              <h2 className="text-sm xs:text-base sm:text-xl font-bold">
                24/7 Emergency Pest Control
              </h2>
              <p className="text-xs xs:text-sm sm:text-sm">
                Call Now:{" "}
                <a
                  href="tel:+263719153221"
                  className="font-semibold hover:text-blue-200"
                >
                  +263-71-915-3221
                </a>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Container */}
        <div className="container mx-auto px-2 sm:px-6 lg:px-8 py-8 sm:py-16">
          <motion.div variants={staggerContainer} className="max-w-7xl mx-auto">
            {/* Page Header */}
            <motion.div
              variants={fadeInUp}
              className="text-center mb-8 sm:mb-16"
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 sm:mb-4 text-black">
                Get in Touch
              </h1>
              <p className="text-gray-600 text-xs xs:text-sm sm:text-base max-w-2xl mx-auto">
                Whether you need immediate assistance or want to schedule a
                routine service, our team is ready to help you maintain a clean
                and pest-free environment.
              </p>
            </motion.div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-4 sm:gap-12">
              {/* Contact Information Section */}
              <motion.div
                variants={fadeInUp}
                className="space-y-4 sm:space-y-8"
              >
                <div className="bg-white p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md">
                  <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-blue-100 rounded-md sm:rounded-lg">
                      <Phone className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-semibold text-black">
                        Contact
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Reach out anytime
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1 sm:space-y-2">
                    <li className="flex items-center gap-1 sm:gap-2">
                      <Phone className="w-3 h-3 sm:w-5 sm:h-5 text-gray-500" />
                      <a
                        href="tel: +263785391860"
                        className="text-xs sm:text-sm hover:text-blue-600 text-black"
                      >
                        +263-71-915-3221
                      </a>
                    </li>
                    <li className="flex items-center gap-1 sm:gap-2">
                      <Mail className="w-3 h-3 sm:w-5 sm:h-5 text-gray-500" />
                      <a
                        href="mailto:contact@cleanpro.com"
                        className="text-xs sm:text-sm hover:text-blue-600 text-black"
                      >
                        melostrachaparadza@icloud.com
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md">
                  <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-blue-100 rounded-md sm:rounded-lg">
                      <MapPin className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-semibold text-black">
                        Location
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Service Areas
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-1 sm:gap-2">
                    {serviceAreas.map((area, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 sm:gap-2"
                      >
                        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
                        <span className="text-gray-600 text-xs sm:text-sm">
                          {area}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md">
                  <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                    <div className="p-2 sm:p-3 bg-blue-100 rounded-md sm:rounded-lg">
                      <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl font-semibold text-black">
                        Hours
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Always available for emergencies
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-1 sm:space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600 text-xs sm:text-sm">
                        Mon-Fri
                      </span>
                      <span className="font-medium text-xs sm:text-sm">
                        8 AM - 6 PM
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600 text-xs sm:text-sm">
                        Saturday
                      </span>
                      <span className="font-medium text-xs sm:text-sm">
                        9 AM - 4 PM
                      </span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600 text-xs sm:text-sm">
                        Sunday
                      </span>
                      <span className="font-medium text-xs sm:text-sm">
                        Emergency Only
                      </span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Contact Form Section */}
              <motion.div variants={fadeInUp}>
                <form
                  onSubmit={handleSubmit(handleFormSubmit)}
                  className="bg-white p-3 sm:p-6 rounded-lg sm:rounded-xl shadow-sm sm:shadow-md space-y-4 sm:space-y-6"
                >
                  <div>
                    <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2 text-black">
                      Full Name *
                    </label>
                    <input
                      {...register("name", { required: true })}
                      className="w-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Doe"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-xs sm:text-sm">
                        This field is required
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-1 gap-2 sm:gap-6">
                    <div>
                      <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2 text-black">
                        Email *
                      </label>
                      <input
                        type="email"
                        {...register("email", { required: true })}
                        className="w-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <span className="text-red-500 text-xs sm:text-sm">
                          Valid email required
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2 text-black">
                        Phone *
                      </label>
                      <input
                        {...register("phone", { required: true })}
                        className="w-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <span className="text-red-500 text-xs sm:text-sm">
                          Phone required
                        </span>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2 text-black">
                      Service Type *
                    </label>
                    <select
                      {...register("service", { required: true })}
                      className="w-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                      <option value="">Select a service</option>
                      <option value="cleaning">Cleaning Services</option>
                      <option value="pest-control">Pest Control</option>
                      <option value="both">Both Services</option>
                      <option value="products">Product Inquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2 text-black">
                      Message *
                    </label>
                    <textarea
                      {...register("message", { required: true })}
                      rows={3}
                      className="w-full px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white py-2 sm:py-3 text-xs sm:text-sm rounded-md sm:rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1 sm:gap-2"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        Send Message
                        <ChevronRight className="w-3 h-3 sm:w-5 sm:h-5" />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Interactive Map Section */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 sm:mt-16 rounded-lg sm:rounded-xl overflow-hidden shadow-sm sm:shadow-md bg-gray-100 relative"
              style={{ height: "300px", sm: { height: "500px" } }}
            >
              <div className="w-full h-full relative">
                {/* Loading State */}
                {!mapState.loaded && (
                  <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center gap-2 sm:gap-3">
                    <div className="animate-pulse">
                      <MapPin className="w-8 h-8 sm:w-12 sm:h-12 text-gray-300" />
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Locating service areas...
                    </p>
                  </div>
                )}

                {/* Google Maps Embed */}
                <iframe
                  title="Service Coverage Map"
                  src={`https://AIzaSyAKMmSH0QKGHoVEqJ-Vi3XtT1gTyFINE0I`}
                  width="100%"
                  height="100%"
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    mapState.loaded ? "opacity-100" : "opacity-0"
                  }`}
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  onLoad={() =>
                    setMapState({ loaded: true, showFallback: false })
                  }
                  onError={() =>
                    setMapState((prev) => ({ ...prev, showFallback: true }))
                  }
                />

                {/* Fallback UI */}
                {mapState.showFallback && (
                  <div className="absolute inset-0 bg-white flex flex-col items-center justify-center gap-2 sm:gap-4 p-4 sm:p-6 text-center">
                    <MapPin className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
                    <h3 className="text-sm sm:text-xl font-semibold">
                      View Service Areas
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-base max-w-xs sm:max-w-sm">
                      Having trouble with the map? Explore our coverage areas
                      directly in Google Maps.
                    </p>
                    <a
                      href="https://www.google.com/maps"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 sm:px-6 py-1 sm:py-2 text-xs sm:text-sm rounded-md sm:rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1 sm:gap-2"
                    >
                      Open Maps
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}
