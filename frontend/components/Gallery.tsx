"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const artworks = [
  { src: "/art1.jpg", title: "Wisdom of Ages" },
  { src: "/art2.jpg", title: "Golden Reflections" },
  { src: "/art3.jpg", title: "Velvet Dreams" },
];

export default function Gallery() {
  return (
    <section className="bg-ivory py-20">
      <h2 className="text-center font-serif text-4xl text-royalBlue mb-12">
        Gallery
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-8">
        {artworks.map((art, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Spotlight Glow */}
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-gold blur-3xl opacity-20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            {/* Artwork */}
            <Image
              src={art.src}
              alt={art.title}
              width={300}
              height={400}
              className="rounded-lg shadow-royal relative z-10"
            />
            <p className="mt-4 font-elegant text-lg text-royalBlue">
              {art.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
