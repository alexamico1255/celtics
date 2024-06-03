import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import axios from 'axios';
import '../styles/nextgame.css';
import '../styles/record.css';

const Record = () => {
  const [teams, setTeams] = useState({ easternTeams: [], westernTeams: [] });

  useEffect(() => {
    // Use axios to fetch data
    axios.get('http://localhost:3001/api/record/')
      .then(response => {
        setTeams(response.data); // Use response.data to get the data
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  const getImageSrc = (teamName) => {
    //const formattedName = teamName.toLowerCase().replace(/ /g, '_').replace('oklahoma_city_thunder', 'okc');
    return `http://localhost:3001/${teamName}`;
  };

  return (

    <div className="record-page">
            {/* Left Navigation Section */}
            <nav className="left-nav">
        <ul>
          <li><NavLink to="/nextgame" activeClassName="active">Next Game</NavLink></li>
          <li><NavLink to="/nextgame2" activeClassName="active">Next Game 2</NavLink></li>
          <li><NavLink to="/record" activeClassName="active">Record</NavLink></li>
        </ul>
      </nav>
      {/* Main Content Section */}
      <div className="main-content">
        <h1 style={{ textAlign: 'center' }}>2023-2024 Regular Season Record<br />64-18</h1>
        <h2 className="eastern-conference">Eastern Conference Teams</h2>
        <div className="teams-grid">
          {teams.easternTeams.map((team, index) => (
            <div className="team" key={index}>
              <h3>{team.name}</h3>
              <img src={getImageSrc(team.image)} alt={team.name} className="team-logo" />
              <p>{team.record}</p>
            </div>
          ))}
        </div>
        
        <h2 className="western-conference">Western Conference Teams</h2>
        <div className="teams-grid">
          {teams.westernTeams.map((team, index) => (
            <div className="team" key={index}>
              <h3>{team.name}</h3>
              <img src={getImageSrc(team.image)} alt={team.name} className="team-logo" />
              <p>{team.record}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Record;