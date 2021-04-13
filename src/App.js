import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const initialJoke = {
    "id": 0,
    "type": "general",
    "setup": "LOADING YOUR JOKE",
    "punchline": "##Initialization##"
  };

  const [joke, setJoke] = useState(initialJoke);
  const [showPuncline, setShowPunchline] = useState(false);

  useEffect(() => {
    getJoke();
  }, []);

  async function getJoke() {
    // call fetchNewJoke
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const json = await response.json();
  
    console.log(json);

    setJoke(json);

    // reset hide punchline
    setShowPunchline(false);
  }

  async function handleNewJokeClick(e) {
    getJoke();
  }

  function handlePunchlineClick(e) {
    // toggle show hid punchline
    setShowPunchline(!showPuncline);
  }

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button onClick={handleNewJokeClick}>Get A New Random Joke</button>
          <a href="https://official-joke-api.appspot.com/">View Api Docs</a>
        </nav>
        <main>
          <p><h4>{ joke.setup }</h4></p>
          <button onClick={handlePunchlineClick}>{!showPuncline ? 'Show Punchline' : 'Hide Punchline'}</button>
          {showPuncline && <p>{joke.punchline}</p>}
        </main>
      </header>
    </div>
  );
}

export default App;
