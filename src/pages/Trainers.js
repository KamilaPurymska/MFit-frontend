import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import TrainersList from '../components/TrainersList';


class Trainers extends Component {
  render() {
    return (
      <div>
        <TrainersList />
      </div>
    );
  }
}

export default withAuth(Trainers);