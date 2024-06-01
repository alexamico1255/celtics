import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios
import '../styles/nextgame.css';

const Record = () => {
  const [teams, setTeams] = useState({ easternTeams: [], westernTeams: [] });

  useEffect(() => {
    // Use axios to fetch data
    axios.get('teams.json')
      .then(response => {
        setTeams(response.data); // Use response.data to get the data
      })
      .catch(error => {
        console.error('Error fetching team data:', error);
      });
  }, []);

  const getImageSrc = (teamName) => {
    const formattedName = teamName.toLowerCase().replace(/ /g, '_').replace('oklahoma_city_thunder', 'okc');
    return `/images/team_logo/${formattedName}.jpg`;
  };

  return (

    <div className="record-page">
      {/* Main Content Section */}
      <div className="main-content">
        <h1 style={{ textAlign: 'center' }}>2023-2024 Regular Season Record<br />64-18</h1>
        <h2 className="eastern-conference">Eastern Conference Teams</h2>
        <div className="teams-grid">
          {teams.easternTeams.map((team, index) => (
            <div className="team" key={index}>
              <h3>{team.name}</h3>
              <img src={getImageSrc(team.name)} alt={team.name} className="team-logo" />
              <p>{team.record}</p>
            </div>
          ))}
        </div>
        
        <h2 className="western-conference">Western Conference Teams</h2>
        <div className="teams-grid">
          {teams.westernTeams.map((team, index) => (
            <div className="team" key={index}>
              <h3>{team.name}</h3>
              <img src={getImageSrc(team.name)} alt={team.name} className="team-logo" />
              <p>{team.record}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Record;
