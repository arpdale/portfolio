import { useParams } from "react-router-dom";
import CaseStudyHeader from "@/polymet/components/case-study-header";
import CaseStudySection from "@/polymet/components/case-study-section";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

export default function CaseStudyPage() {
  const { slug = "blossom" } = useParams();

  // Mock data for case studies
  const caseStudies = {
    blossom: {
      title: "Blossom – AI-Powered Professional Networking",
      subtitle:
        "Designing a human-centered AI assistant that transforms how people find jobs and build professional connections.",
      image: "https://picsum.photos/seed/blossom123/1200/600",
      role: "Lead Product Designer",
      duration: "2022 - Present",
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
        "Blossom launched in early 2023 and has already helped thousands of professionals find meaningful work and connections. Key metrics include:",
      outcomePoints: [
        "85% of users report finding more relevant opportunities compared to traditional job boards",
        "Hiring managers spend 40% less time screening candidates",
        "Average time-to-hire reduced by 3 weeks",
        "NPS score of 72, significantly higher than industry average",
      ],

      reflection:
        "This project reinforced the importance of keeping humans at the center of AI-powered experiences. By focusing on augmenting human capabilities rather than replacing them, we created a tool that builds meaningful connections and helps people achieve their professional goals.",
      nextProject: "wheel",
      prevProject: "usaa",
    },
    wheel: {
      title: "Wheel – Unified Telehealth Platform",
      subtitle:
        "Leading the platform migration to a multi-tenant marketplace that serves both clinicians and enterprise clients.",
      image: "https://picsum.photos/seed/wheel456/1200/600",
      role: "Director of Product Design",
      duration: "2020 - 2022",
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
      title: "Wellsmith – Behavioral Health App for Diabetes",
      subtitle:
        "Creating an engaging character system to drive adherence and improve health outcomes for diabetes patients.",
      image: "https://picsum.photos/seed/wellsmith789/1200/600",
      role: "Principal Designer",
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
        "The Wellsmith app demonstrated remarkable improvements in patient engagement and health outcomes:",
      outcomePoints: [
        "78% retention rate after 6 months (compared to industry average of 30%)",
        "Average A1C reduction of 1.2 points among active users",
        "92% of users reported feeling more supported in their diabetes management",
        "Reduced hospital admissions by 40% among program participants",
      ],

      reflection:
        "This project showed how emotional design can transform clinical experiences. By creating characters that users cared about, we were able to motivate behavior change more effectively than traditional approaches. The integration with care teams also proved critical, demonstrating that technology works best when it enhances human relationships rather than replacing them.",
      nextProject: "usaa",
      prevProject: "wheel",
    },
    usaa: {
      title: "USAA – Personalized Mortgage Journeys",
      subtitle:
        "Using data to define user archetypes and create service blueprints that aligned teams and uncovered new product opportunities.",
      image: "https://picsum.photos/seed/usaa012/1200/600",
      role: "Senior UX Designer",
      duration: "2018 - 2020",
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

  const caseStudy = caseStudies[slug] || caseStudies.blossom;

  return (
    <div>
      <CaseStudyHeader
        title={caseStudy.title}
        subtitle={caseStudy.subtitle}
        image={caseStudy.image}
        role={caseStudy.role}
        duration={caseStudy.duration}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <CaseStudySection
          title="The Challenge"
          imagePosition="right"
          image="https://picsum.photos/seed/challenge123/600/400"
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
          image="https://picsum.photos/seed/approach456/600/400"
          imageAlt="Design process diagram"
        >
          <div className="space-y-4">
            <p>{caseStudy.approach}</p>
            <ul className="list-disc pl-5 space-y-2">
              {caseStudy.approachPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </CaseStudySection>

        <CaseStudySection
          title="The Solution"
          imagePosition="right"
          image="https://picsum.photos/seed/solution789/600/400"
          imageAlt="Final design solution"
        >
          <div className="space-y-4">
            <p>{caseStudy.solution}</p>
            <p>{caseStudy.solutionDetail}</p>
          </div>
        </CaseStudySection>

        <CaseStudySection title="The Outcome">
          <div className="space-y-4">
            <p>{caseStudy.outcome}</p>
            <ul className="list-disc pl-5 space-y-2">
              {caseStudy.outcomePoints.map((point, index) => (
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
              <Link to={`/work/${caseStudy.prevProject}`}>
                <ArrowLeftIcon className="h-4 w-4" /> Previous Project
              </Link>
            </Button>
          )}
          <Button asChild>
            <Link to="/work">View All Work</Link>
          </Button>
          {caseStudy.nextProject && (
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link to={`/work/${caseStudy.nextProject}`}>
                Next Project <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
