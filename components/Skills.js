import RevealOnScroll from "./RevealOnScroll";

export default function Skills() {
  const skillCategories = [
    {
      icon: "⚙️",
      title: "Test Automation",
      tags: ["Cypress", "Playwright", "WebdriverIO", "Test Sigma"],
    },
    {
      icon: "🔌",
      title: "API Testing",
      tags: ["Postman", "Swagger"],
    },
    {
      icon: "📊",
      title: "Performance & Load",
      tags: ["JMeter"],
    },
    {
      icon: "🔄",
      title: "CI/CD & DevOps",
      tags: ["Jenkins", "GitHub Actions", "Kubernetes (working knowledge)"],
    },
    {
      icon: "🧪",
      title: "Testing Practice",
      tags: ["Functional", "Regression", "Integration", "UAT", "Smoke", "Sanity", "System", "SDLC/STLC", "Defect Lifecycle"],
    },
    {
      icon: "📋",
      title: "Test Management",
      tags: ["Jira", "Azure DevOps", "Trello", "GitLab", "Zoho Projects", "Agile/Scrum"],
    },
    {
      icon: "🤖",
      title: "AI-Assisted Testing",
      tags: ["ChatGPT", "Claude", "Test Case Design", "Script Drafting", "Bug Reports"],
    },
    {
      icon: "💻",
      title: "Other",
      tags: ["JavaScript", "Excel (PivotTables, VLOOKUP)", "Data Analysis", "Technical Writing"],
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
