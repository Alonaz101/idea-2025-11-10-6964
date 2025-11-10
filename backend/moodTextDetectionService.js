// Simple stub for sentiment analysis microservice
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/mood-text-detection', (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: 'Text input required' });
  // Dummy sentiment detection: happy if contains "good", sad if "bad", else neutral
  let mood = 'neutral';
  if (text.toLowerCase().includes('good')) mood = 'happy';
  else if (text.toLowerCase().includes('bad')) mood = 'sad';
  res.json({ mood });
});

const PORT = 6000;
app.listen(PORT, () => console.log(`Mood Text Detection service running on port ${PORT}`));
