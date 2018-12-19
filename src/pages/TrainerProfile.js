import React, { Component } from 'react';
import trainersService from '../lib/api-service';
import { withAuth } from '../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Video from '../components/Video';
import Email from '../components/Email'

class TrainerProfile extends Component {
  state = {
    trainer: {},
    isLoading: true,
    message: '',
    firstPage: true,
    secondPage: false,
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

  handleOnClick = () => {
    
    this.setState({
      secondPage: true,
      firstPage: false,
    })
  }

  handleOnClick2 = () => {
    
    this.setState({
      secondPage: false,
      firstPage: true,
    })
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading.....</div>
    }
    return (
      <div>
        {this.state.firstPage ? <div>
        <div>
          <img className="img-profile" src={this.state.trainer.photoUrl} alt="d" />
          <div className="container">
            <h3>{this.state.trainer.username}</h3>

            <ul>
              {this.state.trainer.preferences.goals.map((goal)=> {
                return <li key={`id=${goal}`}>{goal}</li>}
              )}
            </ul>
            
            <p className="description">{this.state.trainer.desciption}</p>

            { this.state.trainer.videoUrl.length === 0 ? null :
            <button className="videos"onClick = {this.handleOnClick}>Videos</button> }
            
            <form onSubmit={this.handleOnSubmit} method="POST">
              <button className="videos" type="submit"> {this.state.title} </button>
            </form>

            <Email trainer={this.state.trainer}></Email>
          
          
          <p><Link to={`/trainers`}>back</Link></p>
           
          </div>
        </div>
        </div>: null }

        {this.state.secondPage ? <div>
          { this.state.trainer.videoUrl.length === 0 ? null : <Video trainer={this.state.trainer} /> }
          
          <button onClick={this.handleOnClick2}>Back</button>
          </div> : null
          }
        
      </div> 
    
    );
  }
}

export default withAuth(TrainerProfile);