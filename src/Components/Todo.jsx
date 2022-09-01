import React from 'react'
import './Todo.css'
import { useState } from 'react';

 const Todo = () => {
    const [inputData, setInputData] = useState('');
    const [todos, setTodos] = useState([
        "Take a walk.",
        "Buy grocery.",
        "Read a book.",
        "Take a nap."
    ]);

  console.log(inputData);
//   console.log(todos);

  function handleSubmit() {
    setTodos([...todos, inputData]);
    setInputData('');
  }
  // Remove: remove all data at once.
  function removeall() {
    setTodos([]);
  }
  
  return (
    <div className='todo'>
        <div className='todo-logo'>
            <h1>TODO App</h1>
        </div>
        <div className='todo-form'>
            <form>
                <input 
                type="text" 
                className='input' 
                placeholder='Add items'
                value={inputData} 
                onChange = {(e) => setInputData(e.target.value)} 
                />
                <input 
                type="button" className='button' 
                value="Add Todo" 
                disabled={!inputData} 
                onClick={handleSubmit} />
            </form>
        </div>
        <div className='todo-list'>
            <h2>Task Lists</h2>
            <ul>
                {
                todos.map((todo) => (
                    <li>{todo}</li>
                ))
                }
            </ul>
        </div>
        <input type="button" className='todo-removeall' value="Remove All" onClick={removeall}/>
        
    </div>
  )
}

export default Todo