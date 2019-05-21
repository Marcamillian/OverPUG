import React, { Component } from 'react';

class OwButton extends Component{
  render(){

    let buttonText = this.props.buttonText.toUpperCase();
    let clickCallback = this.props.clickCallback ? this.props.clickCallback : ()=>{}; 
    // TODO: add left/right attribute for border side

    let classList = "ow-button";
    if(this.props.accent){
      classList += " accent";
    }

    return (
      <button
        className={classList}
        onClick={ clickCallback } >
        { buttonText } 
      </button>

    )
  }
}

export default OwButton;