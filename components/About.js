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
              I'm a <strong>QA Automation Engineer</strong> with over 5 years of experience in the
              banking and fintech space. I hold a <strong>B.Eng. in Civil Engineering</strong> from
              the University of Ilorin, Nigeria — a background that sharpened my analytical thinking
              and problem-solving approach to quality assurance.
            </p>
            <p>
              I specialize in designing and executing both manual and automated test strategies
              using tools like <strong>Cypress</strong>, <strong>Playwright</strong>,{" "}
              <strong>WebDriverIO</strong>, and <strong>Test Sigma</strong>. I'm experienced in API
              testing with Postman & Swagger, load/performance testing with JMeter, and CI/CD
              integration using Jenkins & GitHub Actions.
            </p>
            <p>
              Throughout my career at <strong>Wema Bank</strong>, <strong>Mplify Limited</strong>,
              and <strong>Riby Finance</strong>, I've helped teams reduce defects, improve release
              confidence, and deliver quality software across web and mobile platforms.
            </p>
            <ul className="about-highlights">
              <li>✅ 5+ years in QA Automation (Banking & Fintech)</li>
              <li>✅ B.Eng. Civil Engineering — University of Ilorin</li>
              <li>✅ Agile / Scrum Methodologies</li>
              <li>✅ SDLC & STLC expertise</li>
              <li>✅ INEC Presiding Officer (Ad-hoc 2019)</li>
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
                  {"\n      "}role: <span className="str">'QA Automation Engineer'</span>,
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
