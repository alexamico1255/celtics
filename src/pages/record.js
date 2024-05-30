const Record = () => {
  const easternTeams = [
    { name: 'Atlanta Hawks', record: '2-2' },
    { name: 'Brooklyn Nets', record: '4-0' },
    { name: 'Charlotte Hornets', record: '2-1' },
    { name: 'Chicago Bulls', record: '3-0' },
    { name: 'Cleveland Cavaliers', record: '2-1' },
    { name: 'Detroit Pistons', record: '3-0' },
    { name: 'Indiana Pacers', record: '3-2' },
    { name: 'Miami Heat', record: '3-0' },
    { name: 'Milwaukee Bucks', record: '2-2' },
    { name: 'New York Knicks', record: '4-1' },
    { name: 'Orlando Magic', record: '2-1' },
    { name: 'Philadelphia 76ers', record: '3-1' },
    { name: 'Toronto Raptors', record: '4-0' },
    { name: 'Washington Wizards', record: '4-0' }
  ];

  const westernTeams = [
    { name: 'Dallas Mavericks', record: '2-0' },
    { name: 'Denver Nuggets', record: '0-2' },
    { name: 'Golden State Warriors', record: '1-1' },
    { name: 'Houston Rockets', record: '2-0' },
    { name: 'Los Angeles Clippers', record: '1-1' },
    { name: 'Los Angeles Lakers', record: '1-1' },
    { name: 'Memphis Grizzlies', record: '2-0' },
    { name: 'Minnesota Timberwolves', record: '1-1' },
    { name: 'New Orleans Pelicans', record: '2-0' },
    { name: 'Oklahoma City Thunder', record: '1-1' },
    { name: 'Phoenix Suns', record: '2-0' },
    { name: 'Portland Trail Blazers', record: '2-0' },
    { name: 'Sacramento Kings', record: '2-0' },
    { name: 'San Antonio Spurs', record: '2-0' },
    { name: 'Utah Jazz', record: '2-0' }
  ];

  return (
    <div className="record-page">
      {/* Main Content Section */}
      <div className="main-content">
        <h1 style={{ textAlign: 'center' }}>2023-2024 Regular Season Record<br />64-18</h1>
        <h2 className="eastern-conference">Eastern Conference Teams</h2>
        <div className="teams-grid">
          {easternTeams.map((team, index) => (
            <div className="team" key={index}>
              <h3>{team.name}</h3>
              <p>{team.record}</p>
            </div>
          ))}
        </div>
        
        <h2 className="western-conference">Western Conference Teams</h2>
        <div className="teams-grid">
          {westernTeams.map((team, index) => (
            <div className="team" key={index}>
              <h3>{team.name}</h3>
              <p>{team.record}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Record;
