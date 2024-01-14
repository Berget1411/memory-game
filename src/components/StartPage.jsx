import logo from '../assets/pokemon_logo.png';
import '../styles/start-page.scss';
import uniqid from 'uniqid';

function StartPage({ setDifficulty, setGameStatus }) {
  const difficulties = [
    { difficulty: 'easy', id: uniqid() },
    { difficulty: 'medium', id: uniqid() },
    { difficulty: 'hard', id: uniqid() },
  ];
  const selectDifficulty = difficulties.map((obj) => (
    <button
      key={obj.id}
      onClick={() => {
        setDifficulty(obj.difficulty);
        setGameStatus('game');
      }}
    >
      {obj.difficulty[0].toUpperCase() + obj.difficulty.slice(1)}
    </button>
  ));
  return (
    <div className='start-page'>
      <img src={logo} alt='' />
      <h1>Memory Game</h1>
      <div className='select-difficulty'>{selectDifficulty}</div>
    </div>
  );
}

export default StartPage;
