import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
import { useState } from 'react';

export default function Todo() {

    const [task, setTask] = useState([])
   
    const handleFormSubmit = (inputValue) => {
        if (task.includes(inputValue)) {
            alert("value already exists")
            return
        }
        setTask(
            [...task, inputValue]
        )
    }

    const handleDelete = (index) => {
        setTask(task.filter((_, i) => i != index))
    }

    return (
        <div className='todo-container'>
            <div>Todo List</div>
            <TodoDate/> 
            
            <TodoForm onAddTodo={handleFormSubmit} />

            {
                task.map((curTask, i) => {
                    return <TodoList key={i} id={i} data={curTask} onDeleteTodo={handleDelete} />
                })
            }

            <button className='button' onClick={() => setTask([])}>Clear All</button>

        </div>
    )
}


