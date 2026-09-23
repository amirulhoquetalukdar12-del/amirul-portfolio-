# Amirul Hoque Talukdar | Portfolio Website

A modern, responsive, and high-performance personal portfolio website for **Amirul Hoque Talukdar** — Mathematics & Science Educator, Academic Mentor, and Mechanical Engineering student at Jamia Millia Islamia, New Delhi.

---

## 🌟 Key Highlights & Features

- **Personalized Educator Profile**: Highlights academic achievements, tutoring experience, and pedagogical approach.
- **Dynamic Theming**: Seamless dark/light theme switch with persistent localStorage preference.
- **One-Click Resume Print / PDF**: Native window.print() functionality formatted with print-optimized CSS for generating clean PDF resumes.
- **Direct Communication Tools**:
  - One-click copy for email and phone number with instant toast feedback.
  - Interactive contact form with auto-formatted mailto: generator.
  - Direct WhatsApp chat integration.
  - Direct LinkedIn profile link.
- **Curated Sections**:
  - **About Me**: Teaching methodology, educational philosophy, and key strengths.
  - **Experience**: Academic guidance and home tutoring track record.
  - **Education**: Jamia Millia Islamia (B.Tech Mechanical) & Senior Secondary.
  - **Scholarships & Awards**: National & institutional merit recognitions.
  - **Skills Matrix**: Mathematics, Physics, Mechanical Engineering concepts, and Pedagogy.
- **Production Optimized**: Fast Vite build with relative asset links (./) for universal static hosting.

---

## 🛠️ Technology Stack

- **Frontend**: React 19, JavaScript (ESModules)
- **Tooling & Bundler**: Vite 8
- **Styling**: Vanilla CSS (Tailored Design System, CSS Variables, Glassmorphism & Animations)
- **Deployment**: GitHub Pages (via GitHub Actions) / Netlify

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

`ash
# Clone the repository
git clone https://github.com/amirulhoquetalukdar12-del/amirul-portfolio-.git

# Navigate to project folder
cd amirul-portfolio-

# Install dependencies
npm install
`

### Development Server

`ash
npm run dev
`

Visit http://localhost:5173 in your browser.

### Production Build

`ash
npm run build
`

The production-ready assets are compiled into the dist/ directory.

---

## 🌐 Deployment Options

### 1. GitHub Pages (Automated)
This repository includes a GitHub Actions workflow (.github/workflows/deploy.yml).
To activate GitHub Pages:
1. Go to your repository on GitHub: Settings > Pages.
2. Under **Build and deployment** > **Source**, choose **GitHub Actions**.
3. Every commit to main will automatically build and publish your site!

### 2. Netlify (Instant)
A 
etlify.toml file is included for instant deployment:
- **Netlify Drop**: Drag and drop the dist/ folder onto [Netlify Drop](https://app.netlify.com/drop).
- **Netlify CLI**: Run 
px netlify deploy --dir=dist --prod.

---

## 📬 Contact & Connect

- **Email**: amirulhoquetalukdar12-del@gmail.com / amirulhoqueac@gmail.com
- **Phone**: +91 9387793997
- **LinkedIn**: [amirul-hoque-talukdar](https://www.linkedin.com/in/amirul-hoque-talukdar)
- **Location**: New Delhi, India

---

Licensed under the MIT License.
