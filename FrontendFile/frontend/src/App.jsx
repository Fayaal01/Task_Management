import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [view, setView] = useState('form');
  const [searchTerm, setSearchTerm] = useState(''); // New state for search filter

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const goToList = () => setView('list');
  const goToForm = () => setView('form');

  return (
    <div
      style={{
        backgroundColor: darkMode ? '#021f3f' : '#e6f2ff',
        minHeight: '100vh',
        color: darkMode ? '#d0e8ff' : '#023e8a',
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      <Navbar toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />

      <main
        style={{
          maxWidth: '700px',
          margin: '2rem auto',
          padding: '0 1rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        {view === 'list' && (
          <>
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search tasks..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '1rem',
                borderRadius: '8px',
                border: '1px solid #0077be',
                backgroundColor: darkMode ? '#014f86' : '#e6f2ff',
                color: darkMode ? '#d0e8ff' : '#023e8a',
                outline: 'none',
              }}
            />

            {/* Pass searchTerm to TaskList */}
            <TaskList darkMode={darkMode} searchTerm={searchTerm} />

            <div style={{ textAlign: 'center', margin: '2rem 0' }}>
              <button
                onClick={goToForm}
                style={{
                  backgroundColor: darkMode ? '#66ccff' : '#0077be',
                  color: darkMode ? '#003d66' : '#fff',
                  border: 'none',
                  padding: '0.7rem 1.5rem',
                  borderRadius: '30px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  boxShadow: '0 0 10px #0099cc',
                  transition: 'background-color 0.3s, color 0.3s',
                }}
                onMouseEnter={e => {
                  e.target.style.backgroundColor = darkMode ? '#99ddff' : '#005f8a';
                  e.target.style.color = darkMode ? '#002244' : '#e0e0e0';
                }}
                onMouseLeave={e => {
                  e.target.style.backgroundColor = darkMode ? '#66ccff' : '#0077be';
                  e.target.style.color = darkMode ? '#003d66' : '#fff';
                }}
              >
                Add New Task
              </button>
            </div>
          </>
        )}
        {view === 'form' && <TaskForm onAddSuccess={goToList} darkMode={darkMode} />}
      </main>
    </div>
  );
};

export default App;
