import React, { Component } from 'react';

class CheckboxImage extends Component{

  render(){

    let imagePath = this.props.image_path;
    let optionType = this.props.option_type;
    let value = this.props.value;
    let isChecked = this.props.is_checked;
    let onChange = this.props.on_change;

    let idString = this.props.id;

    return(
      <div className="checkbox-image" >
        <input
          ref="checkbox"
          type="checkbox"
          value={value}
          checked = {isChecked}
          
          role="option"
          aria-label={value}
          aria-selected={ isChecked }

          onChange = { onChange }
        />
        <label
          ref="focus"
          id={ idString }
          htmlFor={ idString }
          aria-label={ value }
          aria-selected={ isChecked }
          onClick={ this.toggleChecked.bind(this) }>
          <img  src={ imagePath }></img>
        </label>
      </div>
    )
  }

  setTabIndex(){
    let element = this.refs['focus'];
    element.setAttribute('tabindex','0')
  }

  setFocus(){
    let element = this.refs['focus'];

    element.setAttribute('tabindex', 0);
    element.focus();
  }

  removeFocus(){
    let element = this.refs['focus'];
    element.removeAttribute('tabindex');
  }

  toggleChecked(){
    let element = this.refs['checkbox'];
    element.click();
  }

  getValue(){
    let element = this.refs['checkbox'];
    return element.value;
  }


}

export default CheckboxImage;