import { useState } from 'react';
import StartPage from './components/StartPage';
import Game from './components/Game';
import Footer from './components/Footer';

function App() {
  const [gameStatus, setGameStatus] = useState('start');
  const [highScore, setHighScore] = useState(0);
  const [difficulty, setDifficulty] = useState(null);

  return (
    <div className='app'>
      {gameStatus === 'start' && (
        <StartPage
          setDifficulty={setDifficulty}
          setGameStatus={setGameStatus}
        />
      )}
      {gameStatus === 'game' && (
        <Game
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          setGameStatus={setGameStatus}
          highScore={highScore}
          setHighScore={setHighScore}
        />
      )}
      <Footer />
    </div>
  );
}

export default App;
