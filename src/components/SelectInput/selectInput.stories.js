import React from 'react';
import { storiesOf } from '@storybook/react';

import SelectInput from './selectInput';


storiesOf('SelectInput', module)
    .add('Select', () => <SelectInput
        label="Select"
        opt1="Dog"
        opt2="Cat"
   /> )