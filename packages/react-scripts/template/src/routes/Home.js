import React, { Component } from 'react';

class Home extends Component {
  loc = window.location.pathname;

  render() {
    return (
      <div className="Home">
        <header className="App-header">
          <h1 className="App-title">Welcome to React + Flux + Routes</h1>
          <h1>You are in: src/routes/Home.js</h1>
        </header>
        <p className="App-intro">
          Made by Robert Aparri.
        </p>
      </div>
    );
  }
}

export default Home;
