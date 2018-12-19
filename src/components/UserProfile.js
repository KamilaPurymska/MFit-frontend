import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import authService from '../lib/auth-service';
import { Link } from 'react-router-dom';



class UserProfile extends Component {
  state= {
    user: {},
    isLoading: true
  }
  
  componentDidMount =() =>{
    authService.myProfile()
    .then((user) =>{
      this.setState({
        user,
        isLoading: false
      })
    })
  } 
 

  render() {
    if(this.state.isLoading){
      return <div>loading...</div>
    }else{
    return (
      <div>
        <h3>My preferences</h3>
        <p>My goal: {this.props.user.preferences.goals}</p>
        <p>Prefered gender: {this.props.user.preferences.gender}</p>
        <p>My age: {this.props.user.preferences.age}</p>
        <p>My city: {this.props.user.preferences.city}</p>
        <p>How active I am: {this.props.user.preferences.active}</p>
        <ul>
          {this.state.user.savedtrainers.map((trainer)=>{
            return <Link to={`/trainers/${trainer._id}`} key={`id=${trainer._id}`}>
            <li className = "user-trainer-list" >
              <div className="train" >
                <img className="img-trainer" src={trainer.photoUrl} alt="d" />
              </div>
              <p className="">{trainer.username}</p>
            </li>
            </Link>
          })}
        </ul>

      </div>
    );
        }
  }
}

export default withAuth(UserProfile);