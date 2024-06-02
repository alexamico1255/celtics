import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Porzingis from '../images/kristaps_porzingis.jpg';
import Allen from '../images/jarrett_allen.jpg';
import Mitchell from '../images/donovan_mitchell.jpg';
import LeVert from '../images/caris_levert.jpg';
import CavsLogo from '../images/team_logo/cavs.jpg';
import '../styles/nextgame.css';
import '../styles/nav.css';


const NextGame = () => {
  const celticsInjuries = [
    {
      image: <img src={Porzingis} className="player-image" alt="Kristaps Porzingis" />,
      name: 'Kristaps Porzingis',
      injury: 'Has been ruled out (Right soleus strain (calf))',
    },
  ];

  const cavaliersInjuries = [
    {
      image: <img src={Allen} className="player-image" alt="Jarrett Allen" />,
      name: 'Jarrett Allen',
      injury: 'Minutes Restriction (Soreness of the ribs)',
    },
    {
      image: <img src={Mitchell} className="player-image" alt="Donovan Mitchell" />,
      name: 'Donovan Mitchell',
      injury: 'Minutes Restriction (Calf tightness)',
    },
    {
      image: <img src={LeVert} className="player-image" alt="Caris LeVert" />,
      name: 'Caris LeVert',
      injury: 'Has been ruled out (knee)',
    },
  ];

  return (
    <div className="nextgame-page">
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
        <div className="games-container">
          <div className="games-text-section">
            <h2>Here is a breakdown of our next game</h2>
            <h3>Cleveland Cavaliers</h3>
            <div className="team-logo">
              <img src={CavsLogo} alt="Cleveland Cavaliers Logo" />
            </div>
            <p>
              The upcoming game between the Boston Celtics and the Cleveland Cavaliers promises to be intriguing, though both teams are contending with significant injuries and restrictions affecting key players. The Celtics will be missing Kristaps Porzingis, who has been ruled out due to a right soleus strain in his calf. For the Cavaliers, Jarrett Allen and Donovan Mitchell will both be on minutes restrictions, with Allen dealing with rib soreness and Mitchell experiencing calf tightness. Additionally, Caris LeVert has been ruled out with a knee injury.
              <br /><br />
              Kristaps Porzingis' absence is a considerable setback for the Celtics. As a versatile big man, Porzingis offers both offensive firepower and defensive prowess. His ability to stretch the floor with his shooting and protect the rim on defense is integral to the Celtics' strategy. Without him, the Celtics will need to rely more heavily on other frontcourt players like Al Horford and Robert Williams III to step up both offensively and defensively. This increased reliance on Horford and Williams might also necessitate more small-ball lineups, putting additional pressure on Jayson Tatum and Jaylen Brown to carry the scoring and rebounding loads.
              <br /><br />
              The Cavaliers, meanwhile, face their own challenges with key players under minutes restrictions and an outright absence. Jarrett Allen’s rib soreness limits his playing time, which affects the Cavaliers’ interior defense and rebounding. Allen is a critical anchor for the Cavs in the paint, and his reduced minutes mean that other big men like Evan Mobley will need to take on a greater role. Similarly, Donovan Mitchell's calf tightness means he won't be able to play his usual heavy minutes, potentially disrupting the Cavs' offensive rhythm and scoring capability. Mitchell is a dynamic scorer and playmaker, so his limited availability could hinder the Cavs' ability to maintain offensive consistency.
              <br /><br />
              Caris LeVert's absence due to a knee injury further depletes the Cavaliers' roster depth. LeVert is a versatile wing who contributes on both ends of the floor. His absence will likely force the Cavs to dig deeper into their bench, possibly giving more minutes to players like Isaac Okoro and Cedi Osman, who will need to step up to fill the void. This lack of depth could be a critical factor, especially if the game remains close and requires sustained intensity from all active players.
              <br /><br />
              In summary, the game will be a test of depth and adaptability for both teams. The Celtics will need to manage without their key big man, while the Cavaliers must navigate through the game with key players on limited minutes and without LeVert. The effectiveness of each team's secondary players and their ability to adjust to these constraints will likely determine the outcome of the matchup.
            </p>
          </div>
        </div>
        <div className="games-injury-section">
          <h2>Injury Report - Boston Celtics</h2>
          <ul>
            {celticsInjuries.map((player, index) => (
              <li key={index}>
                {player.image}
                {player.name} - {player.injury}
              </li>
            ))}
          </ul>
        </div>
        <div className="games-injury-section">
          <h2>Injury Report - Cleveland Cavaliers</h2>
          <ul>
            {cavaliersInjuries.map((player, index) => (
              <li key={index}>
                {player.image}
                {player.name} - {player.injury}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NextGame;
