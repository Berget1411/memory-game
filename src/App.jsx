import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [difficulty, setDifficulty] = useState('easy');
  const [pokemons, setPokemons] = useState(undefined);
  console.log(pokemons);

  async function fetchPokemons(amount) {
    const pokemonList = [];
    for (let i = 1; i <= amount; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      pokemonList.push({
        name: data.forms[0].name,
        img: data.sprites.front_default,
      });
    }
    setPokemons(pokemonList);
  }

  useEffect(() => {
    if (difficulty === 'easy') {
      fetchPokemons(5);
    } else if (difficulty === 'medium') {
      fetchPokemons(7);
    } else if (difficulty === 'hard') {
      fetchPokemons(10);
    }
  }, [difficulty]);

  return <div className='app'></div>;
}

export default App;
