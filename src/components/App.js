import { useEffect, useState } from 'react';

import Header from './Header';
import Joke from './Joke';
import Loading from './Loading';

import './App.css';

function App() {
    const [isLoading, setIsLoading] = useState(false);
  const [joke, setJoke] = useState({});
  const [showPuncline, setShowPunchline] = useState(false);
  const [error, setError] = useState(false);
  // const [offLine, setOffLine] = useState(false);

  useEffect(() => {
    getJoke();
  }, []);

  async function getJoke() {
    setIsLoading(true);
    setError(false);
    // call fetchNewJoke
    try {
    const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
    const json = await response.json();
  
      setIsLoading(false);
    setJoke(json);
      // reset hide punchline
    setShowPunchline(false);
    } catch (error) {
      setIsLoading(false);
    setJoke({ setup: 'THERE WAS AN ERROR LOADING YOUR JOKE.' });
      setError(true);
    // reset hide punchline
      setShowPunchline(false);
    }
    

  }
  
  return (
    <div className="App">
      <Header joke={joke} getJoke={getJoke} setJoke={setJoke} />
      <hr className="separator" />
      {
        isLoading
          ? <Loading />
          :
          <Joke
          joke={joke}
          showPuncline={showPuncline}
          setShowPunchline={setShowPunchline}
          error={error}
          />
    }
    </div>
  );
}

export default App;
