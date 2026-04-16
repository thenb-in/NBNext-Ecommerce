# NBNext-Ecommerce Documentation

Welcome to the **NBNext-Ecommerce** project documentation. This project is a React + TypeScript e-commerce frontend application built with Vite, Tailwind CSS, and Material UI.

## Table of Contents

| Document | Description |
|----------|-------------|
| [APPLICATION_DOC.md](./APPLICATION_DOC.md) | Application architecture, components, pages, and data flow |
| [TECHNICAL_DOC.md](./TECHNICAL_DOC.md) | Technical stack, build tooling, configuration, and developer setup |
| [USER_DOCS.md](./USER_DOCS.md) | End-user guide covering every screen and workflow |
| [TODO.md](./TODO.md) | Known issues, incomplete features, and actionable tasks |
| [ROADMAP.md](./ROADMAP.md) | Feature roadmap and future development plans |
| [REPO_SUMMARY.md](./REPO_SUMMARY.md) | High-level repository overview and file tree |

## Quick Start

```bash
cd ecommerce-frontend
npm install
npm run dev
```

The dev server starts at `http://localhost:5173` by default.

## Project Structure

```
NBNext-Ecommerce/
  ecommerce-frontend/        # Main application directory
    src/
      components/             # Reusable UI components
      pages/                  # Route-level page components
      utils/                  # Shared utility components
    public/                   # Static assets
    index.html                # HTML entry point
    vite.config.ts            # Vite bundler configuration
    tailwind.config.js        # Tailwind CSS configuration
    tsconfig.json             # TypeScript configuration
  docs/                       # Project documentation
```

## Backend Dependency

This frontend expects a backend API running at `http://localhost:3000` with the following endpoint groups:

- `/api/auth/*` -- Authentication (login, signup, forgot-password)
- `/api/product` -- Product CRUD
- `/api/admin/*` -- Super-admin operations (managers, payments)
- `/api/v1/admin/*` -- Admin user-approval and deactivation
