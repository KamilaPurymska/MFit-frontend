import React, { Component } from 'react';
import trainersService from '../lib/api-service';

class Email extends Component {

  state = {
      reciver: '',
      sender: '',
      topic: '',
      text: '',
      isSent: false
  }


  handleOnChange = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  }

  componentDidMount () {
    this.setState({
      reciver: this.props.trainer.email
    })
  }

  handleOnSubmit =(e) => {
    e.preventDefault();
    const {reciver, sender, topic, text} = this.state
    trainersService.sendEmail({reciver, sender, topic, text})
    .then((result) => {
      this.setState({
        isSent: true
      })
    })
    .catch(err => console.error(err))
  }

  render() {
    const {sender, topic, text} = this.state;
    return (
      <div>
        {!this.state.isSent ? <div className="for-form">
        <form className="form-email">
          <h3>Contact with me!</h3>
          <label className="email-label">To
          <input className="email" type="text" name="reciver" defaultValue={this.props.trainer.email}/>
          </label>
          <label className="email-label">From
          <input className="email" required={true} type="email" placeholder="your email" name="sender" value={sender} onChange={this.handleOnChange}/>
          </label>
          <label className="email-label">Topic
          <input className="email" required={true} type="text" placeholder="emial topic" name="topic" value={topic} onChange={this.handleOnChange}/>
          </label>
          <label className="email-label">Text
          <textarea className="email" required={true} name="text" placeholder="your message" value={text} onChange={this.handleOnChange}/>
          </label>
          <button className="videos" onClick={this.handleOnSubmit} type="submit">Send</button>
        </form></div>
        : <h2>Your email has been sent!</h2> }
        
      </div>
    );
  }
}

export default Email;