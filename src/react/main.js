import React from 'react';
import ReactDOM from 'react-dom';

import Basic from './components/basic';
import OwButton from './components/ow-button';
import OWTeamSlot from './components/ow-team-slot';

ReactDOM.render(
  <div>
    <h1> Soemthing </h1>
    <OwButton buttonText="create"/>
    <OWTeamSlot playerName="Marcamillian" teamColor="blue"/>
  </div>
, document.querySelector('.react-container'));