import React, { Component } from 'react';
import MultiInput from './components/MultiInput/MultiInput';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <MultiInput inputs={[]} />
      </div>
    );
  }
}

export default App;
