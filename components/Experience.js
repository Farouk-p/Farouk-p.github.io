import RevealOnScroll from "./RevealOnScroll";

export default function Experience() {
  const experiences = [
    {
      role: "Quality Assurance Engineer",
      date: "Jan 2025 — Present",
      company: "Moniepoint",
      achievements: [
        "Perform functional, regression, integration, and UAT testing across web and mobile applications, designing and executing manual and automated test cases against project requirements.",
        "Build and maintain automated regression suites in Cypress/Playwright, reducing manual re-testing effort across release cycles.",
        "Validate backend services through API testing in Postman/Swagger, catching integration defects before they reach staging.",
        "Log, triage, and track defects through resolution in Jira, partnering with developers, product managers, and DevOps engineers in Agile/Scrum ceremonies.",
        "Conduct post-release and post-implementation testing to confirm production stability after deployment.",
      ],
    },
    {
      role: "Quality Assurance Engineer",
      date: "Nov 2021 — Dec 2024",
      company: "Wema Bank PLC",
      achievements: [
        "Owned end-to-end testing (functional, regression, integration, UAT) for web and mobile banking applications, using both manual and automated test cases.",
        "Automated the end-to-end loan application flow, replacing a ~3-hour manual walkthrough that QA previously had to run before testing could begin, and extended the approach to other flows across the product.",
        "Redirected the time reclaimed from automation toward deeper exploratory and edge-case testing, improving overall test coverage without adding headcount.",
        "Built and maintained automated regression suites, reducing manual re-testing effort across release cycles.",
        "Validated backend services through API testing in Postman/Swagger, catching integration defects before they reach staging.",
        "Ran load and performance testing with JMeter to verify system behavior under peak transaction volumes ahead of release.",
        "Logged, triaged, and tracked defects through resolution in Jira/Azure DevOps, partnering with developers, product managers, and DevOps engineers in Agile/Scrum ceremonies.",
        "Conducted post-release and post-implementation testing to confirm production stability after deployment.",
      ],
    },
    {
      role: "Quality Assurance Engineer",
      date: "Apr 2021 — Nov 2021",
      company: "Mplify Limited",
      achievements: [
        "Authored test cases, test specifications, and test data for new feature builds, and developed automation scripts to cover recurring regression scenarios.",
        "Performed API testing across multiple concurrent projects to validate service-level functionality.",
        "Ran smoke, sanity, and regression testing on every new build, and led load/performance testing for products ahead of release.",
        "Participated across the full SDLC, from requirements analysis through release, executing both manual and automated test suites against product specifications.",
      ],
    },
    {
      role: "Quality Assurance Engineer",
      date: "Mar 2020 — Apr 2021",
      company: "Riby Finance",
      achievements: [
        "Built and maintained the test environment and test data used across the QA function.",
        "Wrote test cases and automation scripts, and performed API testing for financial-services projects.",
        "Executed smoke, sanity, and regression testing on every new build version, catching defects before release.",
        "Contributed to all SDLC phases from requirements gathering through release sign-off.",
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
