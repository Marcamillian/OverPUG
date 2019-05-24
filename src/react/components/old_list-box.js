import React, { Component } from 'react';
import { timingSafeEqual } from 'crypto';

class ListBox extends Component{
  
  render(){

    let multiSelect = this.props.multi_select;

    return(
      <div className="list-box"
            tabIndex="0"
            role="listbox"
            aria-multiselectable={multiSelect}
            ref="listbox">
        {this.props.children}
      </div>
    )

  }

  componentDidMount(){
    let container = this.refs.listbox;
    this.options = container.querySelectorAll('input');
    this.focusedIndex = 0;
    this.focusedItem = this.options[this.focusedIndex];

    container.addEventListener('focus', this.initFocus.bind(this))
    container.addEventListener('keydown', this.keyHander.bind(this));

  }

  keyHander(event){
    event.preventDefault();
    switch(event.keyCode){
      case 9: // tab
        // carry on to next element
      break;
      case 32: // space
        // update the element
        event.preventDefault();
        this.toggleOption(event.target);
      break;
      case 39: // right
        event.preventDefault();
        if(this.focusedIndex < this.options.length-1){
          this.focusedIndex ++;
        }else{
          this.focusedIndex = 0;
        }
        this.changeFocus(this.focusedIndex)
      break;
      case 37: // left
        event.preventDefault();
        if(this.focusedIndex > 0){
          this.focusedIndex --;
        }else{
          this.focusedIndex = this.options.length-1;
        }
        this.changeFocus(this.focusedIndex);
      break;
      default:
        console.log(event.keyCode)
      break;
    }
  }

  toggleOption(DOMElement){
    let checked = DOMElement.checked;
    DOMElement.setAttribute('checked', !checked)
    DOMElement.setAttribute('aria-selected', !checked)
    console.log(DOMElement)
  }

  initFocus(){
    this.changeFocus(this.focusedIndex);
  }

  changeFocus(index){
    console.log("soimething")
    // deal with existing focused item
    this.focusedItem.tabIndex = -1;

    // set up the newly focused item
    this.focusedItem = this.options[index];
    this.focusedItem.tabIndex = 0;
    this.focusedItem.focus();
  }

  toggleOption( element ){

    let checked = element.checked;

    if(checked){
      this.focusedItem.removeAttribute('checked');
      this.focusedItem.setAttribute('aria-selected', false)
    }else{
      this.focusedItem.setAttribute('checked', 'checked');
      this.focusedItem.setAttribute('aria-selected', true)
    }
  }

}

export default ListBox;