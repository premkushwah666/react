import './Todo.css'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoDate from './TodoDate';
import { useState } from 'react';
import { saveToLocal, getFromLocal, LOCAL_STORAGE_KEY } from './TodoLocalStorate';

export default function Todo() {

    const [task, setTask] = useState(()=>{
        return getFromLocal();
    })
     
    // saving data in localStoreate 
    saveToLocal(task);

    const handleFormSubmit = (inputValue) => {
        const contains = task.find(x => x.content === inputValue.content);
        if (contains) {
            alert("value already exists")
            return
        }
        setTask(
            [...task, inputValue]
        )
    }

    const handleDelete = (data) => {
        setTask(task.filter((t) => data != t.content))
    }
    const handleCheck = (key) => {
        setTask(task.map((t) => {
            if (key === t.content)
                t.check = !t.check;
            return t;
        })
        )
    }   

    return (
        <div className='todo-container'>
            <div>Todo List</div>
            <TodoDate />

            <TodoForm onAddTodo={handleFormSubmit} />

            {
                task.map((curTask) => {
                    return <TodoList
                        key={curTask.key}
                        data={curTask.content}
                        check={curTask.check}
                        handleCheck={handleCheck}
                        onDeleteTodo={handleDelete}
                    />
                })
            }

            <button className='button' onClick={() => setTask([])}>Clear All</button>

        </div>
    )
}


