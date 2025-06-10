import SectionHeading from "@/polymet/components/section-heading";

export default function AboutPage() {
  const skills = [
    {
      category: "Design Leadership",
      items: [
        "Team Building & Mentorship",
        "Design Operations",
        "Cross-functional Collaboration",
        "Design Systems",
        "Strategic Planning",
      ],
    },
    {
      category: "Design Methods",
      items: [
        "User Research",
        "Service Design",
        "Information Architecture",
        "Interaction Design",
        "Visual Design",
        "Prototyping",
      ],
    },
    {
      category: "Industries",
      items: [
        "Healthcare",
        "Fintech",
        "AI & Machine Learning",
        "Enterprise Software",
        "Consumer Products",
      ],
    },
  ];

  const timeline = [
    {
      period: "2024 - Present",
      role: "Founder / Product / Design / Eng",
      company: "Blossom",
      description:
        "Leading design for an AI-powered professional networking platform. Building the entire front-end experience and defining the product voice.",
    },
    {
      period: "2022 - 2025",
      role: "Senior Director of Product Design",
      company: "Wheel",
      description:
        "Led the design team for a telehealth platform connecting clinicians with digital health companies. Implemented design systems and research processes.",
    },
    {
      period: "2019 - 2022",
      role: "Design Director, Mortgage",
      company: "USAA",
      description:
        "Designed personalized mortgage journeys for military members and their families. Created service blueprints and user archetypes.",
    },
    {
      period: "2016 - 2019",
      role: "Head of Design",
      company: "Wellsmith",
      description:
        "Designed personalized mortgage journeys for military members and their families. Created service blueprints and user archetypes.",
    },
    {
      period: "2008 - 2016",
      role: "Founder & Principal",
      company: "Design For Use",
      description:
        "Founded and grew a design agency to 28 people across 2 countries. Worked with clients in healthcare, finance, and enterprise software.",
    },
  ];

  return (
    <div className="py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <SectionHeading title="About Me" />

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-xl">
                I'm a strategic design leader with a passion for creating
                human-centered systems that solve complex problems.
              </p>
              <p>
                My journey began with a Mechanical Engineering degree from
                Stanford, where I discovered my love for the intersection of
                technology and human needs. This led me to the world of design,
                where I've spent the last 15+ years building products and teams
                across healthcare, fintech, and emerging technologies.
              </p>
              <p>
                In 2005, I founded Design For Use, a design agency that grew to
                28 people across the US and South America. We partnered with
                organizations ranging from startups to Fortune 500 companies,
                helping them create digital products that delivered real
                business impact while meeting user needs.
              </p>
              <p>
                After selling the agency, I moved into in-house leadership roles
                where I could focus on building long-term product visions and
                scaling design teams. I'm particularly passionate about
                mentoring designers and helping them grow their careers.
              </p>
              <p>
                Today, I'm focused on how AI can enhance human capabilities
                rather than replace them. I believe we're at an inflection point
                in design, where our role is evolving from crafting interfaces
                to designing intelligent systems that collaborate with users.
              </p>
              <p>
                When I'm not designing, I teach design leadership at UT Austin,
                sharing my experience with the next generation of designers. I
                also enjoy woodworking, playing ukulele, hiking, and tinkering
                with vintage cars.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <img
              src="/images/dsr-porch.png"
              alt="David Richard"
              className="rounded-xl shadow-lg w-full max-w-md mx-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <SectionHeading title="Experience" />

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative pl-10 border-l-2 border-amber-200 dark:border-amber-800"
              >
                <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-amber-500" />

                <p className="text-sm text-amber-600 dark:text-amber-400 mb-1">
                  {item.period}
                </p>
                <h3 className="text-xl font-semibold mb-1">
                  {item.role} • {item.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <SectionHeading title="Skills & Expertise" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-amber-600 dark:text-amber-400">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <span className="w-2 h-2 bg-amber-500 rounded-full mr-2" />

                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading title="Influences & Philosophy" />

          <div className="bg-amber-50 dark:bg-amber-900/10 rounded-xl p-8">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                My approach to design has been shaped by a diverse set of
                influences:
              </p>
              <ul>
                <li>
                  <strong>BJ Fogg's Behavior Model</strong> - Understanding the
                  triggers, motivation, and ability factors that drive human
                  behavior
                </li>
                <li>
                  <strong>Simon Sinek's "Start With Why"</strong> - Focusing on
                  purpose before implementation
                </li>
                <li>
                  <strong>Daniel Pink's work on motivation</strong> - Designing
                  for autonomy, mastery, and purpose
                </li>
                <li>
                  <strong>Nir Eyal's "Hooked" model</strong> - Creating
                  habit-forming products (used ethically!)
                </li>
              </ul>
              <p>
                I believe that great design happens at the intersection of human
                needs, business goals, and technological capabilities. My
                philosophy centers on:
              </p>
              <ul>
                <li>
                  <strong>Human-centered + Systems-oriented</strong> - Deeply
                  caring about users while connecting the dots across data,
                  technology, and business
                </li>
                <li>
                  <strong>Building for impact</strong> - Creating solutions that
                  deliver measurable results, not just pretty interfaces
                </li>
                <li>
                  <strong>Collaborative leadership</strong> - Bringing out the
                  best in teams through mentorship and shared vision
                </li>
                <li>
                  <strong>Continuous learning</strong> - Staying curious and
                  adapting to emerging technologies and methods
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
