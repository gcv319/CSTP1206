const express = require('express');
const app = express();
const PORT = 5000;

let employeeList = [
  {
    id: 1,
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    Salary: 100000
  },
  {
    id: 2,
    name: "Daniel",
    email: "daniel@company.ca",
    employeeID: 101,
    department: "HR",
    Salary: 50000
  }
];

// this is the start
app.get('/', (req, res) => {
  res.send('This is working!');
})

// this returns the entire list of employees
app.get('/employees', (req, res) => {
  return res.status(200).json(employeeList);
})

// this gets the employees in a given department
app.get("/employees/:department", (req, res) => {
  const department = req.params.department;

  const findEmployee = employeeList.find((employee) => employee.department == department ? true : false);

  if (findEmployee) {
    return res.status(200).json({
      message: "Successfully fetched the employee",
      data: findEmployee
    })
  }
  else {
    return res.status(404).json({
      message: "Employee Doesn't Exist"
    })
  }
})

// this returns the employee info with the given employeeID
app.get("/employees/id/:employeeID", (req, res) => {
  const employeeID = req.params.employeeID;

  const findEmployee = employeeList.find((employee) => employee.employeeID == employeeID ? true : false);

  if (findEmployee) {
    return res.status(200).json({
      message: "Successfully fetched the employee",
      data: findEmployee
    })
  }
  else {
    return res.status(404).json({
      message: "Employee Doesn't Exist"
    })
  }

})

// this is so that the data can be interpreted into the array
app.use(express.json());

app.post('/employees', (req, res) => {
  const data = req.body;

  // checks if any data is not filled
  if (!data.name || !data.email || !data.employeeID || !data.department || !data.Salary) {
    return res.status(500).json({
      message: "One of the parameters is missing"
    })
  }

  data.id = employeeList.length + 1;

  employeeList.push(data);

  return res.status(201).json({
    message: "Successfully fetched the article",
    data: employeeList
  })
})

// updates the employee's info
app.put("/employees/id/:employeeID", (req, res) => {
  const employeeID = req.params.employeeID;
  const postToUpdate = req.body;

  // checks if no field is empty
  if (!postToUpdate.name || !postToUpdate.email || !postToUpdate.employeeID || !postToUpdate.department || !postToUpdate.Salary) {
    return res.status(500).json({
      message: "One of the parameters is missing"
    })
  }

  employeeList = employeeList.map((post) => {
    if (post.employeeID == employeeID) {
      post = postToUpdate;
    }
    return post;
  })

  return res.status(200).json({
    message: "Successfully fetched the article",
    data: employeeList
  })

})

// this deletes the employee given its id
app.delete("/employees/id/:employeeID", (req, res) => {

  const employeeID = req.params.employeeID;

  const index = employeeList.findIndex((employee) => {
    if (employee.employeeID == employeeID) {
      return true;
    }
  })

  if (index !== -1) {
    employeeList.splice(index, 1);

    return res.status(200).json({
      message: "Successfully deleted the article",
      data: employeeList
    })
  }
  else {
    return res.status(404).json({
      message: "Article Doesn't Exist"
    })
  }
})

// this outputs the employees with the highest salary sorted
app.get('/employees/salaries/highest', (req, res) => {
  return res.status(200).json(employeeList.sort((a, b) => b.Salary - a.Salary));
})

// this checks if it is working
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
})