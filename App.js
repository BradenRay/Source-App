import React from 'react';
import { Route , BrowserRouter as Router } from 'react-router-dom'
import './src/App.css';
import HomePage from './src/Components/HomePage'
import ContentPage from './src/Components/ContentPage'
import Login from './src/Components/Login'
import SignUp from './src/Components/SignUp'
import Profile from './src/Components/Profile'
import NewUser from './src/Components/NewUser'


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