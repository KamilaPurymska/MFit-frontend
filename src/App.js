import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './providers/AuthProvider';
import Home from './pages/Home';
import Trainer from './pages/Trainers';
import TrainerProfile from './pages/TrainerProfile'
import UserProfilePage from './pages/UserProfilePage';
import PreferencesPage from './pages/PreferencesPage';

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />
          <Switch>
              <Route exact path="/" component={Home} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
              <PrivateRoute path='/trainers/:id' component={TrainerProfile} />
              <PrivateRoute path='/trainers' component={Trainer} />
              <PrivateRoute path='/auth/me' component={UserProfilePage} />
              <PrivateRoute path='/preferences' component={PreferencesPage} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
