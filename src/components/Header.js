import './Header.css';

const Header = (props) => {

  async function handleNewJokeClick(e) {
    props.getJoke();
  }

  return (
    <header className="App-header" >
      <nav className="nav-elements">
        <button onClick={handleNewJokeClick}>Get A New Random Joke</button>
        <a href="https://official-joke-api.appspot.com/">View Api Docs</a>
      </nav>
    </header>
  );
}

export default Header