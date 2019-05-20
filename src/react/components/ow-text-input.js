import React, { Component } from 'react';

import OwLabel from './ow-label';

class OwTextInput extends Component{
  render(){
    let labelName = this.props.labelName;

    let labelText = labelName.toUpperCase();
    let idString = labelName
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .join('_');

    let formName = this.props.formName;

    return(
      <div className="ow-text-input">
        <OwLabel labelName={ labelText } forString={ idString } />
        <input id={ idString } type="text" name={formName} ></input>
      </div>
    )
  }
}

export default OwTextInput;