import React from 'react';
import './Hello.css'

function Hello(props) {
    return (
        <div>
           <h2>{props.title}</h2> 
           <p>{props.body}</p>
           <img src={props.imageURL} alt="Provided by the user" width="500" length="400"/>
        </div>   
)
}

export default Hello;