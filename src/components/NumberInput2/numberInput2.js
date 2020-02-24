import React, { Component } from 'react';
import './numberInput2.css';

// This is a functional component - just sent up a little differently as an arrow function!

class NumberInput2 extends Component {
    constructor(props){
           super(props);
          this.state = {
              numb: 0
         }
                
     }

     minus = (event) => {
        this.setState({numb: this.state.numb -= 1})
    };




    //  getInput = (event) => {
    //     this.setState({value: event.target.value})
    // };
    
    render(){

    return (
        <div>
            <span>+</span>
            <span>
            {this.state.numb}
            </span>
            <span onClick={this.minus}>-</span>
         </div>
    )
}
}

export default NumberInput2