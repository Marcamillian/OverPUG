import React, {Component} from 'react';

import OwLabel from './ow-label';
import OwButton from './ow-button';

class OwTimeSelect extends Component{
  render(){
    return(
      <div className="ow-time-select">
        <OwLabel labelName="Times" />
        <hr />
        <div className="time-styles">
          <OwButton buttonText="schedule" />
          <OwButton buttonText="now" />
        </div>

      </div>
    )
  }
}

export default OwTimeSelect;