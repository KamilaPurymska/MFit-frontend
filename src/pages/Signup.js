import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import auth from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
import '../App.css'

class Signup extends Component {

  state = {
    username: "",
    password: "",
    statusError:''
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    auth.signup({ username, password, })
      .then( (user) => {
        this.setState({
            username: "",
            password: "",
        });
        this.props.setUser(user)
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
          <p className="signup-header">Sign up</p>
          <label></label>
          <input className="input-auth" type="text" placeholder="username" name="username" value={username} onChange={this.handleChange}/>
          <label></label>
          <input className="input-auth" type="password" placeholder="password" name="password" value={password} onChange={this.handleChange} />
          <input className="sign-up-but" type="submit" value="Signup" />
          {this.state.statusError ? <p>{this.state.statusError}</p> : null}
          <p className="aldready-log">Already have account? 
          <Link to={"/login"}> Login</Link>
        </p>
        </form>

        
        </div>

      </div>
    )
  }
}

export default withAuth(Signup);