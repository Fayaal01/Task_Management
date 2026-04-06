const express = require('express');
const router = express.Router();
const db = require('../db');

// CREATE TASK
router.post('/', (req, res) => {
  const { title, description, deadline } = req.body;
  if (!title || !deadline) {
    return res.status(400).json({ error: 'Title and deadline are required' });
  }

  const query = 'INSERT INTO tasks (title, description, deadline) VALUES (?, ?, ?)';
  db.query(query, [title, description, deadline], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ id: result.insertId, title, description, deadline });
  });
});

// READ ALL TASKS
router.get('/', (req, res) => {
  db.query('SELECT * FROM tasks ORDER BY created_at DESC', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// UPDATE TASK
router.put('/:id', (req, res) => {
  const { title, description, deadline } = req.body;
  const query = 'UPDATE tasks SET title = ?, description = ?, deadline = ? WHERE id = ?';
  db.query(query, [title, description, deadline, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task updated successfully' });
  });
});

// DELETE TASK
router.delete('/:id', (req, res) => {
  db.query('DELETE FROM tasks WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Task deleted successfully' });
  });
});

module.exports = router;
