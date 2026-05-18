import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  const experiences = [
    {
      role: "QA — Software Automation Tester",
      date: "Nov 2021 — Present",
      company: "Wema Bank PLC • Lagos, Nigeria",
      achievements: [
        "Perform functional, regression, integration, and UAT on web and mobile banking applications.",
        "Design, develop, and execute manual and automated test cases based on project requirements using Cypress and WebDriverIO.",
        "Identify, document, and track defects using Jira and Trello.",
        "Conduct API testing with Postman and Swagger to validate backend functionality.",
        "Execute load and performance tests for various banking products using JMeter.",
        "Work closely with developers, product managers, and DevOps engineers in Agile/Scrum environments.",
        "Conduct post-release and post-implementation testing to ensure production stability.",
      ],
    },
    {
      role: "QA — Software Automation Tester",
      date: "Apr 2021 — Nov 2021",
      company: "Mplify Limited • Lagos, Nigeria",
      achievements: [
        "Carried out load and performance tests for various products.",
        "Created test cases, developed and maintained test specifications and test data.",
        "Wrote automation test scripts and performed API testing on multiple projects.",
        "Executed top-down, smoke, sanity, and regression tests on every new build version.",
        "Involved in all phases of SDLC from requirements to release.",
      ],
    },
    {
      role: "QA — Software Automation Tester",
      date: "Mar 2020 — Apr 2021",
      company: "Riby Finance • Lagos, Nigeria",
      achievements: [
        "Created test cases, developed and maintained test specifications and test data.",
        "Wrote automation test scripts and performed API testing on various projects.",
        "Carried out top-down, smoke, sanity, and regression tests on every new build version.",
        "Established and maintained test environments for the QA team.",
        "Involved in all phases of SDLC from requirements to release.",
      ],
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <RevealOnScroll className="section-header">
          <span className="section-tag">03 — Experience</span>
          <h2 className="section-title">Work Experience</h2>
        </RevealOnScroll>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <p className="timeline-company">{exp.company}</p>
                <ul>
                  {exp.achievements.map((ach, aIndex) => (
                    <li key={aIndex}>{ach}</li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
