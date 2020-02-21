import React from 'react';
import './Button.css';
import Icon from '../Icon/Icon.js';

// This is a functional component - just sent up a little differently as an arrow function!
const Button = (props) => {
    let classList = '';
    let types = ['primary', 'danger', 'success', 'warning']
    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    if (props.large) {
        classList += ` button-large`
    }
    // <button className={`button-${props.type}`}>
    return(
    <button className={classList}>
        <Icon src={props.src || ""} />
        {props.label}
    </button>
    )
}

export default Button; 