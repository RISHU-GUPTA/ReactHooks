import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [name,setName]=useState('');
    const [renderCount,setrender]=useState(0);
    const renCnt=useRef(0);
    const inpref=useRef()

    //1. Using state renders component each time it changes so below cide will run infinite as useSate runs
    //on each re-render so instaed of state we use ref which on chages does not render component
function focus(){
    inpref.current.focus();
}


    useEffect(()=>{
        console.log(renderCount)
        renCnt.current=renCnt.current+1
    })

    //2. It is used to reference 

  return (
    <>
    <h2>UseRef Hook</h2>
    <input ref={inpref} value={name} onChange={e=>setName(e.target.value)} />
    <div>My name is {name}</div>
    <div>I rendered {renCnt.current} times</div>
    <button onClick={focus}>Focus</button>
    <div className="line"></div>
    </>
  )
}
