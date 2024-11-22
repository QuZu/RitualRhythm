import React, { useState } from 'react';
import axios from 'axios';
import "../styles/AddHabit.css";

const AddHabit = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the habit object
    const newHabit = { name, description };

    try {
      // Send POST request to our backend API
      const response = await axios.post('http://localhost:5000/api/habits', newHabit);
      if (response.status === 201) {
        setSuccessMessage('Habit added successfully!');
        setName('');
        setDescription('');
      }
    } catch (error) {
      console.error('Error adding habit:', error);
      setSuccessMessage('Failed to add habit. Try again.');
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Add Habit</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input
          type="text"
          placeholder="Habit Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <textarea
          placeholder="Habit Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        <button type="submit" style={{ padding: '0.5rem', fontSize: '1rem', cursor: 'pointer' }}>
          Add Habit
        </button>
      </form>
      {successMessage && <p style={{ color: successMessage.includes('successfully') ? 'green' : 'red' }}>{successMessage}</p>}
    </div>
  );
};

export default AddHabit;
