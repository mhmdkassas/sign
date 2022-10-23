import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/HeaderComponent";
import {Button} from './counter';
import Button1 from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      {/* <header>
        <Header/>
      </header> */}
      <div className="button">
        <Button />
        <Button1 className="sign_in_button">Sign In</Button1>
      </div>
    </div>
  );
}

export default App;