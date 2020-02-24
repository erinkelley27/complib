import React from 'react';
import { storiesOf } from '@storybook/react';

import NumberInput2 from './numberInput2.js';

storiesOf('NumberInput', module)
    .add('Default', () => <NumberInput2
        start="2"
        min="0"
        max="8"
        step="2"
         
      />)