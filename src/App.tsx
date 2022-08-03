import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./Components/Button";
type getType ={
    "userId": number
    "id": number
    "title": string
    "body":string
}
function App() {
    const[get, setGet] =useState<Array<getType>>([])
    console.log(get)
    const getRequestHandler = () => {
        setGet([])
    }
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])

    return (
        <div className="App">
            <Button callback={getRequestHandler} nickName="Cleanpage"/>
            <p></p>
            <ul>
            {get.map((el)=>{
                return (<div>
                  <li><span>{el.id}</span><span>{el.userId}</span><span>{el.title}</span></li>

                    </div>
                )
            })}
        </ul>
        </div>
    );
}

export default App;
