import React, { Component } from 'react';

import OwLabel from './ow-label';
import IconListbox from './icon-listbox';

class OwRoleSelect extends Component{
  constructor(props){
    super(props);

    this.optionAttributes={
      tank_main:{
        ref:"option 1",
        imagePath:"img/iconsRole/tank_main.png",
        id: "role_tank_main"
      },
      tank_off:{
        ref:"option 2",
        imagePath:"img/iconsRole/tank_off.png",
        id: "role_tank_off"
      },
      support_main:{
        ref:"option 3",
        imagePath:"img/iconsRole/support_main.png",
        id: "role_support_main"
      },
      support_off:{
        ref:"option 4",
        imagePath:"img/iconsRole/support_off.png",
        id: "role_support_off"
      },
      dps:{
        ref:"option 5",
        imagePath:"img/iconsRole/dps.png",
        id: "role_dps"
      },
      flex:{
        ref:"option 6",
        imagePath:"img/iconsRole/flex.png",
        id: "role_flex"
      }
    }
  }

  render(){

    let optionData = this.generateOptions();

    return(
      <div className="ow-role-select">
        <OwLabel labelName="Role" />
        <hr />
        <IconListbox
          aria-label="Role Select"
          update_value= {this.props.update_roles }
          option_type="role"
          option_data={ optionData }
        />
      </div>
    )
  }

  generateOptions(){
    let rolesSelected = this.props.roles_selected;
    let roleNames= Object.keys( rolesSelected );

    return roleNames.map( roleName =>{
      console.log(roleName);
      console.log(roleNames)
      let optionAttr = this.optionAttributes[roleName];

      return{
        id: optionAttr.id,
        value: roleName,
        ref: optionAttr.ref,
        imagePath: optionAttr.imagePath,
        isChecked: rolesSelected[roleName]
      }
    })
  }
}

export default OwRoleSelect;