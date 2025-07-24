const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send(`Hello Eyego\n
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
