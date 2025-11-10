import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [mood, setMood] = useState('happy');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchRecipes() {
    setLoading(true);
    try {
      const res = await axios.get(`/api/mood-recommendations?mood=${mood}`);
      setRecipes(res.data);
    } catch (err) {
      alert('Error fetching recipes');
    }
    setLoading(false);
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Mood Based Recipe Recommendations</h1>
      <select onChange={e => setMood(e.target.value)} value={mood}>
        <option value="happy">Happy</option>
        <option value="calm">Calm</option>
      </select>
      <button onClick={fetchRecipes}>Get Recipes</button>
      {loading ? <p>Loading...</p> : (
        <ul>
          {recipes.map(r => <li key={r.id}>{r.name}</li>)}
        </ul>
      )}
    </div>
  );
}
