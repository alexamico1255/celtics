import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/nextgame.css';
import '../styles/players.css';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://alexamico1255.github.io/csce242/projects/part6/players.json')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('Error fetching player data:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error fetching player data: {error.message}</div>;
  }

  return (
    <div className="players-page">
      {/* Main Content Section */}
      <div className="players-container">
        <h2>2023-2024 Roster:</h2>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Player</th>
              <th>PPG</th>
              <th>Rebounds</th>
              <th>Assists</th>
              <th>Height</th>
              <th>Weight</th>
              <th>Age</th>
              <th>College</th>
              <th>Draft Pick</th>
              <th>Drafted By</th>
            </tr>
          </thead>
          <tbody id="players-list">
            {players.map(player => (
              <tr key={player._id}>
                <td><img src={player.img_name} alt={player.name} /></td>
                <td>{player.name}</td>
                <td>{player.ppg}</td>
                <td>{player.rebounds}</td>
                <td>{player.assists}</td>
                <td>{player.height}</td>
                <td>{player.weight}</td>
                <td>{player.age}</td>
                <td>{player.college}</td>
                <td>{player.draft_pick}</td>
                <td>{player.drafted_by}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Players;
