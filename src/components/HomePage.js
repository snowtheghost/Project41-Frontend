import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const HomePage = () => {
  const [games, setGames] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Fetch the user data from the backend API
        const response = await axios.get(`http://localhost:8080/users/${userId}`, config);
        const userData = response.data;

        // Retrieve the list of game IDs from the user data
        const gameIds = userData.games || [];

        // Set the games state with the retrieved game IDs
        setGames(gameIds);
      } catch (error) {
        console.error(error);
      }
    };

    // Extract userId from the token
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwt_decode(token);
      const { sub: userId } = decodedToken;
      setUserId(userId);
    }

    // Fetch user data when the component mounts
    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  const isLoggedIn = !!localStorage.getItem('token');

  const handleJoinGame = async (event) => {
    event.preventDefault();
    const gameId = event.target.gameId.value;

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Make the API request to join the game using the gameId
      await axios.put(`http://localhost:8080/games/${gameId}/join`, null, config);
      // Handle successful response or any additional logic
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to the Redistributor Game!</h1>
      {isLoggedIn && (
        <>
          <div>
            <p>Join a game by entering the game ID:</p>
            <form onSubmit={handleJoinGame}>
              <input type="text" name="gameId" placeholder="Enter game ID" required />
              <button type="submit">Join Game</button>
            </form>
          </div>
          <div>
            <h2>Your Games:</h2>
            <ul>
              {games.map((gameId) => (
                <li key={gameId}>
                  <Link to={`/games/${gameId}`}>Game {gameId}</Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {!isLoggedIn && (
        <div>
          <p>Sign in or register to join a game:</p>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
