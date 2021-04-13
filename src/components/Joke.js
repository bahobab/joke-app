import './Joke.css'

const Joke = (props) => {

  function handlePunchlineClick(e) {
    // toggle show hid punchline
    props.setShowPunchline(!props.showPuncline);
  }

  return (
    <main className="joke-main">
      <p className={`${props.error ? 'error' : ''} joke-setup`}>{props.joke.setup}</p>
      {
        !props.error && <button className="btn-joke-punchline" onClick={handlePunchlineClick}>
          {!props.showPuncline ? 'Show Punchline' : 'Hide Punchline'}
        </button>
      }
      {
        props.showPuncline && <p className="joke-punchline">{props.joke.punchline}</p>
        }
    </main>
  );
};

export default Joke;