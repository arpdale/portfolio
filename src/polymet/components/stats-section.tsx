"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import StatCard from "@/polymet/components/stat-card";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = [
    { value: "15+", label: "Years in design leadership" },
    { value: "2M+", label: "Healthcare users served" },
    { value: "28", label: "Team members across 2 countries" },
    { value: "$50M+", label: "In business impact" },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8",
                {
                  "transition-delay-100": index === 0,
                  "transition-delay-200": index === 1,
                  "transition-delay-300": index === 2,
                  "transition-delay-400": index === 3,
                }
              )}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <StatCard value={stat.value} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
