const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Hello Eyego</title>
      </head>
      <body style="display: flex; justify-content: center; align-items: center; height: 100vh; background-color: #f9f9f9;">
        <h1 style="font-size: 3em; color: #2c3e50;">👋 Hello, Eyego!</h1>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
