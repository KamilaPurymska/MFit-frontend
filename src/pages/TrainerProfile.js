import React, { Component } from 'react';
import trainersService from '../lib/api-service';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

class TrainerProfile extends Component {
  state = {
    trainer: {},
    isLoading: true,
    message: ''
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    trainersService.getDetailTrainer(id)
      .then((trainer) => {
        
        this.setState({
          trainer,
          isLoading: false,
        })
      })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    trainersService.followTrainer(id)
      .then((result) => {
        console.log(result)
        if(result.isInArray){
          this.setState({
            message: 'Already follow'
          })
        }
        this.props.history.push(`/trainers/${id}`);
      })

  }

  componentWillUnmount() {
    console.log("errrror")
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading.....</div>
    }
    return (
      <div>
        <div>
          <img src={this.state.trainer.photoUrl} alt="d" />
          <p>{this.state.trainer.username}</p>
          <p>{this.state.trainer.email}</p>
          <p>{this.state.trainer.desciption}</p>
        </div>
        <p><Link to={`/trainers`}>back</Link></p>
        <form onSubmit={this.handleOnSubmit} method="POST">
            <button type="submit"> Follow </button>
        </form>
        {this.state.message}
      </div>
    );
  }
}

export default withAuth(TrainerProfile);