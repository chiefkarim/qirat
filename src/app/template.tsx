"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.85 }}
          className="absolute inset-0"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
