"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/src/context/CartContext";

interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  link: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <motion.div variants={fadeInUp} className="h-full">
      <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
        <Link href={product.link} className="block h-full">
          <div className="relative h-48 w-full mb-4 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          <h3 className="text-lg font-bold mb-2 text-gray-900">
            {product.name}
          </h3>
          <p className="text-gray-600 flex-grow">{product.description}</p>
        </Link>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-blue-600 font-bold">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
