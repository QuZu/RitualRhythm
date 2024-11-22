import React from "react";
import HabitItem from "./habitItem";

const HabitList = ({ habits, onDelete }) => {
    return (   
        <ul>
            {habits.map(habit => (
                <HabitItem
                    key={habit.id}
                    habit={habit}
                />
            ))}
        </ul>
    );
};

export default HabitList;