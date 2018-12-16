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
    console.log('loll')
    trainersService.getMatchTrainers()
      .then((trainers) => {
        console.log('trainers', trainers)
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

  componentWillUnmount() {
    console.log("errrror")
  }


  render() {
    const {trainers} = this.state;
    if (this.state.isLoading) {
      return <div>Loading...</div>
    }
    if (trainers.length === 0) {
      return <div>there is no trainers</div>
    }
    if (this.state.error) {
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