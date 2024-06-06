import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/players.css';
import AddPlayer from "../components/add-player";
import EditPlayer from "../components/edit-player";
import Holiday from '../images/jrue_holiday.jpg';
import White from '../images/derrick_white.jpg';
import Brown from '../images/jaylen_brown.jpg';
import Tatum from '../images/jayson_tatum.jpg';
import Porzingis from '../images/kristaps_porzingis.jpg';
import Horford from '../images/al_horford.jpg';
import Pritchard from '../images/peyton_pritchard.jpg';
import Hauser from '../images/sam_hauser.jpg';


const Players = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [editPlayer, setEditPlayer] = useState(null);

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
    setEditPlayer(player); // Set the player to be edited
  };

  const handleSave = (updatedPlayer) => {
    setPlayers(players.map(player => player._id === updatedPlayer._id ? updatedPlayer : player));
    setEditPlayer(null); // Close the edit form
  };

  const appendPlayer = (player) => {
    setPlayers((players) => [...players, player]);
  }

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
                  <button onClick={() => handleEditClick(player)}>Edit</button> {}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editPlayer  && <EditPlayer id={editPlayer._id} name={editPlayer.name} onSave={handleSave} />} {}
        <AddPlayer  appendPlayer = {appendPlayer} />
      </div>
    </div>
  );
};

export default Players;