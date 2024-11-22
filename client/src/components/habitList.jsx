import React from "react";
import HabitItem from "./habitItem";

const HabitList = ({ habits, onDelete }) => {
    return (   
        <ul>
            {habits.map(habit => (
                <HabitItem
                    key={habit.id}
                    habit={habit}
                    onComplete={() => onComplete(habit.id)}
                    onDelete={() => onDelete(habit.id)}
                />
            ))}
        </ul>
    );
};

export default HabitList;