// https://www.codementor.io/blizzerand/building-forms-using-react-everything-you-need-to-know-iz3eyoq4y

import React, {Component} from 'react';

import OwInput from './ow-text-input';
import OwButton from './ow-button';
import OwPlatformSelect from './ow-platform-select';
import OwRankSelect from './ow-rank-select';

class OwGameForm extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      gameData: {
        platforms:{pc:true, ps4: false, xbox: false},
        region:{na: false, eu: true, apac: false},
        startTime: Date.now(),
        gameName: "My Game",
        gamePassword: "password",
        ranks:{
          bronze: false,
          silver:false,
          gold:true,
          platinum:true,
          diamond:false, 
          master: false,
          grandmaster: false,
          top500: false}
      }
    }

    // put options in array?

  }
  
  render(){

    /*
      ow-platform-select 
      ow-region-select 
       ow-date-input - start time
       ow-text-input - game name
       ow-text-input - game password
      ow-skill-select
    */
    let gameData = this.state.gameData;

    return(
      <div className="ow-game-form">
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <OwPlatformSelect
            platforms_selected={ this.state.gameData.platforms }
            update_platform={ this.handlePlatformSelect.bind(this) }
          />

          <OwInput
            labelName="Custom Game Name"
            type="text"
            value={ gameData.gameName }
            onChange={this.handleGameName.bind(this)}
          />

          <OwInput
            labelName="Custom Game Password"
            type="text"
            value={ gameData.gamePassword }
            onChange={ this.handleGamePassword.bind(this)}
          />

          <OwInput
            labelName="Start Time"
            type="datetime-local"
            value={ gameData.startTime }
            onChange={ this.handleStartTime.bind(this)}
          />

          <OwRankSelect
            ranks_selected={ this.state.gameData.ranks }
            update_rank = { this.handleRankSelect.bind(this) }
          />

          <OwButton buttonText="create" />
        </form>
        
      </div>
    )
  }

  handlePlatformSelect( event ){
    let platformTarget = event.target.value;

    let platformsCopy = {...this.state.gameData.platforms};

    let newValue = !platformsCopy[platformTarget];

    platformsCopy[platformTarget] = newValue;

    this.setState( prevState => ({
      gameData:{
        ...prevState.gameData,
        platforms: platformsCopy
      }
    }))
    
    
  }

  handleRankSelect( event ){
    let rankTarget = event.target.value;

    let ranksCopy = {...this.state.gameData.ranks};
    let newValue = !ranksCopy[rankTarget];

    ranksCopy[rankTarget] = newValue;

    this.setState( prevState =>({
      gameData:{
        ...prevState.gameData,
        ranks: ranksCopy
      }
    }))
  }

  handleGameName(event){
    let value = event.target.value;
    
    // update the state
    this.setState( prevState => ({ gameData : 
      {...prevState.gameData, gameName: value
      }
    }))
    
  }

  handleGamePassword(event){
    let value = event.target.value;
    // update the state
    this.setState( prevState => ({ gameData : 
      {...prevState.gameData, gamePassword: value
      }
    }))
  }

  handleStartTime(event){
    let value = event.target.value;
    // update the state
    this.setState( prevState => ({ gameData : 
      {...prevState.gameData, startTime: value
      }
    }))
  }

  handleFormSubmit(event){
    event.preventDefault();
    console.log(this.state.gameData);
  }

}

export default OwGameForm;