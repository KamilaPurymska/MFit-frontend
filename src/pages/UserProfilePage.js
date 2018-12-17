import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import UserProfile from '../components/UserProfile';


class UserProfilePage extends Component {
  render() {
    return (
      <div>
        <h2>My name: {this.props.user.username}</h2>
        <UserProfile />
      </div>
    );
  }
}

export default withAuth(UserProfilePage);