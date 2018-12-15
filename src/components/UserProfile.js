import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';


class UserProfile extends Component {
  

  render() {
    console.log(this.props.user._id)
    return (
      <div>
        <p>username: {this.props.user.username}</p>
        <p>My goal: {this.props.user.preferences.goals}</p>
        <p>Prefered gender: {this.props.user.preferences.gender}</p>
        <p>My age: {this.props.user.preferences.age}</p>
        <p>My city: {this.props.user.preferences.city}</p>
        <p>How active I am: {this.props.user.preferences.active}</p>


      </div>
    );
  }
}

export default withAuth(UserProfile);