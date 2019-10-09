import React, { Component } from 'react';
import CircleSelector from './CircleSelector'
import Circles from './Circles'
import './App.css';

class App extends Component {
  state = {
    numSelected : 1,
  }
  
  handleChange = (newNum) => {
    this.setState({
      numSelected: newNum
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector 
            numSelected={this.state.numSelected}
            handleChange={this.handleChange}
            />
          <Circles 
            numSelected={this.state.numSelected}
          />
        </main>
      </div>
    );
  }
}

export default App;