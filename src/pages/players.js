import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddPlayer from "../components/add-player";
import EditPlayer from "../components/edit-player";
import DeleteDialog from "../components/delete-player"; // Importing DeleteDialog
import '../styles/players.css';

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [editPlayer, setEditPlayer] = useState(null);
  const [deletePlayer, setDeletePlayer] = useState(null);
  const [showAddPlayer, setShowAddPlayer] = useState(false); // State for Add Player form

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

  const closeDeleteDialog = () => {
    setDeletePlayer(null);
  };

  const hidePlayer = () => {
    setPlayers(players.filter(player => player._id !== deletePlayer._id));
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
        <button className="add-player-button" onClick={() => setShowAddPlayer(true)}>Add Player</button>
        {editPlayer && <EditPlayer id={editPlayer._id} {...editPlayer} onSave={handleSave} />}
        {showAddPlayer && <AddPlayer appendPlayer={appendPlayer} closeDialog={() => setShowAddPlayer(false)} />}
        {deletePlayer && (
          <DeleteDialog
            _id={deletePlayer._id}
            name={deletePlayer.name}
            hidePlayer={hidePlayer}
            closeDialog={closeDeleteDialog}
          />
        )}
      </div>
    </div>
  );
};

export default Players;
