import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-info navbar-expand-lg">
        <Link to="/" className="navbar-brand">KEEPFIT! A Diet, Fitness & Health Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Planner Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create new Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
        </ul>
         <a href="http://www.fitstream.com/articles/fitness-planning-a184" style={{color:"black"}} target="_blank">Read more about fitness planning here ></a>
        </div>
      </nav>
    );
  }
}