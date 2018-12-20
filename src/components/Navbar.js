import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '../providers/AuthProvider';
import '../App.css'
import preferences from '../images/nav/music-control-settings-button.svg';
import list from '../images/nav/list.svg';
import logout from '../images/nav/logout-2.svg';
import user from '../images/nav/user.svg';

class Navbar extends Component {

  renderIsLoggedIn = () => {
    return <div className="navbar">
      <Link className="linksnav" to='/auth/myProfile'><img className="nav-icon" src={user} alt=""/></Link>
      <Link className="linksnav" to='/'><img className="nav-icon" src={preferences} alt=""/></Link>
      <Link className="linksnav" to={`/trainers/`}><img className="nav-icon" src={list} alt=""/></Link>
      <p className="linksnav"><img className="nav-icon" onClick={this.props.logout} src={logout} alt=""/></p>
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
        { this.props.isLogged ? this.renderIsLoggedIn() : null }
      </div>
    )
  }
}

export default withAuth(Navbar);