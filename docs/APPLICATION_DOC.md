# Application Documentation

## Overview

NBNext-Ecommerce is a single-page application (SPA) built with React 18, TypeScript, and Vite. It provides an e-commerce management frontend featuring product creation with variant support, multi-role user authentication, a super-admin dashboard for managing clients and users, and payment/validity tracking.

---

## Application Architecture

```
App (Router)
 |
 +-- Nav Bar (Links to all pages)
 |
 +-- Routes
      |-- /               -> Home
      |-- /about           -> About
      |-- /addProduct      -> AddProduct
      |-- /login           -> Login
      |-- /signup          -> Signup
      |-- /forgot-password -> ForgotPassword
      |-- /superadmin-dashboard -> SuperadminDashboard
```

### Entry Point

- **`main.tsx`** -- Renders the `<App />` component inside `React.StrictMode` into the `#root` DOM element.
- **`App.tsx`** -- Sets up `BrowserRouter`, a top-level navigation bar, and all `<Route>` definitions.

---

## Pages

### Home (`/`)

**File:** `src/pages/Home.tsx`

A placeholder landing page that renders an `<h1>` heading. Intended to become the storefront or product listing page.

### About (`/about`)

**File:** `src/pages/About.tsx`

A static page displaying an "About Page" heading with Tailwind styling.

### AddProduct (`/addProduct`)

**File:** `src/pages/AddProduct.tsx`

A comprehensive product creation form supporting:

- **Basic fields:** title, description, SKU, price, stock, image URL
- **Variant generation:** Delegates to the `VariantGenerator` component which produces a Cartesian product of variant options (e.g., Size x Color)
- **Auto-fallback:** If no variants are explicitly created, a default variant is generated from the base product fields
- **API submission:** POSTs to `http://localhost:3000/api/product`

**Key interfaces:**
- `ProductImage` -- `{ url, altText, isPrimary }`
- `ProductFormData` -- Contains all product fields plus an array of variant objects

### Login (`/login`)

**File:** `src/pages/login.tsx`

Email/password login form that:
- POSTs credentials to `/api/auth/login`
- Stores the JWT token in `localStorage`
- Provides navigation links to Signup and Forgot Password

### Signup (`/signup`)

**File:** `src/pages/SIgnUp.tsx`

Multi-role registration form supporting four roles:
- **User** -- Default role
- **Employee** -- Shows a Manager ID field
- **Manager** -- Shows a Company Name field
- **Customer** -- Shows an Address field

POSTs to `/api/auth/signup` and navigates to `/login` on success.

### ForgotPassword (`/forgot-password`)

**File:** `src/pages/ForgetPassword.tsx`

Allows password reset by submitting email + new password to `/api/auth/forgot-password`.

### SuperadminDashboard (`/superadmin-dashboard`)

**File:** `src/pages/SuperadminDashboard.tsx`

The main admin control panel that conditionally renders three views:

1. **SuperAdminTable** (default) -- Displays a table of managers/clients with payment and validity data
2. **LoginApproval** -- Shows pending login requests with approve/reject actions
3. **ActiveUsers** -- Displays currently active users with deactivation capability

Uses toggle state (`showAdminTable`, `showLoginApproval`, `showActiveUsers`) to switch between views.

### LoginApproval

**File:** `src/pages/LoginApproval.tsx`

Receives login requests via props and provides approve/reject functionality. Calls `/api/v1/admin/approve_user` with the user ID and approval status. Requires a JWT token from `localStorage`.

### ActiveUsers

**File:** `src/pages/ActiveUsers.tsx`

Displays active users in a card grid layout. Features:
- Confirmation dialog before deactivation
- Calls `/api/v1/admin/deactivate_user` to deactivate a user
- Currently uses dummy data as a placeholder

---

## Components

### SuperAdminTable

**File:** `src/components/SuperAdminTable.tsx`

Fetches manager data from `/api/admin/managers` and displays:
- Company name, manager name, mobile number, creation date
- "Add Payment" button per row (opens the `AddPaymentModal`)
- Calculated validity (days remaining until expiry)

### AddPaymentModal

**File:** `src/components/AddPaymentModal.tsx`

A modal overlay for adding payment details:
- Inputs: recharge amount, rate per day
- Auto-calculates validity (days) = amount / ratePerDay
- POSTs to `/api/admin/add_payment`
- Refreshes the manager table on success

### VariantGenerator

**File:** `src/components/VariantGenerator.tsx`

A dynamic variant builder that:
1. Allows adding multiple variant dimensions (e.g., Size, Color)
2. Each dimension can have multiple options (e.g., S, M, L)
3. Generates a Cartesian product of all options
4. Lets the user set price, stock, and image URL per combination
5. Calls `onVariantsGenerated` callback with the final data

**Algorithm:** Uses a recursive `cartesianProduct` function to compute all option combinations.

---

## Utility Components

### FloatingInput

**File:** `src/utils/FloatingInput.tsx`

A reusable floating-label text/number input built with Tailwind's `peer` pseudo-class. Accepts `label`, `type`, `value`, and `onChange` props.

### FloatingTextarea

**File:** `src/utils/FloatingTextArea.tsx`

A reusable floating-label textarea, same pattern as `FloatingInput` but for multi-line text.

---

## Data Flow

1. **Authentication** -- Login stores a JWT in `localStorage`. Protected API calls read the token with `localStorage.getItem("token")` and send it as a `Bearer` token in the `Authorization` header.

2. **Product creation** -- The `AddProduct` page collects form data, generates variants (either manually via `VariantGenerator` or as a default single variant), and POSTs the complete payload to the product API.

3. **Admin operations** -- The superadmin dashboard fetches manager data, displays it in a table, and provides modals/sub-views for payment management and user approval/deactivation.

---

## API Endpoints (Frontend Expectations)

| Method | Endpoint | Used By |
|--------|----------|---------|
| POST | `/api/auth/login` | Login page |
| POST | `/api/auth/signup` | Signup page |
| POST | `/api/auth/forgot-password` | ForgotPassword page |
| POST | `/api/product` | AddProduct page |
| GET | `/api/admin/managers` | SuperAdminTable |
| POST | `/api/admin/add_payment` | AddPaymentModal |
| POST | `/api/v1/admin/approve_user` | LoginApproval |
| POST | `/api/v1/admin/deactivate_user` | ActiveUsers |
