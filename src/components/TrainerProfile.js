import React, { Component } from 'react';
import trainersService from '../lib/api-service';

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
        <p>{this.state.trainer.username}</p>
        <p>{this.state.trainer.description}</p>
        TrainerProfile id: {this.props.match.params.id}
      </div>
    );
  }
}

export default TrainerProfile;