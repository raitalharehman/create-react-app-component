import React from 'react';
import { Link } from 'react-router-dom';
import { aboutUrl } from '../App/routes';
// import { Context } from '../ContextProvider/context';
import './scss/index.scss';

function App() {
  // const contextApi = <Context.Consumer>
  //   {obj => {
  //     return <>
  //       <h2>{obj.name}</h2>
  //       <button className="btn" onClick={() => obj.update("Hello")} >hi</button>
  //     </>
  //   }}
  // </Context.Consumer>
  return (
    <div className="App">
      <header className="App-header">
        <h1>Home</h1>
        <div>
          <Link to={aboutUrl}>
            about
        </Link>
        </div>
        {/* {contextApi} */}
      </header>
    </div>
  );
}

export default App;
