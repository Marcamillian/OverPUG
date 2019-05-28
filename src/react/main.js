import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import OwGameForm from './components/ow-game-form';
import HomePage from './components/home-page';

function updateValue( event ){
  console.log(`update icon option ${event.target.value}`)
}

ReactDOM.render(
  <BrowserRouter>
    
     <Switch>
       <Route path="/game" component={ OwGameForm } />
       <Route path="/" component={ HomePage } />
     </Switch>
   
  </BrowserRouter>
  
, document.querySelector('.react-container'));

/*
    <Listbox aria_label="select platform" update_platform={console.log} option_data={ optionData }/>
    <IconListbox
      aria_label="icon platform"
      update_value={ updateValue.bind(this) }
      option_type="platform"
      option_data={ iconOptionData }/>
  */