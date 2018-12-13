import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TrainerCard extends Component {
  


  render() {
    
    return (
      <div>
        <p><Link to={`/trainers/${this.props.trainer._id}`}>
        {this.props.trainer.username}</Link>
        </p>
      </div>
    )}
}

export default TrainerCard;