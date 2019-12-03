import React, {useState,useEffect} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import Navbar from './Navbar';
import firebase from "./Firebase.js";
import {Card, Popper, Button} from '@material-ui/core';

function HomePage(props) {
    const [newtitle,setNewTitle] = useState('');
    const [newbody,setNewBody] = useState('');
    const [username,setUsername] = useState('');
    const [childData, setChildData] = useState([]);
    const [anchorE1, setAnchorE1] = useState(null);
    
    useEffect(() => {
        firebase.database().ref('users/' + props.location.state.id).once('value').then(function(snapshot) {
            setUsername(snapshot.val().username);
        });
    });

    useEffect(() => {
        firebase.database().ref('posts/').ref.once('value').then(function(snapshot) {
            setChildData(snapshot.val());
        });
    },[]);

    try{
        console.log(props.location.state.id)
    }catch(e){
        return <Redirect to='/'/>;
    }

    const uid = props.location.state.id;
    const handleTitle = (event) => {
        setNewTitle(event.target.value);
    }
    const handleBody = (event) => {
        setNewBody(event.target.value);
    }
    function writeNewPost() {
        var postData = {
          author: username,
          uid: uid,
          body: newbody,
          title: newtitle,
          likes: 0,
          timestamp: firebase.database.ServerValue.TIMESTAMP
        };
        var newPostKey = firebase.database().ref().child('posts').push().key;
        var updates = {};
        updates['/posts/' + newPostKey] = postData;
        updates['/users/' + uid + '/posts/' + '/' + newPostKey] = postData;
        return  firebase.database().ref().update(updates);
    }

    const open = Boolean(anchorE1);
    const id = open ? 'simple-popper' : undefined;
    const handleClick = event => {
        setAnchorE1(anchorE1 ? null : event.currentTarget);
    };
    
    function removePost(key) {
        console.log(key)
        //firebase.database().ref('posts/').child(key).remove()
    }

    return (
        <div>
            <Navbar />
        <div className="App">
            <Button aria-describedby={id} onClick={handleClick} variant="contained" color="secondary">
                Make new post
            </Button><p/>
            <Popper id={id} open={open} anchorE1={anchorE1}>
                <Card className="Popup">
                <input type="text" onChange={handleTitle}/><p/>
                <input type="text" onChange={handleBody}/><p/>
                <button type="submit" onClick={writeNewPost}>Submit Changes</button>
                <p>Note: Refresh page to see changes after submission</p>
                </Card>
            </Popper>
            <div>
            {
            Object.keys(childData).map(function(key) {
                    var t = new Date( childData[key].timestamp );
                    var newtime = ('0' + t.getHours()).slice(-2) + ':' + ('0' + t.getMinutes()).slice(-2);
                return(
                <Card key={key}>
                    <h2>{childData[key].title}</h2>
                    {childData[key].body}<p/>
                    User:{childData[key].author}<p/>
                    Likes:{childData[key].likes}  Time: {newtime}<p/>
                    <button onClick={removePost(key)}>disabled, was removing all posts</button>
                </Card>
                )
            })
            }
            </div>
        </div>
        </div>
    )
}
export default withRouter(HomePage);