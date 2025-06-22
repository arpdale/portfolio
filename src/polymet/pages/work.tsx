"use client";

import { useState } from "react";
import SectionHeading from "@/polymet/components/section-heading";
import ProjectCard from "@/polymet/components/project-card";

export default function WorkPage() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Blossom – AI-Powered Professional Networking",
      description:
        "AI meets job seeking with thoughtful design. Built the entire front-end experience and voice of the product.",
      image: "https://picsum.photos/seed/blossom123/800/600",
      slug: "blossom",
      categories: ["ai", "product-design"],
      tags: ["AI/ML", "React Native", "Product Design", "Mobile App"],
    },
    {
      title: "Wheel – Unified Telehealth Platform",
      description:
        "Led the platform migration to a multi-tenant marketplace. Designed for both clinicians and enterprise clients. Introduced new research processes and AI tooling org-wide.",
      image: "https://picsum.photos/seed/wheel456/800/600",
      slug: "wheel",
      categories: ["healthcare", "platform-design"],
      tags: ["Healthcare", "B2B Platform", "React", "Service Design"],
    },
    {
      title: "Wellsmith – Behavioral Health App for Diabetes",
      description:
        "Created an animated character system to drive engagement and adherence. Integrated devices and care team workflows.",
      image: "https://picsum.photos/seed/wellsmith789/800/600",
      slug: "wellsmith",
      categories: ["healthcare", "product-design"],
      tags: ["Healthcare", "Behavior Change", "Animation", "IoT"],
    },
    {
      title: "USAA – Personalized Mortgage Journeys",
      description:
        "Used data to define user archetypes, then created a massive service blueprint to align teams and uncover new product opportunities. True enterprise impact.",
      image: "https://picsum.photos/seed/usaa012/800/600",
      slug: "usaa",
      categories: ["fintech", "service-design"],
      tags: ["Fintech", "Service Design", "Enterprise", "Data Strategy"],
    },
    {
      title: "Medici – Telemedicine Platform",
      description:
        "Redesigned the patient and provider experience to improve communication and care coordination. Increased patient satisfaction and provider efficiency.",
      image: "https://picsum.photos/seed/medici345/800/600",
      slug: "medici",
      categories: ["healthcare", "product-design"],
      tags: ["Healthcare", "Telemedicine", "UX Design", "Provider Tools"],
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "healthcare", name: "Healthcare" },
    { id: "fintech", name: "Fintech" },
    { id: "ai", name: "AI" },
    { id: "product-design", name: "Product Design" },
    { id: "platform-design", name: "Platform Design" },
    { id: "service-design", name: "Service Design" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.categories.includes(filter));

  return (
    <div className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          title="My Work"
          subtitle="A collection of projects that showcase my approach to design leadership and problem-solving across healthcare, fintech, and AI."
        />

        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                filter === category.id
                  ? "bg-cyan-600 dark:bg-cyan-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              image={project.image}
              slug={project.slug}
              tags={project.tags}
              source="work-page"
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No projects found in this category. Try selecting a different
              filter.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
