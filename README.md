# Farouk Popoola — QA Automation Engineer Portfolio

This is my personal professional portfolio built as a modern, high-performance web application utilizing **Next.js (App Router)** and **Vanilla CSS**. It showcases my 5+ years of experience in Quality Assurance (banking and fintech sectors), automation frameworks, API validation suites, load testing setups, and CI/CD quality gate pipelines.

---

## 💻 Tech Stack & Features

- **Framework**: [Next.js](https://nextjs.org/) (App Router & React) for fast page loading, optimal SEO, and modular codebase.
- **Styling**: Pure Vanilla CSS utilizing sleek CSS variables, harmony-curated dark mode theme, glassmorphic navigations, and fluid responsive grids.
- **Typography**: Zero-latency Google Fonts loaded via native Next.js `next/font/google` (`Inter` & `JetBrains Mono`).
- **Animations**: Custom client-side [Intersection Observer scroll-reveal wrapper](file:///Users/mac/Documents/QA-Portfolio/components/RevealOnScroll.js) that triggers beautiful slides and opacity transitions dynamically as sections/cards enter the viewport.
- **Form Handling**: Client-side React form state management with a dynamic fallback `mailto` trigger for secure and reliable communications.

---

## 📁 Project Structure

```text
QA-Portfolio/
├── app/
│   ├── globals.css     # Premium styling system, layout utilities, animations & responsive grids
│   ├── layout.js       # Core layout setting local fonts, meta tags, and global search/SEO descriptors
│   └── page.js         # Entry page assembling all modular section components
├── components/
│   ├── Navbar.js       # Responsive glass navbar with sticky scroll triggers and mobile hamburger toggle
│   ├── Hero.js         # Landing banner displaying roles, quick summaries, and statistics overview
│   ├── About.js        # Professional background summaries and mock QA testing terminal widget
│   ├── Skills.js       # Dynamic grid categorizing and listing manual/automated/API/Devops tools
│   ├── Experience.js   # Interactive and vertical timeline of professional QA milestones
│   ├── Projects.js     # Featured QA automation repositories and link assets
│   ├── Contact.js      # Controlled state contact form and connection anchors
│   ├── Footer.js       # Hydration-safe dynamic copyright footer
│   └── RevealOnScroll.js # Reusable Intersection Observer wrapper for animating viewport entrances
├── jsconfig.json       # Alias path maps configured to ease importing modular directories
├── next.config.mjs     # Custom Next.js optimization parameters
├── package.json        # Node dependency manifest and running script commands
└── README.md           # This file
```

---

## 🛠️ How to run locally

### 1. Install Dependencies

Install all standard Next.js and React modules:
```bash
npm install
```

### 2. Run the Development Server

Start a hot-reloading development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port specified by the terminal) to view the live site.

### 3. Build for Production

Compile and optimize the application into static HTML and client bundles:
```bash
npm run build
```

To run the compiled production build locally:
```bash
npm run start
```

---

## 🚢 Deployment

The portfolio is pre-configured and fully optimized to deploy seamlessly to:
- **Vercel** — Simply connect the repository to your Vercel Dashboard for instant, high-performance deployments on every git commit.
- **Netlify** — Connect and configure the project setting build command as `npm run build` and directory as `.next` or `out`.
