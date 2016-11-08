import React, { Component } from 'react';
import './Nav.css';

class MenuButton extends Component {
  toggleMenu = e => {
    e.preventDefault()
    console.log('toggle menu')
  }

  render() {
    return (
      <a
          href='#'
          className='Menu-Button'
          onClick={this.toggleMenu}
      >
        Menu
      </a>
    )
  }
}

const Nav = () => (
  <div className='Nav'>
    <div className='Nav-Container'>
      <MenuButton />
    </div>
  </div>
);

export default Nav
