"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, DownloadIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { analytics } from "@/lib/analytics";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleViewWorkClick = () => {
    analytics.trackPageView("Work", { source: "hero_cta" });
  };

  const handleResumeDownload = () => {
    analytics.trackResumeDownload("hero");
  };

  return (
    <section className="relative min-h-[90vh] flex items-center py-16 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-white dark:from-gray-900 dark:to-gray-950 opacity-90" />

        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-40" />

        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div
          className={cn(
            "max-w-3xl transition-all duration-1000 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Designing Better Products,{" "}
            <span className="text-cyan-600 dark:text-cyan-400">
              One User Experience
            </span>{" "}
            at a Time
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            15+ years leading product design and research teams across healthcare, fintech,
            and emerging tech. From startup scrappiness to enterprise-scale
            execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-cyan-600 hover:bg-cyan-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600"
            >
              <Link to="/work" onClick={handleViewWorkClick}>
                View Work <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-cyan-600 text-cyan-600 hover:bg-cyan-50 dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-900/20"
            >
              <a href="#" download onClick={handleResumeDownload}>
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
