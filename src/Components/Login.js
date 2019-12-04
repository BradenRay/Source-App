import React, { useState } from "react";
import firebase from "./Firebase.js";
import {Redirect, withRouter} from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState('');
  const [pwd,setPassword] = useState('');
  const [userID,setUserID] = useState('');
  const [shouldRedirect,setShouldRedirect]= useState(false);
  const [shouldRedirect2,setShouldRedirect2]= useState(false);
  const [eReport,seteReport] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handlePassword = (event) => {
    setPassword(event.target.value);
  }
  const firstTimer = () => {
    setShouldRedirect2(true);
  }
  const signIn = () => {
    firebase.auth().signInWithEmailAndPassword(email,pwd)
    .then((user) => {
      console.log('logged in');
      setUserID(user.user.uid);
      setShouldRedirect(true);
    })
    .catch(e => {
      seteReport('Please view error log in the console');
      console.log(e);
    })
  }

  if(shouldRedirect){
    return <Redirect to={{
      pathname: '/Home',
      state: {id:userID}
    }}/>
  }

  if(shouldRedirect2){
    return <Redirect to={{
      pathname: '/SignUp',
      state: {id:userID}
    }}/>
  }

  return (
    <div className = "LoginApp">
    <div className = "logside">
      <h1>Hello</h1>
      <h2>Welcome to our site</h2>
      <div>Let's just say it's a work in progress</div>
    </div>
    <div className="logside2">
      <h2>Login</h2>
      <input type="text" onChange={handleEmail} placeholder="Email"/><p/>
      <input type="password" onChange={handlePassword} placeholder="Password"/><p/>
      <button type="submit" onClick={signIn}>Login</button><p/>
      <button type="noborder" onClick={firstTimer}>Don't have an account? Click here to sign up</button><p/>
      <div className ="logfail">{eReport}</div>
    </div>
    </div>
  );
}
export default withRouter(Login);