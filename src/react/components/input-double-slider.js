import React, { Component } from 'react';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { timingSafeEqual } from 'crypto';

class InputDoubleSlider extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      isDragging: false,
      width:null,
      segments: 24,
      valueHandle1: 2,
      valueHandle2: 8,
      valueFloor: 0,
      valueMax: 24,
      handleRadius: 15
    }

  }

  render(){

    const width= this.state.width || 100;
    // TODO: Position the handles 
    const r = this.state.handleRadius;
    const handleSize = (r > 25 ) ? r : 50;

    return(
      <div className="input-double-slider" ref="container" onMouseUp = {this.handleMouseUp.bind(this)}>
        <svg className="track" width={width} height="75">
          <line className="track-groove" x1="5" y1="25" x2={width-5} y2="25" stroke="white" strokeWidth="6px"/>
        </svg>
        <svg ref="handle1" width={ handleSize } height={ handleSize }><circle cx={ handleSize/2 } cy={ handleSize/2 } r={ r } fill="lightgrey"/> </svg>
        <svg ref="handle2" width={ handleSize } height={ handleSize }><circle cx={ handleSize/2 } cy={ handleSize/2 } r={ r }  fill="lightgrey"/> </svg>
      </div>
    )
  }

  componentDidMount(){
    
    // get the track length
    let container = this.refs["container"];
    let box = container.getBoundingClientRect();
    let trackWidth = box.width -10;

    this.setState( prevState =>({
      width:trackWidth
    }))


    let handleAdjust = -this.state.handleRadius/2;

    // setting handle positions
    let handle1 = this.refs["handle1"];
    let handle1Value = this.state.valueHandle1;
    let handle2 = this.refs["handle2"];
    let handle2Value = this.state.valueHandle2;
    
    let spacingArray = this.calcSpacing( trackWidth, this.state.segments, this.state.valueFloor, this.state.valueMax );

    let pickSpacing = ( searchValue )=>{
      
      for( var i=0; i < spacingArray.length -1; i++ ){
        
        // look for interval where search value fits
        if (searchValue >= spacingArray[i].value && searchValue < spacingArray[i+1].value){
          // decide where mid point is
          let range = spacingArray[i+1].value-spacingArray[i].value;
          let midpoint = range/2;

          // return spacing for closer value
          return (searchValue > midpoint) ? spacingArray[i].spacing : spacingArray[i+1].spacing
        }
      }
      return new Error(`slider value not found in range: ${searchValue}`)
    }

    let handle1Spacing = pickSpacing(handle1Value);
    let handle2Spacing = pickSpacing(handle2Value);

    handle1.style.left=`${handle1Spacing}px`;    
    handle2.style.left=`${handle2Spacing}px`;
    
  }

  generateDivisions(){
    let {width, segments, valueMax, valueFloor} = this.state;

    let horizontalMarks = this.calcSpacing(width, segments, valueFloor, valueMax);
    console.log(horizontalMarks);
    return horizontalMarks.map( ({spacing, value}) =>{
      return(
        <line x1={spacing} x2={spacing} y1="0" y2="50" stroke="white"/>
      )
    })
    
  }

  calcSpacing(width, segments, valueMin, valueMax){
    let spacing = width / segments;
    let range = valueMax - valueMin;
    let valueIncrement = range / segments;

    let horizontalMarks = [{
      spacing:0,
      value:this.state.valueFloor
    }];

    for(let i=0; i < this.state.segments; i++ ){
      horizontalMarks.push( {
        spacing: horizontalMarks[i].spacing + spacing,
        value: horizontalMarks[i].value + valueIncrement
      })
    }

    return horizontalMarks;
  }

  handleMouseDown( event ){
    this.setState( prevState =>({
      isDragging: true
    }))
  }

  handleMouseUp( event ){
    let mouseX = event.clientX;
    let handleElement = this.refs.handle1;
    let handleSize = handleElement.getClientRects()[0];

    // find which handle is closest
    // lock the mouseX to an interval

    handleElement.style.left = mouseX - handleSize.width/2;
  }

}

export default InputDoubleSlider;