const express = require('express');
const PORT = 4000;
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { name: "Gio" })
})

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
})
