import React, {Component} from 'react';
import { timingSafeEqual } from 'crypto';

class CheckboxText extends Component{

  render(){

    let checkboxText = this.props.checkbox_text.toUpperCase() || "undefined";
    let isChecked = this.props.is_checked;
    let dateBlockClass="date-block";

    let onChange = this.props.on_change;

    if(isChecked) dateBlockClass += " checked";

    return(
      <div className="checkbox-text" >
        <input
          type="checkbox"
          ref="checkbox"
          checked={isChecked}
          onChange={ onChange }
          value={ this.props.checkbox_text}
        ></input>
        <div
          className={ dateBlockClass }
          onClick={this.toggleCheckbox.bind(this)}
        >{ checkboxText }</div>
      </div>
    )
  }

  toggleCheckbox(){
    let checkbox = this.refs['checkbox'];
    checkbox.click()
  }

}

export default CheckboxText;