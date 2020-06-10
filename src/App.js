import React from 'react';
import './App.css';
import Hello from './Hello';

function App({name, age}) {
return <div>
          Hello World from <b>{name}</b><br/>
          Age : {age - 10}<hr/>
          <Hello title="Your Turn #2" body="Passing sample text as parameter" imageURL="https://miro.medium.com/max/3200/1*EVqCcmCPgpNKxU1wzcTHgw.png"/><hr/>
       </div>

}

export default App;
