import React from 'react';

function isOpen(props) {
    const X = props.Open;
    if (X === true) {
        return "open";
    }else{
        return "closed";
    }
}

export default isOpen;