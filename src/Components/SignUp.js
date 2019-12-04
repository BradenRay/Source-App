import React, {useState} from 'react';
import firebase from "./Firebase.js";
import {Redirect, withRouter} from 'react-router-dom';

function SignUp() {
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

  const signUp = () => {
    firebase.auth().createUserWithEmailAndPassword(email,pwd)
    .then((user) => {
      console.log('created new user');
      setUserID(user.user.uid);
      setShouldRedirect(true);
      })
    .catch(e => {
      seteReport('Please view error log in the console');
      console.log(e)
    })
  }

  const jkGoback = () => {
    setShouldRedirect2(true);
  }

  if(shouldRedirect){
    return <Redirect to={{
      pathname: '/',
      state: {id:userID}
    }}/>
  }

  if(shouldRedirect2){
    return <Redirect to={{
      pathname: '/',
      state: {id:userID}
    }}/>
  }

  return (
    <div className="App">
    <div className="login">
      <h1>Sign Up</h1>
      <input type="text" onChange={handleEmail} placeholder="Email"/><p/>
      <input type="text" onChange={handlePassword} placeholder="Password"/><p/>
      <button type="submit" onClick={signUp}>Sign Up</button><p/>
      <button type="noborder" onClick={jkGoback}>Jk.. back to login</button>
      <div className ="logfail">{eReport}</div>
    </div>
    </div>
  );
}

export default withRouter(SignUp);