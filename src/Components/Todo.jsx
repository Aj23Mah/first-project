import React from 'react'
import './Todo.css'
// import { useState } from 'react';

 const Todo = () => {
//     const [input, setInput] = useState([]);
//   const [todos, setTodos] = useState([
//     "Take a walk.",
//     "Buy grocery.",
//     "Read a book.",
//     "Take a nap.",
//   ]);

//   console.log(input);
//   console.log(todos);

//   function handleSubmit() {
//     setTodos([...todos, input]);
//     setInput('');
//   }
  
  return (
    <div className='todo'>
        <div className='todoLogo'>
            <h1>TODO App</h1>
        </div>
        <div className='todo-form'>
            <form>
                <input type="text" className='text' name="task" />
                <input type="button" className='button' value="btn" />
            </form>
        </div>
        <div className='todo-list'>
            <h2>Task List</h2>
            <ul>
                <li>Take a walk.</li>
                <li>make a presentaton.</li>
                <li>Cook food.</li>
                <li>Feed the dog.</li>
            </ul>
        </div>
        <input type="button" className='todo-removeall' value="Remove All"/>
    </div>
  )
}

export default Todo