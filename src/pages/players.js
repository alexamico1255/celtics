import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddPlayer from "../components/add-player";
import EditPlayer from "../components/edit-player";
import DeletePlayer from "../components/delete-player";
import '../styles/players.css';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [editPlayer, setEditPlayer] = useState(null);
  const [deletePlayer, setDeletePlayer] = useState(null);


  useEffect(() => {
    axios.get('http://localhost:3001/api/players')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('Error fetching player data:', error);
        setError(error);
      });
  }, []);

  const handleEditClick = (player) => {
    setEditPlayer(player);
  };

  const handleSave = (updatedPlayer) => {
    setPlayers(players.map(player => player._id === updatedPlayer._id ? updatedPlayer : player));
    setEditPlayer(null);
  };

  const appendPlayer = (player) => {
    setPlayers([...players, player]);
  };

  const handleDeleteClick = (player) => {
    setDeletePlayer(player);
  };

  if (error) {
    return <div>Error fetching player data: {error.message}</div>;
  }

  return (
    <div className="players-page">
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
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody id="players-list">
            {players.map(player => (
              <tr key={player._id}>
                <td><img src={`http://localhost:3001/${player.img_name}`} alt={player.name} /></td>
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
                <td>
                  <button onClick={() => handleEditClick(player)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDeleteClick(player)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editPlayer && <EditPlayer id={editPlayer._id} {...editPlayer} onSave={handleSave} />}
        <AddPlayer appendPlayer={appendPlayer} />
        <DeletePlayer deletePlayer={deletePlayer} />
      </div>
    </div>
  );
};

export default Players;