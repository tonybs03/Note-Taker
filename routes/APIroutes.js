const fs = require("fs");
const apiRouter = require("express").Router();
const notesData = require("../db/db.json");
const { v4: uuid } = require("uuid")

//apiRouter for the getNotes function from index.js, returning the notesData 
//from the db.json file
apiRouter.get("/api/notes", (req, res) => 
    res.json(notesData)
);


// apiRouter for the saveNote function from index.js, where req.body is the 
// stringfyed object of the user input notes data
apiRouter.post("/api/notes", (req, res) => {
  req.body.id = uuid();

  notesData.push(req.body);

  fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
    if (err) {
        console.info(err);
    };
  });
  // return the notesData for rendering
  res.json(notesData);
});


// apiRouter for the deleteNote function from index.js, where :id is the 
// ID of the specific note piece
apiRouter.delete("/api/notes/:id", (req, res) => {
  const IDtobeDeleted = req.params.id;
  for (let i = 0; i < notesData.length; i++) {
    if (notesData[i].id == IDtobeDeleted) {
      notesData.splice(i, 1);
    }
  }
  fs.writeFile("./db/db.json", JSON.stringify(notesData), (err) => {
    if (err) {
        console.info(err);
    };
  });
  // return the notesData for rendering
  newnotesData = notesData
  res.json(newnotesData);
});

module.exports = apiRouter;
