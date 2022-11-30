import express from 'express';

const app = express();
const server = app.listen(3001, () => {
   console.log("The server is listening... 🐒") 
});
// replace "/path" with your own path
app.get('/hello', (request, response) => {
    response.send("Hello World");
});
app.get('/time', (request, response) => {
    // return a response with the current time and date in ISO format
    response.send(new Date().toISOString());
});
app.get('/random', (request, response) => {
    response.send(Math.random().toString());
});
app.get('/isNumber', (request, response) => {
const value = request.query.value;
    if (isNaN(value)) {
        response.send("This is not a number");
    }
    else {
        response.send("This is a number");
    }
});