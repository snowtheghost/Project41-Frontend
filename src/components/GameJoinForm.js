import React, { useState } from 'react';

function GameJoinForm() {
  const [gameId, setGameId] = useState('');
  const [userId, setUserId] = useState('');

  const handleInputChange = (event) => {
    setGameId(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make HTTP request to the backend API
    fetch(`http://localhost:8080/game/${gameId}/join`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log('Game joined!', data);
        setUserId(data.userId); // Set the userId received from the response
        // Reset the form
        setGameId('');
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error('Error joining game:', error);
      });
  };

  return (
    <div>
      {userId && <p>Successfully joined the game! User ID: {userId}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="gameId">Game ID:</label>
        <input type="text" id="gameId" name="gameId" value={gameId} onChange={handleInputChange} />

        <button type="submit">Join Game</button>
      </form>
    </div>
  );
}

export default GameJoinForm;