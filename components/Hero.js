export default function Hero() {
  return (
    <header id="home" className="hero">
      <div className="container hero-content">
        <p className="hero-greeting">👋 Hello, I'm</p>
        <h1 className="hero-name">Farouk Popoola</h1>
        <h2 className="hero-title">QA Automation Engineer</h2>
        <p className="hero-tagline">
          I ensure software quality through <span className="accent">manual</span> and{" "}
          <span className="accent">automated testing</span> — from crafting robust test frameworks to
          performing load and API tests. Passionate about shipping bug-free, high-performance
          applications.
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
            <span className="stat-num">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-num">3</span>
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
