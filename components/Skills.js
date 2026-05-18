import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  const skillCategories = [
    {
      icon: "🧪",
      title: "Manual Testing",
      tags: ["Functional", "Regression", "Smoke", "Sanity", "UAT", "Exploratory"],
    },
    {
      icon: "⚙️",
      title: "Test Automation",
      tags: ["Cypress", "Playwright", "WebDriverIO", "Test Sigma", "Selenium"],
    },
    {
      icon: "🔌",
      title: "API Testing",
      tags: ["Postman", "Swagger", "REST Assured", "SoapUI"],
    },
    {
      icon: "📊",
      title: "Performance",
      tags: ["JMeter", "k6", "Gatling"],
    },
    {
      icon: "🔄",
      title: "CI/CD & DevOps",
      tags: ["Jenkins", "GitHub Actions", "Kubernetes", "Docker"],
    },
    {
      icon: "💻",
      title: "Languages & Tools",
      tags: ["JavaScript", "Jira", "GitLab", "Git", "Trello", "Azure"],
    },
  ];

  return (
    <section id="skills" className="section section-alt">
      <div className="container">
        <RevealOnScroll className="section-header">
          <span className="section-tag">02 — Skills</span>
          <h2 className="section-title">Skills & Tools</h2>
        </RevealOnScroll>
        <div className="skills-grid">
          {skillCategories.map((skill, index) => (
            <RevealOnScroll key={index} className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag, tIndex) => (
                  <span key={tIndex}>{tag}</span>
                ))}
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
