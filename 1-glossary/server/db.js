const path = require("path");
require("dotenv").config();
const mongoose = require("mongoose");

// 1. Use mongoose to establish a connection to MongoDB
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`).then(
  () => {console.log('db connection successful')},
  (err) => {'error', console.error.bind(console,  'connection error:')}
);


// 2. Set up any schema and models needed by the app
const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
}, {collection: 'glossary'});

const Glossary = mongoose.model('Glossary', glossarySchema);

let saveEntry = (word, definition) => {
  return Glossary.create({word: word, definition: definition})
};

let updateEntry = (word, username) => {
  return Glossary.find({word: word}, {word: word, definition: definition})
};

let deleteEntry = (id) => {
  return Glossary.deleteOne(id)
};

let getAllEntries = () => {
  return Glossary.find({})
    // .then((data) => console.log(data));
};



// 3. Export the models
module.exports.saveEntry = saveEntry;
module.exports.updateEntry = updateEntry;
module.exports.deleteEntry = deleteEntry;
module.exports.getAllEntries = getAllEntries;

// 4. Import the models into any modules that need them
