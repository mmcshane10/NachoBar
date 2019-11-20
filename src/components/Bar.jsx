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
  }

  componentWillUnmount(){
    clearInterval(this.hungerLevelDepricator);
  }

  updateHungerLevel() {
    let newHunger = this.state.hungerLevel;
    newHunger--;
    this.setState({ hungerLevel: newHunger });
  }

  render() {
    return (
      <div>
        <h1>{this.state.hungerLevel}</h1>
      </div>
    );
  }
}

export default Bar;