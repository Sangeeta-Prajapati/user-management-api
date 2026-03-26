const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

// Root route
app.get('/', (req, res) => res.send('User Management API is running'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));