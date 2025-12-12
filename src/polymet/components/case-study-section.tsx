"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CaseStudySectionProps {
  title: string;
  children: React.ReactNode;
  imagePosition?: "left" | "right" | "none";
  image?: string;
  fallbackImage?: string;
  imageAlt?: string;
  className?: string;
}

export default function CaseStudySection({
  title,
  children,
  imagePosition = "none",
  image,
  fallbackImage,
  imageAlt = "",
  className,
}: CaseStudySectionProps) {
  const [imgSrc, setImgSrc] = useState(image);
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

  const renderContent = () => {
    if (imagePosition === "none") {
      return (
        <div
          className={cn(
            "transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {children}
        </div>
      );
    }

    const textContent = (
      <div
        className={cn(
          "transition-all duration-700 transform",
          isVisible
            ? "opacity-100 translate-x-0"
            : imagePosition === "left"
              ? "opacity-0 -translate-x-8"
              : "opacity-0 translate-x-8"
        )}
        style={{ transitionDelay: "200ms" }}
      >
        {children}
      </div>
    );

    const imageContent = imgSrc ? (
      <div
        className={cn(
          "transition-all duration-700 transform",
          isVisible
            ? "opacity-100 translate-x-0"
            : imagePosition === "left"
              ? "opacity-0 translate-x-8"
              : "opacity-0 -translate-x-8"
        )}
      >
        <img
          src={imgSrc}
          alt={imageAlt}
          className="rounded-lg shadow-lg w-full"
          onError={() => {
            if (fallbackImage && imgSrc !== fallbackImage) {
              setImgSrc(fallbackImage);
            }
          }}
        />
      </div>
    ) : null;

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {imagePosition === "left" ? (
          <>
            {imageContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {imageContent}
          </>
        )}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className={cn("py-16", className)}>
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      {renderContent()}
    </section>
  );
}
