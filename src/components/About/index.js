import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../App/routes';
import './scss/index.scss';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>About</h1>
        <div>
          <Link to={baseUrl}>
            back
          </Link>
        </div>
      </header>
    </div>
  );
}

export default About;
