import './Header.css';

const Header = (props) => {

  async function handleNewJokeClick(e) {
    props.getJoke();
  }

  return (
    <header className="App-header" >
      <nav className="nav-elements">
          <button onClick={handleNewJokeClick} className="btn-get-joke" >Get A New Random Joke</button>
        <a className="joke-docs" href="https://github.com/15Dkatz/official_joke_api" target="_blank" rel="noreferrer">
          View API Docs
        </a>
      </nav>
    </header>
  );
}

export default Header