import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'

function App() {
  // let [tasks, setTasks] = useState([
  // // {
  // //   text: "taskItems",
  // //   // id: "not too sure how id works"
  // // },
  // // {
  // //   text: "taskItems",
  // //   // id: "not too sure how id works"
  // // },
  // // {
  // //   text: "taskItems",
  // //   // id: "not too sure how id works"
  // // },
  // // {
  // //   text: "taskItems",
  // //   // id: "not too sure how id works"
  // // },
  // // {
  // //   text: "taskItems",
  // //   // id: "not too sure how id works"
  // // },
  // // {
  // //   text: "taskItems",
  // //   // id: "not too sure how id works"
  // // }
  // ]);

  // const [newTask, setNewTask] = useState({
  //   text: "",
  //   completed: false
  // });
  
  // const submit = () => {
  //   tasks.push(newTask);
  //   setNewTask({
  //     //id
  //     complete: false,
  //     text: ""
  //   });
  // };

  // const onChangeHandler = e => {
  //   setNewTask({
  //     ...newTask,
  //     text: e.target.value
  //   });
  // }

  // const onDeleteHandler = i => {
  //   // Delete some Shit
  //   tasks.splice(i, 1);
  //   setTasks([...tasks]);
  //   console.log("Delete this task!")
  // }
  

  // const onCompletionChange =  i => {
  //   tasks[i].completed = !tasks[i].completed;
  //   console.log(tasks[i]);
    
  //   setTasks([...tasks]);
    

  //   console.log(`Completed: ${tasks[i].className}`);
  //   }
  

  return (
    <div className="App">
    {/* //   <p>
    //     <input placeholder="todo..." type="text" onChange={onChangeHandler} value={newTask.text} />
    //     <button className="mx-1 btn btn-primary" onClick={submit}>Add</button>
    //   </p>

    //   <h1>Todo List</h1>
    //   {tasks.map((task, index) => ( */}
    {/* //     <div className="row">
    //       <div className="col">
    //         <p className="task">
    //           <input */}
    {/* //             className="col-1"
    //             type="checkbox"
    //             onChange={() => onCompletionChange(index)}
    //             checked={task.completed}
    //             />
    //           <span className={task.completed ? "cross-out col" : "task-text col"}>
    //             {task.text}
    //           </span>{" "}
    //           <button className="col-1 btn btn-dark" onClick={() => onDeleteHandler(index)}>Delete</button>
    //         </p> */}
    {/* //       </div> */}
    {/* //     </div> */}
    {/* //   ))} */}
    <TodoList taskList={[]} />
    </div>
  );
}

export default App;
