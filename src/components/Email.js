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
    console.log(this.state)
    trainersService.sendEmail({reciver, sender, topic, text})
    .then((result) => {
      console.log(result)
      this.setState({
        isSent: true
      })
    })
    .catch(err => console.error(err))
  }

  render() {
    console.log(this.state)
    const {sender, topic, text} = this.state;
    return (
      <div>
        {!this.state.isSent ? 
        <form className="form-email">
          <label>To
          <input className="email" type="text" name="reciver" value={this.props.trainer.email}/>
          </label>
          <label>From
          <input className="email"  type="text" placeholder="your email" name="sender" value={sender} onChange={this.handleOnChange}/>
          </label>
          <label>Topic
          <input className="email"  type="text" name="topic" value={topic} onChange={this.handleOnChange}/>
          </label>
          <label>Text
          <textarea className="email" name="text" value={text} onChange={this.handleOnChange}/>
          </label>
          <button className="videos" onClick={this.handleOnSubmit} type="submit">Send</button>
        </form>
        : <h2>Your email has been sent!</h2> }
        
      </div>
    );
  }
}

export default Email;