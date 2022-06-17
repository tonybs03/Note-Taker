const path = require("path");
const htmlRouter = require("express").Router();


// routing to the main index page
htmlRouter.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);


// routing to the notes page
htmlRouter.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});


// routing to the main page (this had to be put at last to not mess up)
htmlRouter.get("*", (req, res) => 
    res.sendFile(path.join(__dirname, "../public/index.html"))
);


module.exports = htmlRouter;
