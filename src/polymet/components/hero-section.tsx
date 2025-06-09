"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center py-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-950 opacity-90" />

        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-40" />

        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-amber-100 dark:bg-amber-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div
          className={cn(
            "max-w-3xl transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Designing Better Systems,{" "}
            <span className="text-amber-600 dark:text-amber-400">
              One Human Interaction
            </span>{" "}
            at a Time
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            15+ years leading product design teams across healthcare, fintech,
            and emerging tech. From startup scrappiness to enterprise-scale
            execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white dark:bg-amber-500 dark:hover:bg-amber-600"
            >
              <Link to="/work">
                View Work <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-600 text-amber-600 hover:bg-amber-50 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/20"
            >
              <a href="#" download>
                Download Resume <DownloadIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="mt-12 text-gray-600 dark:text-gray-400 max-w-2xl">
            Strategic design leader with deep expertise in AI, platform design,
            and team building. Currently working on Blossom, a human-centered
            networking assistant powered by AI.
          </p>
        </div>
      </div>
    </section>
  );
}
