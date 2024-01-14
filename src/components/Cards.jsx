import '../styles/cards.scss';
import pokemonCard from '../assets/pokemon-card.png';

const shuffle = (array) => array.sort(() => Math.random() - 0.5);

function Cards({
  pokemon,
  setScore,
  gameOver,
  setGameOver,
  pickedPokemon,
  setPickedPokemon,
}) {
  const cards = shuffle(pokemon).map((pokemonObj) => (
    <div className='card'>
      <div className='card-inner'>
        <div
          className='front'
          key={pokemonObj.key}
          onClick={() => {
            if (!gameOver && pokemon.length !== pickedPokemon.length) {
              if (!pickedPokemon.includes(pokemonObj.name)) {
                document
                  .querySelectorAll('.cards .card-inner')
                  .forEach((card) => card.classList.add('active'));
                setTimeout(() => {
                  setScore((prev) => prev + 1);
                  setPickedPokemon((prev) => [...prev, pokemonObj.name]);
                  document
                    .querySelectorAll('.cards .card-inner')
                    .forEach((card) => card.classList.remove('active'));
                }, 1000);
              } else {
                setGameOver(true);
              }
            }
          }}
        >
          <img src={pokemonObj.img} alt='' />
          <p>{pokemonObj.name}</p>
        </div>
        <div className='back'>
          <img src={pokemonCard} alt='' />
        </div>
      </div>
    </div>
  ));

  return <div className='cards'>{cards}</div>;
}

export default Cards;
