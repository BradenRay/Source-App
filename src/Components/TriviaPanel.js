import React, {useState} from 'react';
import axios from 'axios';
import {Card} from '@material-ui/core';

export default function TriviaPanel() {
    
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [displayAnswer, setDisplayAnswer] = useState(false);
    const [pwd,setPwd] = useState('');
    const [search, setSearch] = useState('');

    const generateTrivia = () => {
        axios
            .get('http://jservice.io/api/clues')
            .then(
                res => {
                let index = Math.floor(Math.random()*res.data.length)
                setQuestion(
                    <div>
                    <h2>{res.data[index].question}</h2>
                    </div>
                )
                setAnswer(
                    <div>
                    {res.data[index].answer}
                    </div>
                )
            })
            setDisplayAnswer(false);
    }

    const showAnswer = () => {
        setDisplayAnswer(true);
    }

    const hideAnswer = () => {
        setDisplayAnswer(false);
    }

    const updatePwd = (event) => {
        setPwd(event.target.value);
    }

    const printState = () => {
        setSearch(pwd);
    }

    return (
        <div>
        <Card>
        {question}
        {displayAnswer ? <div>{answer}</div> : <p></p>}
        </Card>
        <Card>
        <button onClick={generateTrivia}>generate trivia</button>
        <button onClick={showAnswer}>Show Answer</button>
        <button onClick={hideAnswer}>Hide Answer</button>
        <p><input onChange = {updatePwd}/>
        <button onClick = {printState}>Submit</button> </p>
        <p>{search}</p>  
        </Card>
        </div>
    );
}
