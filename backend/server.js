const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Simple in-memory DB substitute
const users = [];
const recipes = [
  { id: 1, name: 'Sunny Mood Salad', mood: 'happy', ingredients: ['lettuce', 'tomato', 'cucumber'], nutrition: { calories: 150 } },
  { id: 2, name: 'Calm Blueberry Smoothie', mood: 'calm', ingredients: ['blueberries', 'milk', 'honey'], nutrition: { calories: 200 } }
];
const userFavorites = {};

// User registration
app.post('/api/users/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Username and password required' });
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: 'User already exists' });
  }
  // For MVP store plain for simplicity (hashing in real app)
  users.push({ username, password });
  res.status(201).json({ message: 'User registered' });
});

// User login
app.post('/api/users/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  // In MVP return dummy token
  res.json({ token: 'fake-jwt-token-for-' + username });
});

// Get recipes by mood
app.get('/api/mood-recommendations', (req, res) => {
  const mood = req.query.mood;
  if (!mood) return res.status(400).json({ message: 'Mood query parameter required' });
  const filtered = recipes.filter(recipe => recipe.mood === mood);
  res.json(filtered);
});

// Get recipe details
app.get('/api/recipes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find(r => r.id === id);
  if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
  res.json(recipe);
});

// Feedback endpoint dummy
app.post('/api/feedback', (req, res) => {
  res.json({ message: 'Thanks for your feedback!' });
});

// User favorites
app.post('/api/users/:id/favorites', (req, res) => {
  const userId = req.params.id;
  const { recipeId } = req.body;
  if (!recipeId) return res.status(400).json({ message: 'recipeId required' });
  if (!userFavorites[userId]) userFavorites[userId] = [];
  userFavorites[userId].push(recipeId);
  res.json({ message: 'Favorite added' });
});

app.get('/api/users/:id/favorites', (req, res) => {
  const userId = req.params.id;
  const favs = userFavorites[userId] || [];
  res.json(favs);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
