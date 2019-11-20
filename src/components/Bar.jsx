import React from 'react';

class Bar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hungerLevel: 100,
      kegLevel: 100,
      rowdinessLevel: 0,
    };
  }

  componentDidMount() {
    this.hungerLevelDepricator = setInterval(() =>
      this.updateHungerLevel(),
    1000
    );
    this.kegLevelDepricator= setInterval(() =>
      this.updateKegLevel(),
      2000
    );
  }

  componentWillUnmount(){
    clearInterval(this.hungerLevelDepricator);
    clearInterval(this.kegLevelDepricator);
  }

  updateHungerLevel() {
    let newHunger = this.state.hungerLevel;
    newHunger--;
    this.setState({ hungerLevel: newHunger });
  }

  updateKegLevel(){
      let newKeg = this.state.kegLevel;
      newKeg--;
      this.setState({kegLevel: newKeg });
  }

  render() {
    return (
      <div>
          <p>Hunger Level</p>
        <h1>{this.state.hungerLevel}</h1>
        <p>Keg Level </p>
        <h1> {this.state.kegLevel}</h1>
        
      </div>
    );
  }
}

export default Bar;