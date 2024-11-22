import React from 'react';

const HabitItem = ({ habit, onComplete, onDelete }) => {
    return (
        <li>
            <h3>{habit.name}</h3>
            <p>{habit.description}</p>
            <p>Completed: {habit.completedDates.length} times</p>
        </li>
    );
};

export default HabitItem;
