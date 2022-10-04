const http = require("http");
const PORT = 5000;

const server = http.createServer((request, response) => {
    response.setHeader("content-type", "text/html");

    if(request.url === "/dogs") {
        response.write("<img src='https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445'>");

        response.end();
    }

    if(request.url === "/cats") {
        response.write("<img src='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=3qHaqQ56'>");

        response.end();
    }
})

server.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})