import { cn } from "@/lib/utils";

interface CaseStudyHeaderProps {
  title: string;
  subtitle: string;
  image: string;
  role: string;
  duration: string;
  className?: string;
}

export default function CaseStudyHeader({
  title,
  subtitle,
  image,
  role,
  duration,
  className,
}: CaseStudyHeaderProps) {
  return (
    <header
      className={cn(
        "relative min-h-[50vh] flex items-center py-16 px-6 md:px-12 overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 -z-10">
        <img src={image} alt={title} className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      </div>

      <div className="max-w-7xl mx-auto w-full text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <p className="text-sm text-gray-400 mb-1">My Role</p>
              <p className="text-lg">{role}</p>
            </div>
            <div>
              <p className="text-sm text-gray-400 mb-1">Duration</p>
              <p className="text-lg">{duration}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
