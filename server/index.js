const express = require('express');

const port = 8081;

const app = express();

app.get('/hello', (req, res) => {
  res.send({data: 'Hello from server'})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

