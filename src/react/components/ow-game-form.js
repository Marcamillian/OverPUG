import React, {Component} from 'react';

import OwTextInput from './ow-text-input';

class OwGameForm extends Component{
  
  constructor(){
    super();

    this.gameData = {
      platforms:{pc:true, ps4: false, xbox: false},
      region:{na: false, eu: true, apac: false},
      startTime: Date.now(),
      gameName: "My Game",
      gamePassword: "password",
      skillLevel:{
        bronze: false,
        silver:false,
        gold:true,
        plat:true,
        diamond:false, 
        master: false,
        grandmaster: false,
        top500: false}
    }
  }
  
  render(){
    return(
      <div>
        /* ow-platform-select */

        /* ow-region-select */

        /* ow-date-input - start time*/

        /* ow-text-input - game name*/

        /* ow-text-input - game password*/

        /* ow-skill-select */


      </div>
    )
  }


}

export default OwGameForm;