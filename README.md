# E-commerce Product Catalog

A responsive e-commerce product catalogue built with React, TypeScript, Vite, and Tailwind CSS. This application fetches product data from an external API, supports live search, sorting, and pagination, and is optimized for performance.

---

## Features

### Responsive Design:
- **Desktop View**: Products displayed in a grid layout.  
- **Mobile View**: Products displayed in a single-column layout.

### Product Details:
- Name, Price, Thumbnail Image, and Rating.

### Live Search:
- Real-time filtering of products by name.

### Sorting:
- Sort by price (Low to High, High to Low).  
- Sort by rating (Low to High, High to Low).

### Pagination:
- Paginated view of products.

### Dark Mode:
- Fully implemented dark mode using Tailwind CSS.  
- Toggle seamlessly between light and dark themes.

### State Management:
- Redux is used to manage the application state.

---

## API
The application fetches product data from the **[Fake Store API](https://fakestoreapi.com/products)**.

---

## Tech Stack
- **React with TypeScript**  
- **Vite** for fast development and build  
- **Tailwind CSS** for styling  
- **Redux Toolkit** for state management  
- **Fetch method** for API integration  

---

## Installation

### Clone the Repository:
```bash
git clone https://github.com/Nyamori2024/e-commerce-catalog.git

### Navigate to the Project Directory:
```bash
cd e-commerce-catalog

### Install Dependencies:
```bash
npm install

### Start the Development Server:
```bash
npm run dev

### Open the App in Your Browser:
```bash
http://localhost:5173

### Deployment
The application is deployed on [Vercel].
You can access it here: https://e-commerce-catalog-eight.vercel.app/.

## Running the App Locally
To run the app locally:

1. Ensure you have **Node.js** installed (version 16 or higher).
2. Follow the installation instructions above.

### Testing
To run tests, use:
```bash
npm run test

### Folder Structure
```bash
src/
├── components/       # Reusable components (e.g., ProductCard).
├── pages/            # Page components (e.g., CatalogPage).
├── redux/            # Redux store, slices, and types.
├── App.tsx           # Root component.
├── main.tsx          # Application entry point.
├── styles/           # Global styles and Tailwind configuration.
└── types/            # TypeScript type definitions.




