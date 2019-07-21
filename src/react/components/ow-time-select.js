import React, {Component} from 'react';

import OwLabel from './ow-label';
import OwButton from './ow-button';
import CheckboxText from './checkbox-text';
import InputDoubleSlider from './input-double-slider';


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
        <div>
          { this.generateDayBlocks() }
        </div>

        <InputDoubleSlider />
      </div>
    )
  }

  generateDayBlocks(){
    let schedule = this.props.schedule;
    let dayNames = Object.keys(schedule);

    return dayNames.map( dayName =>{

      return(
        <CheckboxText
          key={`schedule_${dayName}`}
          checkbox_text={dayName}
          is_checked={schedule[dayName].active }
          on_change= {this.props.time_toggle}
        />
      )
    })
    
  }
}

export default OwTimeSelect;