// ThemeContext.jsx
import React, { createContext, useState, useContext } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create a Provider Component
export const ThemeProvider = ({ children }) => {
  const themes = ['light', 'dark'];
  const [currentTheme, setCurrentTheme] = useState('dark');

  const cycleTheme = () => {
    const currentIndex = themes.indexOf(currentTheme);
    setCurrentTheme(themes[(currentIndex + 1) % themes.length]);
  };

  const isLightBg = ['light', 'info'].includes(currentTheme);

  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, cycleTheme, isLightBg, themes }}>
      {/* We apply the background to a wrapper here so the WHOLE app gets it automatically */}
      <div 
        className={`bg-${currentTheme} min-vh-100`} 
        data-bs-theme={isLightBg ? 'light' : 'dark'}
        style={{ transition: 'background-color 0.3s ease' }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// 3. Create a custom hook for easy access
export const useTheme = () => useContext(ThemeContext);
