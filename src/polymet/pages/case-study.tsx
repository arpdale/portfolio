import { useParams, Link } from "react-router-dom";
import CaseStudyHeader from "@/polymet/components/case-study-header";
import CaseStudySection from "@/polymet/components/case-study-section";
import SectionHeading from "@/polymet/components/section-heading";
import ProjectCard from "@/polymet/components/project-card";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

export default function CaseStudyPage() {
  const { id } = useParams();

  // Mock data for case studies
  const caseStudies = {
    blossom: {
      company: "Blossom",
      projectName: "AI-Powered Professional Networking",
      subtitle:
        "Designing a human-centered AI assistant that transforms how people find jobs and build professional connections.",
      image: "https://picsum.photos/seed/blossom123/1200/600",
      role: "Head of Design & Product",
      duration: "2024 - Present",
      challenge:
        "The job search process is broken. It's impersonal, inefficient, and often demoralizing. Job seekers spend countless hours submitting applications into the void, while recruiters struggle to identify qualified candidates from a sea of resumes.",
      challengeDetail:
        "Our challenge was to create a more human-centered approach to professional networking that leverages AI to make meaningful connections between people and opportunities.",
      approach:
        "We started by conducting extensive user research with both job seekers and hiring managers to understand their pain points and goals. This research informed our design principles:",
      approachPoints: [
        "Human-first AI that augments rather than replaces human connection",
        "Transparency in how AI is used and what data is collected",
        "Personalization that feels helpful, not creepy",
        "Efficiency without sacrificing quality of connections",
      ],

      solution:
        "We designed a conversational AI assistant that helps users articulate their professional goals, identify relevant opportunities, and prepare for interviews. The assistant uses natural language processing to understand user intent and provide personalized guidance.",
      solutionDetail:
        "Key features include a personalized job feed, interview preparation tools, and networking suggestions based on the user's background and goals. We implemented a feedback loop that allows the AI to learn from user interactions and improve over time.",
        outcome:
        "Blossom was released in beta in early 2025 and is currently used by a few hundred students and early-career professionals. Early results indicate strong engagement and measurable improvements in how users approach networking and job search.",
      outcomePoints: [
        "82% of active users report discovering opportunities or connections they would not have found through traditional job boards",
        "Users complete 3.4× more outreach touchpoints per month compared to their pre-Blossom baseline",
        "68% of users report feeling more confident and less anxious about networking after two weeks of use",
        "Net Promoter Score (NPS) of 64 among beta users, indicating strong early product-market fit",
        "71% weekly active usage among users who complete onboarding, suggesting habit-forming engagement"
      ],

      reflection:
        "This project reinforced the importance of keeping humans at the center of AI-powered experiences. By focusing on augmenting human capabilities rather than replacing them, we created a tool that builds meaningful connections and helps people achieve their professional goals.",
      nextProject: "wheel",
      prevProject: "usaa",
    },
    wheel: {
      company: "Wheel",
      projectName: "Unified Telehealth Platform",
      subtitle:
        "Leading the platform migration to a multi-tenant marketplace that serves both clinicians and enterprise clients.",
      image: "https://picsum.photos/seed/wheel456/1200/600",
      role: "Sr. Director, Product Design & Research",
      duration: "2022 - 2025",
      challenge:
        "Wheel needed to transform from a single-purpose telehealth service to a comprehensive platform that could support multiple healthcare companies and thousands of clinicians. The existing system was built for a single use case and couldn't scale to meet growing demand.",
      challengeDetail:
        "We needed to design a unified platform that would serve two distinct user groups—clinicians and enterprise clients—while maintaining clinical quality and regulatory compliance.",
      approach:
        "I led a cross-functional team through a complete platform redesign, focusing on creating scalable systems and components. Our approach included:",
      approachPoints: [
        "Extensive research with both clinicians and healthcare administrators",
        "Development of a comprehensive design system to ensure consistency",
        "Implementation of new research processes and AI tooling across the organization",
        "Iterative testing with users to validate design decisions",
      ],

      solution:
        "We created a unified platform with tailored experiences for different user types. For clinicians, we designed intuitive workflows for patient care, scheduling, and documentation. For enterprise clients, we built robust tools for provider management, quality assurance, and analytics.",
      solutionDetail:
        "The platform included a sophisticated matching algorithm that connected patients with the right clinicians based on specialty, availability, and state licensure. We also implemented real-time communication tools and integrated with various EHR systems.",
      outcome:
        "The new platform successfully launched and quickly demonstrated significant improvements:",
      outcomePoints: [
        "Increased clinician satisfaction by 45%",
        "Reduced onboarding time for new enterprise clients by 60%",
        "Expanded to support 50+ healthcare companies",
        "Enabled the company to scale to thousands of clinicians across all 50 states",
      ],

      reflection:
        "This project highlighted the importance of designing for multiple stakeholders while maintaining a cohesive experience. By creating a flexible platform architecture, we were able to accommodate diverse needs without compromising usability or clinical quality.",
      nextProject: "wellsmith",
      prevProject: "blossom",
    },
    wellsmith: {
      company: "Wellsmith",
      projectName: "Behavioral Health App for Diabetes",
      subtitle:
        "Creating an engaging character system to drive adherence and improve health outcomes for diabetes patients.",
      image: "https://picsum.photos/seed/wellsmith789/1200/600",
      role: "Head of Design and Research",
      duration: "2016 - 2018",
      challenge:
        "Diabetes management requires consistent daily actions, but many patients struggle with adherence to treatment plans. Traditional health apps fail to engage users over the long term, leading to poor health outcomes.",
      challengeDetail:
        "We needed to design an experience that would motivate patients to consistently track their glucose levels, medication, diet, and exercise—potentially for the rest of their lives.",
      approach:
        "We took an innovative approach by combining behavioral science with character design. Our research showed that emotional connection could drive long-term engagement better than pure gamification or clinical interfaces.",
      approachPoints: [
        "Conducted ethnographic research with diabetes patients across different age groups",
        "Collaborated with behavioral scientists to identify key motivational factors",
        "Developed and tested character concepts with target users",
        "Created a system for integrating medical devices and care team workflows",
      ],

      solution:
        "We designed an animated character system that provided personalized guidance and emotional support. The characters evolved based on user behavior, creating a sense of relationship and accountability.",
      solutionDetail:
        "The app integrated with glucose monitors, activity trackers, and other devices to minimize manual data entry. Care teams could monitor patient progress and intervene when necessary, creating a connected care experience.",
      outcome:
        "Wellsmith helped people with diabetes achieve clinically meaningful improvements in weight, glycemic control, and daily habits through a highly engaging, behavior-driven digital experience.",
      outcomePoints: [
        "Participants lost an average of 6.3 lbs, with the top 10% achieving up to 23.7 lbs of weight loss",
        "Estimated A1C levels decreased by an average of 1.4 points, with top users seeing reductions of over 4 points",
        "Medication adherence reached 74% overall, with the top 25% achieving near-perfect compliance",
        "Average daily steps increased to 6,348, more than 3× typical baseline activity levels",
        "Users reported high satisfaction with the program, averaging over 4 out of 5 stars"
      ],

      reflection:
        "This project showed how emotional design can transform clinical experiences. By creating characters that users cared about, we were able to motivate behavior change more effectively than traditional approaches. The integration with care teams also proved critical, demonstrating that technology works best when it enhances human relationships rather than replacing them.",
      nextProject: "usaa",
      prevProject: "wheel",
    },
    usaa: {
      company: "USAA",
      projectName: "Personalized Mortgage Journeys",
      subtitle:
        "Using data to define user archetypes and create service blueprints that aligned teams and uncovered new product opportunities.",
      image: "https://picsum.photos/seed/usaa012/1200/600",
      role: "Design Director, Real Estate Lending",
      duration: "2019 - 2022",
      challenge:
        "USAA's mortgage experience was designed as a one-size-fits-all journey, but military members have unique circumstances that affect their home buying process. The existing system didn't account for frequent relocations, deployment schedules, or VA loan eligibility.",
      challengeDetail:
        "We needed to create personalized experiences for different member situations while maintaining operational efficiency and regulatory compliance in a large enterprise environment.",
      approach:
        "I led a data-driven approach to understand member needs and design personalized journeys:",
      approachPoints: [
        "Analyzed thousands of mortgage applications to identify patterns and pain points",
        "Conducted interviews with military members at different career stages",
        "Used principal component analysis to define distinct member archetypes",
        "Created a comprehensive service blueprint to align product, operations, and technology teams",
      ],

      solution:
        "We designed a system that identified member archetypes early in the process and tailored the experience accordingly. For first-time buyers, we provided educational content and guidance. For relocating members, we streamlined documentation and offered remote closing options.",
      solutionDetail:
        "The service blueprint became a crucial alignment tool, helping teams understand how their work impacted the end-to-end member experience. It also revealed opportunities for new products and services, such as a PCS (Permanent Change of Station) planning tool.",
      outcome:
        "The personalized mortgage experience delivered significant improvements:",
      outcomePoints: [
        "Increased mortgage application completion rate by 35%",
        "Reduced time-to-close by 12 days on average",
        "Improved member satisfaction scores from 72 to 89",
        "Generated $15M in additional annual revenue through new product offerings",
      ],

      reflection:
        "This project demonstrated the power of combining data analysis with human-centered design in a large enterprise context. By creating a shared understanding of member needs across the organization, we were able to drive meaningful change despite complex constraints. The service blueprint approach has since been adopted by other teams at USAA.",
      nextProject: "blossom",
      prevProject: "wellsmith",
    },
  };

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

  // If no id provided, show the landing page with all project cards
  if (!id) {
    return (
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Case Studies"
            subtitle="A collection of projects that showcase my approach to design leadership and problem-solving across healthcare, fintech, and AI."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                image={project.image}
                slug={project.slug}
                tags={project.tags}
                source="case-study-landing"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const caseStudy = caseStudies[id as keyof typeof caseStudies];

  // If invalid id, show landing page
  if (!caseStudy) {
    return (
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Case Studies"
            subtitle="A collection of projects that showcase my approach to design leadership and problem-solving across healthcare, fintech, and AI."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                image={project.image}
                slug={project.slug}
                tags={project.tags}
                source="case-study-landing"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CaseStudyHeader
        company={caseStudy.company}
        projectName={caseStudy.projectName}
        subtitle={caseStudy.subtitle}
        role={caseStudy.role}
        duration={caseStudy.duration}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <CaseStudySection
          title="The Challenge"
          imagePosition="right"
          image={`/images/projects/${id}/challenge.png`}
          fallbackImage={`https://picsum.photos/seed/${id}-challenge/600/400`}
          imageAlt="User research session"
        >
          <div className="space-y-4">
            <p>{caseStudy.challenge}</p>
            <p>{caseStudy.challengeDetail}</p>
          </div>
        </CaseStudySection>

        <CaseStudySection
          title="The Approach"
          imagePosition="left"
          image={`/images/projects/${id}/approach.png`}
          fallbackImage={`https://picsum.photos/seed/${id}-approach/600/400`}
          imageAlt="Design process diagram"
        >
          <div className="space-y-4">
            <p>{caseStudy.approach}</p>
            <ul className="list-disc pl-5 space-y-2">
              {caseStudy.approachPoints.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CaseStudySection>

        <CaseStudySection
          title="The Solution"
          imagePosition="right"
          image={`/images/projects/${id}/solution.png`}
          fallbackImage={`https://picsum.photos/seed/${id}-solution/600/400`}
          imageAlt="Final design solution"
        >
          <div className="space-y-4">
            <p>{caseStudy.solution}</p>
            <p>{caseStudy.solutionDetail}</p>
          </div>
        </CaseStudySection>

        <CaseStudySection
          title="The Outcome"
          imagePosition="left"
          image={`/images/projects/${id}/outcome.png`}
          fallbackImage={`https://picsum.photos/seed/${id}-outcome/600/400`}
          imageAlt="Project outcomes"
        >
          <div className="space-y-4">
            <p>{caseStudy.outcome}</p>
            <ul className="list-disc pl-5 space-y-2">
              {caseStudy.outcomePoints.map((point: string, index: number) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CaseStudySection>

        <CaseStudySection title="Reflection">
          <div className="space-y-4">
            <p>{caseStudy.reflection}</p>
          </div>
        </CaseStudySection>

        <div className="flex justify-between items-center py-12 border-t border-gray-200 dark:border-gray-800 mt-16">
          {caseStudy.prevProject && (
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link to={`/case-study/${caseStudy.prevProject}`}>
                <ArrowLeftIcon className="h-4 w-4" /> Previous Project
              </Link>
            </Button>
          )}
          <Button asChild>
            <Link to="/case-study">View All Work</Link>
          </Button>
          {caseStudy.nextProject && (
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link to={`/case-study/${caseStudy.nextProject}`}>
                Next Project <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
