import React from 'react';
import { storiesOf } from '@storybook/react';

import TextInput from './textInput.js';


// const style = {
//     backgroundColor: '#0069D9',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: 'red'
// }

// const dangerStyle = {
//     backgroundColor: 'red',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: '#0069D9'
// }

// const successStyle = {
//     backgroundColor: 'green',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: 'green'
// }

// const warningStyle = {
//     backgroundColor: 'orange',
//     color: 'white',
//     borderRadius: '2px',
//     padding: '5px 25px',
//     border: 'orange'
// }

storiesOf('TextInput', module)
    .add('Default', () => <TextInput
         label="Email"
         type="Default"
      />)

    .add('Placeholder Provided', () => <TextInput
      label="Email"
      placeHolder="Write email here"
      type="placeholderProvided"
   />) 
    .add('Medium Size', () => <TextInput
        label="Email"
        type="mediumSize"
        class="medium"
        medium
       /> )
      .add('Large Size', () => <TextInput
        label="Email"
        type="mediumSize"
        class="larger"
      />)

//       .add('Large Primary', () => <Button
//       label="Large Primary Button"
//       type="primary"
//       large
//   />)
//       .add('Danger', () => <Button 
//         label="Danger"
//         type="danger"
         
//      />)
//      .add('Large Danger', () => <Button 
//      label="Large Danger Button"
//      type="danger"
//      large
      
//   />)
//      .add('Success', () => <Button
//             label="Success"
//             // style={successStyle}
//             type="success"
        
//        /> )
//        .add('Warning', () => <Button
//         label="Warning"
//         // style={warningStyle}
//        type="warning"
//        />)

//        .add('Default', () => <Button
//        label="Default"
//        // style={warningStyle}
//       type="default"
//       />)