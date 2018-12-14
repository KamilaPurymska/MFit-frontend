import React, { Component } from 'react';
import trainersService from '../lib/api-service';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

class TrainerProfile extends Component {
  state = {
    trainer: {},
    isLoading: true
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    trainersService.getDetailTrainer(id)
      .then((trainer) => {
        
        this.setState({
          trainer,
          isLoading: false,
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading.....</div>
    }
    return (
      <div>
        <div>
          <p>{this.state.trainer.username}</p>
          <p>{this.state.trainer.desciption}</p>
          <p>{this.state.trainer.email}</p>
        </div>
        <p><Link to={`/trainers`}>back</Link></p>
      </div>
    );
  }
}

export default withAuth(TrainerProfile);