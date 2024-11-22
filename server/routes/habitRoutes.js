const express = require('express');
const { getHabits, createHabit, updateHabit, deleteHabit, markComplete } = require('../controllers/habitController');

const router = express.Router();

// CRUD Operations
router.get('/', getHabits);
router.post('/', createHabit);
router.put('/:id', updateHabit);
router.delete('/:id', deleteHabit);
router.patch('/:id/complete', markComplete);

module.exports = router;
