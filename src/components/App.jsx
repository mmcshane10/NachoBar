import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Bar from './Bar';
import GameOver from './GameOver';
function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bar' component={Bar} />
        <Route path='/GameOver' component={GameOver} />
      </Switch>
    </div>
  );
}

export default App;