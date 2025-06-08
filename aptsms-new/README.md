# APTSMS Website

A modern, responsive website for the Andhra Pradesh & Telangana Society for Mathematical Sciences (APTSMS), built with React, Vite, and Tailwind CSS.

## Features
- Home, About, Contact, Events, Gallery, Membership, and more
- Executive Council and Members Directory
- President's Message and Announcements
- Annual Congress, Endowment Lectures, International Conferences
- eMagazine and By-Laws
- Responsive design with modern UI components
- SPA navigation with React Router

## Tech Stack
- [React](https://react.dev/) (with hooks)
- [Vite](https://vitejs.dev/) (fast dev/build)
- [Tailwind CSS](https://tailwindcss.com/) (utility-first styling)
- [React Router](https://reactrouter.com/)
- [Lucide React](https://lucide.dev/) (icons)

## Project Structure
```
src/
  App.jsx            # Main app layout
  assets/            # Static assets (logo, images)
  components/
    Header.jsx       # Top navigation/header
    Footer.jsx       # Footer with navigation
    Navbar.jsx       # (if used)
    Id.jsx           # Executive council card
    Pages/           # All main pages (About, Home, Events, etc.)
    ui/              # Reusable UI components (Button, Card, Table, etc.)
  lib/
    routing-util.jsx # All route definitions
    utils.js         # (utility functions)
public/
  images/            # Council/member images
  MembershipRegistration/ # Membership form PDF
```

## Getting Started

1. **Install dependencies**
   ```sh
   npm install
   ```
2. **Run the development server**
   ```sh
   npm run dev
   ```
3. **Build for production**
   ```sh
   npm run build
   ```
4. **Preview production build**
   ```sh
   npm run preview
   ```

## Customization
- Update council/member images in `public/images/`
- Edit content in `src/components/Pages/`
- Update logo in `src/assets/logo.png`
- Adjust theme/colors in `tailwind.config.js` and `index.css`

## License
This project is for APTSMS and is not intended for commercial use.
