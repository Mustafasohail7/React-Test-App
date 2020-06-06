import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
return <div>
          Hello World from <b>{name}</b><br/>
          Age : {age - 10}<br/>
          <Hello/>
          <h2>Sample List</h2>
          <ol>
            <li>List item number {age - 25}</li>
            <li>List item number {age - 24}</li>
            <li>List item number {age - 23}</li>
          </ol>
       </div>

}

export default App;


