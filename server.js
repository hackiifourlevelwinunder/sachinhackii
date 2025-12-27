const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to fetch random trend-based number
app.get('/api/trend', (req, res) => {
    // Simulate real trend-based number
    const trendNumber = Math.floor(Math.random() * 10); // Replace with real trend logic
    res.json({ number: trendNumber });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});