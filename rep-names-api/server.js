const express = require('express');
const app = express();
const PORT = 5000;

const rappers = {
  "Rick Ross": {
    age: 46,
    birthName: "William Leonard Roberts II",
    birthLocation: "Clarksdale, Mississippi, U.S.",
  },

  "Chance the Rapper": {
    age: 29,
    birthName: "Chancelor Johnathan Bennett ",
    birthLocation: "Chicago,Illinois",
  },

  "Eminem": {
    age: 39,
    birthName: "Chancelor Johnathan Bennett ",
    birthLocation: "St. Joseph, Missouri, U.S.",
  },

   "Dylan": { 
    age: 39,
    birthName: "Chancelor  ",
    birthLocation: " U.S.",
  }

  
};

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:rapperName', (request, response) => {
  const rappersName = request.params.rapperName
  if(rappers[rappersName]){
    response.json(rappers[rappersName])
  }
  else{
    response.json(rappers['Dylan'])
  }
    // response.json(rappers)
});

app.listen(PORT, () => {
    console.log(`The server is listening on  port ${PORT}`);
})