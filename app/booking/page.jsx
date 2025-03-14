// app/booking/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Clock, Home, Bug, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

const serviceTypes = [
  {
    id: "cleaning",
    name: "Cleaning Service",
    icon: Home,
    rates: { weekly: 120, biweekly: 140, monthly: 160 },
    addons: [
      "Deep Cleaning",
      "Eco-Friendly Products",
      "Cabinet Cleaning",
      "Window Washing",
    ],
  },
  {
    id: "pest",
    name: "Pest Control",
    icon: Bug,
    rates: { single: 200, package: 350 },
    addons: [
      "Rodent Proofing",
      "Termite Inspection",
      "Bed Bug Treatment",
      "Follow-up Visits",
    ],
  },
];

const timeSlots = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export default function BookingPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceType = watch("serviceType");
  const frequency = watch("frequency");
  const addons = watch("addons") || [];

  useEffect(() => {
    calculatePrice();
  }, [serviceType, frequency, addons]);

  const calculatePrice = () => {
    const service = serviceTypes.find((s) => s.id === serviceType);
    if (!service) return;

    let basePrice = 0;
    if (serviceType === "cleaning") {
      basePrice = service.rates[frequency] || 0;
    } else {
      basePrice = service.rates[frequency === "package" ? "package" : "single"];
    }

    const addonPrice = addons.length * 25;
    setTotalPrice(basePrice + addonPrice);
  };

  const handleServiceSelect = (serviceId) => {
    setValue("serviceType", serviceId);
    setStep(2);
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Booking submitted:", {
        ...data,
        totalPrice,
        selectedDate,
        selectedTime,
      });
      alert("Booking confirmed! We'll contact you shortly.");
      setStep(1);
      setSelectedDate("");
      setSelectedTime("");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <motion.main
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="flex-1 bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="container mx-auto px-2 xs:px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <motion.div variants={staggerContainer} className="max-w-4xl mx-auto">
            {/* Progress Steps */}
            <motion.div
              variants={fadeInUp}
              className="mb-6 sm:mb-8 flex justify-center gap-3 sm:gap-4"
            >
              {[1, 2, 3].map((num) => (
                <div
                  key={num}
                  className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm
                  ${
                    step >= num
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {num}
                </div>
              ))}
            </motion.div>

            {/* Service Selection with Enhanced Hover */}
            {step === 1 && (
              <motion.div
                variants={fadeInUp}
                className="grid md:grid-cols-2 gap-3 xs:gap-4 sm:gap-6"
              >
                {serviceTypes.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className="p-3 xs:p-4 sm:p-6 bg-white rounded-lg shadow-xs xs:shadow-sm sm:shadow-md hover:shadow-lg transition-all text-left cursor-pointer group transform hover:-translate-y-1"
                  >
                    <service.icon className="w-5 h-5 sm:w-7 sm:h-7 mb-2 sm:mb-3 text-blue-600 transition-transform group-hover:scale-110" />
                    <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 text-xs xs:text-sm group-hover:text-blue-500 transition-colors">
                      Select {service.name.toLowerCase()} options
                    </p>
                  </button>
                ))}
              </motion.div>
            )}

            {/* Service Configuration */}
            {step === 2 && (
              <motion.div variants={fadeInUp}>
                <form
                  onSubmit={handleSubmit(() => setStep(3))}
                  className="space-y-4 sm:space-y-6"
                >
                  <div>
                    <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                      Service Details
                    </h2>

                    <div className="mb-3 sm:mb-4">
                      <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2">
                        Service Type
                      </label>
                      <select
                        {...register("serviceType", {
                          required: "Service type is required",
                        })}
                        className="w-full p-2 xs:p-3 text-xs xs:text-sm rounded-md border focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      >
                        <option value="">Select service type</option>
                        {serviceTypes.map((service) => (
                          <option key={service.id} value={service.id}>
                            {service.name}
                          </option>
                        ))}
                      </select>
                      {errors.serviceType && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.serviceType.message}
                        </span>
                      )}
                    </div>

                    <div className="mb-3 sm:mb-4">
                      <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2">
                        {serviceType === "cleaning"
                          ? "Frequency"
                          : "Package Type"}
                      </label>
                      <select
                        {...register("frequency", {
                          required: "This field is required",
                        })}
                        className="w-full p-2 xs:p-3 text-xs xs:text-sm rounded-md border focus:ring-2 focus:ring-blue-500 cursor-pointer"
                      >
                        {serviceType === "cleaning" ? (
                          <>
                            <option value="weekly">Weekly ($120)</option>
                            <option value="biweekly">Bi-Weekly ($140)</option>
                            <option value="monthly">Monthly ($160)</option>
                          </>
                        ) : (
                          <>
                            <option value="single">
                              Single Treatment ($200)
                            </option>
                            <option value="package">
                              3-Treatment Package ($350)
                            </option>
                          </>
                        )}
                      </select>
                      {errors.frequency && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.frequency.message}
                        </span>
                      )}
                    </div>

                    <div className="mb-4 sm:mb-6">
                      <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2">
                        Add-Ons ($25 each)
                      </label>
                      <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 sm:gap-3">
                        {serviceTypes
                          .find((s) => s.id === serviceType)
                          ?.addons.map((addon) => (
                            <label
                              key={addon}
                              className="flex items-center space-x-2 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                value={addon}
                                {...register("addons")}
                                className="form-checkbox h-4 w-4 sm:h-5 sm:w-5 text-blue-600 cursor-pointer"
                              />
                              <span className="text-gray-700 text-xs xs:text-sm hover:text-blue-600 transition-colors">
                                {addon}
                              </span>
                            </label>
                          ))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-blue-600 hover:text-blue-700 text-xs xs:text-sm cursor-pointer"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-3 xs:px-4 py-1 xs:py-2 text-xs xs:text-sm rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
                      >
                        Continue →
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}

            {/* Schedule & Payment */}
            {step === 3 && (
              <motion.div variants={fadeInUp}>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 sm:space-y-6"
                >
                  <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                    Schedule & Payment
                  </h2>

                  <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2">
                        Select Date
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full p-2 xs:p-3 text-xs xs:text-sm rounded-md border focus:ring-2 focus:ring-blue-500 cursor-pointer"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2">
                        Select Time
                      </label>
                      <div className="grid grid-cols-2 gap-1 sm:gap-2">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-1 sm:p-2 text-2xs xs:text-xs sm:text-sm rounded-md cursor-pointer transition-colors ${
                              selectedTime === time
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 hover:bg-gray-200"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className="w-full p-2 xs:p-3 text-xs xs:text-sm rounded-md border focus:ring-2 focus:ring-blue-500"
                      />
                      {errors.name && (
                        <span className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </span>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 sm:gap-3">
                      <div>
                        <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Email is required",
                          })}
                          className="w-full p-2 xs:p-3 text-xs xs:text-sm rounded-md border focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                          <span className="text-red-500 text-xs mt-1">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs xs:text-sm font-medium mb-1 sm:mb-2">
                          Phone *
                        </label>
                        <input
                          {...register("phone", {
                            required: "Phone is required",
                          })}
                          className="w-full p-2 xs:p-3 text-xs xs:text-sm rounded-md border focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs mt-1">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="pt-2 sm:pt-3">
                      <button
                        type="button"
                        onClick={() => setShowLogin(!showLogin)}
                        className="text-blue-600 hover:text-blue-700 text-2xs xs:text-xs sm:text-sm cursor-pointer"
                      >
                        {showLogin
                          ? "New customer? Continue as guest"
                          : "Existing customer? Log in"}
                      </button>

                      {showLogin && (
                        <div className="mt-2 space-y-2">
                          <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 text-xs xs:text-sm rounded-md border"
                          />
                          <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 text-xs xs:text-sm rounded-md border"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2 sm:mb-3">
                      <h3 className="text-sm sm:text-base font-semibold">
                        Total Estimate
                      </h3>
                      <span className="text-lg sm:text-xl font-bold text-blue-600">
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <button
                      type="submit"
                      disabled={!selectedDate || !selectedTime || isSubmitting}
                      className="w-full bg-blue-600 text-white py-2 sm:py-2.5 text-xs xs:text-sm rounded-md hover:bg-blue-700 disabled:opacity-50 cursor-pointer transition-colors"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                        </span>
                      ) : (
                        "Confirm Booking"
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </motion.div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
