"use client";
import Navbar from "@/components/navbar/Navbar";
import { Inter } from "@next/font/google";
import Products from "../components/products";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <Products />
    </>
  );
}
