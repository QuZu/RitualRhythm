import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddHabit.css';

const AddHabit = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [day, setDay] = useState('Monday');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newHabit = { name, description, day };

    try {
      const response = await axios.post('http://localhost:5000/api/habits', newHabit);
      if (response.status === 201) {
        setSuccessMessage('Habit added successfully!');
        setName('');
        setDescription('');
        setDay('Monday');
      }
    } catch (error) {
      console.error('Error adding habit:', error);
      setSuccessMessage('Failed to add habit. Try again.');
    }
  };

  return (
    <div className="add-habit-container">
      <h1 className="add-habit-title">Add Habit</h1>
      <form onSubmit={handleSubmit} className="add-habit-form">
        <input
          type="text"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="add-habit-input"
        />
        <textarea
          placeholder="Habit Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="add-habit-textarea"
        />
        <select
          value={day}
          onChange={(e) => setDay(e.target.value)}
          className="add-habit-select"
        >
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
        </select>
        <button type="submit" className="add-habit-button">
          Add Habit
        </button>
      </form>
      {successMessage && (
        <p
          className={
            successMessage.includes('successfully')
              ? 'add-habit-success'
              : 'add-habit-error'
          }
        >
          {successMessage}
        </p>
      )}
    </div>
  );
};

export default AddHabit;
