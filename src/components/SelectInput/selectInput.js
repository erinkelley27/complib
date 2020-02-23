import React from 'react';
import './selectInput.css';

const SelectInput = (props) => {

    return (
        <select name={props.label}>
            <option selected >{props.label}</option>
            <option>{props.opt1}</option>
            <option>{props.opt2}</option>
         </select>
    )
}

export default SelectInput