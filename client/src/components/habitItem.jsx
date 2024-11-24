import React from 'react';
import '../styles/HabitItem.css';

const HabitItem = ({ habit, onComplete, isCompleted,completionTime,openTime }) => {
  const formattedTime = completionTime
    ? new Date(completionTime).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',weekday: 'short' })
    : '';
  const formattedOpenTime = openTime
    ? new Date(openTime).toLocaleString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit',weekday: 'short' })
    : '';
  return (
    <li className={`default-habit-item ${isCompleted ? 'completed' : 'uncompleted'}`}>
      <h3>{habit.name}</h3>
      <div className='default-habit-item-content'>
        <p className='habit-description'>{habit.description}</p>
        {!isCompleted && (
          <button onClick={onComplete} className="complete-button">Complete</button>
        )}
        <p className="open-time"><b>Opened:</b> {formattedOpenTime}</p>
        {isCompleted && 
        (
            <p className="completion-time"><b>Completed: </b>{formattedTime}</p>
        )}
      </div>
    </li>
  );
};

export default HabitItem;
