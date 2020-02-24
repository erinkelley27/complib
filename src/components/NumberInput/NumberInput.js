// import React from 'react';
// import './NumberInput.css';

// const NumberInput = (props) => {

//     return (
//         <select name={props.label}>
//             <option selected >{props.label}</option>
//             <option>{props.opt1}</option>
//             <option>{props.opt2}</option>
//          </select>
//     )
// }

// export default NumberInput

import React, { Component } from 'react';
import './NumberInput.css';

// This is a functional component - just sent up a little differently as an arrow function!

class NumberInput extends Component {
    // constructor(props){
    //        super(props);
    //       this.state = {
    //           value: ""
    //      }
                
    //  }




    //  getInput = (event) => {
    //     this.setState({value: event.target.value})
    // };
    
    render(){
        // let classList = '';
        // let types = ['default', 'placeholderProvided', 'mediumSize']
        // if (types.includes(this.props.type)) {
        //     classList += ` textInput-${this.props.type}`
        // }
        // if (this.props.medium) {
        //     classList += ` textInput-medium`
        // }
    return (
        <input type="number" />
    )
}
}

export default NumberInput; 