import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import UserProfile from '../components/UserProfile';


class UserProfilePage extends Component {
  render() {
    return (
      <div>
        <UserProfile />
      </div>
    );
  }
}

export default withAuth(UserProfilePage);