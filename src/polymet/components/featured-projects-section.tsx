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
      title: "Nurture Your Network | Blossom",
      description:
        "AI meets job seeking with thoughtful design. Designed and built the entire experience and voice of the product.",
      image: "/images/projects/blossom-card.png",
      slug: "blossom",
      tags: ["Product Design", "AI/ML", "Mobile App", "React Native"],
    },
    {
      title: "Virtual Care Platform | Wheel",
      description:
        "A multi-tenant marketplace and platform to connect patients with providers. Supports healthcare delivery for both urgent and longitudinal care.",
      image: "/images/projects/wheel-card.png",
      slug: "wheel",
      tags: ["Healthcare", "B2B Platform", "Service Design", "React"],
    },
    {
      title: "Health Coaching for Diabetes | Wellsmith",
      description:
        "Driving positive behavior change for diabetes patients by capturing and tracking their progress via connected devices and self-reporting.",
      image: "/images/projects/wellsmith-card.png",
      slug: "wellsmith",
      tags: ["Healthcare", "Behavior Change", "IoT", "Data Visualization"],
    },
    {
      title: "Personalized Mortgage Journeys | USAA",
      description:
        "Service blueprint and data-driven archetypes to drive personalized borrower experience.",
      image: "/images/projects/usaa-card.png",
      slug: "usaa",
      tags: ["Fintech", "Service Design", "Personalization", "Enterprise"],
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="Featured Work"
          subtitle="A selection of projects that showcase my approach to design, problem-solving, and leadership."
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
                tags={project.tags}
                source="featured"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
