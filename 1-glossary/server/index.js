require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const saveEntry = require('./db').saveEntry
const updateEntry = require('./db').updateEntry
const deleteEntry = require('./db').deleteEntry
const getAllEntries = require('./db').getAllEntries

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(express.json());

app.post('/saveEntry', (req, res) => {
  saveEntry(req.body.word, req.body.definition)
   .then((result) => {
      res.send('save successful')})
   .catch((err) => {
      res.send(`error writing to db: ${err}`)})
});

app.post('/updateEntry', (req, res) => {
  //console.log(req.body);
  res.send('request received')
});

app.post('/deleteEntry', (req, res) => {
  deleteEntry(req.body)
    .then(() => {
      res.send('deletion successful');
    })
    .catch(() => {
      return(err)
    })
});

app.get('/getAllEntries', (req, res) => {
  getAllEntries()
  .then((allEntries) => {
    res.send(allEntries)
  })
  .catch((err) => {
    return(err)
  })
});

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
