# Yashovardhan Singh — Portfolio

A production-ready personal portfolio website built with React (Vite), Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Setup

### Prerequisites
- Node.js 18+ installed
- npm or pnpm

### Step 1 — Install dependencies

```bash
npm install
```

### Step 2 — Start development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Step 3 — Build for production

```bash
npm run build
```

Output is in the `dist/` folder. Ready to deploy to Vercel, Netlify, or GitHub Pages.

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx          # Entry point
    ├── App.jsx           # Root component
    ├── index.css         # Global styles + Tailwind
    └── components/
        ├── Navbar.jsx    # Sticky navbar with mobile menu
        ├── Hero.jsx      # Landing hero section
        ├── About.jsx     # About + code card
        ├── Projects.jsx  # Project cards grid
        ├── Skills.jsx    # Skill bars by category
        ├── Resume.jsx    # Timeline + download button
        ├── Contact.jsx   # Contact form + links
        └── Footer.jsx    # Footer
```

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 + Vite | Framework & bundler |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Google Fonts | Syne + DM Sans + JetBrains Mono |

---

## ✏️ Customization Checklist

1. **Personal info** — Update name, email, GitHub, LinkedIn in all components
2. **Resume** — Replace `/public/resume.pdf` with your actual PDF
3. **Projects** — Edit the `projects` array in `Projects.jsx`
4. **Skills** — Edit `skillGroups` in `Skills.jsx`
5. **Contact form** — Integrate [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com) in `Contact.jsx`

### Adding your resume PDF
Drop your PDF into the `public/` folder and name it `resume.pdf`:
```
portfolio/
└── public/
    └── resume.pdf   ← your file here
```

### Setting up contact form (Formspree)
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the endpoint URL
3. In `Contact.jsx`, replace the `handleSubmit` logic:
```js
const handleSubmit = async (e) => {
  e.preventDefault()
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  setSent(true)
}
```

---

## 🌐 Deployment

### Vercel (recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the dist/ folder at netlify.com
```

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Then run `npm run deploy`.

---

## 📄 License
MIT — free to use and customize.
