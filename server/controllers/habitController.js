const habits =[];

//Get all habits
exports.getAllHabits = (req, res) => {
    res.status(200).json(habits);
};

//Create a habit
exports.createHabit = (req, res) => {
    const myHabit =  { id: Date.now(), ...req.body, completedDates: [] };
    habits.push(myHabit);
    res.status(201).json(habit);
};

// Update a existing habit
exports.updateHabit = (req, res) => {
    const { id } = req.params;
    const index = habits.findIndex(habit => habit.id == id);
    if (index > -1) {
        habits[index] = { ...habits[index], ...req.body };
        res.json(habits[index]);
    } 
    else {
        res.status(404).send('Habit not found');
    }
};

// Delete a habit
exports.deleteHabit = (req, res) => {
    const { id } = req.params;
    const index = habits.findIndex(habit => habit.id == id);
    if (index > -1) {
        habits.splice(index, 1);
        res.status(204).send();
    } 
    else {
        res.status(404).send('Habit not found');
    }
};

// Mark a habit as complete
exports.markComplete = (req, res) => {
    const { id } = req.params;
    const index = habits.findIndex(habit => habit.id == id);
    const today = new Date().toISOString().split('T')[0];
    if (index > -1) {
        const today = new Date().toISOString().split('T')[0];
        if (!habits[index].completedDates.includes(today)) {
            habits[index].completedDates.push(today);
        }
        res.json(habits[index]);
    }
    else {
        res.status(404).send('Habit not found');
    }
};