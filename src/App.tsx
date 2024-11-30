import React from 'react';
import ProductCatalog from './components/ProductCatalog'; // Import the ProductCatalog component to display the list of products
import { useTheme } from './ThemeContext.tsx'; // Import the useTheme hook to manage dark mode and light mode

// Component for toggling the theme between dark mode and light mode
const ThemeToggle: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme(); // Get the current theme state (darkMode) and the function to toggle it (setDarkMode)

  return (
    // Button to toggle the theme when clicked
    <button
      onClick={() => setDarkMode(!darkMode)} // Toggle the darkMode state when the button is clicked
      className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded" // Button styling with conditional dark mode styling
    >
      Toggle to {darkMode ? 'Light' : 'Dark'} Mode {/* Dynamically show the mode based on darkMode */}
    </button>
  );
};

// Main App component that renders the application UI
const App: React.FC = () => {
  const { darkMode } = useTheme(); // Get the current theme state (darkMode)

  return (
    // Conditional classNames for background and text color based on darkMode state
    <div className={`container mx-auto p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow"> {/* Sticky header with background change based on dark mode */}
        <h1 className="text-3xl font-bold text-center mb-4">E-commerce Product Catalog</h1> 
        <ThemeToggle /> {/* Include the theme toggle button */}
      </header>
      <ProductCatalog /> {/* Render the ProductCatalog component to display the list of products */}
    </div>
  );
};

export default App;