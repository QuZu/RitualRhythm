import React,{useEffect,useState} from "react";
import axios from "axios";
import "../styles/Dashboard.css";
import HabitList from "../components/HabitList";

const Dashboard = () => {
    const [habits, setHabits] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchHabits = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/habits');
                setHabits(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching habits:', error);
                setErrorMessage('Failed to fetch habits. Try again.');
                setLoading(false);
            }
        };
        fetchHabits();
    }, []);


    return (
        <div style={{ padding: "1rem" }}>
        <h1>Dashboard</h1>
        <p>Here you can see all your habits and their progress!</p>

        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        {habits.length === 0 ? (
            <p>No habits to display. Add a habit to get started!</p>
        ) : (
            <HabitList habits={habits} />
        )}
        </div>
    );
};
export default Dashboard;