# Smile Life Dental Specialty Center

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC?logo=tailwind-css)

A high-end, cinematic web application built for the **Smile Life Dental Specialty Center**. This repository contains the front-end architecture, routing, and UI component library for the commercial website, designed to provide a luxury, concierge-level digital experience for patients and referring providers.

## Architecture & Tech Stack

This project is built on a modern, performance-optimized React stack:

- **Framework:** React 18 (via Vite for rapid HMR and optimized builds)
- **Routing:** React Router v6 (Client-side SPA routing)
- **Styling:** Tailwind CSS v3 (Utility-first CSS, heavily utilizing arbitrary values for precision)
- **Animations:** Framer Motion (`motion/react`) for fluid, hardware-accelerated scroll and layout animations
- **Icons:** Lucide React

## Project Structure

```text
src/
├── components/          # Reusable UI components (Navbar, Footer, Accordion)
├── lib/                 # Core utilities (e.g., Tailwind class merging via clsx/tailwind-merge)
├── pages/               # Top-level page route components (Home, About, Departments, etc.)
├── main.tsx             # Application entry point and router configuration
├── index.css            # Global stylesheet and Tailwind directives
```

## UI/UX Design Philosophy

The site employs a **"Cinematic Dark Mode"** aesthetic. Key design pillars include:
1. **Glassmorphism:** Extensive use of `backdrop-blur`, semi-transparent backgrounds, and high-z-index overlays to create depth.
2. **Fluid Typography:** Utilizing custom fonts (`font-headline`, `font-body`) with extreme tracking (`tracking-[0.6em]`) for premium micro-copy.
3. **Radial Lighting:** Eschewing hard borders in favor of `radial-gradient` backgrounds to simulate studio lighting.
4. **Mobile-First Luxury:** Touch targets are generously padded, and massive desktop margins are responsively constrained to ensure the mobile experience remains tight and deliberate.

## Development

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The compiled assets will be placed in the `dist/` directory, ready for deployment to any static hosting provider (Vercel, Netlify, AWS S3).

## Developer Notes

- **Scroll Lock:** The `Navbar` component handles viewport scroll locking when the mobile menu is active to prevent background scrolling. It also dynamically manages the `backdrop-blur` containing block behavior.
- **Accordion Logic:** The `DepartmentsAccordion` utilizes CSS flex-basis transitions rather than JS-driven height calculations to achieve 60fps buttery-smooth expansion/collapse mechanics.
- **Z-Index Stacking:** Strict z-index management is required. The mobile menu background uses `z-[90]`, and the main navigation bar uses `z-50`. Ensure new fixed elements respect this hierarchy.

---
*Developed for Smile Life Dental Specialty Center. All rights reserved.*
