import { useState } from 'react';
import { useEffect } from 'react';
import uniqid from 'uniqid';

import '../styles/game.scss';
import Loading from './Loading';
import GameScreen from './gameScreen';

function Game({
  difficulty,
  setDifficulty,
  setGameStatus,
  highScore,
  setHighScore,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [restart, setRestart] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemons().then((data) => {
      setTimeout(() => {
        setPokemon(data);
        setIsLoading(false);
      }, 1000);
    });
  }, [restart]);

  async function fetchPokemons() {
    let amount;
    if (difficulty === 'easy') {
      amount = 5;
    } else if (difficulty === 'medium') {
      amount = 7;
    } else if (difficulty === 'hard') {
      amount = 10;
    }

    const pokemonList = [];
    const randomNum = Math.floor(Math.random() * 250) + 1;
    for (let i = 1; i <= amount * 3; i += 3) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNum + i}`
      );
      const data = await response.json();
      pokemonList.push({
        name: data.forms[0].name,
        img: data.sprites.front_default,
        id: uniqid(),
      });
    }
    return pokemonList;
  }

  return (
    <div className='game'>
      {isLoading ? (
        <Loading />
      ) : (
        <GameScreen
          pokemon={pokemon}
          highScore={highScore}
          setHighScore={setHighScore}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setGameStatus={setGameStatus}
          restart={restart}
          setRestart={setRestart}
        />
      )}
    </div>
  );
}

export default Game;
