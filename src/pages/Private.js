import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
class Private extends Component {
  render() {
    
    return (
      <div>
        <h1>Welcome {this.props.user.username}</h1>
        <p><Link to={`/trainers/`}>
        trainers</Link>
        </p>
        <p><Link to={`/preferences/`}>
        preferences</Link>
        </p>
      </div>
    )
  }
}

export default withAuth(Private);
