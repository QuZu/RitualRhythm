import React from 'react';
import '../styles/HabitItem.css';

const HabitItem = ({ habit, onComplete, isCompleted,completionTime }) => {
  const formattedTime = completionTime
    ? new Date(completionTime).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',weekday: 'short' })
    : '';
  return (
    <li className={`default-habit-item ${isCompleted ? 'completed' : 'uncompleted'}`}>
      <h3>{habit.name}</h3>
      <p>{habit.description}</p>
      {!isCompleted && (
        <button onClick={onComplete} className="complete-button">Complete</button>
      )}
      {isCompleted && 
      (
          <p className="completion-time">Completed on {formattedTime}</p>
      )}
    </li>
  );
};

export default HabitItem;
