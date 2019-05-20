import React, { Component } from 'react';

import OwLabel from './ow-label';
import CheckboxImage from './checkbox-image';
import ListBox from './list-box';

class OwRoleSelect extends Component{

  render(){

    let formName = this.props.formName;
    let listOptions = this.refs.options;

    return(
      <div className="ow-role-select">
        <OwLabel idString="role-select-label" labelName="Role Select" forString="role-select"/>
        <hr />
        <ListBox list_label="role-select-label" className="role-options" multi_select="true" list_options={listOptions}>
          {this.genRoleOptions(formName)}
        </ListBox>
      </div>
    )
  }

  genRoleOptions(formName){

    let roles=[
      { value:"dps", checked: true, imagePath:"/img/iconsRole/dps.png"  },
      { value:"flex", checked: false, imagePath:"/img/iconsRole/flex.png" },
      { value:"support_main", checked: false, imagePath:"/img/iconsRole/support_main.png" },
      { value:"support_off", checked: false, imagePath:"/img/iconsRole/support_off.png" },
      { value:"tank_main", checked: false, imagePath:"/img/iconsRole/tank_main.png" },
      { value:"tank_off", checked: false, imagePath:"/img/iconsRole/tank_off.png" }
    ]

    return roles.map( ({
      value,
      imagePath,
      checked
    }) =>{
      return(
         <CheckboxImage
         key={value}
         form_name={ formName }
         is_checked={ checked }
         value={ value }
         image_path={ imagePath }
         />
      )
    })
  }

}

export default OwRoleSelect;