import React from 'react';
import ReactDOM from 'react-dom';

import OwGameForm from './components/ow-game-form';
import ListBox from './components/list-box';

let optionData = [
  { value: 'pc', ref: 'option1' },
  { value: 'ps4', ref: 'option2' },
  { value: 'xbox', ref: 'option3' },
]


ReactDOM.render(
  <div>
    <ListBox aria-label="select platform" update_platform={console.log} optionData={ optionData }/>
   </div>
, document.querySelector('.react-container'));