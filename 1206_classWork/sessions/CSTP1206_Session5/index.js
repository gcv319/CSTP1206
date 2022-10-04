// Importing http module from node.js to our project
const http = require("http");
const PORT = 4000;

// Create a server
const server = http.createServer((request, response) => {
    
    if (request.url === "/") {
        // Setting headers to text and html so the browser what
        // kind of response I will recieve
        response.setHeader("Content-type", "text/html");
        
        // We are sending a response to the client/browser using
        // response.write();
        response.write("<h1>Hello thank you for contacting me! </h1>");

        // Ending the response
        response.end();
    }
});

// Listen a server
server.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
