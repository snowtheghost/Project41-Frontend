import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import GameJoinForm from './components/GameJoinForm';

function App() {
  return (
    <div>
      <h1>Lottery Game</h1>
      <p>Welcome to the lottery game!</p>
      <RegistrationForm/>
      <GameJoinForm/>
    </div>
  );
}

export default App;
