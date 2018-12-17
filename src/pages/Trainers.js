import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import TrainersList from '../components/TrainersList';


class Trainers extends Component {
  render() {
    return (
      <div>
        <h3>Your trainers</h3>
        <TrainersList />
      </div>
    );
  }
}

export default withAuth(Trainers);