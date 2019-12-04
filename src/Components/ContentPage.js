import React from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import Navbar from './Navbar'
import TriviaPanel from './TriviaPanel'

function ContentPage(props) {
    try{
        console.log(props.location.state.id)
    }catch(e){
        return <Redirect to='/'/>;
    }

    return (
        <div>
            <Navbar />
        <div className="App">
            <h1>Axios Trivia</h1>
            <TriviaPanel />
        </div>
        </div>
    )
}
export default withRouter(ContentPage);