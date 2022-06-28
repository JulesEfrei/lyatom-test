import logo from './logo.svg';
import './App.css';

import data from '../lyatom-config';
import infoJson from './data/data.json'

function App() {
  return (
    <div className="App">

      <AdminPanel config={data} githubToken={process.env.REACT_APP_GH_TOKEN_PERSONAL} />

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          {infoJson.paragraph}
        </p>
        <a
          className="App-link"
          href={infoJson.link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {infoJson.link.text}
        </a>
      </header>

    </div>
  );
}

export default App;
