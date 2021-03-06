import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';
import AnonRoute from './components/AnonRoute';
import AuthProvider from './providers/AuthProvider';
import Trainer from './pages/Trainers';
import TrainerProfile from './pages/TrainerProfile'
import UserProfilePage from './pages/UserProfilePage';
import PreferencesPage from './pages/PreferencesPage';

const Page404 = () => (
  <div>
    <h2>404, sorry page not found</h2>
  </div>
);

class App extends Component {

  

  render() {
    return (
      <AuthProvider>
        <div>
          <link href="https://fonts.googleapis.com/css?family=Montserrat:400,600" rel="stylesheet" />
          <Navbar />
          <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path='/trainers/:id' component={TrainerProfile} />
              <PrivateRoute path='/trainers' component={Trainer} />
              <PrivateRoute path='/auth/myProfile' component={UserProfilePage} />
              <PrivateRoute path='/preferences' component={PreferencesPage} />
              <Route component={Page404} />
          </Switch>
        </div>
      </AuthProvider>
    )
  }
}

export default App;
