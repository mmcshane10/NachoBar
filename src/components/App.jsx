import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Bar from './Bar';

function App() {

  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/bar' component={Bar} />
      </Switch>
    </div>
  );
}

export default App;