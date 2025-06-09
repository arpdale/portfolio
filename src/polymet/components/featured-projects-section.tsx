"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import SectionHeading from "@/polymet/components/section-heading";
import ProjectCard from "@/polymet/components/project-card";

export default function FeaturedProjectsSection() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      title: "Blossom – AI-Powered Professional Networking",
      description:
        "AI meets job seeking with thoughtful design. Built the entire front-end experience and voice of the product.",
      image: "https://picsum.photos/seed/blossom123/800/600",
      slug: "blossom",
    },
    {
      title: "Wheel – Unified Telehealth Platform",
      description:
        "Led the platform migration to a multi-tenant marketplace. Designed for both clinicians and enterprise clients.",
      image: "https://picsum.photos/seed/wheel456/800/600",
      slug: "wheel",
    },
    {
      title: "Wellsmith – Behavioral Health App for Diabetes",
      description:
        "Created an animated character system to drive engagement and adherence. Integrated devices and care team workflows.",
      image: "https://picsum.photos/seed/wellsmith789/800/600",
      slug: "wellsmith",
    },
    {
      title: "USAA – Personalized Mortgage Journeys",
      description:
        "Used data to define user archetypes, then created a massive service blueprint to align teams and uncover new product opportunities.",
      image: "https://picsum.photos/seed/usaa012/800/600",
      slug: "usaa",
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Work"
          subtitle="A selection of projects that showcase my approach to design leadership and problem-solving."
          className={cn(
            "transition-all duration-700 transform",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className={cn(
                "transition-all duration-700 transform",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{
                transitionDelay: `${(index + 1) * 100}ms`,
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
