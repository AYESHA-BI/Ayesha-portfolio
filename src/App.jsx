import { useState } from "react";
import "./App.css";

const skills = [
  "AWS",
  "Linux",
  "Git",
  "GitHub",
  "Docker",
  "Jenkins",
  "Ansible",
  "Kubernetes",
  "Terraform",
  "Bash / Shell Scripting",
  "Prometheus",
  "Grafana",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            Ayesha Bi
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "nav-links active" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#resume" onClick={closeMenu}>Resume</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>

            <div className="nav-social">
              <a
                href="https://www.linkedin.com/in/ayesha-bi-873a0233a"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/AYESHA-BI/Ayesha-portfolio"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="container hero-grid">
            <div className="hero-content">
              <p className="eyebrow">AWS & DEVOPS ENGINEER</p>

              <h1>
                Hi, I'm <span>Ayesha Bi</span>
              </h1>

              <p className="hero-description">
                An aspiring AWS & DevOps Engineer with a BCA degree from
                Darshan College and hands-on experience across Linux, Git,
                Docker, Kubernetes, Terraform, and AWS. I love building,
                deploying, and automating cloud-based applications through
                practical, real-world projects.
              </p>

              <p className="hero-description">
                As a fresher, I'm excited to bring my skills into a
                professional environment, tackle infrastructure challenges,
                and grow every day as a DevOps professional.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="button primary">
                  View My Work
                </a>

                <a href="#contact" className="button secondary">
                  Get In Touch
                </a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-card">
                <div className="visual-top">
                  <span className="status-dot" />
                  <span>CloudForge</span>
                </div>

                <div className="terminal">
                  <p>
                    <span className="terminal-green">$</span> terraform apply
                  </p>
                  <p className="terminal-muted">
                    Infrastructure as Code
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> AWS
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> Docker
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> Kubernetes
                  </p>
                  <p>
                    <span className="terminal-green">✓</span> Terraform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">ABOUT ME</p>
              <h2>Building practical cloud & DevOps solutions.</h2>
            </div>

            <div className="about-grid">
              <div className="about-main">
                <p>
                  I am an early-career AWS & DevOps Engineer with a Bachelor
                  of Computer Applications degree from Darshan College.
                </p>

                <p>
                  My learning journey has focused on understanding how
                  applications move from source code to reliable deployments
                  using cloud infrastructure, containers, automation, and
                  monitoring.
                </p>

                <p>
                  I enjoy working with Linux, Git, Docker, Kubernetes,
                  Terraform, and AWS while continuously developing my
                  understanding of automation and infrastructure practices.
                </p>
              </div>

              <div className="education-card">
                <p className="card-label">EDUCATION</p>
                <h3>Bachelor of Computer Applications</h3>
                <p>Darshan College</p>
                <span>2024</span>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">TECHNICAL SKILLS</p>
              <h2>Tools I work with.</h2>
              <p>
                A practical technology stack built around cloud,
                infrastructure, automation, containers, and monitoring.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div className="skill-card" key={skill}>
                  <span className="skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3>{skill}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">EXPERIENCE</p>
              <h2>Hands-on internship experience.</h2>
            </div>

            <div className="experience-card">
              <div className="experience-header">
                <div>
                  <p className="card-label">DEVOPS INTERN</p>
                  <h3>MNP Technologies</h3>
                  <p>Bangalore, Karnataka</p>
                </div>

                <span className="experience-tag">Internship</span>
              </div>

              <p className="experience-intro">
                During my internship at MNP Technologies, I gained practical
                exposure to cloud and DevOps technologies and worked on
                hands-on tasks related to deployment, automation, and
                infrastructure.
              </p>

              <div className="experience-list">
                <div>
                  <span>01</span>
                  <p>Worked with AWS cloud services and infrastructure concepts.</p>
                </div>

                <div>
                  <span>02</span>
                  <p>Used Linux for system and deployment tasks.</p>
                </div>

                <div>
                  <span>03</span>
                  <p>Practiced Git & GitHub for version control.</p>
                </div>

                <div>
                  <span>04</span>
                  <p>Containerized applications using Docker.</p>
                </div>

                <div>
                  <span>05</span>
                  <p>
                    Worked with Kubernetes for application deployment and
                    management.
                  </p>
                </div>

                <div>
                  <span>06</span>
                  <p>
                    Used Terraform for Infrastructure as Code and AWS
                    infrastructure provisioning.
                  </p>
                </div>

                <div>
                  <span>07</span>
                  <p>Practiced Bash scripting for automation.</p>
                </div>

                <div>
                  <span>08</span>
                  <p>
                    Troubleshot basic application, container, Kubernetes,
                    and infrastructure issues.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">FEATURED PROJECT</p>
              <h2>CloudForge</h2>
              <p>
                End-to-End DevOps Automation & Application Deployment on AWS
              </p>
            </div>

            <article className="project-card">
              <div className="project-number">01</div>

              <div className="project-content">
                <p className="card-label">DEVOPS / AWS</p>
                <h3>CloudForge</h3>

                <p className="project-description">
                  A practical end-to-end DevOps project demonstrating how an
                  application can be containerized, deployed, automated,
                  monitored, and supported using modern DevOps tools and AWS
                  cloud infrastructure.
                </p>

                <div className="project-stack">
                  <span>AWS</span>
                  <span>Linux</span>
                  <span>Git</span>
                  <span>GitHub</span>
                  <span>Docker</span>
                  <span>Kubernetes</span>
                  <span>Terraform</span>
                  <span>Bash</span>
                </div>

                <a
                  href="https://github.com/AYESHA-BI/devops"
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  View Project on GitHub <span>↗</span>
                </a>
              </div>

              <div className="project-visual">
                <div className="architecture-box">
                  <div className="architecture-node">Git</div>
                  <div className="architecture-arrow">↓</div>
                  <div className="architecture-node">Docker</div>
                  <div className="architecture-arrow">↓</div>
                  <div className="architecture-node">Kubernetes</div>
                  <div className="architecture-arrow">↓</div>
                  <div className="architecture-node">AWS</div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="resume" className="section resume-section">
          <div className="container resume-container">
            <div>
              <p className="eyebrow">RESUME</p>

              <h2>
                Let's connect my experience with your team.
              </h2>

              <p>
                Explore my education, technical skills, internship experience,
                and DevOps project work.
              </p>
            </div>

            <a href="#contact" className="button primary">
              Request Resume
            </a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">CONTACT</p>

              <h2>Let's build something reliable.</h2>

              <p>
                I'm open to opportunities where I can contribute, learn,
                and grow as an AWS & DevOps Engineer.
              </p>
            </div>

            <div className="contact-grid">
              <a
                href="mailto:ayeshabi2004@gmail.com"
                className="contact-card"
              >
                <span className="contact-label">EMAIL</span>
                <h3>ayeshabi2004@gmail.com</h3>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://www.linkedin.com/in/ayesha-bi-873a0233a"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <span className="contact-label">LINKEDIN</span>
                <h3>Connect with me</h3>
                <span className="contact-arrow">↗</span>
              </a>

              <a
                href="https://github.com/AYESHA-BI/Ayesha-portfolio"
                target="_blank"
                rel="noreferrer"
                className="contact-card"
              >
                <span className="contact-label">GITHUB</span>
                <h3>View my code</h3>
                <span className="contact-arrow">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Ayesha Bi</strong>
            <span>AWS & DevOps Engineer</span>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
