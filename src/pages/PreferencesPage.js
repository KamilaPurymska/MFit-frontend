import React, { Component } from 'react';
import trainersService from '../lib/api-service';
import authService from '../lib/auth-service';
import { withAuth } from '../providers/AuthProvider';
import '../App.css';


class PreferencesPage extends Component {
  state = {
    user: {
      goals: '',
      gender: '',
      styles: '',
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
        const { goals, gender, styles, active, city, age } = user.preferences

        this.setState({
          user: {
            goals,
            gender,
            styles,
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
    
    this.setState({
      secondPage: true,
      firstPage: false
    })
  }

  handleOnClick2 = () => {
    if (this.state.firstPage === false && this.state.secondPage === true) {
      this.setState({
        thirdPage: true,
        secondPage: false
      })
    }
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
    const { user: { city } } = this.state
    if (this.state.isLoading) {
      return <div>
      <div>Loading...</div>
    </div>
    }

    return (
      <div className="pref-pagee">
        <div className="cont-pref">
        <form onSubmit={this.handleOnSubmit}>
          <h3 className="header-pref">Let's find yout trainer!</h3>

  
          {this.state.firstPage ? <div>
            <h2 className="titles">What Are Your Fitness Goals?</h2>
            
            <div className="center-on-page">
            
            <ul className="list-pref">
              <li className="li-radio">
            <label className="namea">Lose weight
                <input required={true} className="button-radio" type="radio" id="check" name="goals" value="Lose weight" onChange={this.handleOnChange} />
            </label>
            </li>
           
            <li className="li-radio">
            <label className="namea">Get stronger</label>
                <input required={true} className="button-radio1" type="radio" id="check" name="goals" value="Get stronger" onChange={this.handleOnChange} />
            </li>
            
            <li className="li-radio">
            <label className="namea">Be healthier and feel better
                <input required={true} className="-radio" type="radio" id="check" name="goals" value="Be healthier and feel better" onChange={this.handleOnChange} />
            </label>
            </li>
          
            <li className="li-radio">
            <label className="namea">Recover and Rehab
                <input required={true} className="" type="radio" id="check" name="goals" value="Recover and Rehab" onChange={this.handleOnChange} />
            </label>
            </li>

            </ul>
            </div>
            


            <h2 className="titles">How Active Are You Now?</h2>
            <ul className="list-pref">

            <li className="li-radio">
            <label className="namea">I Never Work Out
                <input type="radio" id="check" name="active" value="I Never Work Out" onChange={this.handleOnChange} />
            </label>
            </li>
            <li className="li-radio">
            <label className="namea">It's Been a While
                  <input type="radio" id="check" name="active" value="It's Been a While" onChange={this.handleOnChange} />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">A Few Times a Week
                      <input type="radio" id="check" name="active" value="A Few Times a Week" onChange={this.handleOnChange} />
            </label>
            </li>

           <li className="li-radio">
            <label className="namea">Fitness is Part of My Daily Life
                <input type="radio" id="check" name="active" value="Fitness is Part of My Daily Life" onChange={this.handleOnChange} />
            </label>
            </li>
            </ul>

            <button className="pref-next" onClick={this.handleOnClick}>next</button>
          </div> : null
          }


          {this.state.secondPage ? <div> 
            <h2 className="titles">Your city</h2>
            <input className="city-input" required={true} type="text" value={city} name="city" onChange={this.handleOnChange} placeholder="city" />
            
            <h2 className="titles">Your age?</h2>
            <ul className="list-pref">
            <li className="li-radio"> 
            <label className="namea">19 or younger
                      <input type="radio" id="check" name="age" value="19 or younger" onChange={this.handleOnChange} />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">20-29
                      <input type="radio" id="check" name="age" value="20-29" onChange={this.handleOnChange} />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">30-39
                      <input type="radio" id="check" name="age" value="30-39" onChange={this.handleOnChange} />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">40-49
                      <input type="radio" id="check" name="age" value="40-49" onChange={this.handleOnChange} />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">50-59
                      <input type="radio" id="check" name="age" value="50-59" onChange={this.handleOnChange} />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">60+
                      <input type="radio" id="check" name="age" value="60+" onChange={this.handleOnChange} />
            </label>
            </li>

            <button className="pref-next" onClick={this.handleOnClick2}>next</button>
            </ul>
          </div> : null
          }


          {this.state.thirdPage ? <div> 
            <h2 className="titles">What Are Your Trainer Preferences?</h2>
            <h2 className="titles">Trainer Style</h2>
            <ul className="list-pref">
            
            <li className="li-radio">
            <label className="namea">A Drill Sergeant
                <input type="radio" id="check1" value="A Drill Sergeant" name="styles" onChange={this.handleOnChange} placeholder="styles" />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">A Supportive, Nurturing Coach
                <input type="radio" id="check2" value="A Supportive, Nurturing Coach" name="styles" onChange={this.handleOnChange} placeholder="styles" />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">An Educator or Teacher
                <input type="radio" id="check2" value="An Educator or Teacher" name="styles" onChange={this.handleOnChange} placeholder="styles" />
            </label>
            </li>

            <h2 className="titles">Trainer Gender</h2>

            <li className="li-radio">
            <label className="namea">Female
                      <input type="radio" id="check" name="gender" value="Female" onChange={this.handleOnChange} />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">Male
                      <input type="radio" id="check" name="gender" value="Male" onChange={this.handleOnChange} />
            </label>
            </li>

            <li className="li-radio">
            <label className="namea">Doesnt matter
                      <input type="radio" id="check" name="gender" value="Doesnt matter" onChange={this.handleOnChange} />
            </label>
            </li>
            </ul>
          </div> : null
          }


          <button className="sub" type="submit">Submit</button>
        </form>
        </div>
      </div>

    );
  }
}

export default withAuth(PreferencesPage);