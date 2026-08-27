<div align="center">

# 🌟 Elham Rivaz — Personal Developer Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Motion](https://img.shields.io/badge/Motion-12.2-FF4154?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev/)
[![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-Automated_Deploy-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

<p align="center">
  A personal developer portfolio crafted for <strong>Elham Rivaz</strong> (AI/ML Engineer & Computer Engineering Graduate, Ranked #1, GPA 19.20/20).
  <br />
  Designed with a <strong>macOS Dashboard Aesthetic</strong>, <strong>Trilingual Localization (EN / FA / DE)</strong> with dynamic RTL transitions, <strong>Live Accuracy Counter</strong>, and interactive milestone spotlights.
</p>

</div>

---

## 📑 Table of Contents

- [✨ Key Features](#-key-features)
- [🛠️ Tech Stack & Architecture](#️-tech-stack--architecture)
- [📁 Project Structure](#-project-structure)
- [🚀 Quick Start & Local Setup](#-quick-start--local-setup)
- [🌐 GitHub Pages Deployment Guide](#-github-pages-deployment-guide)
- [☁️ Alternative Deployment Platforms](#️-alternative-deployment-platforms)
- [🖼️ Media & Asset Management](#️-media--asset-management)
- [🌍 Adding & Editing Translations](#-adding--editing-translations)
- [📐 Code Quality & Google Style Standards](#-code-quality--google-style-standards)
- [📄 License & Credits](#-license--credits)

---

## ✨ Key Features

- 🖥️ **macOS Window Chrome & Dashboard Art Direction:** Sleek window chrome with traffic light controls, glassmorphism backdrop blurs, floating toolbars, and responsive docking layouts.
- 🌐 **Native Trilingual Engine (EN / FA / DE):** Instant, smooth layout transitions between English (LTR), Persian (RTL with native *Vazirmatn* & *Estedad* typography), and German (LTR).
- 🌓 **Dynamic Theme System:** Seamless light/dark mode morphing with auto-detection of operating system preferences and persistent `localStorage` synchronization.
- ⚡ **Live Accuracy Leap Benchmark:** Smooth numerical count-up visualization demonstrating the **58.57% → 97.86%** model benchmark breakthrough with exponential easing curves.
- 🎓 **Graduation & LinkedIn Milestone Spotlight:** Interactive 3-slide graduation carousel with high-resolution lightbox, auto-fallback image loader, and verified ranking badge.
- 🌸 **Interactive Sakura Mode:** Japanese cherry blossom particle physics canvas overlay with particle drift and toggle controls.
- 📱 **100% Responsive & Accessible:** Designed with WCAG AA contrast standards, mobile touch targets (44px+), and fluid desktop scaling.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime & Core** | `React 19` + `TypeScript 5.8` | Component lifecycle, strict typing, and high performance |
| **Bundler & Tooling** | `Vite 6` | Instant HMR and tree-shaken static production bundle |
| **Styling & CSS** | `Tailwind CSS v4` + `@tailwindcss/vite` | Modern utility classes and CSS variables |
| **Motion & Physics** | `motion/react` | Smooth physics-based spring animations and modal transitions |
| **Iconography** | `lucide-react` | Clean, standardized vector icons |
| **Typography** | `Fontshare` + `Google Fonts` | *Cabinet Grotesk*, *General Sans*, *Vazirmatn*, *Estedad*, *JetBrains Mono* |
| **CI/CD** | `GitHub Actions` | Automated build and deployment to GitHub Pages |

---

## 📁 Project Structure

```
elham-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   └── media/
│       ├── blog/                 # Blog post cover images (.jpg, .jpeg, .svg)
│       └── linkedin/
│           └── graduation/       # Graduation milestone slides (slide-1/2/3.jpeg)
├── src/
│   ├── components/
│   │   ├── layout/               # Global shell (Navbar, Footer)
│   │   ├── sections/             # Core sections (Hero, About, Experience, Projects, Resume, Blog, Contact)
│   │   └── ui/                   # Modular UI atoms (WindowChrome, SkillPill, Lightbox, etc.)
│   ├── context/                  # React Context providers (Language, Theme, Sakura)
│   ├── data/                     # Structured typed data (Profile, Projects, Experience, Blog, Skills)
│   ├── hooks/                    # Reusable custom hooks (useCountUp, useScrollbarActivity)
│   ├── i18n/                     # Translation dictionaries (en.ts, fa.ts, de.ts, index.ts)
│   ├── types/                    # TypeScript interfaces following Google Style Guide
│   ├── App.tsx                   # Main application layout orchestrator
│   ├── index.css                 # Global CSS and Tailwind directives
│   └── main.tsx                  # Application entry point
├── index.html                    # Root HTML with SEO, OpenGraph & JSON-LD schema
├── metadata.json                 # Project capabilities & metadata
├── package.json                  # NPM packages & build scripts
├── tsconfig.json                 # TypeScript strict compiler configuration
└── vite.config.ts                # Vite build and plugin setup
```

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- **Node.js**: `v18.0.0` or higher (Node 20+ recommended)
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/elham-portfolio.git
   cd elham-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or: pnpm install / yarn install / bun install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify TypeScript & Linting:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
   The compiled static files will be generated in the `dist/` directory.

---

## 🌐 GitHub Pages Deployment Guide

This project includes a production-ready GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated one-click deployment.

### Step 1: Set Base Path (If using `username.github.io/repo-name/`)
If deploying to a sub-path repository (e.g. `https://elhamrivaz.github.io/portfolio/`), configure the `base` property in `vite.config.ts`:

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/portfolio/', // Replace with your repository name, or '/' for user pages / custom domains
  plugins: [react(), tailwindcss()],
});
```

### Step 2: Enable GitHub Pages in Repository Settings
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: release production portfolio"
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.

3. The workflow will automatically trigger, build the application, and publish your site at:
   `https://<your-username>.github.io/<repo-name>/`

---

## ☁️ Alternative Deployment Platforms

### Vercel
1. Import your GitHub repository into [Vercel](https://vercel.com).
2. Framework Preset: **Vite**.
3. Root Directory: `./`.
4. Build Command: `npm run build`.
5. Output Directory: `dist`.
6. Click **Deploy**.

### Cloudflare Pages
1. Connect your repository in the Cloudflare Dashboard.
2. Build command: `npm run build`.
3. Build output directory: `dist`.

---

## 🖼️ Media & Asset Management

All images and media are located in `/public/media/`. The application features an **Auto-Fallback Pipeline** that attempts to load files in the following order:
$$\text{.jpeg} \longrightarrow \text{.jpg} \longrightarrow \text{.png} \longrightarrow \text{.webp} \longrightarrow \text{.svg (Fallback Vector)}$$

### Image Upload Reference Table

| Target Location | Recommended File Name | Format | Purpose |
| :--- | :--- | :--- | :--- |
| `/public/media/linkedin/graduation/` | `slide-1.jpeg` | `.jpeg`, `.jpg`, `.png` | **Slide 1**: Bachelor's Degree & #1 Rank Certificate |
| `/public/media/linkedin/graduation/` | `slide-2.jpeg` | `.jpeg`, `.jpg`, `.png` | **Slide 2**: Graduation Ceremony with Faculty & Peers |
| `/public/media/linkedin/graduation/` | `slide-3.jpeg` | `.jpeg`, `.jpg`, `.png` | **Slide 3**: Future Horizons & AI Research Vision |
| `/public/media/blog/` | `01-eth-zurich-main-building.jpg` | `.jpg`, `.jpeg`, `.png` | Cover for ETH Zurich vision post |

---

## 🌍 Adding & Editing Translations

Translations are organized in modular dictionary files in `/src/i18n/`:
- `src/i18n/en.ts`: English master dictionary.
- `src/i18n/fa.ts`: Persian (Farsi) translation dictionary.
- `src/i18n/de.ts`: German translation dictionary.

To add a new translation string:
1. Add the key and English text to `src/i18n/en.ts`.
2. Add the corresponding Persian translation to `src/i18n/fa.ts`.
3. Add the German translation to `src/i18n/de.ts`.
4. TypeScript will automatically validate type safety across all language files.

---

## 📐 Code Quality & Google Style Standards

- **Google TypeScript Style Guide**: All components and interfaces are strictly typed, well-documented with JSDoc, and follow consistent modular structures.
- **Anti-Slop Visual Hierarchy**: Clean typographic scales, mathematical padding ratios ($2\times$ horizontal vs vertical), and sophisticated contrast palettes.
- **Performance**: Zero runtime overhead, lazy component loading, and GPU-accelerated CSS transitions.

---

## 📄 License & Credits

Released under the [MIT License](LICENSE).  
Designed and built with passion for **Elham Rivaz**.
