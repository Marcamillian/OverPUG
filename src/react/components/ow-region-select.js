import React, {Component} from 'react';

import OwLabel from './ow-label';
import IconListbox from './icon-listbox';

class OwRegionSelect extends Component{
  constructor(props){
    super(props)

    this.optionAttributes={
      na:{
        ref:"option1",
        imagePath:'img/iconsRegion/NA.png',
        id:"region_NA"
      },
      eu:{
        ref:"option2",
        imagePath:'img/iconsRegion/EU.png',
        id:"region_EU"
      },
      apac:{
        ref:"option3",
        imagePath:'img/iconsRegion/APAC.png',
        id:"region_APAC"
      },
    }
  }

  render(){
    let optionData = this.generateOptions();

    

    return(
      <div className="ow-region-select">
        <OwLabel labelName="Region" />
        
        <IconListbox
          aria_label="Region Select"
          update_value={ this.props.update_regions }
          option_type="region"
          option_data= { optionData }
        />
      
      </div>
    )
  }

  generateOptions(){
    let regionsSelected = this.props.regions_selected;
    let regionNames = Object.keys(regionsSelected);

    return regionNames.map( regionName =>{
      let optionAttr = this.optionAttributes[regionName];

      return{
        id: optionAttr.id,
        value: regionName,
        ref: optionAttr.ref,
        imagePath: optionAttr.imagePath,
        isChecked: regionsSelected[regionName]
      }
    })
  }
}

export default OwRegionSelect;