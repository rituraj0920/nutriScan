import React from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from './nightmode'; // make sure path is correct

const ThemeToggleButton = () => {
  const { currentTheme, cycleTheme, isLightBg } = useTheme();

  const getIcon = () => {
    if (currentTheme === 'light') return '☀️';
    if (currentTheme === 'dark') return '🌙';
  };

  return (
    <Button
      variant={isLightBg ? 'outline-blue' : 'outline-red'}
      className="rounded-circle d-flex align-items-center justify-content-center p-2 shadow-sm border-2"
      style={{ width: '45px', height: '45px', fontSize: '1.3rem' }}
      onClick={cycleTheme}
      title={`Current Theme: ${currentTheme}. Click to change!`}
    >
      {getIcon()}
    </Button>
  );
};

export default ThemeToggleButton;

