# Technical Documentation

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Language | TypeScript | ^5.0.2 |
| UI Framework | React | ^18.2.0 |
| Build Tool | Vite | ^5.2.0 |
| Routing | React Router DOM | ^6.20.0 |
| CSS Framework | Tailwind CSS | ^3.4.17 |
| Component Library | MUI (Material UI) | ^7.0.2 |
| Animations | Framer Motion | ^12.7.4 |
| HTTP Client | Axios | ^1.6.2 (installed, not yet used -- `fetch` is used instead) |
| Linting | ESLint + TypeScript ESLint | ^8.45.0 / ^6.0.0 |

---

## Project Structure

```
ecommerce-frontend/
  index.html                 # HTML shell with #root mount point
  vite.config.ts             # Vite configuration (React plugin)
  tailwind.config.js         # Tailwind CSS content paths and custom animations
  postcss.config.js          # PostCSS plugins (Tailwind + Autoprefixer)
  tsconfig.json              # Root TS config (references app + node configs)
  tsconfig.app.json          # App-specific TS config (ES2020, strict mode)
  tsconfig.node.json         # Node-specific TS config for build tooling
  eslint.config.js           # Flat ESLint config with React Hooks + Refresh rules
  package.json               # Dependencies and scripts
  public/
    vite.svg                 # Default Vite favicon
  src/
    main.tsx                 # Application entry point
    App.tsx                  # Root component with Router and Routes
    App.css                  # Legacy CSS (logo spin animation, card styles)
    index.css                # Global CSS (Tailwind directives, base styles)
    vite-env.d.ts            # Vite client type declarations
    assets/
      react.svg              # React logo asset
    components/
      SuperAdminTable.tsx     # Manager data table with payment actions
      AddPaymentModal.tsx     # Payment entry modal
      VariantGenerator.tsx    # Product variant Cartesian product builder
    pages/
      Home.tsx                # Landing page placeholder
      About.tsx               # About page
      AddProduct.tsx          # Product creation form
      login.tsx               # Login page
      SIgnUp.tsx              # Signup (multi-role registration)
      ForgetPassword.tsx      # Password reset
      SuperadminDashboard.tsx # Admin dashboard with sub-views
      LoginApproval.tsx       # Pending user approval list
      ActiveUsers.tsx         # Active user management
    utils/
      FloatingInput.tsx       # Reusable floating-label input
      FloatingTextArea.tsx    # Reusable floating-label textarea
```

---

## Build & Development

### Prerequisites

- Node.js >= 18.x
- npm >= 9.x

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR (default: `http://localhost:5173`) |
| `npm run build` | Type-check with `tsc -b` then build for production with Vite |
| `npm run lint` | Run ESLint on all `.ts` and `.tsx` files |
| `npm run preview` | Preview the production build locally |

### Installation

```bash
cd ecommerce-frontend
npm install
npm run dev
```

---

## TypeScript Configuration

The project uses a composite TypeScript setup:

- **`tsconfig.json`** -- Root config that references `tsconfig.app.json` and `tsconfig.node.json`
- **`tsconfig.app.json`** -- Application source config
  - Target: ES2020
  - Module: ESNext with bundler resolution
  - Strict mode enabled
  - JSX: react-jsx (automatic runtime)
  - `noUnusedLocals` and `noUnusedParameters` enforced
- **`tsconfig.node.json`** -- Build tool config for Vite and other Node-side scripts

---

## Tailwind CSS Configuration

Content scanning paths:
```
./index.html
./src/**/*.{js,ts,jsx,tsx}
```

Custom extensions:
- **`float` animation** -- A 6-second ease-in-out infinite floating effect (`translateY(0px) -> translateY(-20px) -> translateY(0px)`)

PostCSS pipeline: `tailwindcss` -> `autoprefixer`

---

## ESLint Configuration

Uses the flat config format (`eslint.config.js`) with:
- `@eslint/js` recommended rules
- `typescript-eslint` recommended rules
- `eslint-plugin-react-hooks` recommended rules
- `eslint-plugin-react-refresh` with `only-export-components` set to warn

Ignored directories: `dist/`

---

## Styling Strategy

The application uses a hybrid styling approach:

1. **Tailwind CSS** -- Primary styling method; utility classes applied directly in JSX
2. **MUI (Material UI)** -- Installed as a dependency (with `@emotion/react` and `@emotion/styled`) but not yet heavily used in existing components
3. **CSS files** -- `index.css` contains Tailwind directives and base element styles; `App.css` has legacy Vite template styles

---

## State Management

Currently uses **React local state** (`useState`) exclusively. There is no global state management library (Redux, Zustand, Context API, etc.) in use.

Authentication state is persisted via `localStorage` (JWT token).

---

## API Communication

All API calls use the native **`fetch` API** directly. The `axios` package is installed as a dependency but not yet imported anywhere.

Base URL: `http://localhost:3000` (hardcoded in component files).

Authentication: JWT Bearer token sent in the `Authorization` header for protected endpoints.

---

## Environment Configuration

There is no `.env` file or environment variable setup. The backend API URL (`http://localhost:3000`) is hardcoded across multiple components. This should be refactored to use Vite's `import.meta.env.VITE_API_URL` pattern.

---

## Testing

No test framework or test files are currently set up. The project would benefit from adding Vitest (Vite-native) with React Testing Library.

---

## Deployment

No deployment configuration exists yet. The `npm run build` command produces a static build in `dist/` suitable for deployment to any static hosting provider (Vercel, Netlify, AWS S3 + CloudFront, etc.).
