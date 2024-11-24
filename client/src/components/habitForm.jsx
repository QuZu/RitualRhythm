import React, { useState,useEffect } from 'react';
import axios from 'axios';
const HabitForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [selectedDays, setSelectedDays] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
  


    useEffect(() => {
      if (successMessage) {
        const timer = setTimeout(() => {
          setSuccessMessage(''); 
        }, 3000);
  
        return () => clearTimeout(timer);
      }
    }, [successMessage]);
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if(selectedDays.length === 0) {
        setSuccessMessage('Please select at least one day.');
        return;
      }
  
      const newHabit = { name, description, days: selectedDays };
  
      try {
        const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/habits`, newHabit);
        if (response.status === 201) {
          setSuccessMessage('Habit added successfully!');
          setName('');
          setDescription('');
          setSelectedDays([]);
        }
      } catch (error) {
        console.error('Error adding habit:', error);
        setSuccessMessage('Failed to add habit. Try again.');
      }
    };
  
    const handleDayChange = (day) => {  
      if (selectedDays.includes(day)) {
        setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
      } else {
        setSelectedDays([...selectedDays, day]);
      }
    }
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
    <>   
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
        <h2 className="weekdays-title">Select Days</h2>
        <div className="weekdays-container">
          {weekdays.map((day) => (
            <button
              type="button"
              key={day}
              className={`weekday-button ${selectedDays.includes(day) ? 'selected' : ''}`}
              onClick={() => handleDayChange(day)}
            >
              {day}
            </button>
          ))}
        </div>
            <button type="submit" className="add-habit-button">
            Add Habit
            </button>
        </form>
        <p
            className={
            successMessage.includes('successfully')
                ? 'add-habit-success'
                : 'add-habit-error'
            }
        >
            {successMessage}
        </p>
    </>
    );

};

export default HabitForm;
