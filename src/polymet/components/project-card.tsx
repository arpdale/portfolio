"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  slug: string;
  className?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  slug,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={`/work/${slug}`}
      className={cn(
        "group block overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-500",
            isHovered ? "scale-105" : "scale-100"
          )}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div
          className={cn(
            "inline-flex items-center text-sm font-medium text-cyan-600 dark:text-cyan-400 transition-all duration-300",
            isHovered ? "gap-2" : "gap-1"
          )}
        >
          View case study <ArrowRightIcon className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
