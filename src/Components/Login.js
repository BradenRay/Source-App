import React, { useState } from "react";
import firebase from "./Firebase.js";
import {Redirect, withRouter} from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState('');
  const [pwd,setPassword] = useState('');
  const [userID,setUserID] = useState('');
  const [shouldRedirect,setShouldRedirect]= useState(false);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email,pwd)
    .then((user) => {
      console.log('logged in');
      setUserID(user.user.uid);
      setShouldRedirect(true);
    })
    .catch(e => {
      console.log('couldn\'t login')
    })
  }

  if(shouldRedirect){
    return <Redirect to={{
      pathname: '/Home',
      state: {id:userID}
    }}/>
  }

  return (
    <div className = "LoginApp">
    <div className = "logside">
      <h1>Hello</h1>
      <h2>Welcome to our site</h2>
      <p>We're still working on routing so sorry if you keep getting sent back to this page</p>
    </div>
    <div className = "login">
      <h1>Login</h1>
      <input type="text" onChange={handleEmail} placeholder="Email"/><p/>
      <input type="password" onChange={handlePassword} placeholder="Password"/><p/>
      <button type="submit" onClick={signIn}>Login</button><p/>
      <a href="/SignUp">Don't have an account? Click here to sign up</a>
    </div></div>
  );
}
export default withRouter(Login);