import React, {useState} from 'react'

function TodoForm() {
    const[input,setInput]=useState('aaa')

    const handleChange = e => {
        
        setInput(e.target.value)
        
    }

    const handleSubmit = e => {
        e.preventDefault();

        // props.onSubmit({
        //     id:Math.floor(Math.random() * 1000)
        //     text: input})
       setInput('')
    }


    return (
        <form onSubmit={handleSubmit} >
            <input
              type="text"
              placeholder='Add text'
              value={input}
              name='text'
              className='todo-input'
              onChange={handleChange}
              ></input>
            <button
              className='todo-button'
        
              >Add
              TODO</button>
              <h1>{input}</h1>
        </form>
    )
}

export default TodoForm ;
