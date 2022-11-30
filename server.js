import express from 'express';

const app = express();

const server = app.listen(3001, () => {
   console.log("The server is listening... 🐒") 
});

// replace "/path" with your own path
app.get('/path', (request, response) => {
});