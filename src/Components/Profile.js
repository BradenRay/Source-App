import React, {useState,useEffect} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import Navbar from './Navbar'
import firebase from "./Firebase.js";

function Profile(props) {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');

    useEffect(() => {
        firebase.database().ref('users/' + props.location.state.id).once('value', function(snapshot) {
            setUsername(snapshot.val().username);
            setEmail(snapshot.val().email);
        });
    });

    try{
        console.log(props.location.state.id)
    }catch(e){
        return <Redirect to='/'/>;
    }
    
    return (
        <div>
            <Navbar />
        <div className = "App">
            <h1>Welcome to your profile, {username}</h1>
            <p>Email: {email}</p>
        </div>
        </div>
    )
}
export default withRouter(Profile);