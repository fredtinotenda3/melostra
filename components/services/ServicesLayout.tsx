// components/services/ServicesLayout.tsx
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const serviceVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

const servicePaths = [
  "/services/pest-control",
  "/services/professional-cleaning",
  "/services/car-cleaning",
  "/services/cleaning", // Added current route
];

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [direction, setDirection] = useState(0);
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    const newIndex = servicePaths.indexOf(pathname || "");
    const oldIndex = servicePaths.indexOf(currentPath || "");
    setDirection(newIndex > oldIndex ? 1 : -1);
    setCurrentPath(pathname);
  }, [pathname, currentPath]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={pathname}
          custom={direction}
          variants={serviceVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="w-full relative"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
