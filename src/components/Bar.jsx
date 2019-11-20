import React from 'react';
import { Redirect } from 'react-router-dom';


class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hungerLevel: 100,
      kegLevel: 100,
      rowdinessLevel: 0,
      gameOver: false
    };
    // this.endGame = this.endGame.bind(this);
  }

  componentDidMount() {
    this.hungerLevelDepricator = setInterval(() =>
      this.updateHungerLevel(),
    500
    );
    this.kegLevelDepricator = setInterval(() =>
      this.updateKegLevel(),
    250
    );
    this.rowdinessLevelIncrementor = setInterval(() =>
      this.updateRowdinessLevel(),
    500
    );
  }

  componentWillUnmount() {
    clearInterval(this.hungerLevelDepricator);
    clearInterval(this.kegLevelDepricator);
    clearInterval(this.rowdinessLevelIncrementor);
}

updateHungerLevel() {
    let newHunger = this.state.hungerLevel;
    if (newHunger > 0) {
        newHunger--;
    }
    this.setState({ hungerLevel: newHunger });
}

feedBar() {
  let feed = this.state.hungerLevel;
  feed=100;
  this.setState({ hungerLevel: feed });
}

updateKegLevel() {
    let newKeg = this.state.kegLevel;
    if (newKeg > 0) {
      newKeg--;
    }
    this.setState({ kegLevel: newKeg });
  }

  tapNewKeg() {
      let tapKeg = this.state.kegLevel;
      newKeg=100;
      this.setState({ kegLevel: tapKeg });
  }
  updateRowdinessLevel() {
    let newRowdy = this.state.rowdinessLevel;
    if (this.state.kegLevel == 0 || this.state.hungerLevel == 0) {
      newRowdy += 2;
    }
    else if (this.state.kegLevel == 0 && this.state.hungerLevel == 0) {
      newRowdy += 5;
    }
    else {
      newRowdy++;
    }
    this.setState({ rowdinessLevel: newRowdy });
  }



  render() {
    if (this.state.hungerLevel < 1 || this.state.rowdinessLevel > 99) {
      this.setState({ gameOver: true });
    }

    var scoreStyle = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      fontFamily: 'Tomorrow, sans-serif',
      fontWeight: 'bold'

    };

    var divStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5%',
      fontFamily: 'Tomorrow, sans-serif',
      fontWeight: 'bold'

    };

    return (
      <div style={scoreStyle}>
        {this.state.gameOver ? <Redirect to='/Gameover' /> : ''}
        <div style={divStyle}>
          <h5>Hunger Level</h5>
          <h1>{this.state.hungerLevel}</h1>
        <button className="waves-effect waves-light btn-small" onClick={() => this.feedBar()}>Feed em</button>
        </div>
        <div style={divStyle}>
          <h5>Keg Level </h5>
          <h1> {this.state.kegLevel}</h1>
        <button className="waves-effect waves-light btn-small" onClick={tapKeg()}>Tap New Keg</button>
        </div>
        <div style={divStyle}>
          <h5>Rowdiness</h5>
          <h1>{this.state.rowdinessLevel}</h1>
        </div>
      </div>
    );
  }
}

export default Bar;