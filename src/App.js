import React from "react";
import "./App.css";

import AdminPanel from "lyatom-cms";
import data from "./lyatomConfig.ts";
import infoJson from "./data/data.json";

function App() {
  return (
    <div className="App">

      <AdminPanel
        config={data}
        githubToken={process.env.REACT_APP_GH_TOKEN_PERSONAL}
      />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p id="paragraph">{infoJson.paragraph}</p>
        <a
          className="App-link"
          id="link-test"
          href={infoJson.link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {infoJson.link.text}
        </a>
      </header>
    </div>
  )
}

export default App;
