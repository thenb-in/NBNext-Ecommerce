# Roadmap

A phased plan for the continued development of NBNext-Ecommerce.

---

## Phase 1: Foundation Hardening (Current)

**Goal:** Stabilize the existing codebase and fix critical issues.

- [ ] Extract hardcoded API URL into environment variables (`VITE_API_URL`)
- [ ] Add TypeScript types to `FloatingInput` and `FloatingTextarea` utility components
- [ ] Fix file naming inconsistencies (e.g., `SIgnUp.tsx` -> `SignUp.tsx`, `login.tsx` -> `Login.tsx`)
- [ ] Remove unused `axios` dependency or migrate all `fetch` calls to use it
- [ ] Remove unused React imports (automatic JSX runtime handles this)
- [ ] Clean up `index.html` (remove hardcoded stylesheet link, update page title)
- [ ] Implement logout functionality in SuperadminDashboard
- [ ] Replace dummy data in ActiveUsers and LoginApproval with real API calls

## Phase 2: Authentication & Security

**Goal:** Build a robust authentication layer.

- [ ] Implement proper authentication context with React Context API
- [ ] Add protected route wrappers for admin and authenticated pages
- [ ] Implement token refresh mechanism
- [ ] Add proper forgot-password flow with email verification or OTP
- [ ] Implement role-based access control (RBAC) on the frontend
- [ ] Add session expiry handling and auto-logout

## Phase 3: Core E-Commerce Features

**Goal:** Build out the storefront experience.

- [ ] Design and implement the Home page with product listings
- [ ] Add product detail pages with variant selection
- [ ] Implement shopping cart functionality
- [ ] Build checkout flow with order summary
- [ ] Add product search and filtering
- [ ] Implement product categories and navigation
- [ ] Add wishlist/favorites feature

## Phase 4: User Experience

**Goal:** Polish the UI/UX across the application.

- [ ] Implement responsive navigation with mobile hamburger menu
- [ ] Add form validation with user-friendly error messages (consider Zod + React Hook Form)
- [ ] Add loading spinners and skeleton screens for async operations
- [ ] Implement toast notifications instead of `alert()` calls (consider React Hot Toast or Sonner)
- [ ] Add image upload capability for products (replace URL-only approach)
- [ ] Implement pagination for all data tables and lists
- [ ] Add dark mode toggle leveraging existing Tailwind dark mode support
- [ ] Enhance the About page with real business content

## Phase 5: Admin & Analytics

**Goal:** Expand the admin toolset.

- [ ] Add order management dashboard
- [ ] Build revenue and sales analytics with charts (consider Recharts or Chart.js)
- [ ] Implement user activity logs and audit trails
- [ ] Add inventory management with stock alerts
- [ ] Build notification system for admin events
- [ ] Add bulk product import/export (CSV/Excel)

## Phase 6: Quality & Infrastructure

**Goal:** Ensure reliability and developer productivity.

- [ ] Set up Vitest with React Testing Library
- [ ] Write unit tests for business logic (variant generation, price calculation, etc.)
- [ ] Add integration tests for form workflows
- [ ] Set up E2E testing with Playwright
- [ ] Configure GitHub Actions CI/CD pipeline (lint, test, build, deploy)
- [ ] Add Husky + lint-staged for pre-commit checks
- [ ] Set up Prettier for consistent formatting
- [ ] Add Storybook for component documentation and visual testing
- [ ] Implement error monitoring (Sentry or similar)

## Phase 7: Performance & Scale

**Goal:** Optimize for production workloads.

- [ ] Implement code splitting and lazy loading for routes
- [ ] Add service worker for offline capability (PWA)
- [ ] Optimize bundle size (tree-shaking, dynamic imports)
- [ ] Add CDN configuration for static assets
- [ ] Implement server-side rendering (SSR) or static generation if needed
- [ ] Add database caching layer on the backend
- [ ] Implement WebSocket for real-time updates (order status, notifications)

---

## Long-Term Vision

- Multi-tenant platform supporting multiple businesses
- Mobile application (React Native) sharing business logic
- AI-powered product recommendations
- International support with i18n (multi-language, multi-currency)
- Payment gateway integration (Razorpay, Stripe)
- Shipping and logistics integration
