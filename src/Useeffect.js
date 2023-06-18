import React, { useEffect, useState } from 'react'

export default function Useeffect() {
    const [resorce,setResouce]=useState('users');
    const [arr,setarr]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/${resorce}`)
        .then(res=>res.json())
        .then(json=>setarr(json));

        return ()=>{
            console.log(" i run cleanup code or remove any eventlistner")
        }
    },[resorce])  //this array has all values which on which chaging ,these effect will called
//Check above , if we want any cleanup code we can return that will run after destro
  return (
    <>
    <h2>Useeffect Hook</h2>
    <div>
        <button onClick={()=>setResouce('posts')} >Posts</button>
        <button onClick={()=>setResouce('users')}>Users</button>
        <button onClick={()=>setResouce('comments')}>Comments</button>

        {arr.map(e=>{
            return (
                <pre>{JSON.stringify(e)}</pre>
            )
        })}
    </div>
    <div className='line'> </div>
    </>
  )
}
