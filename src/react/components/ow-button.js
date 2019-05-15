import React, { Component } from 'react';

class OwButton extends Component{
  render(){

    let buttonText = this.props.buttonText.toUpperCase();
    let clickCallback = this.props.clickCallback ? this.props.clickCallback : ()=>{console.log("something")}; 
    
    let classList = "ow-button";
    if(this.props.accent){
      classList += " accent";
    }

    return (
      <button
        className={classList}
        onClick={ clickCallback } >
        <div>{ buttonText } </div>
      </button>
    )
  }
}

export default OwButton;