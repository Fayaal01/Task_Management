import React, { useState } from 'react';

const Navbar = ({ toggleTheme, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        padding: '1rem 2rem',
        background: darkMode
          ? 'linear-gradient(90deg, #034f84, #0077be)'
          : 'linear-gradient(90deg, #00aaff, #00d4ff)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
        userSelect: 'none',
        position: 'relative',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            color: '#fff',
            fontSize: '1.8rem',
            fontWeight: '700',
            letterSpacing: '2px',
            userSelect: 'none',
          }}
        >
          Task Manager
        </h1>

        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'none' }}>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: darkMode ? '#0b486b' : '#66ccff',
              color: darkMode ? '#a0d8ef' : '#003d66',
              border: 'none',
              borderRadius: '25px',
              padding: '0.5rem 1.2rem',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: darkMode ? '0 0 8px #00bfff' : '0 0 8px #0099cc',
              transition: 'background-color 0.3s ease, color 0.3s ease',
              width: '120px',
              userSelect: 'none',
            }}
            aria-label="Toggle light/dark mode"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>

        {/* Hamburger Menu */}
        <div
          style={{ display: 'block', cursor: 'pointer' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#fff',
              margin: '5px 0',
              transition: '0.4s',
            }}
          ></div>
          <div
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#fff',
              margin: '5px 0',
              transition: '0.4s',
            }}
          ></div>
          <div
            style={{
              width: '25px',
              height: '3px',
              backgroundColor: '#fff',
              margin: '5px 0',
              transition: '0.4s',
            }}
          ></div>
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div
          style={{
            marginTop: '1rem',
            padding: '1rem 2rem',
            backgroundColor: darkMode ? '#014f86' : '#cce7ff',
            borderRadius: '8px',
          }}
        >
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: darkMode ? '#0b486b' : '#66ccff',
              color: darkMode ? '#a0d8ef' : '#003d66',
              border: 'none',
              borderRadius: '25px',
              padding: '0.5rem 1.2rem',
              fontWeight: '600',
              cursor: 'pointer',
              width: '100%',
              marginBottom: '0.5rem',
            }}
            aria-label="Toggle light/dark mode"
          >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
      )}

      {/* Responsive styles */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: block !important;
          }
          div[aria-label="Toggle menu"] {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
