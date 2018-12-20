import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import image from '../images/Screen Shot 2018-12-20 at 02.16.37.png'
class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="auth-form">
          <h3 className="find">Find your trainer</h3>
          <Link className="logo" to={`/preferences/`}>
            <img className="logo-home" src={image} alt='logo'/>
          </Link>
        </div>
      </div>
    )
  }
}

export default withAuth(Home);
