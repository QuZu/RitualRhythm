const habits =[];

//Get all habits
exports.getAllHabits = (req, res) => {
    res.status(200).json(habits);
}

// Create a habit
exports.createHabit = (req, res) => {
  const { name, description, days } = req.body;

  if (days.length === 0) {
    return res.status(400).json({ error: 'At least one day must be selected.' });
  }

 const newHabits = days.map((day) => 
  {
    return {
      id: Date.now()+Math.random(),
      name,
      description,
      day,
      openDate: new Date(),
      completedDate: null,
    };
  });

  habits.push(...newHabits);
  res.status(201).json(newHabits);
}

// Update a existing habit
exports.updateHabit = (req, res) =>{
    const { id } = req.params;
    const index = habits.findIndex(habit => habit.id == id);
    if (index > -1) {
        habits[index] = { ...habits[index], ...req.body };
        res.json(habits[index]);
    } 
    else {
        res.status(404).send('Habit not found');
    }
}

// Delete a habit
exports.deleteHabit = (req, res) =>{
    const { id } = req.params;
    const index = habits.findIndex(habit => habit.id == id);
    if (index > -1) {
        habits.splice(index, 1);
        res.status(204).send();
    } 
    else {
        res.status(404).send('Habit not found');
    }
}

// Mark a habit as complete
exports.markComplete = (req, res) => {
    const { id } = req.params;
    const index = habits.findIndex((habit) => habit.id == id);
    if (index > -1) {
      const completionTime = new Date().toISOString();
      console.log('completionTime:', completionTime);
      
      habits[index].completedDate = completionTime;
      res.status(200).json(
        {
          id: habits[index].id,
          name: habits[index].name,
          description: habits[index].description,
          day: habits[index].day,
          openDate: habits[index].openDate,
          completedDate: habits[index].completedDate,
        }
      );
    } else {
      res.status(404).send('Habit not found');
    }
  }
  