# Website for ООО НПП «ЭЛМО трейд»

![Deployment Status](https://img.shields.io/badge/deployment-live-brightgreen)
![Astro Badge](https://img.shields.io/badge/Astro-v5.13-ff5d01?logo=astro)

This repository contains the source code for the official website of ООО НПП «ЭЛМО трейд», a modern, fully responsive, and highly performant website built with Astro.

This project represents a complete architectural overhaul of a previous version, focusing on modern web standards, performance, and long-term maintainability.

## ✨ Key Features & Technical Highlights

This project was more than a simple redesign; it was a deep technical refactor. The key achievements include:

*   **Fully Responsive Design:** Every component and page has been meticulously crafted to provide a seamless and professional user experience on all devices, from large desktops to small mobile phones.

*   **Astro-Native Architecture:** The entire site has been converted to use a pure, "Astro-first" architecture. All interactive components (`Carousel`, `Galleries`, `Filters`) have been refactored from Preact into lightweight, self-contained Astro components with small, scoped vanilla JavaScript "islands."

*   **Performance Optimized:**
    *   **Zero Client-Side Frameworks:** The project ships no client-side frameworks like Preact or jQuery, resulting in a significantly smaller JavaScript footprint and faster load times.
    *   **Advanced Image Optimization:** All images are processed by Astro's native `<Image />` component, which automatically generates responsive `srcset`s, serves modern formats like WebP, and prevents content layout shift.
    *   **Scoped Styles:** All component-specific styles have been moved out of global stylesheets and are now scoped directly within each component, preventing style conflicts and improving organization.

*   **Clean & Maintainable Codebase:**
    *   **Component-Driven:** The UI is broken down into logical, reusable, single-file components.
    *   **Dynamic Data:** Components like the project filters and letter gallery derive their data dynamically from Astro's Content Collections, making the site easy to update without touching the code.
    *   **Automated Deployments:** The site is deployed via a professional CI/CD pipeline using GitHub Actions and `rsync`, ensuring fast, reliable, and consistent deployments.

## 🚀 Tech Stack

*   **Framework:** [Astro](https://astro.build/)
*   **Styling:** Vanilla CSS with Scoped Styles
*   **Interactivity:** Vanilla JavaScript (Astro Islands)
*   **Deployment:** GitHub Actions + `rsync`
*   **Hosting:** Majordomo (VPS)

## 📁 Project Structure

The core of the website lives within the `src/` directory, organized as follows:

*   `src/assets/`: Site-wide assets, primarily source images for optimization.
*   `src/components/`: Reusable, self-contained Astro components.
*   `src/content/`: Astro Content Collections for managing projects and services.
*   `src/layouts/`: The base templates for pages.
*   `src/pages/`: The files that define the site's routes and pages.

## ⚙️ Getting Started

### Prerequisites

*   Node.js (v20.x or higher recommended)

### Commands

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

3.  **Build for Production:**
    ```bash
    npm run build
    ```

## 🛰️ Deployment

Deployment is handled via two methods:

1.  **Automated CI/CD:** A push to the `main` branch will automatically trigger the GitHub Actions workflow defined in `.github/workflows/deploy.yml`. This workflow builds the site and deploys the `dist/` folder to the production server using `rsync` over SSH.

2.  **Manual Local Deploy:** For changes involving large media files (to conserve Git LFS bandwidth), the site can be deployed manually from a local machine by running:
    ```bash
    npm run deploy
    ```

---