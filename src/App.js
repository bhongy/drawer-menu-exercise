import React from 'react';
import './App.css';

import Nav from './Nav'

// you should not need to modify Hero or Content

const App = () => (
  <main className='App'>
    <Nav />
    <section className='Hero'>
      <h1 className='Title'>Hero</h1>
    </section>
    <section className='Content'>
      <h1 className='Title'>Page Content</h1>
    </section>
  </main>
);

export default App;
