const Players = () => {
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
            {/* Player rows will be generated here */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Players;
