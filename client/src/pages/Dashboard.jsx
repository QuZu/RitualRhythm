import React, { useEffect, useState } from 'react';
import axios from 'axios';
import HabitItem from '../components/habitItem';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/habits`);
        setHabits(response.data);
        console.log('habits:', response.data);
        
      } catch (error) {
        console.error('Error fetching habits:', error);
      }
    };

    fetchHabits();
  }, []);

  // Mark a habit as completed
  const handleComplete = async (id) => {
    try {
      const response = await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/habits/${id}/complete`);
      const updatedHabit = response.data;
      console.log('updatedHabit:', updatedHabit);
      
      const updatedHabits = habits.map((habit) =>
        habit.id === updatedHabit.id ? updatedHabit : habit
      );
      setHabits(updatedHabits)
    } catch (error) {
      console.error('Error marking habit as completed:', error);
    }
  };

  // Group habits by day
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const habitsByDay = days.map((day) => ({
    day,
    openTasks: habits
      .filter((habit) => habit.day === day && !habit.completedDate) 
      .sort((a, b) => {  
      const dateA = new Date(a.openDate);
      const dateB = new Date(b.openDate);
      return dateA - dateB; 
    }),
    completedTasks: habits
      .filter((habit) => habit.day === day && habit.completedDate) 
      .sort((a, b) => {
        const dateA = new Date(a.completedDate);
        const dateB = new Date(b.completedDate);
        return dateB - dateA; 
      }),
  }));
  
  const maxRows = Math.max(...habitsByDay.map((dayGroup) => dayGroup.openTasks.length + dayGroup.completedTasks.length),
    1
  );
  const rows = [];
for (let rowIndex = 0; rowIndex < maxRows; rowIndex++) {
  rows.push(
    <tr key={rowIndex}>
      {habitsByDay.map((dayGroup) => (
        <td key={dayGroup.day}>
          {rowIndex < dayGroup.openTasks.length ? (
            <HabitItem
              habit={dayGroup.openTasks[rowIndex]}
              onComplete={() => handleComplete(dayGroup.openTasks[rowIndex].id)}
              isCompleted={false}
              openTime={dayGroup.openTasks[rowIndex].openDate}
            />
          ) : rowIndex - dayGroup.openTasks.length < dayGroup.completedTasks.length ? (
            <HabitItem
              habit={dayGroup.completedTasks[rowIndex - dayGroup.openTasks.length]}
              isCompleted={true}
              openTime={dayGroup.completedTasks[rowIndex - dayGroup.openTasks.length].openDate}
              completionTime={dayGroup.completedTasks[rowIndex - dayGroup.openTasks.length].completedDate}
            />
          ) : ( null
          )}
        </td>
      ))}
    </tr>
  );
}

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Weekly Habit Tracker</h1>
      <div className='scrollable-tbody'>
      <table className="dashboard-table">
        <thead>
          <tr>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Dashboard;
