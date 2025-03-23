import { motion } from "framer-motion";
import Image from "next/image";
import { services, whyChooseUs, testimonials } from "../constants"; // Ensure this is the correct path

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-500 text-white py-32 text-center"
      >
        <h1 className="text-5xl text-black font-bold">Our Services</h1>
        <p className="mt-4 text-xl text-black">
          Professional cleaning services tailored to your needs.
        </p>
      </div>

      {/* Services Grid Section */}
      <section className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg p-6 rounded-lg text-center"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={service.image}
                  alt={service.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mt-4">{service.name}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
              <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Melostra?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <div className="text-4xl text-blue-500 mb-4">{reason.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              <div className="flex items-center mt-4">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl mb-8">
          Book a cleaning service today and experience the Melostra difference.
        </p>
        <button className="bg-white text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-100 transition-colors">
          Book Now
        </button>
      </section>
    </div>
  );
};

export default Services;
