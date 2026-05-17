"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden text-ivory">
      {/* Solid royal background */}
      {/* <div className="absolute inset-0 bg-royalBlue z-0" /> */}

      {/* Flowing Neon Line Background */}
      <div className="absolute inset-0 bg-flowing-lines z-10" />

      {/* Left Door */}
      <motion.div
        className="absolute left-0 top-0 h-full w-1/2 bg-ivory border-r-4 border-gold shadow-lg z-20"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Right Door */}
      <motion.div
        className="absolute right-0 top-0 h-full w-1/2 bg-ivory border-l-4 border-gold shadow-lg z-20"
        initial={{ x: 0 }}
        animate={{ x: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Spotlight Background */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gold blur-3xl opacity-30 z-30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.4 }}
        transition={{ duration: 2, delay: 1.2, ease: "easeOut" }}
      />

      {/* Spotlight Pulse */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gold blur-3xl opacity-20 z-30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text Content */}
      <motion.div
        className="z-40 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
      >
        <h1 className="font-serif text-4xl md:text-6xl shadow-royal">
          Wisdom Masterpieces
        </h1>
        <p className="font-elegant text-lg md:text-xl mt-6 text-gold">
          Experience timeless masterpieces with elegance
        </p>
      </motion.div>
    </section>
  );
}
