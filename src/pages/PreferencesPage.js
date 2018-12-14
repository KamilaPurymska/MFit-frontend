import React, { Component } from 'react';
import trainersService from '../lib/api-service';
import authService from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';

class PreferencesPage extends Component {
  state = {
    user:{
      goals: '',
      gender: '',
      profession: ''
    },
    isLoading: true
  }

  componentDidMount(){ 
    authService.me()
      .then((user) => {
        const {goals, gender, profession} = user.preferences
        
        this.setState({
          user: {
            goals,
            gender,
            profession,
          },
          isLoading: false,
        })
      })
  }

  handleOnChange =(e) =>{
    this.setState({
      user:{
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { user } = this.state; 
    trainersService.setPreferences(user)
      .then((user) => {
        this.props.setUser(user)
        this.props.history.push(`/trainers`);
      })

  }


  render() {
    console.log(this.state)
    const {user: {goals, gender, profession}} = this.state
    if (this.state.isLoading){
      return <div>Loading ...</div>
    }
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" value={goals} name="goals" onChange = {this.handleOnChange} placeholder="goals"/>
          <input type="text" value={gender} name="gender" onChange = {this.handleOnChange} placeholder="gender"/>
          <input type="text" value={profession} name="profession" onChange = {this.handleOnChange} placeholder="profession"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withAuth(PreferencesPage);