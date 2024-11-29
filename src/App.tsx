import React from 'react';
import ProductCatalog from './components/ProductCatalog';
import { useTheme } from './ThemeContext.tsx';

const ThemeToggle: React.FC = () => {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="mb-4 p-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      Toggle to {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

const App: React.FC = () => {
  const { darkMode } = useTheme();

  return (
    <div className={`container mx-auto p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <header className="sticky top-0 bg-white dark:bg-gray-800 shadow">
        <h1 className="text-3xl font-bold text-center mb-4">E-commerce Product Catalog</h1>
        <ThemeToggle />
      </header>
      <ProductCatalog />
    </div>
  );
};

export default App;