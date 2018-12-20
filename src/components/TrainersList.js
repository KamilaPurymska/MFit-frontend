import React, { Component } from 'react';
import trainersService from '../lib/api-service';
import TrainerCard from '../components/TrainerCard'

class TrainersList extends Component {
  state = {
    trainers: [],
    error: false,
    isLoading: true,
  }

  componentDidMount () {
    trainersService.getMatchTrainers()
      .then((trainers) => {
        this.setState({
          trainers,
          isLoading: false
        })
      })
      .catch((error) => {
        this.setState({
          error,
        })
      })
  }

  render() {
    const {trainers, error} = this.state;
    if (this.state.isLoading) {
      return <div>
      <div>Loading...</div>
    </div>
    }
    if (trainers.length === 0) {
      return <div>there is no trainers</div>
    }
    if (error) {
      return <div>error on the connection</div>
    }
    return (
        <ul>
        {trainers.map((trainer) => (
          <TrainerCard key={trainer._id} trainer={trainer} />)
          )}
        </ul>
    );
  }
}

export default TrainersList;