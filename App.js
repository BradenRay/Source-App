import React from 'react';
import { Route , BrowserRouter as Router } from 'react-router-dom'
import './App.css';
import HomePage from './Components/HomePage'
import ContentPage from './Components/ContentPage'
import Login from './Components/Login'
import SignUp from './Components/SignUp'
import Profile from './Components/Profile'
import NewUser from './Components/NewUser'


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component = {Login} />
        <Route exact path='/Signup' component = {SignUp} />
        <Route exact path='/Home' component = {HomePage} />
        <Route exact path='/ContentPage' component = {ContentPage} />
        <Route exact path='/Profile' component = {Profile} />
        <Route exact path='/NewUser' component = {NewUser} />
      </Router>
    </div>
  );
}

export default App; 