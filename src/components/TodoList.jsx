import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoList = props => {
    
    const [ state, setState ] = useState({
        todos: []
    })

    const addTodo = (todo) => {
        setState({
            todos: [todo, ...state.todos]
        })
        // console.log(todo);
        // console.log(todo);
    }
    

    // const handleChange = e => {
    //     setState({
    //         [e.target.name]: e.target.value
    //     })
    // }


    const handleSubmit = e => {
        e.preventDefault();
        setState({
            text: state.text,
            complete: false,
            // todos: [todo, ...state.todos]
        })
        // setState({
        //     text: ""
        // });
        // console.log(state.todos);
    }
    
    // const addTodo = (todo) => {
    // } 

    return(
        <div>
            <TodoForm // Adding a key to this deal???
            />
        </div>
    )
}

export default TodoList; 