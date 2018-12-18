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
      .then((result) => {
        this.setState({
          trainer: result.trainer,
          isLoading: false,
          title: result.message
        })
      })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    trainersService.followTrainer(id)
      .then((result) => {
          this.setState({
            title: result.message
          })
        this.props.history.push(`/trainers/${id}`);
      })

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
          { this.state.trainer.videoUrl === 'String' ? null : <iframe width="560" title="video" height="315" src={this.state.trainer.videoUrl} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen> </iframe> }
          
          <h3>Specialities</h3>
          <ul>
            {this.state.trainer.preferences.goals.map((goal)=> {
              return <li key={`id=${goal}`}>{goal}</li>}
            )}
          </ul>
        </div>
        <p><Link to={`/trainers`}>back</Link></p>
        <form onSubmit={this.handleOnSubmit} method="POST">
            <button type="submit"> {this.state.title} </button>
        </form>
        {this.state.message}
      </div>
    );
  }
}

export default withAuth(TrainerProfile);