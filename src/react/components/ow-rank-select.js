import React, {Component} from 'react';

import OwLabel from './ow-label'
import IconListbox from './icon-listbox';

class OwRankSelect extends Component{
  constructor(props){
    super(props);

    this.optionAttributes={
      bronze:{
        ref:"option1",
        imagePath:'img/iconsRank/1_Bronze.png',
        id:"rank_bronze"
      },
      silver:{
        ref:"option2",
        imagePath:'img/iconsRank/2_Silver.png',
        id:"rank_silver"
      },
      gold:{
        ref:"option3",
        imagePath:'img/iconsRank/3_Gold.png',
        id:"rank_gold"
      },
      platinum:{
        ref:"option4",
        imagePath:'img/iconsRank/4_Platinum.png',
        id:"rank_platinum"
      },
      diamond:{
        ref:"option5",
        imagePath:'img/iconsRank/5_Diamond.png',
        id:"rank_diamond"
      },
      master:{
        ref:"option6",
        imagePath:'img/iconsRank/6_Master.png',
        id:"rank_master"
      },
      grandmaster:{
        ref:"option7",
        imagePath:'img/iconsRank/7_Grandmaster.png',
        id:"rank_bronze"
      },
      top500:{
        ref:"option8",
        imagePath:'img/iconsRank/8_Top_500.png',
        id:"rank_top500"
      }
    }
  }

  render(){
    let optionData = this.generateOptionData();

    return(
      <div className="ow-rank-select">
        <OwLabel labelName="Rank" />
        <hr />
        <IconListbox
          aria_label="Rank Select"
          update_value={ this.props.update_rank }
          option_type="rank"
          option_data = { optionData }  
        />
      
      </div>
    )
  }

  generateOptionData(){
    let ranksSelected = this.props.ranks_selected;
    let rankNames = Object.keys( ranksSelected )

    return rankNames.map( rankName =>{
      let optionAttr = this.optionAttributes[rankName];

      return{
        id: optionAttr.id,
        value: rankName,
        ref: optionAttr.ref,
        imagePath: optionAttr.imagePath,
        isChecked: ranksSelected[rankName]
      }
    })
  }
}

export default OwRankSelect;