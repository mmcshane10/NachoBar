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

  //   endGame() {
  //     this.setState({gameOver: true});
  //   }

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

  updateKegLevel() {
    let newKeg = this.state.kegLevel;
    if (newKeg > 0) {
      newKeg--;
    }
    this.setState({ kegLevel: newKeg });
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
      justifyContent: 'center'
    };

    var divStyle = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5%'
    };

    return (
      <div style={scoreStyle}>
        {this.state.gameOver ? <Redirect to='/Gameover' /> : ''}
        <div style={divStyle}>
          <p>Hunger Level</p>
          <h1>{this.state.hungerLevel}</h1>
        </div>
        <div style={divStyle}>
          <p>Keg Level </p>
          <h1> {this.state.kegLevel}</h1>
        </div>
        <div style={divStyle}>
          <p>Rowdiness</p>
          <h1>{this.state.rowdinessLevel}</h1>
        </div>
      </div>
    );
  }
}

export default Bar;