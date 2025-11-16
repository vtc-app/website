"use client";

import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";

// Animated Counter Component
function AnimatedCounter({
  targetValue,
  suffix = "",
  duration = 2000,
  hasPlus = false,
}: {
  targetValue: number;
  suffix?: string;
  duration?: number;
  hasPlus?: boolean;
}) {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.floor(
        startValue + (targetValue - startValue) * easeOutCubic
      );

      setCurrentValue(newValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isVisible, targetValue, duration]);

  return (
    <div
      ref={counterRef}
      className="text-4xl lg:text-5xl font-bold text-primary mb-2"
    >
      {currentValue}
      {hasPlus && currentValue === targetValue && "+"}
      {suffix && <span className="text-2xl lg:text-3xl">{suffix}</span>}
    </div>
  );
}

export default function CompanyStatsSection() {
  const { t } = useTranslation("common");

  const stats = [
    {
      number: 5,
      label: t("stats.yearsExperience"),
      suffix: "",
      hasPlus: true,
    },
    {
      number: 4,
      label: t("stats.vehicles"),
      suffix: "",
      hasPlus: false,
    },
    {
      number: 4,
      label: t("stats.employees"),
      suffix: "",
      hasPlus: false,
    },
    {
      number: 5000,
      label: t("stats.clients"),
      suffix: "",
      hasPlus: true,
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="text-center mb-12 opacity-0 -translate-x-1">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t("stats.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("stats.description")}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center opacity-0 -translate-x-1">
              <AnimatedCounter
                targetValue={stat.number}
                suffix={stat.suffix}
                hasPlus={stat.hasPlus}
                duration={1200 + index * 150} // Faster animation with stagger
              />
              <div className="text-sm lg:text-base font-semibold text-gray-700">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
