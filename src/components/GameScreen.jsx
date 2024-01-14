import { useState } from 'react';

import { useEffect } from 'react';
import Cards from './Cards';
import EndScreen from './EndScreen';
import logo from '../assets/pokemon_logo.png';
import winImage from '../assets/win.gif';
import loseImage from '../assets/lose.gif';

function GameScreen({
  pokemon,
  setGameStatus,
  highScore,
  setHighScore,
  difficulty,
  setDifficulty,
  restart,
  setRestart,
}) {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [pickedPokemon, setPickedPokemon] = useState([]);

  const maxScore = pokemon.length;

  useEffect(() => {
    if (score > highScore) setHighScore(score);
  }, [score]);

  return (
    <div className='gameScreen'>
      <header>
        <img
          src={logo}
          alt=''
          className='logo-image'
          onClick={() => setGameStatus('start')}
        />
        <div className='score'>
          <p>Score: {score}</p>
          <p>Best score: {highScore}</p>
        </div>
      </header>
      <p className='current-score'>
        {score} / {maxScore}
      </p>
      <Cards
        pokemon={pokemon}
        setScore={setScore}
        pickedPokemon={pickedPokemon}
        setPickedPokemon={setPickedPokemon}
        gameOver={gameOver}
        setGameOver={setGameOver}
      />

      {gameOver ? (
        <EndScreen
          message={'Game Over!'}
          img={loseImage}
          score={score}
          setGameStatus={setGameStatus}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          restart={restart}
          setRestart={setRestart}
        />
      ) : null}
      {score === maxScore ? (
        <EndScreen
          message={'You Win!'}
          img={winImage}
          keepPlaying={difficulty === 'easy' || difficulty === 'medium'}
          score={score}
          setGameStatus={setGameStatus}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          restart={restart}
          setRestart={setRestart}
        />
      ) : null}
    </div>
  );
}

export default GameScreen;
