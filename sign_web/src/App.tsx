import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/HeaderComponent";
// import {Button} from './counter';
import Button from 'react-bootstrap/Button';
import SignInButton from "./components/SignInButton";
import StoryComponent from "./components/StoryComponent";
import Details from "./components/DetailsComponent";
import SignSVG from "./components/SignSVG";

function App() {
  let [webState, setWebState] = useState(0);
  if (webState === 0) {
    return (
      <div className="App">
        <Header webState={webState}/>
        <SignSVG/>
        <SignInButton webState={webState} setWebState={setWebState}/>
      </div>
    );
  }
  else {
    return (
      <div className="App">
        <Header webState={webState}/>
        <SignSVG/>
        <StoryComponent/>
        {/* <Details/> */}
      </div>
    );
  }
}

export default App;