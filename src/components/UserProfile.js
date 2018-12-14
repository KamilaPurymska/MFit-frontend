import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';


class UserProfile extends Component {
  

  render() {
    console.log(this.props.user.preferences.goals)
    return (
      <div>
        <p>username: {this.props.user.username}</p>
        <p>goals: {this.props.user.preferences.goals}</p>
        <p>profession: {this.props.user.preferences.profession}</p>
        <p>gender: {this.props.user.preferences.gender}</p>
      </div>
    );
  }
}

export default withAuth(UserProfile);