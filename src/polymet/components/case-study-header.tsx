import { cn } from "@/lib/utils";

interface CaseStudyHeaderProps {
  company: string;
  projectName: string;
  subtitle: string;
  role: string;
  duration: string;
  className?: string;
}

export default function CaseStudyHeader({
  company,
  projectName,
  subtitle,
  role,
  duration,
  className,
}: CaseStudyHeaderProps) {
  return (
    <header
      className={cn(
        "relative min-h-[50vh] flex items-center py-16 px-6 md:px-12 overflow-hidden bg-cyan-700",
        className
      )}
    >

      <div className="max-w-7xl mx-auto w-full text-white">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl font-medium text-cyan-200 mb-2">
            {company}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {projectName}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-sm text-gray-400 mb-1">My Role</p>
              <p className="text-lg">{role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Dates</p>
              <p className="text-lg">{duration}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
