import React , {useState} from 'react';
import {IconButton, Menu, MenuItem} from '@material-ui/core';
import {AccountCircle,Home,ArtTrack} from '@material-ui/icons';
import {withRouter, Redirect} from 'react-router-dom';
import firebase from "./Firebase.js";


function Navbar(props) {
    const [scRedirect,setSCRedirect]= useState(false);
    const [shRedirect,setSHRedirect]= useState(false);
    const [spRedirect,setSPRedirect]= useState(false);
    const [snRedirect,setSNRedirect]= useState(false);
    const [userID,setUserID] = useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [outRedirect,setOutRedirect]= useState(false);

    const GoToContent = () => {
        setSCRedirect(true);
        setUserID(props.location.state.id);
    }
        
    if(scRedirect){
        return <Redirect to={{
          pathname: '/ContentPage',
          state: {id:userID}
        }}/>
    }
        
    const GoHome = () => {
          setSHRedirect(true);
          setUserID(props.location.state.id);
    }
        
    if(shRedirect){
        return <Redirect to={{
          pathname: '/Home',
          state: {id:userID}
        }}/>
    }

    const GoToProfile = () => {
        setSPRedirect(true);
        setUserID(props.location.state.id);
    }
      
    if(spRedirect){
      return <Redirect to={{
        pathname: '/Profile',
        state: {id:userID}
      }}/>
    }

    const GoToNewUser = () => {
        setSNRedirect(true);
        setUserID(props.location.state.id);
    }
      
    if(snRedirect){
      return <Redirect to={{
        pathname: '/NewUser',
        state: {id:userID}
      }}/>
    }

    const handleClick = event => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleLogout = () => {
      firebase.auth().signOut().then(function() {
        console.log("Sign-out successful.")
      }).catch(function(error) {
        console.log("An error happened.")
      });
      setOutRedirect(true);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    if(outRedirect){
      return <Redirect to={{
        pathname: '/'
      }}/>
    }

    return (
        <div className = "nav-bar">
            <IconButton onClick = {GoToContent} color="primary">
                <ArtTrack />
            </IconButton> 
            <IconButton onClick = {GoHome} color="primary">
                <Home />
            </IconButton>
            <IconButton aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} color="primary">
              <AccountCircle />
            </IconButton>    
            <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem onClick = {GoToProfile}>Profile</MenuItem>
                    <MenuItem onClick = {GoToNewUser}>Edit Profile Info</MenuItem>
                    <MenuItem onClick = {handleLogout}>Logout</MenuItem>
            </Menu>   
        </div>
    )
}
export default withRouter(Navbar);