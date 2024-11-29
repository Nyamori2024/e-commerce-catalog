import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store.ts';
import { ThemeProvider } from './ThemeContext.tsx'; // Import ThemeProvider

// Ensure Tailwind CSS is imported here
import './index.css';

const Root: React.FC = () => {
  return (
    <ThemeProvider> {/* Wrap App with ThemeProvider */}
      <App />
    </ThemeProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Root /> {/* Wrap Root with Provider */}
  </Provider>
);