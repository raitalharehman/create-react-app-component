import React from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../App/routes';
import './scss/index.scss';

function NotFound() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>NotFound</h1>
        <div>
          <Link to={baseUrl}>
            back to Home
          </Link>
        </div>
      </header>
    </div>
  );
}

export default NotFound;
