import React from 'react';

const HabitItem = ({ habit, onComplete, onDelete }) => {
    return (
        <li>
            <h3>{habit.name}</h3>
            <p>{habit.description}</p>
            <p>Completed: {habit.completedDates.length} times</p>
            <button onClick={onComplete}>Mark Complete</button>
        </li>
    );
};

export default HabitItem;
