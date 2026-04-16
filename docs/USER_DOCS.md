# User Guide

This guide explains how to use the NBNext-Ecommerce application from an end-user perspective.

---

## Getting Started

1. Open the application in your browser (default: `http://localhost:5173`).
2. You will see a navigation bar at the top with links to: **Home**, **About**, **Add Product**, **Login**, **Signup**, **Forgot Password**, and **Super Admin**.

---

## Navigation

The top navigation bar is always visible and provides quick access to all pages. Click any link to navigate to the corresponding section.

---

## Pages

### Home

The landing page of the application. Currently displays a "Home Page" heading. Future iterations will include product listings and storefront content.

### About

A simple informational page about the application or business.

### Login

1. Enter your **email address** in the email field.
2. Enter your **password** in the password field.
3. Click the **Login** button.
4. On success, you will see a "Logged in" confirmation and your session token will be saved.
5. If login fails, an error message will be displayed.

**Additional options:**
- Click "Don't have an account? Sign up" to navigate to the registration page.
- Click "Forgot password?" to reset your password.

### Sign Up

1. Fill in the following fields:
   - **Full Name** -- Your display name
   - **Email Address** -- Must be a valid email
   - **Password** -- Choose a secure password
   - **Mobile Number** -- Your contact number
2. Select your **Role** from the dropdown:
   - **User** -- Standard user (default)
   - **Employee** -- Requires entering a **Manager ID**
   - **Manager** -- Requires entering a **Company Name**
   - **Customer** -- Requires entering an **Address**
3. Click the **Sign Up** button.
4. On success, you will be redirected to the Login page.

### Forgot Password

1. Enter the **email address** associated with your account.
2. Enter a **new password**.
3. Click the **Reset Password** button.
4. On success, you will be redirected to the Login page.

### Add Product

This page allows authorized users to create new products in the catalog.

**Basic Product Information:**

1. Enter the **Product Title**.
2. Enter the **SKU** (Stock Keeping Unit) -- a unique identifier for the product.
3. Enter a **Product Description**.
4. Set the **Price** (in INR).
5. Set the **Stock** quantity.
6. Optionally, enter an **Image URL** to display a product image preview.

**Adding Variants (optional):**

If your product comes in multiple variations (e.g., different sizes and colors):

1. Scroll to the **Product Variants** section.
2. Enter a **Variant Name** (e.g., "Size").
3. Add options for that variant (e.g., "S", "M", "L") by clicking **Add Option**.
4. Click **Add Variant** to add another dimension (e.g., "Color" with options "Red", "Blue").
5. Click **Generate Combinations** to see all possible variant combinations.
6. For each generated combination, enter the **Image URL**, **Price**, and **Stock**.
7. Click **Submit Variants** to confirm.

Finally, click **Create Product** to save the product.

### Super Admin Dashboard

The administrative dashboard provides tools for managing the platform. It has three main views:

#### Client Data Table (Default View)

Displays a table of all registered managers/clients with:
- Company Name
- Manager Name
- Mobile Number
- Registration Date
- Validity (days remaining on their subscription)
- **Add Payment** button to extend their subscription

**Adding a Payment:**

1. Click the **Add Payment** button next to a manager.
2. In the modal, enter the **Recharge Amount**.
3. Enter the **Rate per Day**.
4. The **Validity (Days)** will be auto-calculated (amount / rate per day). You can also edit it manually.
5. Click **Submit** to process the payment.
6. Click **Cancel** to close the modal without saving.

#### User Approval (Login Requests)

1. Click the **User** button in the top-right corner.
2. View the list of pending user registration requests.
3. For each request, click **Approve** to grant access or **Reject** to deny.
4. Click **Close** to return to the main dashboard view.

#### Active Users

1. Click the **Active Users** button in the top-right corner.
2. View all currently active users displayed as cards.
3. To deactivate a user, click the **X** button on their card.
4. Confirm deactivation in the dialog that appears.
5. Click **Close** to return to the main dashboard view.

---

## Authentication

- The application uses JWT (JSON Web Token) based authentication.
- After logging in, your token is stored in the browser's local storage.
- Protected actions (user approval, deactivation) require a valid token.
- Logging out should clear the stored token (logout functionality is planned).

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| "Login failed" error | Verify your email and password are correct. Ensure the backend server is running. |
| "Network error" on product creation | Ensure the backend API is running at `http://localhost:3000`. |
| Product image not showing | Verify the image URL is accessible and returns a valid image. |
| Blank page after navigation | Check the browser console for errors. The backend may be unreachable. |
| Payment modal not opening | Ensure manager data loaded correctly. Check the browser console for fetch errors. |
