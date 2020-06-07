import React from 'react';
import './Hello.css'

function Hello() {
    return (
        React.createElement('span',null,"Hello World from a different js file"),
        <img src="react.png" alt="React Logo" width="700" length="500"></img>
)
}

export default Hello;