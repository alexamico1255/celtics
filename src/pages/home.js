import React from 'react';
import '../styles/home.css';
import championship from '../images/08_championship.jpg';
import Russell from '../images/bill_russell.jpg';

const Home = () => {
  return (
    <div className="home-page">
      {/* Main Content Section */}
      <div className="main-wrapper">
      <div className="home-container">
  <div>
    <h2>Welcome to Celtics Central</h2>
    <h4>Your hub for all things related to the Celtics. Stay updated with the latest news, player information, and upcoming events.</h4>
    <br />
    <p>
      Welcome to Celtics Central, your premier hub for all things related to the Boston Celtics! Here, you’ll find the latest news, player information, and details on upcoming events, all dedicated to keeping you informed and engaged with your favorite team.
      <br /><br />
      At Celtics Central, we are passionate about the rich history and exciting future of the Celtics. From game previews and post-game analyses to in-depth player bios and injury reports, we cover every aspect of the team. Our goal is to provide fans with a comprehensive source of information, ensuring you never miss a moment of the action.
      <br /><br />
      Our community is built for the most dedicated Celtics fans. Engage with fellow supporters through our forums, participate in discussions about team strategies, and share your thoughts on recent games. We also feature exclusive interviews with players and coaches, behind-the-scenes looks at practices, and special content that you won’t find anywhere else. Celtics Central is more than just a news site; it’s a place to celebrate the Celtics' legacy and connect with other fans who share your passion.
      <br /><br />
      Whether you’re a lifelong fan or new to the Celtics community, Celtics Central is your go-to destination for all the latest updates. Join us as we follow the journey of the Boston Celtics, celebrating every victory and navigating every challenge together. Stay tuned and stay connected with Celtics Central – your ultimate Celtics fan experience!
    </p>
  </div>
  <img src={championship} alt="2008 Championship" className="home-image-right" />
</div>
      </div>

      {/* Celtics History Section */}
      <div className="celtics-history">
        <img src={Russell} alt="Bill Russell" className="history-image" />
        <div className="history-text">
          <h2>Celtics History</h2>
          <p>
            The Boston Celtics boast one of the most illustrious histories in professional basketball. Founded in 1946, the Celtics quickly became a dominant force in the NBA, capturing their first championship in 1957 under the leadership of legendary coach Red Auerbach. However, it was in the 1960s that the Celtics truly cemented their place in basketball lore. Led by the incomparable Bill Russell, the Celtics won an unprecedented 11 championships in 13 seasons, establishing themselves as the standard of excellence in the league.
            <br /><br />
            The 1980s ushered in a new era of Celtics basketball, characterized by the dynamic duo of Larry Bird and Kevin McHale. Alongside teammates like Robert Parish, Dennis Johnson, and Danny Ainge, Bird and McHale propelled the Celtics to three NBA championships in 1981, 1984, and 1986. These teams were known for their intense rivalries with the Los Angeles Lakers and the Detroit Pistons, creating some of the most memorable moments in NBA history.
            <br /><br />
            In the 21st century, the Celtics continued to build upon their legacy with the formation of the "Big Three" era. In 2007, the acquisitions of Kevin Garnett and Ray Allen, alongside Paul Pierce, revitalized the franchise. The Celtics reached the NBA Finals twice during this period, winning their 17th championship in 2008 by defeating the rival Lakers in a thrilling six-game series.
            <br /><br />
            Throughout their storied history, the Celtics have embodied the values of teamwork, perseverance, and excellence. From the pioneering days of Bill Russell to the modern era of Jayson Tatum and Jaylen Brown, the Celtics continue to inspire fans around the world with their commitment to greatness. At Celtics Central, we celebrate this proud tradition and invite you to join us in honoring the past, present, and future of the Boston Celtics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
