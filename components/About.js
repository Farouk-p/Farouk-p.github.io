import RevealOnScroll from "./RevealOnScroll";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <RevealOnScroll className="section-header">
          <span className="section-tag">01 — About</span>
          <h2 className="section-title">About Me</h2>
        </RevealOnScroll>
        <RevealOnScroll className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>QA Engineer</strong> with 6+ years of experience testing web, mobile, and
              API-driven applications in fast-paced, high-stakes environments. I hold a <strong>B.Eng. in Civil Engineering</strong> from
              the University of Ilorin, Nigeria — a background that sharpened my analytical thinking
              and problem-solving approach to quality assurance.
            </p>
            <p>
              I own test strategy end-to-end, from requirements analysis through release sign-off,
              with quality gates built into Agile/Scrum and CI/CD workflows, using tools like <strong>Cypress</strong>, <strong>Playwright</strong>,{" "}
              <strong>WebDriverIO</strong>, and <strong>Test Sigma</strong>. I'm experienced in API
              testing with Postman & Swagger, load/performance testing with JMeter, and CI/CD
              integration using Jenkins & GitHub Actions.
            </p>
            <p>
              I also use AI tools (ChatGPT, Claude) to speed up test case design and automation
              scripting, and I'm comfortable working independently or leading testing efforts within
              cross-functional teams.
            </p>
            <div className="key-achievement">
              <strong>Key Achievement:</strong> Built an automation approach for the end-to-end loan
              application flow that cut a ~3-hour manual walkthrough down to a repeatable automated
              run, then applied the same approach to automate other flows, redirecting reclaimed QA
              time toward deeper exploratory and edge-case testing.
            </div>
            <ul className="about-highlights">
              <li>✅ 6+ years in QA (Banking & Fintech)</li>
              <li>✅ B.Eng. Civil Engineering — University of Ilorin</li>
              <li>✅ Agile / Scrum Methodologies</li>
              <li>✅ SDLC & STLC expertise</li>
              <li>✅ AI-assisted testing (ChatGPT, Claude)</li>
              <li>✅ Strong technical writing & data analysis</li>
            </ul>
          </div>
          <div className="about-card">
            <div className="terminal">
              <div className="terminal-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-title">about.test.js</span>
              </div>
              <pre className="terminal-body">
                <code>
                  <span className="kw">describe</span>(<span className="str">'Farouk Popoola'</span>, () =&gt; &#123;
                  {"\n  "}<span className="kw">it</span>(<span className="str">'should deliver quality'</span>, () =&gt; &#123;
                  {"\n    "}<span className="kw">const</span> me = &#123;
                  {"\n      "}role: <span className="str">'QA Engineer'</span>,
                  {"\n      "}tools: [<span className="str">'Cypress'</span>, <span className="str">'Playwright'</span>, <span className="str">'WebDriverIO'</span>],
                  {"\n      "}education: <span className="str">'B.Eng Civil Engineering'</span>,
                  {"\n      "}mindset: <span className="str">'break it before users do'</span>,
                  {"\n    "}&#125;;
                  {"\n    "}<span className="kw">expect</span>(me.quality).<span className="fn">toBe</span>(<span className="str">'Exceptional'</span>);
                  {"\n  "}&#125;);
                  {"\n"}&#125;);
                </code>
              </pre>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
