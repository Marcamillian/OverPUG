import React from 'react';
import ReactDOM from 'react-dom';

import OwGameForm from './components/ow-game-form';
import Listbox from './components/listbox';
import IconListbox from './components/icon-listbox';


let optionData = [
  { value: 'pc', ref: 'option1' },
  { value: 'ps4', ref: 'option2' },
  { value: 'xbox', ref: 'option3' },
]

let iconOptionData = [
  { value: 'pc', ref: 'option1', imagePath:"img/iconsPlatform/windows.png", isChecked:false, id:"platform_pc" },
  { value: 'ps4', ref: 'option2', imagePath:"img/iconsPlatform/ps4.png", isChecked:false, id:"platform_ps4" },
  { value: 'xbox', ref: 'option3', imagePath:"img/iconsPlatform/xbox.png", isChecked:false, id:"platform_xbox" },
]

function updateValue( event ){
  console.log(`update icon option ${event.target.value}`)
}

ReactDOM.render(
  <div>
    <OwGameForm />
   </div>
, document.querySelector('.react-container'));

/*
    <Listbox aria_label="select platform" update_platform={console.log} option_data={ optionData }/>
    <IconListbox
      aria_label="icon platform"
      update_value={ updateValue.bind(this) }
      option_type="platform"
      option_data={ iconOptionData }/>
  */