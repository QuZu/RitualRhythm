import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/DeleteHabit.css';

const DeleteHabit = () => {
  const [habits, setHabits] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch habits from the backend
  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/habits');
        setHabits(response.data);
      } catch (error) {
        console.error('Error fetching habits:', error);
        setErrorMessage('Failed to load habits. Please try again.');
      }
    };

    fetchHabits();
  }, []);

  // Handle delete habit
  const handleDeleteHabit = async (id) => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      try {
        await axios.delete(`http://localhost:5000/api/habits/${id}`);
        setHabits(habits.filter((habit) => habit.id !== id));
        setSuccessMessage('Habit deleted successfully!');
      } catch (error) {
        console.error('Error deleting habit:', error);
        setErrorMessage('Failed to delete habit. Please try again.');
      }
    }
  };

  return (
    <div className="delete-habit-container">
      <h1 className="delete-habit-title">Delete Habit</h1>
      <p>Select a habit to delete from the list below:</p>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {habits.length === 0 ? (
        <p>No habits to display. Add a habit first!</p>
      ) : (
        <ul className="delete-habit-list">
          {habits.map((habit) => (
            <li key={habit.id} className="delete-habit-item">
              <div>
                <h3>{habit.name}</h3>
                <h4><b>{"Habit Day: "}</b>{habit.day}</h4>
                <p><b>{"Description: "}</b>{habit.description}</p>
              </div>
              <button
                onClick={() => handleDeleteHabit(habit.id)}
                className="delete-habit-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeleteHabit;
