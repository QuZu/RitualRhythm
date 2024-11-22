const express = require('express');
const {
  getAllHabits,
  createHabit,
  updateHabit,
  deleteHabit,
  markComplete,
} = require('../controllers/habitController');

const router = express.Router();

// CRUD Operations
router.get('/', getAllHabits); // Get all habits
router.post('/', createHabit); // Create a habit
router.put('/:id', updateHabit); // Update a habit
router.delete('/:id', deleteHabit); // Delete a habit
router.patch('/:id/complete', markComplete); // Mark habit as complete

module.exports = router;
