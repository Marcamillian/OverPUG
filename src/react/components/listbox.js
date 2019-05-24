import React, { Component } from 'react';

class Listbox extends Component{

  constructor(props){
    super(props);

    this.state = {
      focusedIndex: 0,
      optionElements:[],
      optionData: this.props.option_data
    }

  }

  render(){
    
    let optionData = this.state.optionData;
    let ariaLabel = this.props.aria_label;

    return(
      <div
        className="listbox"
        role="listbox"
        aria-label={ ariaLabel }
        aria-multiselectable="true"
        aria-orientation="horizontal"
        onKeyDown={ this.handleKeyEvent.bind(this) }
      >
        { optionData.map(this.renderOption) }
      </div>
    )
  }

  renderOption(optionObject){
    return(
      <input
        ref= { optionObject.ref }
        key= { optionObject.value }
        type="checkbox"
        value= { optionObject.value }
        aria-label={ optionObject.value }
        role="option"
        aria-selected="false"
        tabIndex="-1"
      />
    )
  }

  handleFocus( event ){
    let element = this.refs["select-container"];

    if( event.target == element ){
      //this.state.options[ this.state.focusedIndex ].setFocus();
    }

  }

  handleKeyEvent( event ){

    let element = this.state.optionElements[ this.state.focusedIndex ];

    switch( event.keyCode ){
      case 9: // tab
        // remove focus/tabIndex on the internal option 
      break;
      case 32: // space
        // change the checked status of the input - picked up in state bu onChange handler
        event.preventDefault();
        this.toggleChecked( element );
      break;
      case 39: // right
        var index = this.state.focusedIndex;
        var options = this.state.optionElements;
        var newIndex;

        if( index >= options.length-1 ){
          newIndex = 0;
        }else{
          newIndex = index + 1;
        }
        
        this.removeFocus( element ); // remove focuse/tabIndex from old option
        this.giveFocus( options[newIndex] ) // add focuse/tabIndex to new option

        this.setState( prevState => ({ focusedIndex: newIndex })) // update state with new index

      break;
      case 37: // left
        var index = this.state.focusedIndex;
        var options = this.state.optionElements;
        var newIndex;

        if( index <= 0){
          newIndex = options.length -1;
        }else{
          newIndex = index -1;
        }

        this.removeFocus( element );
        this.giveFocus( options[newIndex] );

        this.setState( prevState => ({ focusedIndex: newIndex }));

      break;
      default:
        console.log(event.keyCode)
      break;

    }
  }

  handleOnChange( event ){
    this.props.update_platform( event );
  }

  setTabindex( optionElement ){
    optionElement.setAttribute("tabIndex", "0");
  }

  giveFocus( optionElement ){
    optionElement.setAttribute("tabIndex", "0");
    optionElement.focus();
  }
  removeFocus( optionElement ){
    optionElement.setAttribute("tabIndex", "-1");
  }
  toggleChecked( optionElement ){
    let newValue = !optionElement.checked;
    if( newValue == true ){
      optionElement.setAttribute("aria-selected", "true")
      optionElement.checked = true;
    }else{
      optionElement.setAttribute("aria-selected", "false")
      optionElement.checked = false;
    }
  }

  // OVERRIDE THIS
  componentDidMount(){
    
    let optionElements = this.state.optionData.map( ({ ref }) =>{
      return this.refs[ ref ];
    })
    
    this.giveFocus(optionElements[this.state.focusedIndex]);

    this.setState( prevState =>({ optionElements }))

  }

}

export default Listbox;