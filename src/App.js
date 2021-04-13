import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <button>Get A New Random Joke</button>
          <a href="https://official-joke-api.appspot.com/">View Api Docs</a>
        </nav>
        <main>
          <p><h4>this is the setup</h4></p>
          <button>Show Punchline</button>
          <p>This is the Punchline</p>
        </main>
      </header>
    </div>
  );
}

export default App;
