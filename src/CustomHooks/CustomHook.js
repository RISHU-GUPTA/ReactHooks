import React from 'react'
import useLocalStorage from './useLocalStorage'

export default function CustomHook() {
    const [name,setName]=useLocalStorage('name','');
  return (
  <>
    <h2>Custom Hooks</h2>
    <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
    <div className='line'></div>
    </>
  )
}
