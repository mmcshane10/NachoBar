import React from 'react';
import Riot from '../Assets/Img/riot.gif';


function GameOver() {
    
  var gifStyle = {
    backgroundImage: `url(${Riot})`,
    backgroundAttachment: 'fixed',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '-1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold'
  };

  var h1Style = {
    position: 'relative',
    fontFamily: 'Tomorrow, sans-serif',
    textShadow: '4px 4px 8px black',
  };

  return (
    <div style={gifStyle}>
      <div>
        <h1 style={h1Style}>You lost control of your bar. The patrons have rioted!</h1>
      </div>
    </div>
  );
}

export default GameOver;