import React, { Component } from 'react';
import './textInput.css';

// This is a functional component - just sent up a little differently as an arrow function!

class TextInput extends Component {
    constructor(props){
           super(props);
          this.state = {
              value: ""
         }
                
     }




     getInput = (event) => {
        this.setState({value: event.target.value})
    };
    
    render(){
        let classList = '';
        let types = ['default', 'placeholderProvided', 'mediumSize']
        if (types.includes(this.props.type)) {
            classList += ` textInput-${this.props.type}`
        }
        if (this.props.medium) {
            classList += ` textInput-medium`
        }
    return (
        <form className={classList}>
            <div>
            {this.props.label}
            </div>
            <input placeholder={this.props.placeHolder || this.props.label} onChange={this.getInput}></input>
         </form>
    )
}
}

export default TextInput; 