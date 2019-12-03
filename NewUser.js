import React, {useState} from 'react';
import firebase from "./Firebase.js";
import {Redirect, withRouter} from 'react-router-dom';

function NewUser(props) {
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [shouldRedirect,setShouldRedirect]= useState(false);
  const [userID,setUserID] = useState('');

  try{
    console.log(props.location.state.id)
  }catch(e){
    return <Redirect to='/'/>;
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  }
  const handleName = (event) => {
    setName(event.target.value);
  }
  
  function writeUserData() {
    firebase.database().ref('users/' + props.location.state.id).set({
      email: email,
      username: name,
    });
    setShouldRedirect(true);
    setUserID(props.location.state.id);
  }

  if(shouldRedirect){
    return <Redirect to={{
      pathname: '/Profile',
      state: {id:userID}
    }}/>
  }

  return (
    <div className="login">
      <h1>Setting up your profile</h1>
      <input type="text" onChange={handleEmail} placeholder="Email (again)"/><p/>
      <input type="text" onChange={handleName} placeholder="Name"/><p/>
      <button type="submit" onClick={writeUserData}>Submit Changes</button>
    </div>
  );
}
export default withRouter(NewUser);