import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TrainerCard extends Component {
  


  render() {
    
    return (
      <div>
        <div className="trainercard">
          <p><Link to={`/trainers/${this.props.trainer._id}`}>
          {this.props.trainer.username}</Link>
          </p>
          <p>{this.props.trainer.preferences.price}</p>
        </div>
      </div>
    )}
}

export default TrainerCard;