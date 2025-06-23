"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutPreviewSection() {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-cyan-50 dark:bg-cyan-900/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={cn(
              "transition-all duration-700 transform",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            )}
          >
            <img
              src="/images/dsr-polaroid2.png"
              alt="David Richard"
              className="rounded-lg shadow-lg w-full max-w-md mx-auto"
            />
          </div>
          <div
            className={cn(
              "transition-all duration-700 transform",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            )}
            style={{ transitionDelay: "200ms" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Designer | Leader | Mentor
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I'm a strategic designer and design leader with a background in mechanical
                engineering from Stanford and over 15 years of experience
                building products and teams. My journey has taken me from
                founding a design agency to leading product design and user research for
                healthcare, fintech, and AI companies.
              </p>
              <p>
                I believe in human-centered design that's grounded in systems
                thinking. My approach combines deep user empathy with
                data-driven insights to create experiences that deliver real
                business impact.
              </p>
              <p>
                When I'm not designing, you might find me teaching design
                leadership at UT Austin, working on woodworking projects, or
                hiking the trails around Austin with my family.
              </p>
            </div>
            <Button
              asChild
              className="mt-8 bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600"
            >
              <Link to="/about">
                More About Me <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
