import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/src/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

// Add metadata in layout.ts
export const metadata: Metadata = {
  title: "Melostra | Professional Cleaning & Pest Control Services",
  description:
    "Trusted cleaning and pest control services with eco-friendly solutions. Serving Harare since 2010.",
  keywords: ["cleaning services", "pest control", "Harare cleaning company"],
  openGraph: {
    images: "/og-image.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main className="min-h-[calc(100vh-160px)]">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
