import './App'

const Joke = (props) => {

  function handlePunchlineClick(e) {
    // toggle show hid punchline
    props.setShowPunchline(!props.showPuncline);
  }

  return (
    <main className="joke-main">
      <p className="joke-setup"><h4>{props.joke.setup}</h4></p>
      <button onClick={handlePunchlineClick}>{!props.showPuncline ? 'Show Punchline' : 'Hide Punchline'}</button>
      {props.showPuncline && <p className="joke-punchline">{props.joke.punchline}</p>}
    </main>
  );
};

export default Joke;