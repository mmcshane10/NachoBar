import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  var rulesStyle = {
    display: 'flex',
    justifyContent: 'center',
    height: '800',
    alignItems: 'center',
    flexDirection: 'column',
  };

  var buttonStyle = {
    marginTop: '2%',
    backgroundColor: 'blue',
    borderRadius: '10px'
  };
  return(
    <div style={rulesStyle}> 
      <p>Tap new kegs to keep patrons happy.</p>
      <p>If customers get to rowdy, feed them nachos to decrease hunger level and rowdiness.</p>
      <p>If keg is empty and hunger and rowdiness levels rise, the patrons will take matters into their own hands.</p>
      <button style={buttonStyle} className='btn-large'><Link to='/bar'>Start Game</Link></button>
    </div>
  );
}

export default Home;