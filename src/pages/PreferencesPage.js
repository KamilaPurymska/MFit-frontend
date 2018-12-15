import React, { Component } from 'react';
import trainersService from '../lib/api-service';
import authService from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';

class PreferencesPage extends Component {
  state = {
    user: {
      goals: '',
      gender: '',
      profession: '',
      active: '',
      city: '',
      age: ''
    },
    isLoading: true,
    firstPage: true,
    secondPage: false,
    thirdPage: false
  }

  componentDidMount() {
    authService.me()
      .then((user) => {
        const { goals, gender, profession, active, city, age } = user.preferences

        this.setState({
          user: {
            goals,
            gender,
            profession,
            active,
            city,
            age
          },
          isLoading: false,
        })
      })
  }

  handleOnChange = (e) => {
    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      },
    })
  }

  handleOnClick = () => {
    if (this.state.firstPage === false && this.state.secondPage === true) {
      this.setState({
        thirdPage: true,
        secondPage: false
      })
    }
    this.setState({
      secondPage: true,
      firstPage: false
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
    console.log(this.state.user.active)
    const { user: { city } } = this.state
    if (this.state.isLoading) {
      return <div>Loading ...</div>
    }

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <h3>Let's find yout trainer!</h3>
          {this.state.firstPage ? <div>
            <h1>What Are Your Fitness Goals?</h1>
            <label>Lose weight
                <input type="radio" id="check" name="goals" value="Lose weight" onChange={this.handleOnChange} />
            </label>
            <label>Get stronger
                <input type="radio" id="check" name="goals" value="Get stronger" onChange={this.handleOnChange} />
            </label>
            <label>Be healthier and feel better
                <input type="radio" id="check" name="goals" value="Be healthier and feel better" onChange={this.handleOnChange} />
            </label>
            <label>Recover and Rehab
                <input type="radio" id="check" name="goals" value="Recover and Rehab" onChange={this.handleOnChange} />
            </label>


            <h1>How Active Are You Now?</h1>
            <label>I Never Work Out
                      <input type="radio" id="check" name="active" value="I Never Work Out" onChange={this.handleOnChange} />
            </label>
            <label>It's Been a While
                      <input type="radio" id="check" name="active" value="It's Been a While" onChange={this.handleOnChange} />
            </label>
            <label>A Few Times a Week
                      <input type="radio" id="check" name="active" value="A Few Times a Week" onChange={this.handleOnChange} />
            </label>
            <label>Fitness is Part of My Daily Life
                      <input type="radio" id="check" name="active" value="Fitness is Part of My Daily Life" onChange={this.handleOnChange} />
            </label>

            <button onClick={this.handleOnClick}>next</button>
          </div> : null
          }

          {this.state.secondPage ? <div> 
            <h1>Your city</h1>
            <input type="text" value={city} name="city" onChange={this.handleOnChange} placeholder="city" />
            
            <h1>Your age?</h1>
            <label>19 or younger
                      <input type="radio" id="check" name="age" value="19 or younger" onChange={this.handleOnChange} />
            </label>
            <label>20-29
                      <input type="radio" id="check" name="age" value="20-29" onChange={this.handleOnChange} />
            </label>
            <label>30-39
                      <input type="radio" id="check" name="age" value="30-39" onChange={this.handleOnChange} />
            </label>
            <label>40-49
                      <input type="radio" id="check" name="age" value="40-49" onChange={this.handleOnChange} />
            </label>
            <label>50-59
                      <input type="radio" id="check" name="age" value="50-59" onChange={this.handleOnChange} />
            </label>
            <label>60+
                      <input type="radio" id="check" name="age" value="60+" onChange={this.handleOnChange} />
            </label>


            <h1>Trainer gender preferences?</h1>
            <label>Female
                      <input type="radio" id="check" name="gender" value="Female" onChange={this.handleOnChange} />
            </label>
            <label>Male
                      <input type="radio" id="check" name="gender" value="Male" onChange={this.handleOnChange} />
            </label>
            <label>Doesnt matter
                      <input type="radio" id="check" name="gender" value="Doesnt matter" onChange={this.handleOnChange} />
            </label>

            <button onClick={this.handleOnClick}>next</button>
          </div> : null
          }
          {this.state.thirdPage ? <div> <h1>proffesion</h1>
            <label for="check1">profession
                <input type="checkbox" id="check1" value="profff" name="profession" onChange={this.handleOnChange} placeholder="profession" />
            </label>
            <label for="check2">prof2
                <input type="checkbox" id="check2" value="2" name="profession" onChange={this.handleOnChange} placeholder="profession" />
            </label>
          </div> : null
          }
          <button type="submit">Submit</button>
        </form>

      </div>

    );
  }
}

export default withAuth(PreferencesPage);