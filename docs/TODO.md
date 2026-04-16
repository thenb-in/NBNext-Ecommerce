# TODO

A prioritized list of known issues, incomplete features, and improvement tasks.

---

## Critical

- [ ] **Hardcoded API base URL** -- The backend URL `http://localhost:3000` is hardcoded in multiple files (`AddProduct.tsx`, `login.tsx`, `SIgnUp.tsx`, `ForgetPassword.tsx`, `SuperAdminTable.tsx`, `AddPaymentModal.tsx`). Refactor to use an environment variable via `import.meta.env.VITE_API_URL`.
- [ ] **No route protection** -- All routes are publicly accessible. Add authentication guards (e.g., a `ProtectedRoute` wrapper) for admin and product management pages.
- [ ] **Forgot-password security** -- The current implementation allows direct password reset without email verification or OTP. This is a security vulnerability.

## High Priority

- [ ] **Inconsistent API URL patterns** -- Some endpoints use `/api/v1/admin/*` while others use `/api/admin/*`. Standardize the API versioning.
- [ ] **Missing logout functionality** -- The "Logout" button in the SuperadminDashboard has no `onClick` handler. Implement token clearing and redirect.
- [ ] **No error boundary** -- Add React Error Boundaries to catch and display runtime errors gracefully.
- [ ] **Unused `axios` dependency** -- The `axios` package is installed but all HTTP calls use native `fetch`. Either migrate to axios or remove the unused dependency.
- [ ] **`LoginApproval` route missing** -- `LoginApproval` is imported in `App.tsx` but has no dedicated route; it's only rendered as a sub-view inside `SuperadminDashboard`.

## Medium Priority

- [ ] **Active Users uses dummy data** -- `ActiveUsers.tsx` loads hardcoded dummy data instead of fetching from the API. Wire up the real endpoint.
- [ ] **SuperadminDashboard login requests use dummy data** -- The `loginRequests` array is hardcoded. Replace with an API call.
- [ ] **No form validation** -- Forms lack client-side validation (required fields, email format, password strength, etc.). Add validation with a library like Zod or React Hook Form.
- [ ] **No loading states on forms** -- Login, Signup, ForgotPassword, and AddProduct forms show no loading indicator during API calls.
- [ ] **`FloatingInput` and `FloatingTextarea` lack TypeScript types** -- These utility components use implicit `any` props. Add explicit prop interfaces.
- [ ] **No global state management** -- Authentication state (token, user info) is only in `localStorage`. Consider React Context or Zustand for shared state.
- [ ] **File naming inconsistencies** -- `SIgnUp.tsx` (capital I and G), `login.tsx` (lowercase). Standardize to PascalCase.

## Low Priority

- [ ] **Home page is a placeholder** -- Implement product listing, search, and categories.
- [ ] **About page is a placeholder** -- Add actual business information.
- [ ] **No responsive navigation** -- The nav bar lacks a mobile hamburger menu.
- [ ] **`App.css` contains unused legacy Vite styles** -- Clean up or remove unused CSS.
- [ ] **No favicon** -- Still using the default Vite favicon.
- [ ] **HTML title is generic** -- `<title>Vite + React + TS</title>` should be updated to reflect the application name.
- [ ] **`index.html` has a hardcoded stylesheet link** -- `<link href="/ecommerce-frontend/src/index.css">` in `index.html` is incorrect for production builds and already handled by Vite's CSS pipeline.
- [ ] **No image upload** -- Product images only support URLs. Add file upload support.
- [ ] **No pagination** -- Tables (managers, login requests, active users) lack pagination for large datasets.
- [ ] **Unused import** -- `React` is imported in some files but not needed with the automatic JSX runtime (`react-jsx`).

## Testing

- [ ] Set up Vitest as the test runner.
- [ ] Add React Testing Library for component tests.
- [ ] Write unit tests for `cartesianProduct` utility in `VariantGenerator.tsx`.
- [ ] Write integration tests for form submissions.
- [ ] Add E2E tests with Playwright or Cypress.

## DevOps

- [ ] Add `.env.example` with `VITE_API_URL` documentation.
- [ ] Set up CI/CD pipeline (GitHub Actions).
- [ ] Add Husky pre-commit hooks for lint/format.
- [ ] Configure Prettier for consistent code formatting.
- [ ] Add Docker configuration for containerized development.
