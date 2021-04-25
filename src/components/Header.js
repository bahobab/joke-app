import './Header.css';

const Header = (props) => {

  async function handleNewJokeClick(e) {
    props.getJoke();
  }

  return (
    <header className="App-header" >
      <nav className="nav-elements">
        <div style={{height:'60px'}}>
        <button
          onClick={handleNewJokeClick}
          className="btn-get-joke"
          aria-describedby="Get A New Random Joke"
        >
            Get A New Random Joke
        </button>
          </div>
        <a
          className="joke-docs"
          href="https://github.com/15Dkatz/official_joke_api"
          target="_blank" rel="noreferrer"
          aria-describedby="Navigate to the API Docs"
        >
          View API Docs
        </a>
      </nav>
    </header>
  );
}

export default Header