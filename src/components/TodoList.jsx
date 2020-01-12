import React, { useState } from 'react';
import TodoForm from './TodoForm';

const TodoList = props => {
    const [tasks, setTasks] = useState(props.taskList);

    const onDeleteHandler = i => {
        // Delete some Shit
        tasks.splice(i, 1);
        setTasks([...tasks]);
        console.log("Delete this task!", tasks[i]);
    }

    const onCompletionChange =  i => {
        tasks[i].completed = !tasks[i].completed;
        console.log(tasks[i]);
    
        setTasks([...tasks]);
    

        console.log(`Completed: ${tasks[i].className}`);
    }

    const submit = newTask => {
        // tasks.push(newTask);
        setTasks([newTask, ...tasks]);
    };

    return (
        <div>
            <TodoForm submit={submit} />
            {/* {tasks.map((task, i) => (
            <Task 
                index={i}
                check={onCompletionChange}
                task={task}
                onDelete={onDeleteHandler}
            />
            ))} */}
            {tasks.map((task, index) => (
            // <form >
                <div className="row">
                    <div className="col">
                        <p className="task">
                        <input
                            className="col-1"
                            type="checkbox"
                            onChange={() => onCompletionChange(index)}
                            checked={task.completed}
                            />
                        <span className={task.completed ? "cross-out col" : "task-text col"}>
                            {task.text}
                        </span>{" "}
                        <button className="col-1 btn btn-dark" onClick={() => onDeleteHandler(index)}>Delete</button>
                        </p>
                    </div>
                </div>
            // </form>
            ))}
        </div>
    )
};

export default TodoList; 