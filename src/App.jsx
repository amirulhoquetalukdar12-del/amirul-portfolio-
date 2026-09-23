import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'light'
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Tutoring Inquiry / Teaching Opportunity',
    message: '',
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  const showToast = (text) => {
    setToastMessage(text)
    setTimeout(() => {
      setToastMessage('')
    }, 3000)
  }

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(
      () => showToast(`Copied ${label} to clipboard!`),
      () => showToast(`Failed to copy ${label}`)
    )
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const mailtoUrl = `mailto:amirulhoqueac@gmail.com?subject=${encodeURIComponent(
      contactForm.subject + (contactForm.name ? ` from ${contactForm.name}` : '')
    )}&body=${encodeURIComponent(
      `Name: ${contactForm.name}\nEmail / Contact: ${contactForm.email}\n\nMessage:\n${contactForm.message}`
    )}`
    window.location.href = mailtoUrl
    showToast('Opening email client...')
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="app-container">
      {/* Background ambient glow highlights */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Sticky Navbar */}
      <header className="navbar">
        <div className="content-wrapper nav-content">
          <a href="#" className="nav-brand">
            <div className="brand-avatar">A</div>
            <span>Amirul Hoque Talukdar</span>
          </a>

          <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a
                href="#about"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#scholarships"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Scholarships
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              onClick={handlePrint}
              className="btn-secondary"
              title="Print or Save Resume as PDF"
              aria-label="Print Resume"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9"></polyline>
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                <rect x="6" y="14" width="12" height="8"></rect>
              </svg>
              <span>Resume PDF</span>
            </button>

            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              )}
            </button>

            <a href="#contact" className="btn-primary">
              <span>Connect</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {mobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="content-wrapper">
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Available for Teaching &amp; Tutoring Opportunities</span>
            </div>

            <h1 className="hero-title">
              Hi, I&apos;m <span className="gradient-text">Amirul Hoque Talukdar</span>
            </h1>

            <p className="hero-subtitle">
              Mathematics &amp; Science Educator • Mechanical Engineering Student @ Jamia Millia Islamia
            </p>

            <p className="hero-description">
              Passionate educator with proven experience in personalized academic guidance for
              high school students. Focused on conceptual clarity, rigorous problem-solving, and
              cultivating genuine scientific curiosity in Mathematics and Physics.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>Get in Touch</span>
              </a>

              <a
                href="https://wa.me/919387793997?text=Hi%20Amirul,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20teaching/tutoring."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <span>WhatsApp Chat</span>
              </a>

              <button onClick={handlePrint} className="btn-secondary">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 6 2 18 2 18 9"></polyline>
                  <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                  <rect x="6" y="14" width="12" height="8"></rect>
                </svg>
                <span>Print Resume</span>
              </button>

              <a
                href="https://www.linkedin.com/in/amirul-hoque-talukdar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="contact-quick-pills">
              <div className="quick-pill">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>New Delhi, India</span>
              </div>

              <div
                className="quick-pill"
                onClick={() => copyToClipboard('amirulhoqueac@gmail.com', 'Email')}
                style={{ cursor: 'pointer' }}
                title="Click to copy email"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span>amirulhoqueac@gmail.com</span>
              </div>

              <div
                className="quick-pill"
                onClick={() => copyToClipboard('+919387793997', 'Phone')}
                style={{ cursor: 'pointer' }}
                title="Click to copy phone"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 9387793997</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Row */}
        <section className="content-wrapper">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">5+</div>
              <div className="stat-label">Class X Students Mentored</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">91.3%</div>
              <div className="stat-label">Academic Distinction (Class X)</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">2x</div>
              <div className="stat-label">Ajmal Foundation Scholar</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">5</div>
              <div className="stat-label">Languages Known</div>
            </div>
          </div>
        </section>

        {/* Career Objective & Pedagogical Pillars */}
        <section id="about" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Career Objective &amp; Philosophy
              </span>
              <h2 className="section-title">Nurturing Scientific Curiosity</h2>
              <p className="section-desc">
                Dedicated to empowering young minds with strong conceptual foundations in Mathematics
                and Science.
              </p>
            </div>

            <div className="about-grid">
              <div className="objective-box">
                <div>
                  <div className="quote-icon">“</div>
                  <p className="objective-text">
                    To secure a teaching position where I can apply my strong foundation in
                    Mathematics and Science, excellent communication skills, and passion for
                    education to inspire students and help them achieve academic excellence. I aim to
                    create a positive and engaging learning environment that promotes critical
                    thinking, curiosity, and overall student development.
                  </p>
                </div>
                <div className="objective-footer">
                  <div className="brand-avatar">A</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
                      Amirul Hoque Talukdar
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      B.Tech (Mechanical Engineering), Jamia Millia Islamia
                    </div>
                  </div>
                </div>
              </div>

              <div className="pillars-grid">
                <div className="pillar-item">
                  <div className="pillar-icon-box">🧠</div>
                  <div className="pillar-content">
                    <h4>Conceptual Focus</h4>
                    <p>
                      Breaking down complex STEM principles into intuitive, first-principles logic rather than rote memorization.
                    </p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">🎯</div>
                  <div className="pillar-content">
                    <h4>Paced Guidance</h4>
                    <p>
                      Customizing lesson plans to individual learning speeds, ensuring every doubt is resolved patiently.
                    </p>
                  </div>
                </div>

                <div className="pillar-item">
                  <div className="pillar-icon-box">📝</div>
                  <div className="pillar-content">
                    <h4>Structured Exam Prep</h4>
                    <p>
                      Instilling time-management strategies, rigorous answer-writing techniques, and systematic revision cycles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Teaching Experience Section */}
        <section id="experience" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                Experience
              </span>
              <h2 className="section-title">Teaching Experience</h2>
              <p className="section-desc">
                Over 2+ years of providing dedicated academic support, mentorship, and exam preparation.
              </p>
            </div>

            <div className="experience-container">
              <div className="exp-main-card">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role-title">Home Tutor — Mathematics &amp; Science</h3>
                    <div className="exp-org">Independent Tutoring • New Delhi</div>
                  </div>
                  <div className="exp-badge">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                    <span>2024 – Present</span>
                  </div>
                </div>

                <div className="exp-highlights-grid">
                  <div className="highlight-box">
                    <div className="highlight-grade">
                      <span>📘</span> Class X Board Prep
                    </div>
                    <p className="highlight-desc">
                      Taught five Class X students, providing focused board exam coaching, personalised guidance, and doubt-clearing sessions.
                    </p>
                  </div>

                  <div className="highlight-box">
                    <div className="highlight-grade">
                      <span>⚛️</span> Class VIII Math &amp; Physics
                    </div>
                    <p className="highlight-desc">
                      Taught Mathematics and Physics to Class VIII students, grounding fundamental concepts in algebra, geometry, and mechanics.
                    </p>
                  </div>

                  <div className="highlight-box">
                    <div className="highlight-grade">
                      <span>🔬</span> Class VI STEM Foundations
                    </div>
                    <p className="highlight-desc">
                      Provided foundational Mathematics and Science guidance to Class VI students, fostering early curiosity and scientific habits.
                    </p>
                  </div>
                </div>

                <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '14px', color: 'var(--text-primary)' }}>
                  Key Pedagogical Methodologies:
                </h4>

                <ul className="methodology-list">
                  <li className="methodology-item">
                    <svg
                      className="check-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Explained complex concepts tailored according to individual student learning levels and pace.
                    </span>
                  </li>

                  <li className="methodology-item">
                    <svg
                      className="check-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Assisted students with problem-solving frameworks, examination preparation, and daily doubt clarification.
                    </span>
                  </li>

                  <li className="methodology-item">
                    <svg
                      className="check-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Maintained a student-focused learning environment with primary emphasis on deep conceptual understanding.
                    </span>
                  </li>

                  <li className="methodology-item">
                    <svg
                      className="check-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>
                      Fostered critical thinking, active participation, and confidence in approaching challenging numericals.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Educational Qualifications Section */}
        <section id="education" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                </svg>
                Academics
              </span>
              <h2 className="section-title">Educational Qualifications</h2>
              <p className="section-desc">
                Academic track record reflecting consistent excellence in STEM subjects.
              </p>
            </div>

            <div className="education-grid">
              <div className="edu-card edu-card-current">
                <div>
                  <div className="edu-year">2025 – Present</div>
                  <h3 className="edu-degree">B.Tech in Mechanical Engineering</h3>
                  <div className="edu-school">Jamia Millia Islamia, New Delhi</div>
                </div>
                <div className="edu-result-box">
                  <span className="result-label">Status</span>
                  <span className="result-value">Pursuing</span>
                </div>
              </div>

              <div className="edu-card">
                <div>
                  <div className="edu-year">2025</div>
                  <h3 className="edu-degree">Class XII (Senior Secondary)</h3>
                  <div className="edu-school">Ajmal Senior Secondary School</div>
                </div>
                <div className="edu-result-box">
                  <span className="result-label">Result Score</span>
                  <span className="result-value">83.60%</span>
                </div>
              </div>

              <div className="edu-card">
                <div>
                  <div className="edu-year">2023</div>
                  <h3 className="edu-degree">Class X (Secondary)</h3>
                  <div className="edu-school">Indira Gandhi High School</div>
                </div>
                <div className="edu-result-box">
                  <span className="result-label">Result Score</span>
                  <span className="result-value">91.33%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scholarships & Achievements Section */}
        <section id="scholarships" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Honors
              </span>
              <h2 className="section-title">Scholarships &amp; Achievements</h2>
              <p className="section-desc">
                Recognition received for outstanding academic performance and scholastic potential.
              </p>
            </div>

            <div className="scholarship-grid">
              <div className="scholarship-card">
                <div className="award-icon-box">🏆</div>
                <div className="award-info">
                  <h4>Fully Sponsored JEE Coaching Programme</h4>
                  <div className="award-org">Ajmal Foundation • Classes XI &amp; XII</div>
                  <p className="award-desc">
                    Awarded a 100% sponsored intensive JEE coaching programme for senior secondary
                    years by the Ajmal Foundation in competitive recognition of high academic merit and
                    potential.
                  </p>
                </div>
              </div>

              <div className="scholarship-card">
                <div className="award-icon-box">🌟</div>
                <div className="award-info">
                  <h4>Monthly Merit Scholarship</h4>
                  <div className="award-org">Ajmal Foundation • Ongoing</div>
                  <p className="award-desc">
                    Currently receiving a recurring monthly merit scholarship from the Ajmal Foundation
                    in honor of sustained academic distinction and commitment to educational growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Languages Section */}
        <section id="skills" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
                Capabilities
              </span>
              <h2 className="section-title">Key Skills &amp; Languages</h2>
              <p className="section-desc">
                Core competencies across teaching, analytical reasoning, and interpersonal leadership.
              </p>
            </div>

            <div className="skills-languages-wrapper">
              <div>
                <div className="skills-group-card">
                  <h3 className="skills-group-title">
                    <span>📚</span> Teaching &amp; Pedagogical Skills
                  </h3>
                  <div className="skills-tags-wrap">
                    <span className="skill-tag">Strong Communication Skills</span>
                    <span className="skill-tag">Presentation Skills</span>
                    <span className="skill-tag">Patience</span>
                    <span className="skill-tag">Individualized Mentorship</span>
                    <span className="skill-tag">Doubt Clarification</span>
                    <span className="skill-tag">Concept Simplification</span>
                    <span className="skill-tag">Exam Preparation</span>
                  </div>
                </div>

                <div className="skills-group-card">
                  <h3 className="skills-group-title">
                    <span>💡</span> Analytical &amp; Leadership Skills
                  </h3>
                  <div className="skills-tags-wrap">
                    <span className="skill-tag">Problem Solving</span>
                    <span className="skill-tag">Critical Thinking</span>
                    <span className="skill-tag">Team Leadership</span>
                    <span className="skill-tag">Teamwork</span>
                    <span className="skill-tag">Time Management</span>
                    <span className="skill-tag">Adaptability</span>
                    <span className="skill-tag">Attention to Detail</span>
                    <span className="skill-tag">Computer Proficiency</span>
                  </div>
                </div>
              </div>

              <div className="languages-box">
                <h3 className="skills-group-title">
                  <span>🌐</span> Languages Known
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                  Effective multilingual communication across 5 languages:
                </p>
                <div className="lang-list">
                  <div className="lang-item">
                    <span className="lang-name">English</span>
                    <span className="lang-badge">Fluent</span>
                  </div>
                  <div className="lang-item">
                    <span className="lang-name">Hindi</span>
                    <span className="lang-badge">Fluent</span>
                  </div>
                  <div className="lang-item">
                    <span className="lang-name">Urdu</span>
                    <span className="lang-badge">Proficient</span>
                  </div>
                  <div className="lang-item">
                    <span className="lang-name">Bengali</span>
                    <span className="lang-badge">Proficient</span>
                  </div>
                  <div className="lang-item">
                    <span className="lang-name">Assamese</span>
                    <span className="lang-badge">Native / Fluent</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Connect Section */}
        <section id="contact" className="section">
          <div className="content-wrapper">
            <div className="section-header">
              <span className="section-tag">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                Get In Touch
              </span>
              <h2 className="section-title">Let&apos;s Connect</h2>
              <p className="section-desc">
                Feel free to reach out for tutoring requirements, teaching opportunities, or collaborative projects.
              </p>
            </div>

            <div className="contact-grid">
              <div className="contact-card">
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Direct Contact Channels
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                    Available for home tutoring in New Delhi and online sessions across India.
                  </p>

                  <div className="contact-methods">
                    <div className="contact-item">
                      <div className="contact-item-left">
                        <div className="contact-item-icon">✉️</div>
                        <div>
                          <div className="contact-item-label">Email Address</div>
                          <div className="contact-item-val">amirulhoqueac@gmail.com</div>
                        </div>
                      </div>
                      <button
                        className="copy-btn"
                        onClick={() => copyToClipboard('amirulhoqueac@gmail.com', 'Email')}
                      >
                        Copy
                      </button>
                    </div>

                    <div className="contact-item">
                      <div className="contact-item-left">
                        <div className="contact-item-icon">📞</div>
                        <div>
                          <div className="contact-item-label">Phone &amp; WhatsApp</div>
                          <div className="contact-item-val">+91 9387793997</div>
                        </div>
                      </div>
                      <button
                        className="copy-btn"
                        onClick={() => copyToClipboard('+919387793997', 'Phone')}
                      >
                        Copy
                      </button>
                    </div>

                    <div className="contact-item">
                      <div className="contact-item-left">
                        <div className="contact-item-icon">💼</div>
                        <div>
                          <div className="contact-item-label">LinkedIn Profile</div>
                          <div className="contact-item-val">amirul-hoque-talukdar</div>
                        </div>
                      </div>
                      <a
                        href="https://www.linkedin.com/in/amirul-hoque-talukdar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="copy-btn"
                        style={{ display: 'inline-flex', alignItems: 'center' }}
                      >
                        Visit
                      </a>
                    </div>

                    <div className="contact-item">
                      <div className="contact-item-left">
                        <div className="contact-item-icon">📍</div>
                        <div>
                          <div className="contact-item-label">Current Location</div>
                          <div className="contact-item-val">New Delhi, India</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href="mailto:amirulhoqueac@gmail.com"
                    className="btn-primary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>Send Email</span>
                  </a>

                  <a
                    href="https://wa.me/919387793997?text=Hi%20Amirul,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20teaching/tutoring."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href="tel:+919387793997"
                    className="btn-secondary"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <span>Call Now</span>
                  </a>
                </div>
              </div>

              <div className="message-box">
                <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  Send a Quick Inquiry
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                  Have a student needing Math &amp; Science mentorship? Send a message directly.
                </p>

                <form className="quick-send-form" onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Parent / Student Name"
                      value={contactForm.name}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Your Email or Contact</label>
                    <input
                      id="email"
                      type="text"
                      className="form-input"
                      placeholder="e.g. yourname@example.com or phone"
                      value={contactForm.email}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message / Requirements</label>
                    <textarea
                      id="message"
                      className="form-textarea"
                      placeholder="Mention student class/grade, subjects, or tutoring schedule requirements..."
                      value={contactForm.message}
                      onChange={(e) =>
                        setContactForm({ ...contactForm, message: e.target.value })
                      }
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                    <span>Send Inquiry via Email</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Declaration Section */}
        <section className="declaration-section">
          <div className="content-wrapper">
            <div className="declaration-box">
              <p className="declaration-text">
                &ldquo;I hereby declare that the information provided above is true and correct to the
                best of my knowledge and belief.&rdquo;
              </p>
              <div className="declaration-sig">
                <div className="sig-name">Amirul Hoque Talukdar</div>
                <div className="sig-place">Place: New Delhi</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="content-wrapper footer-content">
          <div>
            &copy; {new Date().getFullYear()} Amirul Hoque Talukdar. All rights reserved.
          </div>
          <div>
            <a href="#" className="back-to-top-btn">
              <span>Back to Top</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="12" y1="19" x2="12" y2="5"></line>
                <polyline points="5 12 12 5 19 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Notification Toast */}
      {toastMessage && (
        <div className="toast">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            style={{ color: 'var(--success)' }}
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  )
}
