import React, { Component } from 'react';
import { withAuth } from '../providers/AuthProvider';
import authService from '../lib/auth-service';
import { Link } from 'react-router-dom';



class UserProfile extends Component {
  state= {
    user: {},
    isLoading: true,
    firstPage: true,
    secondPage: false
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
 
  handleOnClick = () => {
    this.setState({
      secondPage: true,
      firstPage: false
    })
  }

  handleOnClick2 = () => {
    this.setState({
      secondPage: false,
      firstPage: true
    })
  }

  render() {
    if(this.state.isLoading){
      return <div>
      <div>Loading...</div>
    </div>
    }else{
    return (
      <div>
        <button className="mypref" onClick={this.handleOnClick2}>My preferences</button>
        <button className="mypref" onClick={this.handleOnClick}>Following</button>
        {this.state.firstPage ? <div className="pref-fields">
        <p className="goal-pre"><b>My goal:</b> {this.props.user.preferences.goals}</p>
        <p className="goal-pre"><b>Prefered gender:</b> {this.props.user.preferences.gender}</p>
        <p className="goal-pre"><b>My age:</b> {this.props.user.preferences.age}</p>
        <p className="goal-pre"><b>My city:</b> {this.props.user.preferences.city}</p>
        <p className="goal-pre"><b>How active I am:</b> {this.props.user.preferences.active}</p> </div>: 
        <ul>
          {this.state.user.savedtrainers.map((trainer)=>{
            return <Link to={`/trainers/${trainer._id}`} key={`id=${trainer._id}`}>
            <li className = "user-trainer-list" >
              <div className="img-train-list" >
                <img className="img-trainer" src={trainer.photoUrl} alt="d" />
              </div>
              <p className="name-trainer">{trainer.username}</p>
            </li>
            </Link>
          })}
        </ul>
        
      }

      </div>
    );
        }
  }
}

export default withAuth(UserProfile);