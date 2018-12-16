import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


class TrainerCard extends Component {
  
  

  


  render() {
    return (
      <div>
        <div className="trainercard">
          <Link className="trainercard-link" to={`/trainers/${this.props.trainer._id}`}>
            <div className="img-train-list" >
              <img src={this.props.trainer.photoUrl} alt="d" />
            </div>
            <p>{this.props.trainer.username}</p>
            <p>{this.props.trainer.preferences.price}</p>
          </Link>
        </div>
      </div>
    )}
}

export default TrainerCard;