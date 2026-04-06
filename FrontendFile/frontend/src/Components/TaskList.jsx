
///////////////////////////////////////

import React, { useEffect, useState } from 'react';
import axios from '../utils/api';

const TaskList = ({ darkMode, searchTerm }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await axios.get('/tasks');
    setTasks(res.data);
  };

  const handleDelete = async id => {
    await axios.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Filter tasks based on searchTerm (case-insensitive)
  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (task.description && task.description.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto' }}>
      {filteredTasks.length === 0 ? (
        <p style={{ textAlign: 'center', color: darkMode ? '#d0e8ff' : '#023e8a' }}>
          No tasks found.
        </p>
      ) : (
        filteredTasks.map(task => (
          <div
            key={task.id}
            style={{
              padding: '1rem',
              backgroundColor: darkMode ? '#014f86' : '#fff',
              borderRadius: '6px',
              boxShadow: darkMode
                ? '0 0 15px #0077be'
                : '0 0 8px rgba(0,0,0,0.1)',
              marginBottom: '1rem',
              color: darkMode ? '#d0e8ff' : '#023e8a',
            }}
          >
            <h2 style={{ margin: '0 0 0.5rem 0' }}>{task.title}</h2>
            <p>{task.description}</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
              Deadline: {task.deadline}
            </p>
            <button
              onClick={() => handleDelete(task.id)}
              style={{
                marginTop: '0.5rem',
                color: '#e63946',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontWeight: '700',
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;

