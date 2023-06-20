import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from '../utils/axiosInstance'; // Import the axiosInstance

const HomePage = () => {
  const [userGames, setUserGames] = useState([]);
  const [searchedGames, setSearchedGames] = useState([]);
  const [isSearchPerformed, setIsSearchPerformed] = useState(false);
  const [capacity, setCapacity] = useState('');
  const [cost, setCost] = useState('');
  const [type, setType] = useState('ROYALE'); // Default type to ROYALE
  const [state] = useState('PENDING_PLAYERS'); // Set state to PENDING_PLAYERS

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/users/me');
      const userData = response.data;
      const gameIds = userData.games || [];
      setUserGames(gameIds);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUserData();
    handleSearch();
  }, []);

  const handleSearch = async (event) => {
    if (event) {
      event.preventDefault();
    }

    try {
      const response = await axios.get('/games', {
        params: {
          capacity: capacity || undefined,
          cost: cost || undefined,
          type: type || undefined,
          state: state || undefined,
        },
      });
      const gameData = response.data.games || [];
      setSearchedGames(gameData);
      setIsSearchPerformed(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCapacityChange = (event) => {
    setCapacity(event.target.value);
  };

  const handleCostChange = (event) => {
    setCost(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch(event);
    }
  };

  const handleJoinGame = async (gameId) => {
    try {
      await axios.put(`/games/${gameId}/join`);
      // Refresh the user's game list and searched games
      fetchUserData();
      setSearchedGames([]);
    } catch (error) {
      console.error(error);
    }
  };

  const hasUserJoinedGame = (gameId) => {
    return userGames.some((game) => game.gameId === gameId);
  };

  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <div>
      <h1>Welcome to the Redistributor Game!</h1>
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
      {userGames.length > 0 && (
        <div>
          <h2>Your Games:</h2>
          <ul>
            {userGames.map((game) => (
              <li key={game.gameId}>
                <div>
                  <div>Game ID: {game.gameId}</div>
                  <div>Capacity: {game.capacity}</div>
                  <div>Cost: {game.cost}</div>
                  <div>Type: {game.type}</div>
                  <div>State: {game.state}</div>
                  {game.players && (
                    <div>Players: {game.players.length}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isLoggedIn && (
        <div>
          <input
            type="text"
            name="capacity"
            placeholder="Capacity"
            value={capacity}
            onChange={handleCapacityChange}
            onKeyDown={handleKeyDown}
          />
          <input
            type="text"
            name="cost"
            placeholder="Cost"
            value={cost}
            onChange={handleCostChange}
            onKeyDown={handleKeyDown}
          />
          <select
            name="type"
            value={type}
            onChange={handleTypeChange}
          >
            <option value="ROYALE">ROYALE</option>
            <option value="REDISTRIBUTE">REDISTRIBUTE</option>
          </select>
          <button type="button" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
      {searchedGames.length > 0 && (
        <div>
          <h2>Active Games:</h2>
          <ul>
            {searchedGames.map((game) => (
              <li key={game.gameId}>
                <div>
                  {game.gameId && <div>Game ID: {game.gameId}</div>}
                  {game.capacity && <div>Capacity: {game.capacity}</div>}
                  {game.cost && <div>Cost: {game.cost}</div>}
                  {game.type && <div>Type: {game.type}</div>}
                  {game.state && <div>State: {game.state}</div>}
                  {game.players && (
                    <div>Players: {game.players.length}</div>
                  )}
                  {!hasUserJoinedGame(game.gameId) && game.capacity > game.players.length && (
                    <button onClick={() => handleJoinGame(game.gameId)}>
                      Join Game
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {isSearchPerformed && searchedGames.length === 0 && (
        <div>No games found.</div>
      )}
    </div>
  );
};

export default HomePage;
