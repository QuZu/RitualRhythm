const express = require('express');
const cors = require('cors');
const habitRoutes = require('./routes/habitRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/habits', habitRoutes);

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
