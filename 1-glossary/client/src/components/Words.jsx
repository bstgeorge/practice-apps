import React from 'react';
import { useState, useEffect } from 'react';
const axios = require('axios');

export default function Words({list, setList}) {
  // destructuring converts to array
  let handleDelete = (evt) => {
    axios.post('/deleteEntry', {_id: evt.target.value},
      {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        console.log(res.data);
        location.reload();
      })
      .catch((err) => {
        console.log('error: ', err)
      })
  };

  return (
    <dl>
        { list.map((entry) => {
          return (
          <div key={entry._id}>
            <dt>Word:</dt>
            <dd key={entry.word}>{ entry.word }</dd>
            <dt>Definition:</dt>
            <dd key={entry.definition}>{ entry.definition }</dd>
            <button type="button" >Edit</button>
            <button type="button" value={entry._id} onClick={handleDelete} >Delete</button>
          </div>)
        })}
    </dl>
  )
}

