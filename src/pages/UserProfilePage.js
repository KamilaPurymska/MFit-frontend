import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import UserProfile from '../components/UserProfile';
import { Link } from 'react-router-dom';


class UserProfilePage extends Component {
  render() {
    return (
      <div className="profile">
        <h1 className="name-profile">{this.props.user.username}</h1>
        <Link  to={`/preferences/`}>
        <p className="videos follow">Edit preferences</p>
        </Link>
        <UserProfile />
      </div>
    );
  }
}

export default withAuth(UserProfilePage);