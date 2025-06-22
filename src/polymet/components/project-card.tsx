"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { analytics } from "@/lib/analytics";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
  source?: string; // Track where the click came from
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  slug,
  source = 'unknown'
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleProjectClick = () => {
    analytics.trackProjectClick(title, source);
  };

  return (
    <Link
      to={`/case-study/${slug}`}
      className="group block overflow-hidden rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleProjectClick}
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
        <h3 className="text-xl font-semibold mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
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
