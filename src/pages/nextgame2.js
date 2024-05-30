import { Outlet, Link } from "react-router-dom";


const NextGame2 = () => {
  const celticsInjuries = [
    {
      name: 'Kristaps Porzingis',
      injury: 'Has been ruled out (Right soleus strain (calf))',
    },
  ];

  const knicksInjuries = [
    {
      name: 'Jaylen Brunson',
      injury: 'Has been ruled out (Fracture in left hand (successful surgery))',
    },
    {
      name: 'Mitchell Robinson',
      injury: 'Has been ruled out (Left ankle stress)',
    },
  ];

  return (
    <div className="nextgame-page">
      {/* Left Navigation Section */}
      <nav className="left-nav">
        <ul>
          <li><Link to="/nextgame">Next Game</Link></li>
          <li><Link to="/nextgame2">Next Game 2</Link></li>
          <li><Link to="/record">Record</Link></li>
        </ul>
      </nav>

      {/* Main Content Section */}
      <div className="main-content">
        <div className="games-container">
          <div className="games-text-section">
            <h2>Here is a breakdown of our next game</h2>
            <h3>New York Knicks</h3>
            <p>
              The upcoming game between the Boston Celtics and the New York Knicks is set to be a fascinating matchup, although both teams will be dealing with significant absences due to injuries. The Celtics will be without Kristaps Porzingis, who is sidelined with a right soleus strain in his calf. On the Knicks' side, they will miss the services of Jalen Brunson, who is recovering from a successful surgery on a fracture in his left hand, and Mitchell Robinson, who is out with a left ankle stress injury.
              <br /><br />
              The absence of Kristaps Porzingis is a substantial blow to the Celtics. Porzingis has been a crucial component of their offense and defense, providing a unique combination of size, shooting, and rim protection. Without him, the Celtics will need to rely more heavily on their other big men, such as Al Horford and Robert Williams III, to fill the void. Offensively, Jayson Tatum and Jaylen Brown will be under increased pressure to carry the scoring load, potentially leading to more minutes and a greater burden on their shoulders. Defensively, the Celtics may struggle to protect the paint as effectively, making it easier for the Knicks to exploit their interior.
              <br /><br />             
              On the Knicks' side, the absence of Jalen Brunson significantly impacts their backcourt. Brunson has been a key playmaker and scorer for the Knicks, and his ability to drive the offense and create opportunities for his teammates will be sorely missed. Immanuel Quickley and Quentin Grimes will likely see increased roles, but the team may struggle to maintain the same level of offensive fluidity without Brunson's presence. Additionally, Mitchell Robinson's absence further weakens the Knicks' interior defense and rebounding capabilities. Robinson's shot-blocking and rebounding have been pivotal for the Knicks, and without him, they might find it challenging to control the boards and protect the rim against the Celtics' frontcourt.
              <br /><br />
              Overall, these injuries will have a significant impact on the dynamics of the game. The Celtics, even without Porzingis, might have a slight edge due to the Knicks missing two key players. However, the game could see both teams adopting different strategies to compensate for their missing stars. The outcome will likely hinge on which team can better adapt to their current roster limitations and which role players can step up to fill the gaps left by these critical absences.
            </p>
          </div>
        </div>
        <div className="games-injury-section">
          <h2>Injury Report - Boston Celtics</h2>
          <ul>
            {celticsInjuries.map((player, index) => (
              <li key={index}>
                <a href="players.html">{player.name}</a> - {player.injury}
              </li>
            ))}
          </ul>
        </div>
        <div className="games-injury-section">
          <h2>Injury Report - New York Knicks</h2>
          <ul>
            {knicksInjuries.map((player, index) => (
              <li key={index}>
                {player.name} - {player.injury}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextGame2;
