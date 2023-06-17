import React from 'react';
import { useState, useEffect } from 'react';
import Words from './Words.jsx';
const axios = require('axios');

export default function App() {
  const [wordEntry, setWordEntry] = useState('');
  const [defEntry, setDefEntry] = useState('');
  const [list, setList] = useState([]);

  // get starting glossary
  let getGlossary = () => {
    axios.get('/getAllEntries')
    .then((entries) => {
      //console.log(entries.data); //this is an array.
      setList(entries.data)
    })
    .catch((err) => {
      console.log(err);
    })
  };

  useEffect(getGlossary, []);

  let handleWordChange = (evt) => {
    setWordEntry(evt.target.value);
  };

  let handleDefChange = (evt) => {
    setDefEntry(evt.target.value)
  };

  let handleSubmit = () => {
    axios.post('/saveEntry', {
      word: wordEntry,
      definition: defEntry
    },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        getGlossary();
      })
      .then(() => {
        // document.getElementsByClassName("inputBox")
        var allInputs = document.querySelectorAll('input');
        allInputs.forEach(singleInput => singleInput.value = '');

      })
      .catch((err) => {
        console.log(err);
      })
  };


  return (
    <div>
      <h1>Glossary</h1>
      <p>Word:</p>
      <input type="text" name="word" className="inputBox" onChange={handleWordChange}></input>
      <p>Definition:</p>
      <input type="text" name="definition" className="inputBox" onChange={handleDefChange}></input>
      <p>
        <button type="button" onClick={handleSubmit}>Submit</button>
      </p>
      <br></br>
      <h3>Current Words & Definitions</h3>
      <div></div>
      <Words list = { list } setList = { setList }/>
    </div >)
}
