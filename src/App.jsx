import React from "react";

import AdminPanel from "lyatom-cms";
import data from "./lyatomConfig.ts";
import infoJson from "./data/data.json";
import images from "./assets/"

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
        src={images[infoJson.image]}
      />

      <a id="object-example" href={infoJson.link.link}>{infoJson.link.text}</a>

    </div>
  );
}

export default App;