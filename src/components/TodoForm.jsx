import React, { useState } from 'react';

const TodoForm = ({ submit }) => {
    const [newTask, setNewTask] = useState({
        text: "",
        completed: false
    });

    const onChangeHandler = e => {
        setNewTask({
            ...newTask,
            text: e.target.value
        });
    }

    const onSubmit = () => {
        submit(newTask);
        setNewTask({
            completed: false,
            text: ""
        });
    };

    return(
        // <form onChange={onChangeHandler}>
        <p>
            <input placeholder="todo..." type="text" onChange={onChangeHandler} value={newTask.text} />
            <button className="mx-1 btn btn-primary" onClick={onSubmit}>Add</button>
        </p>
        // </form>
    );
}
export default TodoForm; 


   ////WE MIGHT USE THIS LATER// <div>
        ////WE MIGHT USE THIS LATER//     <div>
        ////WE MIGHT USE THIS LATER//         <form onSubmit={onSubmitHandler}>
        ////WE MIGHT USE THIS LATER//             <label className="col-2">Todo....  </label>
        ////WE MIGHT USE THIS LATER//             <input className="col-2" type="text" name="firstName" onChange={onChangeHandler} />
        ////WE MIGHT USE THIS LATER//             <input className="btn btn-primary" type="submit" />
        ////WE MIGHT USE THIS LATER//         </form>
        ////WE MIGHT USE THIS LATER//     </div>
        ////WE MIGHT USE THIS LATER//     <div className="mt-30">
        ////WE MIGHT USE THIS LATER//         <h4 >Your Form Data</h4>
        ////WE MIGHT USE THIS LATER//         <ul>
        ////WE MIGHT USE THIS LATER//             <li className="col-2"><props className="col-2 text-info">{state.firstName}</props></li>
        ////WE MIGHT USE THIS LATER//         </ul>
        ////WE MIGHT USE THIS LATER//         <label className="col-2">the list starts here => </label>
        ////WE MIGHT USE THIS LATER        
        ////WE MIGHT USE THIS LATER    
        ////WE MIGHT USE THIS LATER//     </div>
        ////WE MIGHT USE THIS LATER// </div>\


        // const addList = [];

    

    
    
    // const data = (todo) => {
    //     {state.todos.map(todo => (                     //why doesnt this fucking work!!!!!!!!!!
    //         <div key={todo.text}>{todo.text}</div>
    //     ))} 
    //     console.log("thafgadsfsdfghmjgsfadgngseghnmgresgnghreshmhtrnghdrthnmhrtnghrdt")
    // };