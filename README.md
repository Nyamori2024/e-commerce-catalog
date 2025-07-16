# E-commerce Product Catalog

A modern, responsive e-commerce product catalog built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. This application fetches product data from an external API, supports live search, sorting, and pagination, and is optimized for performance and usability.

[Live Demo on Vercel](https://e-commerce-catalog-eight.vercel.app/)

---

## Features

- **Responsive Design**
  - Desktop: Products displayed in a grid layout.
  - Mobile: Products displayed in a single-column layout.
- **Product Details**
  - Name, price, thumbnail image, and rating.
- **Live Search**
  - Real-time filtering of products by name.
- **Sorting**
  - Sort by price (Low to High, High to Low).
  - Sort by rating (Low to High, High to Low).
- **Pagination**
  - Paginated view of products for easy browsing.
- **Dark Mode**
  - Seamlessly toggle between light and dark themes using Tailwind CSS.
- **State Management**
  - Redux Toolkit for scalable and efficient state handling.

## API

- Product data is fetched from the [Fake Store API](https://fakestoreapi.com/).

## Tech Stack

- **React** with **TypeScript**
- **Vite** for blazing fast development/build
- **Tailwind CSS** for modern, utility-first styling
- **Redux Toolkit** for state management
- **Fetch API** for data integration

---

## Installation

Clone the repository:
```bash
git clone https://github.com/Nyamori2024/e-commerce-catalog.git
```

Navigate to the project directory:
```bash
cd e-commerce-catalog
```

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm run dev
```

Open the app in your browser:
```
http://localhost:5173
```

---

## Deployment

The application is deployed on [Vercel](https://e-commerce-catalog-eight.vercel.app/).

---

## Running the App Locally

1. Ensure you have **Node.js** installed (version 16 or higher).
2. Follow the installation instructions above.

---

## Testing

To run tests:
```bash
npm run test
```

---

## Folder Structure

```
src/
├── components/       # Reusable components (e.g., ProductCard)
├── pages/            # Page components (e.g., CatalogPage)
├── redux/            # Redux store, slices, and types
├── App.tsx           # Root component
├── main.tsx          # Application entry point
├── styles/           # Global styles and Tailwind configuration
└── types/            # TypeScript type definitions
```

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues](https://github.com/Nyamori2024/e-commerce-catalog/issues) page.

---

## Author

- [Nyamori2024](https://github.com/Nyamori2024)
- 
