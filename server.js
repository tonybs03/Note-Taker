const express = require('express');
const path = require('path');


// Initiating the server with express
const app = express();


//Assigning the PORT parameter
const PORT = process.env.PORT || 3001;


// Providing access to the static html files nested in the public folder
app.use(express.static("public"));


// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Creating the API and HTML routes for express usage
const APIroutes = require("./routes/APIroutes.js");
app.use(APIroutes);

const HTMLroutes = require("./routes/HTMLroutes.js");
app.use(HTMLroutes);


// Initiating the listener at the localhost with the assigned PORT number
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
