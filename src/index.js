import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Room from './Room'
import Reddit from './Reddit';

function ExecuteRoom() {
  ReactDOM.render(
    <div align="center">
      <Room Open={true} Temp={23}/>
      <button className="btnG" ><a href='../public/index.html'>Go Back</a></button>
    </div>,
    document.getElementById('root'))
}
function ExecuteReddit() {
  ReactDOM.render(
    <div align="center">
      <Reddit/>
      <button className="btnG"><a href='../public/index.html'>Go Back</a></button>
    </div>,
    document.getElementById('root')
  )
}
ReactDOM.render(
  <div align="center">
    {/*<App name="Mustafa Sohail" age={26} />*/}
    <button className="btn" onClick={ () => ExecuteRoom()}>Light Switch Program</button><hr/>
    <button className="btn" onClick={ () => ExecuteReddit()}>Reddit Data Fetching Program</button><hr/>
  </div>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
