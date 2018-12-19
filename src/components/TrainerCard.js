import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'


class TrainerCard extends Component {
  
  

  


  render() {
    return (
      <div>
        <div>
          <Link className="trainercard" to={`/trainers/${this.props.trainer._id}`}>
            <div className="img-train-list" >
              <img className="img-trainer" src={this.props.trainer.photoUrl} alt="d" />
            </div>
            <p className="name-trainer">{this.props.trainer.username}</p>
            <p className="price-trainer">{this.props.trainer.preferences.price}</p>
          </Link>
        </div>
      </div>
    )}
}

export default TrainerCard;