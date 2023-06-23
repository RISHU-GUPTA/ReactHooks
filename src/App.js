import logo from './logo.svg';
import './App.css';
import UseState from './UseState';
import { useState } from 'react';
import Useeffect from './Useeffect';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import UseContext from './useContext/UseContext';
import UseReducer from './UseReducer';
import CustomHook from './CustomHooks/CustomHook';

function App() {
  //Use hooks only inside function and not in any condition

 
 
  return (
    <div className="App">
      <CustomHook/>
      <UseReducer/>
      <UseContext/>
       <UseRef/>
       <UseMemo/>
       <Useeffect/>
      <UseState/>
    </div>
  );
}

export default App;
