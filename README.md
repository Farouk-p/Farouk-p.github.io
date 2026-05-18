# QA Portfolio Website

A modern, responsive single-page portfolio website for a Quality Assurance Engineer.

## 🚀 Features

- Sleek dark theme with green/blue accent colors
- Fully responsive (mobile, tablet, desktop)
- Smooth scroll navigation + mobile hamburger menu
- Scroll-reveal animations
- Six sections: Hero, About, Skills, Experience, Projects, Contact
- Working contact form (uses `mailto:` fallback)
- Zero dependencies — pure HTML, CSS, and JavaScript

## 📁 Project Structure

```
QA-Portfolio/
├── index.html      # Main HTML
├── styles.css      # All styling
├── script.js       # Interactivity
└── README.md       # This file
```

## 🛠️ How to Run Locally

Just open `index.html` in your browser:

```bash
open index.html
```

Or serve it via a tiny local server:

```bash
# With Python
python3 -m http.server 8000

# With Node
npx serve .
```

Then open http://localhost:8000

## ✏️ How to Customize

### 1. Personal Info

In `index.html`, replace:

- `Your Name` — with your real name
- `your.email@example.com` — with your real email
- `linkedin.com/in/yourprofile` — with your LinkedIn
- `github.com/yourusername` — with your GitHub

### 2. About Section

Edit the paragraphs inside `<section id="about">` to tell your story.

### 3. Skills

Modify the skill cards in `<section id="skills">` to match your stack.

### 4. Experience

Update the `.timeline-item` blocks with your real work history.

### 5. Projects

Replace each `.project-card` with your real testing projects, GitHub links, and case studies.

### 6. Colors / Theme

Change CSS variables at the top of `styles.css`:

```css
:root {
  --primary: #00d9a3; /* main accent (green) */
  --accent: #6c8cff; /* secondary accent (blue) */
  --bg: #0a0e1a; /* page background */
}
```

## 🚢 Deployment

Easily deploy this static site to:

- **GitHub Pages** — push to a repo and enable Pages
- **Netlify** — drag & drop the folder at https://app.netlify.com/drop
- **Vercel** — `vercel` CLI or import from GitHub
- **Cloudflare Pages** — connect a GitHub repo

## 📝 License

Free to use and modify for personal portfolio use.
