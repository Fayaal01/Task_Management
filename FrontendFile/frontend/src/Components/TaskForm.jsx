/*import React, { useState } from 'react';
import axios from '../utils/api';

const TaskForm = ({ onAddSuccess }) => {
  const [form, setForm] = useState({ title: '', description: '', deadline: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title || !form.description || !form.deadline) {
      alert('All fields are required');
      return;
    }
    try {
      await axios.post('/tasks', form);
      setForm({ title: '', description: '', deadline: '' });
      if (onAddSuccess) onAddSuccess(); // Navigate to Task List after add
    } catch (error) {
      alert('Error adding task');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 dark:bg-gray-800 p-4 rounded shadow max-w-md mx-auto mt-6">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Task Title"
        className="w-full p-2 rounded text-gray-900"
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full p-2 rounded text-gray-900"
      />
      <input
        name="deadline"
        type="date"
        value={form.deadline}
        onChange={handleChange}
        className="w-full p-2 rounded text-gray-900"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;*/



import React, { useState } from 'react';
import axios from '../utils/api';

const TaskForm = ({ onAddSuccess, darkMode }) => {
  const [form, setForm] = useState({ title: '', description: '', deadline: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.title || !form.description || !form.deadline) {
      alert('All fields are required');
      return;
    }
    try {
      await axios.post('/tasks', form);
      setForm({ title: '', description: '', deadline: '' });
      if (onAddSuccess) onAddSuccess();
    } catch (error) {
      alert('Error adding task');
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '400px',
        margin: '0 auto 3rem',
        padding: '2rem',
        backgroundColor: darkMode ? '#03396c' : '#cce7ff',
        borderRadius: '10px',
        boxShadow: darkMode
          ? '0 0 20px #0077be'
          : '0 0 20px #0099cc',
        color: darkMode ? '#d0e8ff' : '#023e8a',
      }}
    >
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Task Title"
        style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1.25rem',
          borderRadius: '6px',
          border: '1px solid #0077be',
          fontSize: '1rem',
          color: darkMode ? '#d0e8ff' : '#023e8a',
          backgroundColor: darkMode ? '#014f86' : '#e6f2ff',
        }}
      />
      <textarea
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        rows={4}
        style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1.25rem',
          borderRadius: '6px',
          border: '1px solid #0077be',
          fontSize: '1rem',
          color: darkMode ? '#d0e8ff' : '#023e8a',
          backgroundColor: darkMode ? '#014f86' : '#e6f2ff',
          resize: 'vertical',
        }}
      />
      <input
        name="deadline"
        type="date"
        value={form.deadline}
        onChange={handleChange}
        style={{
          width: '100%',
          padding: '0.75rem',
          marginBottom: '1.5rem',
          borderRadius: '6px',
          border: '1px solid #0077be',
          fontSize: '1rem',
          color: darkMode ? '#d0e8ff' : '#023e8a',
          backgroundColor: darkMode ? '#014f86' : '#e6f2ff',
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: darkMode ? '#66ccff' : '#0077be',
          color: darkMode ? '#003d66' : '#fff',
          width: '100%',
          padding: '0.75rem',
          border: 'none',
          borderRadius: '8px',
          fontWeight: '700',
          cursor: 'pointer',
          boxShadow: darkMode ? '0 0 12px #66ccff' : 'none',
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={e => (e.target.style.backgroundColor = darkMode ? '#99ddff' : '#005f8a')}
        onMouseLeave={e => (e.target.style.backgroundColor = darkMode ? '#66ccff' : '#0077be')}
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
