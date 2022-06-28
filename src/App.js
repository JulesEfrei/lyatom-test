import React from "react";

import AdminPanel from "lyatom-cms";
import data from "./lyatomConfig.ts";
import infoJson from "./data/data.json";

function App() {
  return (
    <div>
      <AdminPanel
        config={data} // import une config here
        githubToken={process.env.REACT_APP_GH_TOKEN_PERSONAL} // create a PAT on github and add it to the .env
      />

      <h1 id="title-example-id">{infoJson.title}</h1>
      <p id="subtile-example-id">{infoJson.paragraph}</p>
      <img
        id="logo-example-id"
        alt="logo"
        src={require("./assets/" + infoJson.image).default}
      />
    </div>
  );
}

export default App;
