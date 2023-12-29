import logo from '../assets/pokemon_logo.png';
import '../styles/start-page.scss';

function StartPage({ setDifficulty, setGameStatus }) {
  return (
    <div className='start-page'>
      <img src={logo} alt='' />
      <h1>Memory Game</h1>
      <div className='select-difficulty'>
        <button
          onClick={() => {
            setDifficulty('easy');
            setGameStatus('game');
          }}
        >
          Easy
        </button>
        <button
          onClick={() => {
            setDifficulty('medium');
            setGameStatus('game');
          }}
        >
          Medium
        </button>
        <button
          onClick={() => {
            setDifficulty('hard');
            setGameStatus('game');
          }}
        >
          Hard
        </button>
      </div>
    </div>
  );
}

export default StartPage;
