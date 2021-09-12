import React from 'react';
import logo from './logo.svg';
import {Counter} from './features/counter/Counter';
import './App.css';
import Render from "./Render";
import RenderInput from "./RenderInput";
import FrameworkList from "./FrameworkList";
import MockServerTest from "./MockServer";

function App() {

    const data = [
        {id: 1, item: "React"},
        {id: 2, item: "Neko"},
        {id: 3, item: "Mamushi"}
    ]
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <Counter/>
                <FrameworkList frameworks={data}/>
                <FrameworkList />
                {/*関数を渡す*/}

                <MockServerTest />

                <RenderInput outputConsole={console.log}/>

            </header>
        </div>
    );
}

export default App;
