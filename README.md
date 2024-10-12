# Project Name

E-Commerce app

## Description

The app features modern design principles, state management using useContext and useReducer, and ensures user interaction for product browsing, adding items to the cart, and a streamlined checkout process.
Key Features:
Product Listing: Displays a wide range of products, complete with essential details like name, price, and quantity.

Shopping Cart Management:

Add, update, and remove products in a global shopping cart.
Cart state is persisted across sessions using localStorage, ensuring that users can return and find their selected products saved.
Checkout Process:

A checkout page with a form to capture user details like name, address, and payment information.
Basic form validation to ensure proper input handling.
State Management:

Efficient state management using useContext for global access to the cart.
useReducer for handling complex cart actions such as ADD_ITEM, REMOVE_ITEM, UPDATE_QUANTITY, and CLEAR_CART

## Features

- Product listing and details
- Add to cart, remove from cart, update quantity, and clear cart functionality
- Checkout form with validation
- Persistent cart state using localStorage

## Prerequisites

- Node.js (version >= 14.x.x)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
