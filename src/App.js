import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
return <div>
          Hello World from <b>{name}</b><br/>
          Age : {age - 10}<hr/>
          <Hello title="Your Turn #2" body="Passing sample text as parameter" imageURL="https://miro.medium.com/max/3200/1*EVqCcmCPgpNKxU1wzcTHgw.png"/><hr/>
          <h2>Sample List</h2>
          <ol>
            <li>List item number {age - 25}</li>
            <li>List item number {age - 24}</li>
            <li>List item number {age - 23}</li>
          </ol>
       </div>

}

export default App;
