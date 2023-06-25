import React, { useState, useTransition } from "react";

//
export default function UseTransition() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const LIST_SIZE = 20000;
//So here what react does is it combines all the state changes into 1 and then render the application
//so its combining setInput and setList and then it renders so it is taking time to reflect and seems hang application

//So to make it work I want to make setInput is of high priority so that input changes looks sudden and then render low priority work

//but this is not to be used regularly , use only when app is really slow as it renders more 
const [isPending,startTransition]=useTransition();


  function handleChange(e) {
    setInput(e.target.value);
    startTransition(()=>{
        const l = [];
        for (let i = 0; i < LIST_SIZE; i++) {
          l.push(e.target.value);
        }
        setList(l);
    })
    
  }
  return (
    <>
      <h2>UseTransition Hook</h2>
      <input type="text" value={input} onChange={handleChange} />
      {isPending?'Loading....':list.map((item, ind) => {
        return <div key={ind}>{item}</div>;
      })}
      <div className="line"></div>
    </>
  );
}
