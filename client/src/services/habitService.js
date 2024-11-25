import axios from 'axios';

const API_URL = 'http://localhost:5000/api/habits'

export const fetchHabits = () => axios.get(API_URL);
export const createHabit = (data) => axios.post(API_URL, data);
export const deleteHabit = (id) => axios.delete(`${API_URL}/${id}`);
export const markHabitComplete = (id) => axios.patch(`${API_URL}/${id}/complete`);