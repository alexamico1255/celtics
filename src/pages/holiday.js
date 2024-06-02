import React from 'react';
import '../styles/holiday.css';

const Holiday = () => {
  return (
    <main className="holiday-bio">
      <h2>Jrue Holiday</h2>
      <iframe 
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/Pq3NgGcf77s?si=PdCetAMP-QzX_hPu" 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
      <p>
        He was born on June 12, 1990, in Los Angeles, California. Holiday played college basketball for one season with the UCLA Bruins before declaring for the 2009 NBA draft.
        He was selected by the Philadelphia 76ers with the 17th overall pick in the first round of the 2009 NBA draft. Holiday spent the first four seasons of his career with the 76ers before being traded to the New Orleans Pelicans in 2013.
        In 2021, Holiday was traded to the Milwaukee Bucks, where he played a crucial role in helping the team win the NBA championship.
        In August 2023, Holiday signed with the Boston Celtics as a free agent.
      </p>
    </main>
  );
};

export default Holiday;
