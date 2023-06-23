import React, { useReducer, useState } from 'react';

const ACTIONS={
    ADD_TODO:'add-todo',
    TOOGLE:'toogle-todo',
    DELETE:'todo-del'
}
function reducer(todos,action){
    switch (action.type){
        case ACTIONS.ADD_TODO:
            return [...todos,newToDo(action.payload.name)]
        case ACTIONS.TOOGLE:
            return todos.map(todo=>{
                if(todo?.id==action.payload?.id){
                    return {...todo,complete:!todo.complete}
                }
                return todo;
            })
        case ACTIONS.DELETE:
            return todos.filter(todo=>todo.id!==action.payload.id)
        default:
            return todos
    }
}

function newToDo(name){
    return {
        id:Date.now(),
        name:name,
        complete:false
    }
}

// so this is similar to useState but for managing complex logic in same variable with switch case
export default function UseReducer() {
    const [name,setName]=useState('')
    const [todos,dispatch]=useReducer(reducer,[])   //it accepts a function which will change value and initilastate as 2nd paramter
    function handleSubmit(e){
        e.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO,payload:{name:name}});
        setName('');
    }
  return (
    <>
    <h2>UseReducer hook</h2>
    <form onSubmit={handleSubmit}>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
    </form>

    <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Status</th>
            <th>Remove</th>
        </tr>
        {todos.map(e=>{
            return (
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td style={{color:e.complete?'green':'red'}}>{e.name}</td>
                    <td><button onClick={()=>dispatch({type:ACTIONS.TOOGLE,payload:{id:e?.id}})}>Toogle</button></td>
                    <td><button onClick={()=>dispatch({type:ACTIONS.DELETE,payload:{id:e?.id}})}> Delete</button></td>
                </tr>
            )
        })}
    </table>
    <div className='line'></div>
</>
    
  )
}
