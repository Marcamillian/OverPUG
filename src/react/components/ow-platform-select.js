import React, { Component } from 'react';

import OwLabel from './ow-label';
import IconListbox from './icon-listbox';

class OwPlatformSelect extends Component{
  
  constructor(){
    super();
    
    this.optionAttributes ={
      pc:{
        ref:"option1",
        imagePath:"img/iconsPlatform/windows.png",
        id:"platform_pc"
      },
      ps4:{
        ref:"option2",
        imagePath:"img/iconsPlatform/ps4.png",
        id:"platform_ps4"
      },
      xbox:{
        ref:"option3",
        imagePath:"img/iconsPlatform/xbox.png",
        id:"platform_xbox"
      }
    }

  }
  
  render(){
    let platforms = this.props.platforms_selected;
    let optionData = this.generateOptionData();

    return(
      <div class="ow-platform-select">
        <OwLabel labelName="Platform" />
        <IconListbox
          aria_label="platform select"
          update_value={ this.props.update_platform }
          option_type="platform"
          option_data={ optionData }
        />
      </div>
    )
  }

  generateOptionData(){
    let platformsSelected = this.props.platforms_selected;
    let platformNames = Object.keys(platformsSelected);

    return platformNames.map( platformName =>{
      let optionAttr = this.optionAttributes[platformName];

      return {
        id: optionAttr.id,
        value: platformName,
        ref: optionAttr.ref,
        imagePath: optionAttr.imagePath,
        isChecked: platformsSelected[platformName]
      }
    })


  }

}

export default OwPlatformSelect;