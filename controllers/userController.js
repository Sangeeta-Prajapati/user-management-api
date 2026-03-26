const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../data/users.json');

// Helper: read/write JSON file
const readData = () => JSON.parse(fs.readFileSync(dataPath));
const writeData = (data) => fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

// GET /users
exports.getUsers = (req, res) => {
  let users = readData();

  // Filter by search
  if (req.query.search) {
    const search = req.query.search.toLowerCase();
    users = users.filter(u => u.name.toLowerCase().includes(search));
  }

  // Sorting
  if (req.query.sort) {
    const order = req.query.order === 'desc' ? -1 : 1;
    users.sort((a, b) => (a[req.query.sort] > b[req.query.sort] ? order : -order));
  }

  res.json(users);
};

// GET /users/:id
exports.getUserById = (req, res) => {
  const users = readData();
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });
  res.json(user);
};

// POST /users
exports.createUser = (req, res) => {
  const users = readData();
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  writeData(users);
  res.status(201).json(newUser);
};

// PUT /users/:id
exports.updateUser = (req, res) => {
  const users = readData();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  users[userIndex] = { ...users[userIndex], ...req.body };
  writeData(users);
  res.json(users[userIndex]);
};

// DELETE /users/:id
exports.deleteUser = (req, res) => {
  let users = readData();
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).json({ message: 'User not found' });

  const deletedUser = users.splice(userIndex, 1);
  writeData(users);
  res.json(deletedUser[0]);
};