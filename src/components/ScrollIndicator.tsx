"use client";

import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { getLenis } from "./SmoothScrolling";

export default function ScrollIndicator() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  // Скрываем мышку при прокрутке вниз
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsVisible(latest < 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const handleClick = () => {
    // Плавная прокрутка к следующей секции через Lenis
    const nextSection = document.querySelector("section:nth-of-type(2)");
    if (nextSection) {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(nextSection as HTMLElement, {
          offset: 0,
          duration: 1.5,
        });
      } else {
        // Фоллбэк на нативную прокрутку
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 transition-transform"
      onClick={handleClick}
    >
      <div className="relative w-6 h-10 border-2 border-foreground/20 rounded-full p-1.5 hover:border-foreground/40 transition-colors">
        <motion.div
          className="w-1.5 h-1.5 bg-foreground/40 rounded-full mx-auto"
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.div>
  );
}
