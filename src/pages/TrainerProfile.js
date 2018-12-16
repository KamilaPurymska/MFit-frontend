import React, { Component } from 'react';
import trainersService from '../lib/api-service';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';

class TrainerProfile extends Component {
  state = {
    trainer: {},
    isLoading: true
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
    const { trainer } = this.state;
    trainersService.followTrainer(trainer)
      .then((trainer) => {
        this.props.setUser(trainer)
        this.props.history.push(`/trainers`);
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
          <p>{this.state.trainer.username}</p>
          <p>{this.state.trainer.desciption}</p>
          <p>{this.state.trainer.email}</p>
        </div>
        <p><Link to={`/trainers`}>back</Link></p>
        <form onSubmit={this.handleOnSubmit} method="POST">
            <button type="submit"> Follow </button>
        </form>
      </div>
    );
  }
}

export default withAuth(TrainerProfile);