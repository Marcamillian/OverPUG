import React from 'react';
import ReactDOM from 'react-dom';

import Basic from './components/basic';
import OwButton from './components/ow-button';
import OwTeamSlot from './components/ow-team-slot';
import OwTextInput from './components/ow-text-input';
import OwRoleSelect from './components/ow-role-select';


ReactDOM.render(
  <div>
    <OwTeamSlot playerName="Marcamillian" teamColor="blue"/>

    <form>
      <OwTextInput labelName="game name" formName="game_name"/>
      <OwRoleSelect formName="roles[]" formName="selected_roles[]"/>
      <OwButton buttonText="create game"/>
    </form>
   </div>
, document.querySelector('.react-container'));