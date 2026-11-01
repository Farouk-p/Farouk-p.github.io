export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>
        <h1 className="hero-name">Farouk Popoola</h1>
        <h2 className="hero-title">QA Engineer</h2>
        <p className="hero-tagline">
          I own test strategy end-to-end — from requirements analysis to release sign-off — across{" "}
          <span className="accent">web, mobile, and API</span>-driven applications, using{" "}
          <span className="accent">Cypress, Playwright, and WebdriverIO</span> with quality gates built
          into CI/CD workflows.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn-secondary">
            Get in Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">6+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-num">4</span>
            <span className="stat-label">Companies Served</span>
          </div>
          <div className="stat">
            <span className="stat-num">B.Eng</span>
            <span className="stat-label">Civil Engineering</span>
          </div>
        </div>
      </div>
    </header>
  );
}
