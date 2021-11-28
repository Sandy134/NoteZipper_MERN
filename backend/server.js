const { application } = require("express");
const express = require("express");
require("dotenv").config();
const notes = require("./data/notes");
const app = express();

app.get("/", (req, res) => {
  res.send("API IS RUNNING");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => {
  console.log("Server started on the port 5000");
});
