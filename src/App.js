import React, { Component } from 'react';
import './App.css';

// you should not need to modify Hero or Content

class App extends Component {
  render() {
    return (
      <main className='App'>
        <section className='Hero'>
          <h1 className='Title'>Hero</h1>
        </section>
        <section className='Content'>
          <h1 className='Title'>Page Content</h1>
        </section>
      </main>
    );
  }
}

export default App;
