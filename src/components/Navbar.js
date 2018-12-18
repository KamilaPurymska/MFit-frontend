import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../App.css'
class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div className="navbar">
      <p><Link to='/auth/myProfile'>username: {this.props.user.username}</Link></p>
      <Link to='/'>Home</Link>
      <p onClick={this.props.logout}>Logout</p>
    </div>
  }

  renderIsNotLoggedIn = () => {
    return <div>
      <Link to='/login'>Login</Link>
      <Link to='/signup'>Signup</Link>
    </div>
  }

  render() {
    return (
      <div>
        { this.props.isLogged ? this.renderIsLoggedIn() : this.renderIsNotLoggedIn() }
      </div>
    )
  }
}

export default withAuth(Navbar);