import React, { Component } from 'react';

import OwLabel from './ow-label';

class OwInput extends Component{
  render(){
    let labelText = this.props.labelName.toUpperCase();
    let value = this.props.value;
    let onChange = this.props.onChange;
    let type = this.props.type;

    return(
      <div className="ow-text-input">
        <OwLabel
          labelName={ labelText }
        />

        <input
          type={ type }
          value={ value }
          onChange={onChange}
        /> 
      </div>
    )
  }
}

export default OwInput;