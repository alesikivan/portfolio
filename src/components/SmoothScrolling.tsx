"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Глобальный экземпляр Lenis для использования в других компонентах
let lenisInstance: Lenis | null = null;

export const getLenis = () => lenisInstance;

export default function SmoothScrolling() {
  useEffect(() => {
    // Инициализация Lenis с настройками для плавной "тягучей" прокрутки
    const lenis = new Lenis({
      duration: 1.2, // Продолжительность анимации (больше = медленнее)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Плавная easing функция
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.8, // Коэффициент чувствительности колеса мыши
      touchMultiplier: 2,
    });

    lenisInstance = lenis;

    // Функция для обновления анимации
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Очистка при размонтировании
    return () => {
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
