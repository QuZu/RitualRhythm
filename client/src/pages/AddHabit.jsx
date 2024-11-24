import React from 'react';

import '../styles/AddHabit.css';
import HabitForm from '../components/habitForm';

const AddHabit = () => {
  return (
    <div className="add-habit-container">
      <h1 className="add-habit-title">Add Habit</h1>
      <HabitForm></HabitForm>
    </div>
  );
};

export default AddHabit;
