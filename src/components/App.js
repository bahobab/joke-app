import { useEffect, useState } from 'react';

import Header from './Header';
import Joke from './Joke';

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
  const [error, setError] = useState(false);

  useEffect(() => {
    getJoke();
  }, []);

  async function getJoke() {
    // call fetchNewJoke
    try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const json = await response.json();
  
    console.log(json);
    
    setJoke(json);
      // reset hide punchline
    setShowPunchline(false);
  } catch (error) {
    setJoke({ setup: 'THERE WAS AN ERROR LOADING YOUR JOKE' });
    setError(true);
    // reset hide punchline
    setShowPunchline(false);
    }
    

  }
  
  return (
    <div className="App">
      <Header joke={joke} getJoke={getJoke} setJoke={setJoke} />
      <hr className="separator" />
      <Joke joke={joke} showPuncline={showPuncline} setShowPunchline={setShowPunchline} error={error }/>
    </div>
  );
}

export default App;
