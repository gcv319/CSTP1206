const express = require('express');
const PORT = 3000;

let Employee = [
  {
    "Name": "Daniel",
    "empoyeeId": 100,
    "Email": "daniel@gmail.com",
    "Department": "IT"
  }
];

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/employees', (req, res) => {
  res.status(200).json(Employee);
});

app.post('/employees', (req, res) => {
  Employee.push(req.body);
  res.status(201).json(Employee);
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});