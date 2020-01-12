import React, { useState } from 'react';

const TodoForm = props => {

    const [state, setState] = useState({
        text: ""
    })

    const handleChange = e => {
        setState({
            [e.target.name]: e.target.value
        })
    }
   
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            // id
            text: state.text,
            complete: false
        });
        setState({
            text: ""
        });
    }

    return(
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                name="text"
                value={state.text} 
                onChange={handleChange} 
                placeholder="Todo...."
            />
            <button type="submit">Submit</button>
        </form>
    </div>
    )
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