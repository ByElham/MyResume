<div align="center">

# ER | Electronic Resume

**A meticulously crafted digital portfolio, built with an obsession for motion design, micro-interactions, and pixel-perfect execution.**

[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-000?style=flat&logo=github&logoColor=white)](https://mohammad-hussein-dev.github.io/ER/)
[![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>

---

## 🧠 Architecture & Philosophy

This project is not just a template; it's a **design system implementation** and a study in frontend craftsmanship. The architecture prioritizes:

*   **Component-Driven Development:** Every piece of the UI is a self-contained, reusable component with its own logic and styling.
*   **Design Token Consistency:** Colors, shadows, and animations are not hardcoded but are driven by a centralized theme configuration, ensuring perfect harmony across light and dark modes.
*   **Performance-First Animations:** Complex animations (like the Spring Physics and Shimmer) are implemented using **CSS transforms** and **opacity**, which are GPU-accelerated and don't trigger layout recalculations (reflow/repaint), maintaining 60fps smoothness.
*   **Progressive Enhancement:** The core content (the resume text) is accessible even if JavaScript fails. Animations and interactions enhance the experience for capable browsers.

## 🏗️ Project Structure

The codebase follows a scalable and maintainable structure:

```
ER/
├── .github/                # GitHub configuration (Actions, etc.)
│   └── workflows/
│       └── deploy.yml      # Automated deployment to GitHub Pages
├── public/                 # Static assets (favicon, etc.)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Button.tsx      # ✨ The advanced, animated button system
│   │   └── Layout.tsx      # Main layout wrapper
│   ├── sections/           # Major page sections
│   │   └── ResumeSection.tsx # ✨ Core component with View/Download logic
│   ├── styles/             # Global styles & Tailwind config
│   │   └── globals.css     # Tailwind directives & custom animations
│   ├── hooks/              # Custom React hooks (e.g., useTheme)
│   ├── lib/                # Utility functions & helpers
│   ├── types/              # TypeScript type definitions
│   ├── data/               # Static data (resume content in JSON/TS)
│   ├── App.tsx             # Root application component
│   └── main.tsx            # Application entry point
├── index.html              # HTML template
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
└── README.md               # This file
```

## ✨ Signature Features & Interactions

What sets this resume apart are the **bespoke micro-interactions** that create a feeling of polish and intentionality.

### 🎯 The "Emerald Eye" View Button
A custom-styled button that solves a specific UX problem: previewing a PDF without forcing a download.
*   **Visual Distinction:** Uses a unique `emerald` accent color to differentiate it from the primary download action.
*   **Animated Feedback:** Features a custom `eye-blink` keyframe animation on hover. The icon subtly scales vertically (`scaleY(0.1)`) to create a blink effect, providing delightful affordance.
*   **Technical Implementation:** Built upon the shared `Button` component, inheriting all base animations (ripple, spring) while overriding color and adding its unique hover state.

```tsx
// Simplified conceptual implementation
const handleView = () => {
  window.open(resumePdfUrl, '_blank');
};

<Button
  variant="outline"
  className="group border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500"
  onClick={handleView}
>
  <Eye className="w-4 h-4 transition-transform group-hover:animate-eye-blink" />
  View
</Button>
```

### ⚡ Choreographed Animation System
The UI feels alive through a layered animation system:
1.  **Ripple Effect (Click):** A material-design-inspired ripple emanates from the click point, confirming user input.
2.  **Shimmer Sweep (Hover):** A subtle light sweep moves across the button's surface, drawing attention and signifying interactivity.
3.  **Spring Lift (Hover):** The button gently lifts (`translateY(-2px)`) with a spring-physics easing curve, creating a tactile, physical feel.

### 🎨 Adaptive Theming
*   **Token-Based:** All colors, shadows, and spacing are defined as CSS custom properties (variables) within `:root` and `[data-theme="dark"]`.
*   **Seamless Transition:** Theme switching is instant and smooth, with all colors transitioning elegantly using `transition: background-color 0.3s ease, color 0.3s ease`.

## 🛠️ Tech Stack

| Category | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | ![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react&logoColor=black) | UI library for building component-based interfaces. |
| **Language** | ![TypeScript](https://img.shields.io/badge/TypeScript-5.6.3-3178C6?style=flat&logo=typescript&logoColor=white) | Type-safe JavaScript for improved developer experience and code robustness. |
| **Build Tool** | ![Vite](https://img.shields.io/badge/Vite-6.0.5-646CFF?style=flat&logo=vite&logoColor=white) | Next-generation frontend build tool for lightning-fast HMR and optimized builds. |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.14-06B6D4?style=flat&logo=tailwindcss&logoColor=black) | Utility-first CSS framework for rapid, consistent UI development. |
| **Hosting** | ![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-000?style=flat&logo=github&logoColor=white) | Static site hosting directly from a GitHub repository. |
| **Automation** | GitHub Actions | CI/CD pipeline for automated testing and deployment. |

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation & Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Mohammad-Hussein-Dev/ER.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd ER
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    ```
4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build for Production

```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory, ready for deployment.

## 🚢 Deployment

This project is configured for **automatic deployment** to GitHub Pages via GitHub Actions.

1.  Simply push changes to the `main` branch.
2.  The `.github/workflows/deploy.yml` workflow will automatically:
    *   Install dependencies.
    *   Build the project.
    *   Deploy the contents of the `dist/` folder to the `gh-pages` branch.
    *   Your site will be live at `https://mohammad-hussein-dev.github.io/ER/` within a few minutes.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> ### ✨ A Note on Craft
> *This project was built with an uncompromising attention to detail—a belief that digital experiences can be both functional and beautiful. It is a quiet testament to the idea that code can be crafted with the same care as any other art form.*
>
> *A silent nod of appreciation to **Elham Rivas**, whose standard of elegance continues to inspire.*
