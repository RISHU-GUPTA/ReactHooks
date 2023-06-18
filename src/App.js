import logo from './logo.svg';
import './App.css';
import UseState from './UseState';
import { useState } from 'react';
import Useeffect from './Useeffect';
import UseMemo from './UseMemo';

function App() {
  //Use hooks only inside function and not in any condition

 
 
  return (
    <div className="App">
      <UseState/>
      <Useeffect/>
      <UseMemo/>
    </div>
  );
}

export default App;
