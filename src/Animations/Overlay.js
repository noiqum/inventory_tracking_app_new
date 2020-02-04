import React from 'react';
import './Overlay.css';

function Overlay(props) {
    return (
        <div onClick={props.onclick} id={props.id_css}>
        <p id='hidden_text'>{props.text}</p>
        </div>
    )
}

export default Overlay;
