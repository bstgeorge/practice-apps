import React from "react";
import { render } from "react-dom";
//const path = require('path');
import Words from "./components/Words.jsx";

render(
  <div>
    <h1>Glossary</h1>
    <form>
      <p>
        <label for="word">
          Word:<br></br><input type="text" id="word" name="word"></input>
        </label>
        <br></br>
        <label for="defintion">
          Definition:<br></br><input type="text" id="definition" name="definition"></input>
        </label>
      </p>
    </form>
    <button type="submit">Submit</button>
    <br></br>
    <h3>Current Words & Definitions</h3>
    <Words />
  </div>,
  document.getElementById("root")
);
