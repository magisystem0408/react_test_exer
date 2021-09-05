import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Render from "./Render";
import RenderInput from "./RenderInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />

        {/*関数を渡す*/}
        <RenderInput outputConsole={console.log}/>

      </header>
    </div>
  );
}

export default App;
