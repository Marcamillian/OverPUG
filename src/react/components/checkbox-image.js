import React, { Component } from 'react';

class CheckboxImage extends Component{

  render(){

    let imagePath = this.props.image_path;
    let formName = this.props.form_name;
    let value = this.props.value;
    let isChecked = this.props.is_checked;
    let onChange = ()=>{ console.log("changin thing")}

    let idString = `${formName}_${value}`;

    return(
      <div className="checkbox-image">
        <input
          ref="checkbox"
          type="checkbox"
          id={ idString }
          name={formName}
          value={value}
          role="option"
          aria-label={value}
          checked = {isChecked}
          aria-selected={ isChecked }
          onChange={ onChange }/>
        <label htmlFor={ idString }>
          <img src={ imagePath }></img>
        </label>
      </div>
    )
  }

}

export default CheckboxImage;