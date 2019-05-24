import React from 'react';

import ListBox from './listbox';
import checkboxImage from './checkbox-image';
import CheckboxImage from './checkbox-image';

class IconListBox extends ListBox{

  render(){
    let optionData = this.props.option_data;
    let ariaLabel = this.props.aria_label;
    let ownsString = optionData.reduce((builtString, optionData )=>{
      return `${builtString}${optionData.id} `;
    }, "");

    return (
      <div 
        className="icon-listbox"
        role="listbox"
        aria-label={ ariaLabel }
        aria-multiselectable="true"
        aria-orientation="horizontal"
        aria-owns={ ownsString }
        onKeyDown={ this.handleKeyEvent.bind(this)}
      >
        { optionData.map(this.renderOption.bind(this)) }
      </div>
    )
  }

  renderOption(optionObject){
    
    let idString = `${this.props.option_type}_${optionObject.value}`

    return(
      <CheckboxImage
        key={ idString }
        id={ idString }
        option_type={ this.props.option_type }
        value={ optionObject.value }
        image_path={ optionObject.imagePath }
        on_change={ this.handleOnChange.bind(this) }
        ref={optionObject.ref}
        is_checked = { optionObject.isChecked }
      />
    )
  }

  handleOnChange( event ){
    this.props.update_value( event );
  }

  setTabIndex( optionElement ){
    optionElement.setTabIndex()
  }

  giveFocus( optionElement ){
    optionElement.setFocus()
  }

  removeFocus( optionElement ){
    optionElement.removeFocus()
  }

  toggleChecked( optionElement ){
    optionElement.toggleChecked()
  }


}



export default IconListBox