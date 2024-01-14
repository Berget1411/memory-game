import '../styles/end-screen.scss';

function EndScreen({
  message,
  img,
  keepPlaying,
  score,
  difficulty,
  setDifficulty,
  setGameStatus,
  restart,
  setRestart,
}) {
  const restartGame = () => {
    restart === false ? setRestart(true) : setRestart(false);
  };

  return (
    <>
      <div className='overlay'></div>
      <div className='end-screen'>
        <h2>{message}</h2>
        <img src={img} alt='' />
        <p>Your final score is {score}</p>
        <div className='buttons'>
          {keepPlaying ? (
            <button
              onClick={() => {
                difficulty === 'easy'
                  ? setDifficulty('medium')
                  : setDifficulty('hard');

                restartGame();
              }}
            >
              Keep Playing
            </button>
          ) : null}
          <button onClick={() => restartGame()}>Play again</button>
          <button onClick={() => setGameStatus('start')}>Quit</button>
        </div>
      </div>
    </>
  );
}

export default EndScreen;
