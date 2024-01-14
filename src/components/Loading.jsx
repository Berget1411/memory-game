import '../styles/loading.scss';
import pokemonBall from '../assets/pokeball.png';

function Loading() {
  return (
    <div className='loading'>
      <img src={pokemonBall} alt='' />
      <p>Loading Pokemon</p>
    </div>
  );
}

export default Loading;
