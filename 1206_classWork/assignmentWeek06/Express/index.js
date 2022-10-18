const express = require('express');
const app = express();
const PORT = 3000;

let Employee = [
  {
    "Name": "Daniel",
    "employeeId": 100,
    "Email": "daniel@gmail.com",
    "Department": "IT"
  }
];


app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/employees', (req, res) => {
  return res.status(200).json(Employee);
});

app.use(express.json());

app.post('/employees', (req, res) => {
  const data = req.body;
  Employee.push(data);
  return res.status(201).json(Employee);
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});