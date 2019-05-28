import React, { Component } from 'react';

import OwButton from './ow-button';
import OwTextInput from './ow-text-input';
import OwRegionSelect from './ow-region-select';
import OwPlatformSelect from './ow-platform-select';
import OwRankSelect from './ow-rank-select';
import OwRoleSelect from './ow-role-select';
import OwTimeSelect from './ow-time-select';

class OwGameSearchForm extends Component{
  
  constructor(props){
    super(props);

    // fill in form states
    this.state = {
      gameData:{
        username: "someone",
        platforms:{pc:false, ps4:false, xbox: true},
        regions:{na: false, eu: false, apac: true },
        ranks:{
          bronze: false,
          silver: false,
          gold: true,
          platinum: true,
          diamond: true,
          master: false,
          grandmaster: false,
          top500: false
        },
        times:{
          now: false,
          schedule:{
            mon:[
              {start: "9:00", end:"10:00"}
            ],
            tue:[],
            wed:[],
            thur:[],
            fri:[],
            sat:[],
            sun:[],
          },
          

        },
        roles:{
          tank_main: true,
          tank_off: false,
          support_main: true,
          support_off: false,
          dps: false,
          flex: false
        }
      }
    }
  }

  
  
  render(){

    /*
      ow-text-input - battletag
      ow-platform-select
      ow-region-select
      [ ] ow-time select
      ow-rank-select
      [ ] ow-role-select
      ow-button  
    */

    return(
      <div className="ow-game-search-form">
        
        <form onSubmit={ this.handleFormSubmit.bind(this) }>

          <OwTextInput
            labelName="username/battletag"
            type="text"
            value={ this.state.gameData.username }
            onChange={ this.handleUsername.bind(this) }
          />

          <OwPlatformSelect
            platforms_selected={ this.state.gameData.platforms }
            update_platform ={ this.handlePlatformSelect.bind(this) }
          />

          <OwRegionSelect
            regions_selected = {this.state.gameData.regions }
            update_regions= { this.handleRegionSelect.bind(this) }
          />
          
          <OwTimeSelect />

          <OwRankSelect
            ranks_selected= { this.state.gameData.ranks }
            update_rank = { this.handleRankSelect.bind(this) }
          />

          <OwRoleSelect
            roles_selected ={ this.state.gameData.roles }
            update_roles = { this.handleRoleSelect.bind(this) }
          />

         <OwButton buttonText="Search Games" accent="true"/>
        </form>
      </div>
    )
  }

  handleUsername( event ){
    let value = event.target.value;

    // update the state
    this.setState( prevState =>({
      gameData:{
        ...prevState.gameData,
        username: value
      }
    }))
  }

  handlePlatformSelect( event ){
    let platformTarget = event.target.value;
    let platformsCopy = {...this.state.gameData.platforms };
    let newValue = !platformsCopy[platformTarget];
    platformsCopy[platformTarget] = newValue;

    console.log(platformsCopy)

    this.setState( prevState =>({
      gameData:{
        ...prevState.gameData,
        platforms: platformsCopy
      }
    }))
  } 

  handleRankSelect( event ){
    let rankTarget = event.target.value;
    let ranksCopy = { ...this.state.gameData.ranks };
    let newValue = !ranksCopy[rankTarget];
    
    ranksCopy[rankTarget] = newValue;

    this.setState( prevState =>({
      gameData:{
        ...prevState.gameData,
        ranks: ranksCopy
      }
    }))
  }

  handleRegionSelect( event){
    let regionTarget = event.target.value;
    let regionsCopy = {...this.state.gameData.regions};
    let newValue = !regionsCopy[regionTarget];
    
    regionsCopy[regionTarget] = newValue;


    this.setState( prevState =>({
      gameData:{
        ...prevState.gameData,
        regions: regionsCopy
      }
    }));  
  }

  handleRoleSelect( event ){
    let roleTarget = event.target.value;
    let rolesCopy = {...this.state.gameData.roles}
    let newValue = !rolesCopy[roleTarget];

    rolesCopy[roleTarget] = newValue;

    this.setState( prevState =>({
      gameData:{
        ...prevState.gameData,
        roles: rolesCopy
      }
    }))
  }

  handleFormSubmit( event ){
    event.preventDefault();
    console.log(this.state.gameData);
  }
}

export default OwGameSearchForm;