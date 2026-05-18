import RevealOnScroll from "./RevealOnScroll";

export default function Projects() {
  const projects = [
    {
      icon: "🏦",
      title: "Wema Bank — Mobile App Automation",
      description:
        "End-to-end automated test suite for the Wema banking mobile app using Cypress and WebDriverIO. Covers login, transfers, bill payments, and account management flows.",
      tags: ["Cypress", "WebDriverIO", "JavaScript"],
      link: "https://github.com/Farouk-p",
      linkText: "GitHub →",
    },
    {
      icon: "🔌",
      title: "Banking API Test Suite",
      description:
        "Comprehensive API testing collection for core banking endpoints using Postman and Swagger. Validated request/response schemas, auth flows, and error handling across 50+ endpoints.",
      tags: ["Postman", "Swagger", "Newman"],
      link: "https://github.com/Farouk-p",
      linkText: "GitHub →",
    },
    {
      icon: "⚡",
      title: "Load & Performance Test Suite",
      description:
        "JMeter-based performance tests simulating 5,000+ concurrent users on banking platforms. Identified critical bottlenecks that improved response times and system throughput.",
      tags: ["JMeter", "k6", "Grafana"],
      link: "https://github.com/Farouk-p",
      linkText: "GitHub →",
    },
    {
      icon: "🤖",
      title: "CI/CD Quality Gate Pipeline",
      description:
        "Integrated automated tests into Jenkins and GitHub Actions pipelines. Automated test execution on every PR, reducing manual regression effort by 60%.",
      tags: ["Jenkins", "GitHub Actions", "Docker"],
      link: "https://github.com/Farouk-p",
      linkText: "GitHub →",
    },
    {
      icon: "📱",
      title: "Cross-Platform Regression Suite",
      description:
        "Smoke, sanity, and regression test automation across web and mobile platforms. Reduced regression cycle from 3 days to 4 hours with Playwright and WebDriverIO.",
      tags: ["Playwright", "WebDriverIO", "Test Sigma"],
      link: "https://github.com/Farouk-p",
      linkText: "GitHub →",
    },
    {
      icon: "📋",
      title: "QA Process & Documentation",
      description:
        "Established QA process documentation and test strategy templates for fintech teams. Developed test case repositories, bug report standards, and release checklists.",
      tags: ["Jira", "Confluence", "Excel"],
      link: "#",
      linkText: "View →",
    },
  ];

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <RevealOnScroll className="section-header">
          <span className="section-tag">04 — Projects</span>
          <h2 className="section-title">Featured Projects</h2>
        </RevealOnScroll>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <RevealOnScroll key={index} className="project-card">
              <div className="project-icon">{proj.icon}</div>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="project-tags">
                {proj.tags.map((tag, tIndex) => (
                  <span key={tIndex}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={proj.link} target={proj.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer">
                  {proj.linkText}
                </a>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
