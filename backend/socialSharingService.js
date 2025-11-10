const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/social/share', (req, res) => {
  const { userId, recipeId, platform } = req.body;
  if (!userId || !recipeId || !platform) {
    return res.status(400).json({ message: 'userId, recipeId and platform are required' });
  }
  // In real system, share to platform
  res.json({ message: `Recipe ${recipeId} shared by user ${userId} on ${platform}` });
});

const PORT = 7000;
app.listen(PORT, () => console.log(`Social Sharing service running on port ${PORT}`));
