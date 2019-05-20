import React, { Component } from 'react';

class OwLabel extends Component{
  render(){
    let labelName = this.props.labelName.toUpperCase();
    let forString = this.props.forString;
    let idString = this.props.idString;

    return(
      <label id={idString} className="ow-label" htmlFor={forString}> {labelName} </label>
    )
  }
}

export default OwLabel;