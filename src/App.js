import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Dump } from './component-props/Dump';
import * as dump from './component-props/Dump';
// import Avinash from './component-props/Dump';
import StateFullComponent from './component-props/StateFullComponent';
import ClassComponent from './component-props/ClassComponent';
import * as lift from './component-props/LiftState';
import * as refComp from './component-props/Ref';
import * as PortComp from './component-props/Portal';

function App() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("Avinash");
  const ref = React.createRef();
  function handleNameClick() {
    console.log("handleNameClick====");
  }
  function handleRef() {
    console.log("ref====", ref.current);
    ref.current.hidden = true;
  }
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Render componenet</button>
      <button onClick={() => setName(name === "Avinash" ? "Mohok" : "Avinash")}>Change props</button>
      { show && <ClassComponent name={name} />}
    </div >
  );
}

export default App;
