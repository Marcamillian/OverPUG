import React, { Component } from 'react';

class OwTeamSlot extends Component{
  render(){

    let playerName = this.props.playerName ? this.props.playerName.toUpperCase() : "EMPTY";
    let team = ["red", "blue"].includes(this.props.teamColor)? this.props.teamColor : 'neutral';

    let classString = `ow-team-slot ${team}`;

    return(
      <div className={ classString }>
        <p>{playerName}</p>
      </div>
    )

  }
}

export default OwTeamSlot;