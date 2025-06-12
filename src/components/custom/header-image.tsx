"use client";
import { motion } from "motion/react";
import Image from "next/image";

export function FloatingHeaderImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: " translateY(-10px)",
      }}
      animate={{
        opacity: 1,
        transform: " translateY(10px)",
      }}
      transition={{
        opacity: { duration: 1.2, ease: "easeOut", delay: 0.4 },
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
      }}
      className="aspect-[4/3] relative overflow-hidden rounded-lg"
    >
      <Image
        src="/images/header.jpg"
        alt="3D geometric shapes on wooden surface with dramatic lighting"
        fill
        className="object-cover"
        priority
      />
    </motion.div>
  );
}
