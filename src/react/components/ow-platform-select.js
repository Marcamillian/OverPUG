import React, { Component } from 'react';

import OwLabel from './ow-label';
import CheckboxImage from './checkbox-image';

class OwPlatformSelect extends Component{

  constructor(props){
    super(props);

    this.state = {
      focusedIndex: 0,
      options: []
    }
  }

  render(){

    let platforms = this.props.platforms_selected;

    return(
      <div
        ref="select-container"
        className="ow-platform-select"
        tabIndex="0"
        onFocus={this.handleFocus.bind(this)}
        onKeyDown={ this.handleKeyEvent.bind(this) }>

        <OwLabel labelName="Platform" />

        <div className="platform-list">

          <CheckboxImage
            option_type="platform"
            value="ps4"
            image_path="img/iconsPlatform/ps4.png"
            ref="option-ps4"
            is_checked = { platforms["ps4"] }
            on_change = { this.handleOnChange.bind(this) }
          />
          <CheckboxImage
            option_type="platform"
            value="pc"
            image_path="img/iconsPlatform/windows.png"
            ref="option-pc"
            is_checked = { platforms["pc"] }
            on_change = { this.handleOnChange.bind(this) }
          />
          <CheckboxImage
            option_type="platform"
            value="xbox"
            image_path="img/iconsPlatform/xbox.png"
            ref="option-xbox"
            is_checked = { platforms["xbox"] }
            on_change = { this.handleOnChange.bind(this) }
          />

        </div>
      </div>
    )
  }

  handleFocus( event ){
    let element = this.refs["select-container"];

    if( event.target == element ){
      this.state.options[ this.state.focusedIndex ].setFocus();
    }

  }

  handleKeyEvent(event){
    switch(event.keyCode){
      case 9: // tab
        
        if(event.shiftKey){
          event.preventDefault();
          console.log("shift tab")
        }else{
          this.state.options[this.state.focusedIndex].removeFocus();
        }
    
      break;
      case 32:  // space
        var element = this.state.options[this.state.focusedIndex];
        element.toggleChecked();

      break;
      case 39:  // right
        var index = this.state.focusedIndex;
        var options = this.state.options;
        var newIndex;

        // update the index
        if( index >= options.length -1 ){
          newIndex = 0;
        }else{
          newIndex = index + 1;
        }

        this.state.options[index].removeFocus(); // unfocus the old element 
        this.state.options[newIndex].setFocus(); // focuse the new element

        // update the index
        this.setState(prevState => ({ focusedIndex: newIndex }))

      break;
      case 37:  // left
        var index = this.state.focusedIndex;
        var options = this.state.options;
        var newIndex;

        if(index <= 0 ){
          newIndex = options.length -1;
        }else{
          newIndex = index -1;
        }

        this.state.options[index].removeFocus();
        this.state.options[newIndex].setFocus();

        this.setState( prevState => ({ focusedIndex: newIndex }))

      break;
      default:
        console.log(event.keyCode);
      break;
    }
  }

  handleOnChange(event){
    this.props.update_platform(event);
  }

  componentDidMount(){
    // make a list of the option objects
    let options = [this.refs["option-ps4"],this.refs["option-pc"], this.refs["option-xbox"] ];
    this.setState( prevState => ({ options }) )
    
  }
}


export default OwPlatformSelect;