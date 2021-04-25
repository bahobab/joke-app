import './Joke.css'

const Joke = (props) => {

  function handlePunchlineClick(e) {
    // toggle show hid punchline
    props.setShowPunchline(!props.showPuncline);
  }

  return (
    <main className="joke-main">
      
      {
        props.error
          ? <p className={`${props.error ? 'error' : ''}`}>
        <span className="joke-setup-text">{props.joke.setup}</span>
      </p>
          : 
      
      <p className={`${props.error ? 'error' : ''} joke-setup`}>
        <span className="joke-setup-text">{props.joke.setup}</span>
      </p>
      }
      {
        !props.error &&
        <div style={{height: '60px'}}>
        <button
          className="btn-joke-punchline"
          onClick={handlePunchlineClick}
          aria-describedby={`${!props.showPuncline ? 'Show Punchline' : 'Hide Punchline'}`}
        >
          {!props.showPuncline ? 'Show Punchline' : 'Hide Punchline'}
          </button>
          </div>
      }
      {
        props.showPuncline && <p className="joke-punchline">
          <span className="joke-punchline-text">{props.joke.punchline}</span>
        </p>
        }
    </main>
  );
};

export default Joke;