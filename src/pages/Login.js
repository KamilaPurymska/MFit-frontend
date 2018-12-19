import React, { Component } from 'react';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
class Login extends Component {
  state = {
    username: "",
    password: "",
    statusError:''
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state
    auth.login({ username, password })
    .then( (user) => {
      this.props.setUser(user);
    })
    .catch( error => this.setState({statusError: error.response.data.error}) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password } = this.state;
    return (
      <div className="background-auth">
        <div className="gradiend">
          <form className ="auth-form" onSubmit={this.handleFormSubmit}>
            <p className="signup-header">Log in</p>
            <label></label>
            <input className="input-auth" placeholder="username" type="text" name="username" value={username} onChange={this.handleChange}/>
            <label></label>
            <input className="input-auth" placeholder="password" type="password" name="password" value={password} onChange={this.handleChange} />
            <input className="sign-up-but" type="submit" value="Login" />
            {this.state.statusError ? <p>{this.state.statusError}</p> : null}
            <p className="aldready-log">Want to sign up? 
            <Link to={"/signup"}> Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    )
  }
}

export default withAuth(Login);