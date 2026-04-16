# Repository Summary

## Overview

**NBNext-Ecommerce** is a React + TypeScript e-commerce frontend application scaffolded with Vite. It provides product management with variant support, multi-role user authentication, and a super-admin dashboard for client and user management.

**Repository:** [github.com/thenb-in/NBNext-Ecommerce](https://github.com/thenb-in/NBNext-Ecommerce)
**Primary Language:** TypeScript (React)
**Status:** Early development / prototype stage

---

## Key Statistics

| Metric | Value |
|--------|-------|
| Total source files | 14 TypeScript/TSX files |
| Pages | 8 (Home, About, AddProduct, Login, Signup, ForgotPassword, SuperadminDashboard, LoginApproval, ActiveUsers) |
| Components | 3 (SuperAdminTable, AddPaymentModal, VariantGenerator) |
| Utility components | 2 (FloatingInput, FloatingTextarea) |
| Dependencies | 7 runtime, 12 dev |
| Test coverage | None (no tests) |
| Lines of code (approx.) | ~1,100 across all TSX files |

---

## File Tree

```
NBNext-Ecommerce/
  docs/
    index.md                     # Documentation entry point
    APPLICATION_DOC.md           # Application architecture and components
    TECHNICAL_DOC.md             # Technical stack and configuration
    USER_DOCS.md                 # End-user guide
    TODO.md                      # Known issues and tasks
    ROADMAP.md                   # Development roadmap
    REPO_SUMMARY.md              # This file
  ecommerce-frontend/
    index.html                   # HTML entry point
    package.json                 # Project dependencies and scripts
    vite.config.ts               # Vite build configuration
    tailwind.config.js           # Tailwind CSS configuration
    postcss.config.js            # PostCSS plugin chain
    eslint.config.js             # ESLint flat configuration
    tsconfig.json                # Root TypeScript config
    tsconfig.app.json            # App TypeScript config
    tsconfig.node.json           # Node TypeScript config
    public/
      vite.svg                   # Default favicon
    src/
      main.tsx                   # React app entry point
      App.tsx                    # Root router component
      App.css                    # Legacy CSS styles
      index.css                  # Global + Tailwind styles
      vite-env.d.ts              # Vite type declarations
      assets/
        react.svg                # React logo
      components/
        SuperAdminTable.tsx      # Manager/client data table
        AddPaymentModal.tsx      # Payment entry modal dialog
        VariantGenerator.tsx     # Product variant combination builder
      pages/
        Home.tsx                 # Landing page (placeholder)
        About.tsx                # About page (placeholder)
        AddProduct.tsx           # Product creation form
        login.tsx                # User login page
        SIgnUp.tsx               # User registration (multi-role)
        ForgetPassword.tsx       # Password reset page
        SuperadminDashboard.tsx  # Admin control panel
        LoginApproval.tsx        # Pending user approval view
        ActiveUsers.tsx          # Active user management view
      utils/
        FloatingInput.tsx        # Reusable floating-label input
        FloatingTextArea.tsx     # Reusable floating-label textarea
```

---

## Architecture Summary

```
Browser
  |
  v
[Vite Dev Server / Static Build]
  |
  v
[React 18 SPA]
  |-- React Router DOM (client-side routing)
  |-- Tailwind CSS + MUI (styling)
  |-- Framer Motion (animations, not yet used)
  |-- fetch API (HTTP calls to backend)
  |
  v
[Backend API @ localhost:3000]
  |-- /api/auth/*       (authentication)
  |-- /api/product      (product CRUD)
  |-- /api/admin/*      (admin operations)
  |-- /api/v1/admin/*   (user management)
```

---

## Roles in the System

| Role | Capabilities |
|------|-------------|
| **Super Admin** | Manage managers/clients, approve users, add payments, deactivate users |
| **Manager** | Has a company, receives validity/subscription from super admin |
| **Employee** | Linked to a manager via Manager ID |
| **Customer** | Has an address, end-user of the e-commerce platform |
| **User** | Default/basic role |

---

## Dependencies

### Runtime

| Package | Purpose |
|---------|---------|
| react, react-dom | UI framework |
| react-router-dom | Client-side routing |
| @mui/material, @mui/icons-material | Material UI components and icons |
| @emotion/react, @emotion/styled | CSS-in-JS (MUI peer dependency) |
| axios | HTTP client (installed but unused) |
| framer-motion | Animation library (installed but unused) |

### Development

| Package | Purpose |
|---------|---------|
| vite, @vitejs/plugin-react | Build tooling |
| typescript | Type checking |
| tailwindcss, postcss, autoprefixer | CSS toolchain |
| eslint, typescript-eslint, eslint-plugin-react-hooks, eslint-plugin-react-refresh | Linting |
