const express = require('express');
const PORT = 4000;
const app = express();

let today = new Date();

let dd = String(today.getDate()).padStart(2, '0');
let mm = today.getMonth();
let yyyy = today.getFullYear();

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

today = `${months[mm]} ${dd}, ${yyyy}`;

let userInfo = {
  name: "name: Gio",
  email: "email: gio@vcc.ca",
  date: "date: " + today,
  phoneNumber: "number: " + 6041237890,
  social: {
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/769px-Instagram-Icon.png": "https://www.instagram.com/",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4n_urpJ9XpwOTdzBVbGvactwHrPagYQrTJPYjxfxLGkSyu7nJZVqRVGAeohnPgKMrnKE&usqp=CAU": "https://twitter.com/",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png": "https://www.facebook.com/"
  }
}

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

app.get('/', (req, res) => {
  res.render('index', { data: userInfo });
})

app.listen(PORT, (req, res) => {
  console.log(`Server is running on ${PORT}`);
})
