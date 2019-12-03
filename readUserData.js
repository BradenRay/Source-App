mport React, {useState} from 'react';
import firebase from "./Firebase.js";

function readUserData() {
const [username,setUsername] = useState('');
const [email,setEmail] = useState('');

const readata = () => {
    firebase.database().ref('users/' + props.location.state.id).once('value', function(snapshot) {
        setUsername(snapshot.val().username);
        setEmail(snapshot.val().email);
    });
}

return(
    {username,email}
)
}

