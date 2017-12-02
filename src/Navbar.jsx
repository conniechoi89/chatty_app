import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <div className="online-user">Number of users: { this.props.incomingUser }</div>
      </nav>
    );
  }
}

export default Navbar;